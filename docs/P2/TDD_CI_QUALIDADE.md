# TDD, CI/CD e análise de qualidade — P2

## Ciclo Red–Green–Refactor comprovado (Apêndice J)

| Etapa | Commit / evidência real |
|---|---|
| Comportamento | `isCommercialStatus` deve reconhecer apenas as chaves próprias do catálogo, rejeitando `toString` e `constructor`. Defeito D-001 em [DEFEITOS.md](./DEFEITOS.md). |
| RED | `83d519e` adicionou o teste antes da correção. `node --test tests/commercial-status.test.mjs`: 0 passaram, 1 falhou; `AssertionError: true !== false` na expectativa para `toString`. |
| GREEN | `68de98e` trocou `in` por `Object.prototype.hasOwnProperty.call`. O mesmo comando: 1 passou, 0 falharam. |
| REFACTOR | `a421b47` simplificou para `Object.hasOwn`, sem alterar comportamento, e ampliou API-05 para exigir HTTP 400 em `status=toString`. Unitário 1/1, `test:local` 5/5, `tsc --noEmit` exit 0. |

Os commits preservam a ordem temporal das etapas. A mudança foi limitada à cópia P2 do TCC. Não há evidência de que o endpoint HTTP anterior tenha retornado um código específico; a falha RED prova o comportamento do validador isolado.

## CI/CD

O workflow [p2-ci.yml](../../.github/workflows/p2-ci.yml) dispara em push/PR da branch `p2-unisagrado` e sob comando manual. Prepara Node/pnpm, instala dependências pelo lockfile, roda testes isolados, lint, TypeScript e build; publica o log dos testes como artefato mesmo em falha. `pnpm install --frozen-lockfile` e os comandos de validação foram executados localmente; **GitHub Actions ainda não executou** porque não há remoto. Falha controlada seguida de correção e execução aprovada no pipeline remoto seguem pendentes. O teste RED local não substitui essa demonstração do pipeline.

## Qualidade e melhoria contínua

| Rodada | Ferramenta / estado | Resultado observado |
|---|---|---|
| Linha de base antes do TDD, commit `a038129` | ESLint `pnpm.cmd run lint` local | Exit 0, 0 erros, 9 avisos `@next/next/no-img-element` em páginas públicas. |
| Após REFACTOR `a421b47` | ESLint `pnpm.cmd run lint` local | Exit 0, 0 erros, os mesmos 9 avisos. Não houve redução dessa dívida, pois a correção TDD afetou validação de status. |

As duas rodadas de ESLint são comparáveis, mas não comprovam análise SonarQube. O enunciado pede SonarQube quando tecnicamente compatível; avaliação/execução desta ferramenta ainda pendente. Proposta de melhoria a revisar pelo grupo:

| Prioridade | Ação | Responsável | Critério de verificação |
|---|---|---|---|
| Alta | Revisar com o professor equivalência de `node:test` e configurar repositório remoto/CI. | Grupo, a definir | Aceite escrito e pipeline com falha controlada, correção e sucesso ligados aos commits. |
| Média | Analisar 9 avisos de imagens sem alterar indiscriminadamente o site; migrar onde houver benefício verificável. | Desenvolvimento, a definir | Nova análise ESLint com comparação, revisão visual e build aprovado. |
| Média | Executar SonarQube local/CI se compatível e registrar linha de base e comparação após correções. | Qualidade, a definir | Dois relatórios datados na mesma configuração, diferenças interpretadas. |

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
| Linha de base antes do TDD, commit `a038129` | SonarQube Community 26.11.0, scanner NPM 5.1.0 | Análise processada em 12/11/2026 18:54:52 UTC: 3 achados `BUG`, 1 `CODE_SMELL`, 0 vulnerabilidades, 0% cobertura reportada, 0% duplicação, 5.464 linhas de código. |
| Após TDD, commit `caf0a0d` | Mesma instância, perfil e escopo `app`/`tests` | Análise processada em 12/11/2026 18:55:43 UTC: os mesmos valores. Gate `OK` se refere à condição `new_violations=0`, sem afirmar ausência dos quatro achados existentes. |

O histórico bruto das duas análises e os achados atuais estão em [EVIDENCIA_SONAR_LOCAL.json](./EVIDENCIA_SONAR_LOCAL.json), sem credenciais. O SonarQube foi executado apenas em `127.0.0.1:9000`, contêiner `p2-sonarqube-local` com limite de 4 GB e banco H2 de avaliação. A telemetria foi desativada e o log confirmou isso; token e senha ficam em `.env.sonar.local`, ignorado. O baseline foi lido em worktree temporário do commit `a038129`; a análise atual usou `caf0a0d`. A configuração está em [sonar-project.properties](../../sonar-project.properties). Em máquina nova, iniciar Community Build local, gerar token **local** e executar o scanner NPM com `SONAR_TOKEN` no ambiente; não conectar a instância de produção.

Os 3 achados `BUG` são avisos da regra `typescript:S6324` sobre caracteres de controle na expressão de [proposal-pdf.ts](../../app/lib/proposal-pdf.ts) linha 25. O code smell `typescript:S8786` aponta possível retrocesso de desempenho de regex em [admin-auth.ts](../../app/lib/admin-auth.ts) linha 35. Eles ainda precisam de inspeção para decidir se são defeitos reais ou uso intencional. O valor de cobertura 0% decorre da ausência de relatório LCOV importado; não representa a proporção real de testes executados. A correção D-001 não reduziu esses achados porque é uma regra diferente. Proposta de melhoria a revisar pelo grupo:

| Prioridade | Ação | Responsável | Critério de verificação |
|---|---|---|---|
| Alta | Revisar com o professor equivalência de `node:test` e configurar repositório remoto/CI. | Grupo, a definir | Aceite escrito e pipeline com falha controlada, correção e sucesso ligados aos commits. |
| Média | Analisar 9 avisos de imagens sem alterar indiscriminadamente o site; migrar onde houver benefício verificável. | Desenvolvimento, a definir | Nova análise ESLint com comparação, revisão visual e build aprovado. |
| Média | Inspecionar as expressões apontadas pelo SonarQube, decidir se o saneamento de PDF e a regex de cookie exigem alteração ou justificativa. | Desenvolvimento/qualidade, a definir | Revisão de código, teste de regressão focalizado e nova análise se houver mudança. |
| Média | Exportar cobertura LCOV dos testes compatíveis e configurá-la no SonarQube. | Qualidade, a definir | Cobertura medida em relatório real e importada; evitar interpretar 0% atual como cobertura do produto. |

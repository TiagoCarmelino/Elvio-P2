# TDD, CI/CD e análise de qualidade — P2

## Ciclo Red–Green–Refactor comprovado (Apêndice J)

| Etapa | Commit / evidência real |
|---|---|
| Comportamento | `isCommercialStatus` deve reconhecer apenas as chaves próprias do catálogo, rejeitando `toString` e `constructor`. Defeito D-001 em [DEFEITOS.md](./DEFEITOS.md). |
| RED | `83d519e` adicionou o teste antes da correção. `node --test tests/commercial-status.test.mjs`: 0 passaram, 1 falhou; `AssertionError: true !== false` na expectativa para `toString`. |
| GREEN | `68de98e` trocou `in` por `Object.prototype.hasOwnProperty.call`. O mesmo comando: 1 passou, 0 falharam. |
| REFACTOR | `a421b47` simplificou para `Object.hasOwn`, sem alterar comportamento, e ampliou API-05 para exigir HTTP 400 em `status=toString`. Unitário 1/1, `test:local` 5/5, `tsc --noEmit` exit 0. |

Os commits preservam a ordem temporal das etapas. A mudança foi limitada à cópia P2 do TCC. Não há evidência de que o endpoint HTTP anterior tenha retornado um código específico; a falha RED prova o comportamento do validador isolado.

## CI/CD e evidência do Apêndice J

O workflow [p2-ci.yml](../../.github/workflows/p2-ci.yml) dispara em push/PR da branch `p2-unisagrado` e sob comando manual. Prepara Node/pnpm, instala dependências pelo lockfile, roda testes isolados e gera LCOV, lint, TypeScript e build; publica logs/cobertura como artefatos. O repositório privado está publicado e ligado a `origin`.

Além dos quatro runs verdes registrados anteriormente, a falha controlada exigida pelo §9.15 foi executada em 23/11/2026. Esta demonstração de CI é **independente do ciclo TDD** acima: a asserção foi alterada intencionalmente apenas para produzir falha no pipeline e revertida em seguida; não representa defeito de produto nem correção RED/GREEN.

| Etapa | Commit | Run | Resultado observado | Evidência |
|---|---|---|---|---|
| Falha controlada intencional | `6014a43` | [Run #7](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45244036937) | 7/8 testes passaram; falhou a asserção alterada intencionalmente em `tests/triage.test.mjs` (“valida a resposta estruturada do chatbot”); etapas anteriores passaram. | [Captura do PR](./EVIDENCIAS_CI/01_PR2_checks_falhou.png), [log do run](./EVIDENCIAS_CI/02_run7_falha_controlada_log_com_URL.png) |
| Reversão e CI verde | `9b1bf7e` | [Run #8](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45244667066) | Job `validar` passou em 53 s; testes/LCOV 8/8, lint, TypeScript, build e publicação de artefatos passaram. | [Captura do PR](./EVIDENCIAS_CI/03_PR2_checks_passaram.png), [etapas verdes](./EVIDENCIAS_CI/04_run8_aprovado_etapas_com_URL.png), [log dos testes](./EVIDENCIAS_CI/05_run8_log_testes_aprovados.png) |

Os runs [#21](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45681826995) e #22 também passaram. O log detalhado da falha controlada, com commits, resultados e observações foi copiado para [EVIDENCIAS_CI/REGISTRO.md](./EVIDENCIAS_CI/REGISTRO.md). Estes runs comprovam a execução do pipeline isolado; não executam integração local, Selenium, Postman ou casos manuais.

## Qualidade e melhoria contínua

| Rodada | Ferramenta / estado | Resultado observado |
|---|---|---|
| Linha de base antes do TDD, commit `a038129` | ESLint `pnpm.cmd run lint` local | Exit 0, 0 erros, 9 avisos `@next/next/no-img-element` em páginas públicas. |
| Após REFACTOR `a421b47` | ESLint `pnpm.cmd run lint` local | Exit 0, 0 erros, os mesmos 9 avisos. Não houve redução dessa dívida, pois a correção TDD afetou validação de status. |
| Linha de base antes do TDD, commit `a038129` | SonarQube Community 26.11.0, scanner NPM 5.1.0 | Análise processada em 12/11/2026 18:54:52 UTC: 3 achados `BUG`, 1 `CODE_SMELL`, 0 vulnerabilidades, 0% cobertura reportada, 0% duplicação, 5.464 linhas de código. |
| Após TDD, commit `caf0a0d` | Mesma instância, perfil e escopo `app`/`tests` | Análise processada em 12/11/2026 18:55:43 UTC: os mesmos valores. Gate `OK` se refere à condição `new_violations=0`, sem afirmar ausência dos quatro achados existentes. |
| Após auditoria, commit `47222f7` | Mesma instância, perfil e escopo `app`/`tests` | Processamento `SUCCESS` em 12/11/2026 19:25:03 UTC: 0 bugs, 0 code smells, 0 vulnerabilidades, 0 alertas abertos, 0% cobertura sem LCOV, 0% duplicação, 5.471 linhas. |
| Após checkpoint Git `b9e7ddd` | Mesmo projeto, scanner NPM 5.1.0; relatório `coverage/p2/lcov.info` | Processamento `SUCCESS` em 13/11/2026 00:41:29 UTC: Sonar importou LCOV, cobertura do projeto 27,1% (229/1.020 linhas), gate `OK`, 0 bugs/code smells/vulnerabilidades e 0% duplicação. A cobertura da suíte c8 é 97,44% de linhas, 85,36% de ramos e 100% de funções nos três módulos instrumentados. |

O histórico bruto das duas primeiras análises está em [EVIDENCIA_SONAR_LOCAL.json](./EVIDENCIA_SONAR_LOCAL.json). O arquivo [EVIDENCIA_AUDITORIA_SONAR.json](./EVIDENCIA_AUDITORIA_SONAR.json) contém a quarta análise, com importação LCOV; o JSON bruto da terceira análise não foi guardado. O SonarQube foi executado apenas em `127.0.0.1:9000`, contêiner `p2-sonarqube-local` com limite de 4 GB e banco H2 de avaliação. A telemetria foi desativada e o log confirmou isso; token e senha ficam em `.env.sonar.local`, ignorado. O baseline foi lido em worktree temporário do commit `a038129`; a segunda análise usou `caf0a0d` e a terceira `47222f7`. A configuração está em [sonar-project.properties](../../sonar-project.properties). Em máquina nova, iniciar Community Build local, gerar token **local** e executar o scanner NPM com `SONAR_TOKEN` no ambiente; não conectar a instância de produção.

Os 3 achados `BUG` da regra `typescript:S6324` sinalizavam a classe de caracteres de controle usada intencionalmente em [proposal-pdf.ts](../../app/lib/proposal-pdf.ts). O code smell `typescript:S8786` apontava retrocesso superlinear possível na regex de remoção de padding em [admin-auth.ts](../../app/lib/admin-auth.ts). Na auditoria, o filtro do PDF foi reescrito por códigos de caracteres e o padding por laço linear; a terceira análise não manteve alertas abertos. API-07 verificou PDF real legível por parser; a inspeção visual de conteúdo permanece humana. A quarta análise confirmou que o scanner leu LCOV: 27,1% no escopo inteiro do projeto, diante de 97,44% nas linhas dos três módulos unitários instrumentados. A diferença evidencia fontes não abrangidas pelos unitários e não deve ser apresentada como cobertura completa do sistema. A quarta análise foi processada após o checkpoint `b9e7ddd`. A correção D-001 não reduziu os alertas nas duas primeiras análises porque eram regras diferentes. O plano a seguir documenta as melhorias propostas e as ações concluídas.

| Prioridade | Ação | Responsável | Critério de verificação |
|---|---|---|---|
| Alta | Avaliar a inclusão dos testes de API, Selenium e Postman na CI. A rodada local final de Newman já aprovou 27 requisições e 51 verificações. | Tiago conduz a avaliação com o grupo. | Registrar o escopo e o resultado da execução no workflow caso seja ampliado. |
| Alta, condicional | R-SEG-01: limitar confiança em `oai-authenticated-user-email` a ambiente explicitamente confiável por flag e cobrir flag falsa/verdadeira com testes unitários. | Revisão técnica a planejar; esta alteração é apenas documental | Com flag desligada o cabeçalho é ignorado; com flag ligada só se aceita valor injetado pela plataforma confiável; validar configuração do deploy. |
| Média | Analisar 9 avisos de imagens sem alterar indiscriminadamente o site; migrar onde houver benefício verificável. | Desenvolvimento do TCC | Nova análise ESLint com comparação, revisão visual e build aprovado. |
| Concluída tecnicamente | Revisão e alteração das duas expressões apontadas pelo SonarQube. | Equipe de desenvolvimento e qualidade | Terceira análise processada com 0 alertas abertos; manter regressão de autenticação e PDF. |
| Concluída na rodada final | Exportar cobertura LCOV e importá-la no SonarQube local. | Tiago conferiu os resultados de 25/11/2026. | LCOV importado em `2ad8845`, 27,1% de cobertura global e Quality Gate aprovado. |

## Risco de segurança R-SEG-01 — cabeçalho de identidade hospedada

**Risco condicional, não defeito:** `getAdminEmail` em [admin-auth.ts](../../app/lib/admin-auth.ts) confia no cabeçalho `oai-authenticated-user-email`. Essa confiança só é apropriada quando a aplicação roda atrás da plataforma confiável ou do plugin `@openai/sites-vite-plugin`, que remove um cabeçalho de mesmo nome enviado pelo cliente. Executar o app fora dessa fronteira sem proteção pode permitir que o cliente influencie a identidade.

**Recomendação de hardening:** só considerar esse cabeçalho quando uma flag explícita, por exemplo `TRUST_HOSTED_AUTH_HEADER=true`, estiver configurada para um deploy confiável. Adicionar testes unitários para: (1) flag ausente/falsa ignora o cabeçalho; (2) flag verdadeira permite a leitura do valor injetado pela plataforma. Restringir essa configuração aos ambientes hospedados confiáveis.

**Primeira verificação (agente, não humana):** verificação executada pelo Claude Code a pedido de Tiago em 23/11/2026 às 15:52, no commit `b5dd483`: dois `GET` somente leitura a `/api/painel/solicitacoes`, sem credenciais e com `oai-authenticated-user-email` forjado. Ambos retornaram HTTP 401; o plugin `@openai/sites-vite-plugin` remove o cabeçalho enviado pelo cliente. Essa observação foi uma exploração do agente, não uma execução de Tiago.

**Confirmação humana registrada por Tiago Gabriel Carmelino (evidência oficial):** repetição em 23/11/2026 às 18:06 (−03:00), no PowerShell 5.1 com `curl.exe`, contra `http://localhost:3000` na branch `p2-unisagrado`. Um GET foi sem credenciais/cabeçalho e outro incluiu `oai-authenticated-user-email: administrador.p2@local.test`; ambos retornaram `HTTP/1.1 401 Unauthorized` com mensagem de acesso não autorizado. O arquivo de origem não registra o commit da segunda execução; essa versão não foi inferida. O registro e a captura fornecidos por Tiago estão em [EVIDENCIAS_HUMANAS/R-SEG-01](./EVIDENCIAS_HUMANAS/R-SEG-01/).

A hipótese de acesso indevido foi descartada para o ambiente testado atrás do plugin; não se presume o mesmo comportamento fora da plataforma/plugin. A recomendação permanece como hardening condicional. Não foi aberta ocorrência de defeito, e esta atualização não altera `app/lib/admin-auth.ts` nem `tests/`.

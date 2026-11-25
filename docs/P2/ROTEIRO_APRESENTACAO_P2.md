# Roteiro da apresentação e demonstração da P2

**Duração planejada:** 13 minutos de exposição + até 5 minutos de perguntas, conforme seção 13 do enunciado. **Estado:** roteiro pronto; ensaio, participantes, vídeo e apresentação oral pendentes. Preencher os campos `[INTEGRANTE]` e não apresentar dados preliminares como conclusão final.

| Tempo | Quem fala | Conteúdo e fala-base | Apoio / evidência |
|---|---|---|---|
| 0:00–1:00 | [INTEGRANTE 1] | Identificar turma/grupo e sistema. “Este trabalho avalia uma cópia local do WG Hidráulica, com foco nos fluxos de solicitação, acesso administrativo, orçamento e proposta. O sistema foi escolhido; aprovação do professor precisa ser registrada antes da entrega final.” | Slide 1–2: identificação e estado da aprovação, sem inventar nomes. |
| 1:00–2:30 | [INTEGRANTE 1] | Delimitar escopo e exclusões. Explicar que os dados são sintéticos e que IA, e-mail/n8n externos e produção não fazem parte dos testes. Citar seis RF, três RNF e nove riscos planejados. | Slide 3; [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md). |
| 2:30–4:00 | [INTEGRANTE 2] | Explicar 24 casos manuais, técnicas de equivalência/limite, e a rastreabilidade requisito–risco–caso–execução–evidência. Informar que 24/24 foram executados por Tiago (EX-001–EX-024) e apontar as evidências/rastreabilidade. | Slide 4; [CASOS_MANUAIS.md](./CASOS_MANUAIS.md) e planilha. |
| 4:00–6:00 | [INTEGRANTE 2] | Demonstrar automação já executada na versão registrada: uma unidade, uma operação de integração/API e um fluxo Selenium. Mostrar asserções relevantes, não apenas cliques. Informar quantidades observadas e a data/hash da rodada; não executar scripts sobre a cópia atual sem confirmar que o código não mudou. | Slide 5; evidência local em [EVIDENCIA_VALIDACAO_LOCAL_20261112.md](./EVIDENCIA_VALIDACAO_LOCAL_20261112.md). Capturas/logs desta sessão podem substituir o roteiro após consentimento e nova validação. |
| 6:00–7:30 | [INTEGRANTE 3] | Demonstrar o sistema local com fixture sintética já preparada: enviar ou localizar solicitação, consultar detalhe, alterar status e restaurar. Se a versão tiver mudado, trocar demonstração ao vivo por gravação/capturas da versão identificada e explicar a necessidade de regressão. | Slide 6; ambiente loopback e conta fictícia; sem `.env.local`, cookies ou chaves na tela. |
| 7:30–9:00 | [INTEGRANTE 3] | Mostrar proposta PDF e explicar o que a verificação automática cobre (assinatura/MIME/abertura pelo parser) e o que exige inspeção visual humana. | Slide 7; fixture de proposta sintética. Não declarar inspeção de PDF feita se não houver execução registrada. |
| 9:00–10:30 | [INTEGRANTE 1 ou 2] | Apresentar métricas com denominadores. São oito indicadores acadêmicos; execução manual 24/24; a taxa de aprovação registrada é 24/24, com D-002 observado em CT-004. Distinguir 97,44% de linhas nos três módulos instrumentados de 27,1% no escopo total do Sonar. | Slide 8; [CONTROLE_P2.xlsx](./CONTROLE_P2.xlsx) e [EVIDENCIA_AUDITORIA_SONAR.json](./EVIDENCIA_AUDITORIA_SONAR.json). |
| 10:30–11:30 | [INTEGRANTE 2] | Explicar o defeito D-001 apenas com a cadeia comprovada: teste RED falhou para status herdado, correção GREEN e refatoração; citar commits. | Slide 9; [TDD_CI_QUALIDADE.md](./TDD_CI_QUALIDADE.md). |
| 11:30–12:30 | [INTEGRANTE A DEFINIR] | Mostrar workflow GitHub Actions e explicar LCOV/artefato. Demonstrar a falha intencional do run #7 (`6014a43`) e o run #8 verde após reversão (`9b1bf7e`), deixando claro que a falha do CI é independente do ciclo TDD. | Slide 10; `.github/workflows/p2-ci.yml`; [EVIDENCIAS_CI](./EVIDENCIAS_CI/); sem mostrar segredos. |
| 12:30–13:30 | [INTEGRANTE 1] | Apresentar limitações e próximos passos: revisão dos quatro cenários aceitos por PART-01, aprovação/autorização pelo professor, revisão de D-002, versão atual do TCC e revisão dos artefatos. Encerrar com prontidão parcial, não “aprovado”. | Slide final: pendências reais e solicitação de orientação/decisão. |

## Preparação da demonstração

1. Antes do ensaio, revisar `git status`, hash e `docs/P2/PROGRESSO.md`; confirmar que a cópia P2 está isolada e o Supabase em loopback. Não copiar este roteiro para a pasta oficial antes de preencher turma, grupo e integrantes.
2. Se qualquer código do TCC tiver sido sincronizado desde o hash da evidência, identificar os requisitos/casos afetados e repetir unitários, API, Selenium e métricas pertinentes antes de usar resultados antigos na fala.
3. Preparar fixture/usuário fictício, ordem das telas e saída de contingência. A demonstração deve retornar os dados ao estado inicial e não mostrar segredos.
4. Cronometrar a apresentação em voz alta. Cada integrante deverá falar e conseguir explicar os testes, decisões e limitações, não apenas ler slides.
5. Obter autorização de gravação antes de incluir pessoa participante. O vídeo de contingência deve demonstrar a mesma versão/hash e ficar acessível ao professor; ainda não existe.

## Perguntas a ensaiar

- Qual diferença entre teste unitário, integração/API e sistema/interface nesta aplicação?
- Quais automações são casos independentes e quais são agrupamentos com muitas asserções?
- Como a massa local é isolada e restaurada sem tocar em produção?
- Por que 97,44% dos módulos instrumentados não equivale a 97,44% do produto?
- O que prova o teste do PDF e que inspeção humana ainda falta?
- O GitHub Actions foi realmente executado? **Sim. O run #7 foi intencionalmente vermelho e o run #8 passou após reversão; são runs separados do ciclo TDD local.**
- Quais critérios de aceitação e aprovação ainda não foram obtidos?

## Estado dos resultados que podem ser citados

Atualização para a apresentação (23/11/2026): CI #7 falhou intencionalmente em `6014a43` (7/8); após reversão, CI #8 passou em `9b1bf7e` (8/8, lint, TypeScript, build e artefatos). Resultados locais anteriores: `test:local` 8/8 e Selenium 7/7 em 16/11, antes dos ajustes integrados pelo PR #2; retestar se forem apresentados como validação do código atual. A coleção Newman executada naquela data era a antiga (6 requisições/12 verificações); a versão atual tem 27/51 e ainda não foi executada. TNF exploratórios 6/6 (16/11); Sonar local 27,1% global (13/11). Esses dados são históricos/automatizados e não são execuções manuais nem aceitação humana.

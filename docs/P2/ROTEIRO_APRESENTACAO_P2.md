# Roteiro da apresentação e demonstração da P2

**Duração planejada:** cerca de 13 minutos de exposição e até 5 minutos de perguntas, conforme a seção 13 do enunciado. A apresentação está pronta em PPTX e PDF na pasta 14. O vídeo de contingência será incluído na mesma pasta na entrega de 26/11.

| Tempo | Conteúdo e fala-base | Apoio / evidência |
|---|---|---|
| 0:00–1:00 | Identificar turma/grupo e sistema. “Este trabalho avalia uma cópia local do WG Hidráulica, com foco nos fluxos de solicitação, acesso administrativo, orçamento e proposta. O professor aprovou o uso do sistema verbalmente em aula em 20/08/2026, sem ajustes solicitados.” | Slide 1–2: identificação da turma, do grupo e dos integrantes. |
| 1:00–2:30 | Delimitar escopo e exclusões. Explicar que os dados são sintéticos e que IA, e-mail/n8n externos e produção não fazem parte dos testes. Citar seis RF, três RNF e nove riscos planejados. | Slide 3; [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md). |
| 2:30–4:00 | Explicar 24 casos manuais, técnicas de equivalência/limite, e a rastreabilidade requisito–risco–caso–execução–evidência. Informar que 24/24 foram executados e aprovados por Tiago (EX-001–EX-024) e apontar as evidências/rastreabilidade. | Slide 4; [CASOS_MANUAIS.md](./CASOS_MANUAIS.md) e planilha. |
| 4:00–6:00 | Demonstrar automação já executada na versão registrada: uma unidade, uma operação de integração/API e um fluxo Selenium. Mostrar asserções relevantes, não apenas cliques. Informar quantidades observadas e a data/hash da rodada; não executar scripts sobre a cópia atual sem confirmar que o código não mudou. | Slide 5; [evidências da rodada final em `2ad8845`](./EVIDENCIAS_AUTOMACAO/20261125/160236-2ad8845/). |
| 6:00–7:30 | Demonstrar o sistema local com fixture sintética já preparada: enviar ou localizar solicitação, consultar detalhe, alterar status e restaurar. Se a versão tiver mudado, trocar demonstração ao vivo por gravação/capturas da versão identificada e explicar a necessidade de regressão. | Slide 6; ambiente loopback e conta fictícia; sem `.env.local`, cookies ou chaves na tela. |
| 7:30–9:00 | Mostrar a proposta PDF e explicar a verificação automática de MIME, assinatura e leitura pelo parser. Citar a abertura do PDF e a comparação com os dados do pedido em EX-019/CT-023. | Slide 7; [registro de EX-019](./REGISTRO_EXECUCOES_HUMANAS_TIAGO.md#ex-019--ct-023--download-da-proposta-em-pdf). |
| 9:00–10:30 | Apresentar métricas com denominadores. São oito indicadores acadêmicos; execução manual 24/24; a taxa de aprovação registrada é 24/24, com D-002 observado em CT-004. Distinguir 97,44% de linhas nos três módulos instrumentados de 27,1% no escopo total do Sonar. | Slide 8; [CONTROLE_P2.xlsx](./CONTROLE_P2.xlsx) e [registro Sonar final](./EVIDENCIAS_AUTOMACAO/20261125/sonar/REGISTRO.txt). |
| 10:30–11:30 | Explicar o defeito D-001 apenas com a cadeia comprovada: teste RED falhou para status herdado, correção GREEN e refatoração; citar commits. | Slide 9; [TDD_CI_QUALIDADE.md](./TDD_CI_QUALIDADE.md). |
| 11:30–12:30 | Mostrar workflow GitHub Actions e explicar LCOV/artefato. Citar os runs #21 e #22 verdes. Demonstrar a falha intencional do run #7 (`6014a43`) e o run #8 verde após reversão (`9b1bf7e`), deixando claro que a falha do CI é independente do ciclo TDD. | Slide 10; `.github/workflows/p2-ci.yml`; [EVIDENCIAS_CI](./EVIDENCIAS_CI/); sem mostrar segredos. |
| 12:30–13:30 | Apresentar os quatro cenários aceitos por PART-01, a Issue #1 fechada após o reteste e as limitações: D-002 em análise e TNF-06 parcial por falta de observação humana em celular. | Slide final; [aceitação](./REGISTRO_ACEITACAO_PART-01_20261125.md) e [defeitos](./DEFEITOS.md). |

## Preparação da demonstração

1. Antes do ensaio, revisar `git status`, hash e `docs/P2/PROGRESSO.md`; confirmar que a cópia P2 está isolada e o Supabase em loopback.
2. Se qualquer código do TCC tiver sido sincronizado desde o hash da evidência, identificar os requisitos/casos afetados e repetir unitários, API, Selenium e métricas pertinentes antes de usar resultados antigos na fala.
3. Preparar fixture/usuário fictício, ordem das telas e saída de contingência. A demonstração deve retornar os dados ao estado inicial e não mostrar segredos.
4. Cronometrar a apresentação em voz alta. Cada integrante deverá falar e conseguir explicar os testes, decisões e limitações, não apenas ler slides.
5. Obter autorização de gravação antes de incluir pessoa participante. O vídeo de contingência deve demonstrar a mesma versão/hash e ficar acessível ao professor e ser incluído na pasta 14.

## Perguntas a ensaiar

- Qual diferença entre teste unitário, integração/API e sistema/interface nesta aplicação?
- Quais automações são casos independentes e quais são agrupamentos com muitas asserções?
- Como a massa local é isolada e restaurada sem tocar em produção?
- Por que 97,44% dos módulos instrumentados não equivale a 97,44% do produto?
- O que o teste automatizado do PDF verifica e quais dados Tiago conferiu em EX-019?
- O GitHub Actions foi realmente executado? **Sim. O run #7 foi intencionalmente vermelho e o run #8 passou após reversão; são runs separados do ciclo TDD local.**
- Qual foi a decisão do PART-01 e por que o TNF-06 ficou parcial?

## Resultados da rodada final

A rodada automática de 25/11/2026 em `2ad8845` aprovou unitários/LCOV 8/8, integração/API 8/8, Selenium 7/7, Newman 27 requisições/51 verificações e TNF 6/6. O SonarQube importou LCOV, teve Quality Gate aprovado e registrou cobertura global de 27,1%. Os runs [#21](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45681826995) e #22 ficaram verdes. [Evidências da rodada](./EVIDENCIAS_AUTOMACAO/20261125/) e [SonarQube](./EVIDENCIAS_AUTOMACAO/20261125/sonar/).

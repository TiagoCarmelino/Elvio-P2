# Relatório e entrega da P2

## Registro da entrega — 26/11/2026

Foram montadas as subpastas 00–16 e a pasta foi enviada ao Google Drive na madrugada de 26/11. A [estrutura oficial](./ESTRUTURA_ENTREGA.md) indica onde está cada artefato. O [README da pasta 00](./ENTREGA/00_IDENTIFICACAO_E_README/README.md) reúne identificação, contatos, acesso ao repositório, execução e testes na ordem do §11.4.

O professor aprovou verbalmente o uso do WG Hidráulica em aula, em 20/08/2026, sem ajustes solicitados. A ficha e a origem do código constam no [Apêndice A](./FORMULARIOS_HUMANOS.md#apêndice-a--proposta-e-aprovação).

## Conteúdo do relatório final e fontes

| Seção | Fonte e conteúdo |
|---|---|
| Capa, folha de identificação e sumário | Identificação e contatos no [README da pasta 00](./ENTREGA/00_IDENTIFICACAO_E_README/README.md). |
| 1. Introdução | Contexto da avaliação dos fluxos comerciais do WG Hidráulica e justificativa da escolha registrada no Apêndice A. |
| 2. Caracterização do sistema | Interface pública, painel administrativo, APIs e persistência no Supabase local. |
| 3. Escopo, requisitos e riscos | Seis RF, três RNF e nove riscos no [plano de testes, versão 1.0](./ESCOPO_E_PLANO.md). |
| 4. Planejamento dos testes | Estratégia, técnicas, dados fictícios, ambiente, responsabilidades e cronograma no plano de testes. |
| 5. Especificação dos casos | [Catálogo de 24 casos](./CASOS_MANUAIS.md) e [rastreabilidade](./RASTREABILIDADE.md). |
| 6. Execução manual e defeitos | [24/24 execuções aprovadas](./REGISTRO_EXECUCOES_HUMANAS_TIAGO.md). CT-004 atingiu o objetivo principal e revelou D-002, Em análise na Issue #3. A Issue #1 foi fechada após reteste e revisão do grupo. [Registro de defeitos](./DEFEITOS.md). |
| 7. Automação | [Rodada de 25/11 em `2ad8845`](./EVIDENCIAS_AUTOMACAO/20261125/160236-2ad8845/): unitários/LCOV 8/8, integração/API 8/8, Selenium 7/7, Newman 27 requisições e 51 verificações aprovadas e TNF 6/6. |
| 8. Integração e sistema | Integração HTTP com Supabase local, coleção Postman/Newman e fluxos Selenium. |
| 9. Aceitação e não funcionais | [PART-01 aceitou os quatro cenários](./REGISTRO_ACEITACAO_PART-01_20261125.md). TNF-01–05 atendem e [TNF-06 atende parcialmente](./ACEITACAO_E_NAO_FUNCIONAIS.md) por falta de observação humana em celular. |
| 10. Métricas e indicadores | Oito indicadores na [planilha editável](./CONTROLE_P2.xlsx). |
| 11. TDD, CI/CD e melhoria contínua | [SonarQube final](./EVIDENCIAS_AUTOMACAO/20261125/sonar/REGISTRO.txt) com LCOV e Quality Gate aprovado. [TDD, CI e plano de melhoria](./TDD_CI_QUALIDADE.md), com runs #21 e #22 verdes. |
| 12. Discussão dos resultados | D-002, TNF-06 e cobertura de 27,1% no escopo analisado pelo SonarQube. |
| 13. Conclusão | Resultados da execução manual, da aceitação e da rodada automática final. |
| Referências e apêndices | [Enunciado](../P2_UNISAGRADO_texto_completo_para_Codex.txt), registros de execução, evidências, diário de participação e declaração final. [Apêndices L e M](./FORMULARIOS_HUMANOS.md). |

O relatório final está na pasta 13. O PPTX e o PDF da apresentação estão na pasta 14, que também recebe o vídeo de contingência. O vídeo e as assinaturas serão incluídos na entrega de 26/11/2026. O procedimento de verificação dos arquivos, acessos e comprovante consta no [checklist](./CHECKLIST_FINAL.md).

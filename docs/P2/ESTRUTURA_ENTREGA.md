# Estrutura da entrega oficial da P2

A pasta de entrega com as subpastas 00–16 foi montada e enviada ao Google Drive em 26/11/2026. A tabela indica o conteúdo de cada subpasta do modelo oficial `P2_TQS_2026_TURMA_GRUPOXX_NOME-DO-SISTEMA` e a fonte de referência.

## Mapa das subpastas obrigatórias 00–16

| Pasta oficial | Conteúdo e referências |
|---|---|
| `00_IDENTIFICACAO_E_README` | [README da pasta 00](./ENTREGA/00_IDENTIFICACAO_E_README/README.md) na ordem do §11.4 com identificação, contatos e instruções para credenciais fictícias. [Apêndice A](./FORMULARIOS_HUMANOS.md) com origem do código e aprovação verbal em aula em 20/08/2026, sem ajustes solicitados. |
| `01_SISTEMA_ALVO` | Código da cópia P2 na branch `p2-unisagrado` e [instruções de instalação](./README.md). |
| `02_REQUISITOS_ESCOPO_RISCOS` | Requisitos, exclusões e riscos priorizados no [plano, versão 1.0](./ESCOPO_E_PLANO.md). |
| `03_PLANO_DE_TESTES` | Estratégia, ambiente, responsabilidades, critérios e cronograma no [plano de testes](./ESCOPO_E_PLANO.md). |
| `04_CASOS_E_RASTREABILIDADE` | 24 casos manuais com pré-condições e referências de execução no [catálogo](./CASOS_MANUAIS.md) e na [rastreabilidade](./RASTREABILIDADE.md). |
| `05_EXECUCAO_MANUAL` | 24/24 execuções manuais aprovadas por Tiago. [Registro](./REGISTRO_EXECUCOES_HUMANAS_TIAGO.md) e [capturas](./EVIDENCIAS_HUMANAS/). |
| `06_DEFEITOS` | [Registro de defeitos](./DEFEITOS.md) e [CSV](./DEFEITOS_EXPORTACAO.csv). D-001 encerrado após reteste aprovado em EX-021; Issue #1 fechada em 25/11. D-002/Issue #3 segue Em análise, com correção recomendada para o TCC. |
| `07_AUTOMACAO_UNITARIA` | Rodada final em `2ad8845`: 8/8 no comando unitário/LCOV, com sete unitários e um contrato simulado. [Evidências da rodada](./EVIDENCIAS_AUTOMACAO/20261125/160236-2ad8845/). |
| `08_INTEGRACAO_API` | Integração/API 8/8 e Newman com 27 requisições e 51 verificações aprovadas. [Coleção e ambiente Postman](./postman/) e [evidências](./EVIDENCIAS_AUTOMACAO/20261125/160236-2ad8845/). |
| `09_SISTEMA_INTERFACE` | Selenium 7/7 na rodada final de 25/11. [Log](./EVIDENCIAS_AUTOMACAO/20261125/160236-2ad8845/03-selenium.log). |
| `10_ACEITACAO_NAO_FUNCIONAIS` | [Aceitação 4/4 por PART-01](./REGISTRO_ACEITACAO_PART-01_20261125.md) e [resultados dos TNF](./ACEITACAO_E_NAO_FUNCIONAIS.md). TNF-06 atende parcialmente por falta de observação humana em celular. |
| `11_METRICAS_E_QUALIDADE` | [Planilha editável](./CONTROLE_P2.xlsx), com 24 execuções manuais, 55 casos automatizados e indicadores recalculados. [SonarQube final](./EVIDENCIAS_AUTOMACAO/20261125/sonar/REGISTRO.txt) com Quality Gate aprovado. |
| `12_TDD_CICD_MELHORIA` | [TDD, CI e plano de melhoria](./TDD_CI_QUALIDADE.md): falha intencional no run #7, reversão verde no #8 e runs #21 e #22 verdes. |
| `13_RELATORIO_FINAL` | Relatório final pronto, com os três apontamentos da revisão de Mateus incorporados. |
| `14_APRESENTACAO_E_VIDEO_CONTINGENCIA` | Apresentação PPTX/PDF pronta. Vídeo de contingência a incluir na entrega de 26/11. [Roteiro](./ROTEIRO_APRESENTACAO_P2.md). |
| `15_DIARIO_DE_PARTICIPACAO` | [Apêndice L](./FORMULARIOS_HUMANOS.md#apêndice-l--diário-de-participação), com contribuições, durações registradas ou aproximadas e evidências. |
| `16_BACKUP_ENTREGA` | Backup e comprovante conforme o procedimento de fechamento e assinatura do [checklist](./CHECKLIST_FINAL.md). |

## Regras de montagem

- Copie apenas a versão revisada de cada fonte. Use estes arquivos canônicos e renomeie na pasta oficial apenas quando necessário; não mantenha cópias concorrentes em vários caminhos.
- Não inclua `.env.local`, `.env.sonar.local`, chaves, senhas, cookies, dados reais, `.scannerwork` ou conteúdo transitório ignorado.
- Preserve o PDF do professor e o texto transcrito como referências; não os altere.
- Para cada evidência, mantenha o caso/execução/hash/data no nome ou metadados e um link na rastreabilidade. Links deverão ser acessíveis sem conta privilegiada, segundo orientação do professor.
- No fechamento da entrega, conferir arquivos e links e guardar o comprovante e a cópia assinada na pasta 16.

# Estrutura da entrega oficial da P2

Esta é uma **lista de organização da cópia de trabalho**, não substitui a pasta do Google Drive do professor. O grupo deve usar a pasta fornecida e o nome `P2_TQS_2026_TURMA_GRUPOXX_NOME-DO-SISTEMA`; não publicar outra pasta nem repositório sem autorização. Os arquivos atuais são mantidos em um único lugar canônico em `docs/P2`; copiar para o Drive só na montagem final. Não duplicar variantes com sufixos “final-final”.

## Mapa das subpastas obrigatórias 00–16

| Pasta oficial | Conteúdo final | Fonte canônica nesta cópia | Estado |
|---|---|---|---|
| `00_IDENTIFICACAO_E_README` | README na ordem de §11.4; ficha A; autorização/licença; contatos e credenciais fictícias por canal restrito | [FORMULARIOS_HUMANOS.md](./FORMULARIOS_HUMANOS.md), `package.json`, README do sistema | README e ficha precisam de dados/aprovação humana. |
| `01_SISTEMA_ALVO` | Código ou link acessível, licença e instruções de instalação | Repositório P2 e README de raiz | Remoto/autorização ainda não configurados. Preservar TCC original. |
| `02_REQUISITOS_ESCOPO_RISCOS` | Requisitos, exclusões e matriz de riscos | [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md) | Preparado; validar com grupo/professor. |
| `03_PLANO_DE_TESTES` | Plano com escopo, estratégia, ambiente, papéis, critérios e cronograma | [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md) | Responsáveis, calendário e aprovação pendentes. |
| `04_CASOS_E_RASTREABILIDADE` | Catálogo E e matriz H | [CASOS_MANUAIS.md](./CASOS_MANUAIS.md), [RASTREABILIDADE.md](./RASTREABILIDADE.md), [GUIA_EXECUCAO_MANUAL.md](./GUIA_EXECUCAO_MANUAL.md) | 24 casos especificados; revisão/execução pendentes. |
| `05_EXECUCAO_MANUAL` | Registros F, capturas e logs nomeados por caso/execução | Evidências novas geradas pelo grupo, instruídas no [guia](./GUIA_EXECUCAO_MANUAL.md) | 0/24 execuções manuais comprovadas; não preencher com automação. |
| `06_DEFEITOS` | Issues e exportação final | [DEFEITOS.md](./DEFEITOS.md), [DEFEITOS_EXPORTACAO.csv](./DEFEITOS_EXPORTACAO.csv) | D-001 técnico preparado; Issues/repositório remoto pendentes. |
| `07_AUTOMACAO_UNITARIA` | Fontes, comando, log e cobertura de unitários | `tests/auth.test.mjs`, `tests/triage.test.mjs`, `tests/commercial-status.test.mjs`, `coverage/p2/lcov.info` | 8 testes unitários/contratos isolados no comando; 7 candidatos unitários, aceitar framework com professor. |
| `08_INTEGRACAO_API` | Testes API e exportações Postman/ambiente/evidências | `tests/p2-api.integration.test.mjs`, `tests/local-flows.integration.test.mjs`, [postman/](./postman) | Newman local executado; expansão/revisão Postman pendente. |
| `09_SISTEMA_INTERFACE` | Selenium, instruções, logs e capturas de falha | `tests/p2-selenium.selenium.mjs` | 4/4 última rodada local; revalidar versão final. |
| `10_ACEITACAO_NAO_FUNCIONAIS` | 4 sessões AC, 6 registros TNF e evidências | [ACEITACAO_E_NAO_FUNCIONAIS.md](./ACEITACAO_E_NAO_FUNCIONAIS.md), [EVIDENCIA_TNF_EXPLORATORIA.json](./EVIDENCIA_TNF_EXPLORATORIA.json) | 0 sessões AC; TNF atuais são exploratórios, critérios e observação humana pendentes. |
| `11_METRICAS_E_QUALIDADE` | XLSX editável, fontes/logs, exportações e interpretação | [CONTROLE_P2.xlsx](./CONTROLE_P2.xlsx), [EVIDENCIA_AUDITORIA_SONAR.json](./EVIDENCIA_AUDITORIA_SONAR.json) | Métricas de execução manual ainda em 0; LCOV e Sonar têm escopos descritos. |
| `12_TDD_CICD_MELHORIA` | Evidência RED/GREEN/REFACTOR, YAML, logs, análise inicial/final e plano | [TDD_CI_QUALIDADE.md](./TDD_CI_QUALIDADE.md), `.github/workflows/p2-ci.yml`, JSON Sonar | TDD local comprovado; pipeline remoto sem execução. |
| `13_RELATORIO_FINAL` | Relatório DOCX/PDF idênticos, atualizado com evidências e apêndices | artefatos de preparação no diretório de entrega local | Relatório DOCX/PDF de preparação em ARTEFATOS_PREPARACAO; completar após dados humanos, execução final e revisão do grupo. Não entregar o rascunho. |
| `14_APRESENTACAO_E_VIDEO_CONTINGENCIA` | PPTX/PDF e vídeo MP4/link acessível | [ROTEIRO_APRESENTACAO_P2.md](./ROTEIRO_APRESENTACAO_P2.md) e deck de preparação | Roteiro e deck PPTX/PDF de preparação existem; ensaio, vídeo, identificação e participação pendentes. Não entregar o rascunho. |
| `15_DIARIO_DE_PARTICIPACAO` | Apêndice L com contribuições/tempos reais | [FORMULARIOS_HUMANOS.md](./FORMULARIOS_HUMANOS.md) | Deve ser preenchido pelo grupo; não inferir contribuições individuais a partir de commits. |
| `16_BACKUP_ENTREGA` | Cópia assinada da entrega e comprovante PDF | A criar pelo grupo após confirmar Drive, arquivos e assinatura | Não criar ou assinar sem data, integrantes e entrega real. |

## Regras de montagem

- Copie apenas a versão revisada de cada fonte. Use estes arquivos canônicos e renomeie na pasta oficial apenas quando necessário; não mantenha cópias concorrentes em vários caminhos.
- Não inclua `.env.local`, `.env.sonar.local`, chaves, senhas, cookies, dados reais, `.scannerwork` ou conteúdo transitório ignorado.
- Preserve o PDF do professor e o texto transcrito como referências; não os altere.
- Para cada evidência, mantenha o caso/execução/hash/data no nome ou metadados e um link na rastreabilidade. Links deverão ser acessíveis sem conta privilegiada, segundo orientação do professor.
- Antes do envio, conte arquivos, abra DOCX/PDF/XLSX/PPTX, confirme acesso/links e gere backup somente depois de fechar conteúdo e receber assinaturas.
- A transferência para Drive, permissão, ensaio, comprovante e submissão continuam ações humanas.

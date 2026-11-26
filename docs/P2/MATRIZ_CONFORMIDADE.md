# Matriz de conformidade — Projeto Integrado P2

**Referência:** transcrição integral das 26 páginas em [P2_UNISAGRADO_texto_completo_para_Codex.txt](../P2_UNISAGRADO_texto_completo_para_Codex.txt). Em ambiguidades de formatação, prevalece o [PDF oficial](./57402f9d-2b95-418b-850a-b87c479c7b4f.pdf).  
**Sistema:** cópia P2 do Sistema Web WG Hidráulica, publicada no repositório privado com a branch padrão `p2-unisagrado`.
**Revisão:** 26/11/2026, com os resultados finais e a organização da entrega.

## Condições de escolha e ambiente (seções 4, 5, 8 e 9.1)

| Exigência | Estado | Evidência e lacuna |
|---|---|---|
| Grupo de 2 ou 3, participação de todos e diário contínuo | Registrado | Tiago Gabriel Carmelino e Mateus Betini, turma `26-2-COMP-7-08-A`, Grupo 8 (`GRPATVSALA 8`). O Apêndice L registra as contribuições com suas respectivas fontes. |
| Duas opções de sistema e ficha do Apêndice A | Parcial | O grupo considerou genericamente desenvolver ou adotar outro sistema acadêmico. Escolheu o WG Hidráulica e não formalizou uma segunda opção específica. O Apêndice A registra a decisão. |
| Autorização do sistema pelo professor | Registrado | O professor aprovou o uso do sistema verbalmente, em aula, em 20/08/2026, sem ajustes solicitados. Origem do código e autorização constam no Apêndice A. |
| Código-fonte, versão executável local e instruções | Documentado | Código, dependências e instruções de instalação, configuração e execução no [README da pasta 00](./ENTREGA/00_IDENTIFICACAO_E_README/README.md). |
| Quatro fluxos relevantes, dois com entrada de dados | Verificado | Solicitação pública, login, status, itens de orçamento e proposta foram exercitados nos casos manuais e na automação final. |
| Persistência, comunicação entre camadas e dados fictícios | Verificado | Supabase local, RPC e seed fictícia. A integração HTTP e os registros manuais documentam a persistência e a restauração dos dados de teste. |
| Isolamento de produção e ramo próprio | Concluído na cópia | Branch local `p2-unisagrado`, `.env.local` ignorado e URLs loopback. O TCC original não foi alterado. |
| Ferramentas obrigatórias | Documentado | Node 24.22.3, pnpm 12.18.0, Docker Desktop, Supabase, `node:test`, Selenium, Postman/Newman, GitHub Actions e SonarQube. A rodada final e os runs #21 e #22 passaram. |

## Produtos P01–P14 (seções 6 e 7)

| Produto | Estado | Situação verificável / próximo passo |
|---|---|---|
| P01 — ficha e autorização | Registrado | Apêndice A com origem do código e aprovação verbal em aula em 20/08/2026, sem ajustes solicitados. A alternativa genérica de outro sistema foi considerada e descartada. |
| P02 — requisitos, escopo e riscos | Documentado | Seis RF, três RNF, exclusões e nove riscos priorizados em [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md). |
| P03 — plano de testes | Documentado | Plano versão 1.0, de 25/11/2026, com estratégia, critérios, ambiente, responsabilidades e cronograma. |
| P04 — catálogo de casos | Documentado | [Catálogo](./CASOS_MANUAIS.md) de 24 casos com técnicas e pré-condições dos CT-004/010/014/018/019. |
| P05 — matriz de rastreabilidade | Documentado | [Matriz](./RASTREABILIDADE.md) liga requisitos, riscos, casos, automação, as 24 execuções humanas e seus defeitos e evidências. |
| P06 — evidências manuais | Concluído | 24/24 execuções manuais aprovadas por Tiago. CT-004 cumpriu o objetivo principal e revelou D-002. A evidência de EX-004 está no painel, com o cookie de sessão preservado em sigilo. [Registro](./REGISTRO_EXECUCOES_HUMANAS_TIAGO.md) e [evidências](./EVIDENCIAS_HUMANAS/). |
| P07 — defeitos em Jira/GitHub Issues | Registrado | D-001 encerrado após reteste em EX-021/CT-013, com Issue #1 fechada em 25/11. D-002 segue Em análise na Issue #3, com correção recomendada no plano de melhoria e no TCC. [Registro](./DEFEITOS.md) e [CSV](./DEFEITOS_EXPORTACAO.csv). |
| P08 — automação | Rodada aprovada | Rodada final em `2ad8845`: 8/8 no comando unitário/LCOV, integração/API 8/8, Selenium 7/7, Newman 27 requisições/51 verificações e TNF 6/6. [Evidências](./EVIDENCIAS_AUTOMACAO/20261125/160236-2ad8845/). |
| P09 — aceitação e não funcionais | Parcial | PART-01 aceitou os quatro cenários. TNF-01–05 atendem. TNF-06 atende parcialmente por falta de observação humana em celular. [Registro](./REGISTRO_ACEITACAO_PART-01_20261125.md) e [TNF](./ACEITACAO_E_NAO_FUNCIONAIS.md). |
| P10 — métricas | Documentado | [Planilha](./CONTROLE_P2.xlsx) com oito indicadores, 24/24 execuções manuais e os resultados da rodada automática final. |
| P11 — TDD, CI/CD e melhoria | Documentado | Ciclo RED/GREEN/REFACTOR, falha controlada no run #7, reversão verde no #8, runs #21 e #22 verdes e SonarQube final com Quality Gate aprovado. [Apêndice J e evidências](./TDD_CI_QUALIDADE.md). |
| P12 — relatório final | Pronto | Relatório final na pasta 13, com os três apontamentos de Mateus incorporados. |
| P13 — apresentação e demonstração | Parcial | PPTX e PDF prontos na pasta 14. Vídeo de contingência a incluir na entrega de 26/11. [Roteiro](./ROTEIRO_APRESENTACAO_P2.md). |
| P14 — diário de participação | Documentado | [Diário](./FORMULARIOS_HUMANOS.md#apêndice-l--diário-de-participação) atualizado com as contribuições de Tiago e Mateus e suas evidências. |

## Quantidades mínimas (seção 10, página 15)

Os números abaixo distinguem a rodada automática final de 25/11/2026 das execuções humanas. Um teste com muitas afirmações continua sendo um único caso automatizado.

| Item | Mínimo | Confirmado no levantamento | Situação |
|---|---:|---:|---|
| Requisitos testáveis | 8 (≥6 RF, ≥2 RNF) | 9: 6 RF e 3 RNF | Especificados em [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md). |
| Riscos priorizados | 8 | 9 | Priorizados no plano. |
| Casos manuais especificados | 24 | 24 | [CASOS_MANUAIS.md](./CASOS_MANUAIS.md). |
| Execuções manuais completas | 24 | 24 de 24 | EX-001–EX-024 registrados por Tiago, com resultados e evidências vinculados caso a caso. CT-004 aprovado quanto ao objetivo principal, com D-002 observado; D-001 retestado e aprovado no EX-021. |
| Testes unitários automatizados | 6 | 7 candidatos: 2 autenticação + 4 triagem + 1 status comercial; nesta retomada, o comando isolado aprovou 8/8 testes no total (inclui 1 contrato simulado fora da cota) | Sete testes unitários implementados em `node:test`. O contrato simulado é contado separadamente. |
| Testes de integração/API automatizados | 5 | 8 casos reais aprovados na rodada final em `2ad8845` | Mínimo numérico demonstrado por automação do agente; `fetch` simulado continua fora da cota; não são execução manual humana. |
| Testes Selenium sistema/interface | 4 | 7 casos, 7/7 aprovados na rodada final de 25/11/2026 (`2ad8845`) | Evidência automatizada final; não é execução manual humana. |
| Cenários de aceitação | 4 | 4 executados, 4 aceitos | PART-01 externo; consentimento confirmado às 15:10 após AC-01; registro, respostas e evidências vinculados. |
| Testes não funcionais | 6 em ≥3 categorias | 6/6 aprovados na rodada automática final de 25/11/2026 (`2ad8845`) em segurança, desempenho e compatibilidade/usabilidade | TNF-01–05 Atende; TNF-06 Atende parcialmente por faltar observação humana móvel. |
| Métricas | 8 | 8 fórmulas/indicadores preparados na planilha; execução manual 24/24 | Painel recalculado sobre 24/24 execuções humanas (24 aprovadas, nenhuma reprovada); D-002 foi observado em CT-004. Cenários AC-01–AC-04 aceitos por PART-01. |
| Evolução TDD | 1 ciclo | 1 ciclo documentado e retestado | RED, GREEN e REFACTOR em três commits sucessivos; ver [TDD_CI_QUALIDADE.md](./TDD_CI_QUALIDADE.md). |
| Pipeline CI/CD | 1 | Workflow comprovado com runs #21 e #22 verdes | Falha controlada no run #7 e reversão verde no run #8. [GitHub Actions](https://github.com/TiagoCarmelino/Elvio-P2/actions/workflows/p2-ci.yml). |
| Análise de qualidade | 2 execuções | Análises Sonar locais, com rodada final em 25/11/2026, commit `2ad8845`, LCOV importado e Quality Gate aprovado | Cobertura global 27,1%; consultar [registro Sonar final](./EVIDENCIAS_AUTOMACAO/20261125/sonar/REGISTRO.txt) sobre limites de escopo. O Gate não equivale a aprovação acadêmica. |

### Classificação dos testes existentes

| Arquivo / caso `node:test` | Classificação | Justificativa |
|---|---|---|
| `tests/auth.test.mjs`: sessão válida/adulterada | Unitário 1 | Exercita assinatura e verificação isoladas, sem banco/rede. |
| `tests/auth.test.mjs`: proteção por e-mail/cookie | Unitário 2 | Usa leitor de cabeçalhos artificial, sem backend. |
| `tests/triage.test.mjs`: dados incompletos | Unitário 3 | Funções puras de pendências e descrição. |
| `tests/triage.test.mjs`: serviço/campo excessivo | Unitário 4 | Validação isolada de triagem. |
| `tests/triage.test.mjs`: resultado do chatbot | Unitário 5 | Validação de objeto isolada. |
| `tests/triage.test.mjs`: comprimento do resumo | Unitário 6 | Regra de limite de descrição isolada. |
| `tests/triage.test.mjs`: contratos HTTP sem chamadas externas | Contrato simulado, fora da cota de integração | Chama handlers diretamente e substitui `fetch`; não prova comunicação real entre aplicação e banco. |
| `tests/commercial-status.test.mjs`: somente chaves próprias do catálogo | Unitário 7 | Verifica a função de domínio isolada, sem banco/rede. |
| `tests/local-flows.integration.test.mjs`: fluxo local agrupado | LOC-01, integração 1 | Chama HTTP real do Vinext e Supabase local, porém todas as etapas estão sob um único `test(...)`. |
| `tests/p2-api.integration.test.mjs`: rejeita solicitação pública incompleta | HTTP-API-02, integração 2 | HTTP local real; verifica 400 e que a lista não ganhou registro. |
| `tests/p2-api.integration.test.mjs`: ciclo CRUD de item de orçamento | HTTP-API-03, integração 3 | HTTP local real; cria, consulta, altera e remove item de teste. |
| `tests/p2-api.integration.test.mjs`: persiste/restaura validade da proposta | HTTP-API-04, integração 4 | HTTP local real e estado restaurado em `finally`. |
| `tests/p2-api.integration.test.mjs`: altera/restaura status e histórico | HTTP-API-05, integração 5 | HTTP local real e estado inicial restaurado. |
| `tests/p2-api.integration.test.mjs`: senha incorreta não cria sessão | HTTP-API-06, integração 6 | HTTP local real; valida redirecionamento e ausência de cookie administrativo. |
| `tests/p2-api.integration.test.mjs`: resposta de proposta em PDF | HTTP-API-07, integração 7 | Valida MIME, nome, assinatura PDF e leitura estrutural; não valida conteúdo contra o banco nem aparência visual. |
| `tests/p2-api.integration.test.mjs`: limites de validade 1–365 | HTTP-API-08, integração 8 | Valida limites e restauração; asserção de valor inalterado em rejeições foi fortalecida nesta auditoria. |
| `tests/p2-selenium.selenium.mjs`: formulário rejeita 9 caracteres e aceita 10 | SEL-05, sistema/interface; associação CT-003 | Valida `validity.tooShort` e a mensagem nativa do navegador para 9; verifica confirmação para 10; screenshots de sucesso e da primeira tentativa do oráculo preservadas. É automação do agente. |
| `tests/p2-selenium.selenium.mjs`: total com dois itens | SEL-06, sistema/interface; associação parcial CT-020 | Subtotais R$ 60 + R$ 60; total sobe R$ 120 sobre o item da seed e volta ao original após remoção. A solicitação base não estava vazia, então a associação a CT-020 é parcial. |
| `tests/p2-selenium.selenium.mjs`: detalhe de UUID inexistente | SEL-07, sistema/interface; associação CT-011 | Sessão administrativa vê “Registro não encontrado” e opção de retorno ao painel; screenshot de sucesso preservado. |

Os casos unitários e o único teste agrupado de `tests/local-flows.integration.test.mjs` não devem ser confundidos com oito casos separados no arquivo de API. A coleção Postman atual tem 27 requisições PM-01–PM-27; as 27 requisições e 51 verificações passaram na rodada Newman final, conforme `EVIDENCIAS_AUTOMACAO/20261125/160236-2ad8845/04-postman-newman.log`. A execução do agente de 16/11 está em [REGISTRO_EXECUCOES_AGENTE_20261116.md](./REGISTRO_EXECUCOES_AGENTE_20261116.md). Em trilha humana separada, EX-001–EX-024 registram os 24 casos CT-001–CT-024; consulte a rastreabilidade por caso.

## Técnicas, execução, métricas e melhoria (seções 9.2–9.16)

| Exigência | Estado | Ação/evidência necessária |
|---|---|---|
| IDs, critérios de aceitação e exclusões | Documentado | Identificadores, critérios e exclusões no [plano](./ESCOPO_E_PLANO.md). |
| Equivalência, limites, positivos, negativos, alternativas e exceções | Documentado | Técnicas indicadas no catálogo de 24 casos manuais. |
| Execução controlada, reteste e regressão | Documentado | 24/24 execuções manuais aprovadas, restaurações registradas e reteste de D-001 aprovado em EX-021. |
| Postman com variáveis, contratos, erros e encadeamento | Documentado | 27 requisições e 51 verificações mapeadas como PM-01–PM-27 e aprovadas na rodada final de 25/11/2026. |
| Selenium com localizadores estáveis, espera e captura | Aprovado | 7/7 na rodada final em `2ad8845`. [Log](./EVIDENCIAS_AUTOMACAO/20261125/160236-2ad8845/03-selenium.log). |
| Aceitação por representante | Concluído nesta sessão | PART-01, pessoa externa ao curso, executou AC-01–AC-04 e decidiu Aceito nos quatro; respostas/evidências vinculadas. Consentimento confirmado após AC-01. |
| Não funcionais compatíveis e seguros | Parcial | TNF-01–05 atendem. TNF-06 atende parcialmente por falta de observação humana em celular. |
| Métricas e interpretação | Documentado | Oito indicadores na planilha, com os resultados manuais e automatizados na versão final. |
| TDD demonstrado | Concluído localmente | D-001 detectado por RED, corrigido por GREEN e simplificado em REFACTOR; commits e saídas reais documentados. |
| CI/CD com gatilho, instalação, teste e resultado | Documentado | Falha controlada no run #7 (`6014a43`), reversão verde no run #8 (`9b1bf7e`) e runs #21 e #22 verdes. [Evidências](./EVIDENCIAS_CI/). |
| Qualidade inicial/final e plano de melhoria | Documentado | SonarQube final em `2ad8845` com LCOV, Quality Gate aprovado e 27,1% de cobertura no escopo total. [Registro](./EVIDENCIAS_AUTOMACAO/20261125/sonar/REGISTRO.txt). |

## Entrega, relatório e participação (seções 11–16 e Apêndices A–M)

| Exigência | Estado | Dependência |
|---|---|---|
| Pasta oficial no Google Drive com nome `P2_TQS_2026_TURMA_GRUPOXX_NOME-DO-SISTEMA` e subpastas 00–16 | Organizada | Subpastas 00–16 montadas e enviadas ao Google Drive em 26/11. [Estrutura](./ESTRUTURA_ENTREGA.md). |
| README da pasta 00 na ordem exigida | Pronto | [README](./ENTREGA/00_IDENTIFICACAO_E_README/README.md) com as 15 seções do §11.4, incluindo contatos e localização dos arquivos finais. |
| Arquivos finais: DOCX/PDF, planilha editável, Postman JSON, defeitos CSV/PDF, PPTX/PDF e vídeo MP4/link | Parcial | Relatório, apresentação PPTX/PDF, planilha editável, coleção/ambiente Postman e exportação CSV de defeitos. Vídeo de contingência a incluir na pasta 14. |
| Relatório com capa, folha, sumário, seções 1–13, referências e anexos | Pronto | Relatório final na pasta 13. |
| Apêndices A–M com todos os campos | Parcial | Registros do Apêndice A ao L referenciados na [estrutura da entrega](./ESTRUTURA_ENTREGA.md). Declaração final (Apêndice M) pronta para receber as assinaturas em 26/11. |
| Apresentação de 12–15 minutos, até 5 minutos de perguntas, todos falando, vídeo de contingência | Parcial | PPTX/PDF prontos na pasta 14. Vídeo de contingência a incluir na entrega. [Roteiro](./ROTEIRO_APRESENTACAO_P2.md). |
| Ética, dados fictícios, links acessíveis, comprovante de entrega e horário oficial | Documentado | Testes em ambiente local com dados fictícios. O [checklist](./CHECKLIST_FINAL.md) descreve o procedimento de verificação de acesso, comprovante e backup no fechamento. |

## Regras de atualização

Cada mudança de estado deverá indicar arquivo ou execução real, data, versão, resultado e limitação. A matriz será mantida apenas na cópia P2; futuras versões do TCC podem ser integradas por commit/merge revisado, preservando os testes e os fixtures locais.

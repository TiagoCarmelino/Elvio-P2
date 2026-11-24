# Matriz de conformidade — Projeto Integrado P2

**Referência:** transcrição integral das 26 páginas em [P2_UNISAGRADO_texto_completo_para_Codex.txt](../P2_UNISAGRADO_texto_completo_para_Codex.txt). Em ambiguidades de formatação, prevalece o [PDF oficial](./57402f9d-2b95-418b-850a-b87c479c7b4f.pdf).  
**Sistema:** cópia P2 do Sistema Web WG Hidráulica; branch padrão `p2-unisagrado` publicada no repositório GitHub privado; o grupo ainda deve conceder acesso ao professor.
**Revisão:** 24/11/2026, após preparação dos documentos para entrega. `Concluído` exige artefato e resultado observado; `Parcial` indica trabalho preparado sem todos os resultados; `Pendente` não recebeu evidência.

## Condições de escolha e ambiente (seções 4, 5, 8 e 9.1)

| Exigência | Estado | Evidência e lacuna |
|---|---|---|
| Grupo de 2 ou 3, participação de todos e diário contínuo | Parcial | Turma `26-2-COMP-7-08-A`, Grupo 8 (`GRPATVSALA 8`) e Tiago Gabriel Carmelino/Mateus Betini preenchidos no Apêndice A. O diário inclui atividades datadas com evidência; tempo e colaboração não registrados, além de participação futura do grupo, continuam pendentes de revisão/validação humana. |
| Duas opções de sistema e ficha do Apêndice A | Pendente | A cópia WG foi selecionada; segunda opção, ficha e registro de apresentação ao professor faltam. |
| Autorização do sistema pelo professor | Parcial | O usuário confirmou que o professor autorizou o uso do WG Hidráulica. A evidência/documento, data, eventuais ajustes e registro no Apêndice A ainda não foram anexados; confirmação do usuário não substitui esse registro exigido. |
| Código-fonte, versão executável local e instruções | Parcial | Código, Git, Node, pnpm, Docker, Supabase, migrações, seed e README do TCC existem. O README específico de entrega P2 será preparado; disponibilidade durante o semestre depende do grupo. |
| Quatro fluxos relevantes, dois com entrada de dados | Concluído para seleção | Solicitação pública, login, status, itens do orçamento e proposta existem no código. Execução completa em interface ainda precisa evidência. |
| Persistência, comunicação entre camadas e dados fictícios | Concluído para preparação | Supabase local, funções RPC e seed fictícia; o teste de integração local observou autenticação e leitura real. Repetições de mutação e restauração devem ser documentadas. |
| Isolamento de produção e ramo próprio | Concluído na cópia | Branch local `p2-unisagrado`, `.env.local` ignorado e URLs loopback. O TCC original não foi alterado. |
| Ferramentas obrigatórias | Parcial | Node 24.22.3, pnpm 12.18.0, Docker Desktop e Supabase CLI disponíveis; em 23/11 a branch foi atualizada por `git pull` até `219210a`. Acesso ao professor e aceite de `node:test` ainda pendem. CI remoto tem evidência de falha intencional e run verde após reversão; a coleção Postman foi ampliada, mas precisa ser executada nesta versão. |

## Produtos P01–P14 (seções 6 e 7)

| Produto | Estado | Situação verificável / próximo passo |
|---|---|---|
| P01 — ficha e autorização | Parcial | Apêndice A preenchido com turma, Grupo 8, integrantes, WG Hidráulica, repositório e decisão “Aprovado (autorizado em aula)”. A data da aprovação e a segunda opção ficaram para preenchimento humano; registrar ajustes e eventual autorização do responsável pelo código se exigidos. |
| P02 — requisitos, escopo e riscos | Parcial | Requisitos e riscos P2 definidos em [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md); confirmar escopo com grupo/professor. |
| P03 — plano de testes | Parcial | Estratégia e critérios em [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md); responsáveis e calendário dependem do grupo. |
| P04 — catálogo de casos | Parcial | [CASOS_MANUAIS.md](./CASOS_MANUAIS.md) especifica 24 casos e explicita as dependências de CT-004/010/014/018/019 conforme §9.5. Revisão humana e 21 execuções seguem pendentes. |
| P05 — matriz de rastreabilidade | Parcial | [RASTREABILIDADE.md](./RASTREABILIDADE.md) liga requisitos, riscos, casos, automação e, para RF-01, execuções EX-001–EX-003, evidências e D-002. Demais execuções humanas ainda pendem. |
| P06 — evidências manuais | Parcial | Três casos humanos registrados por Tiago (CT-001, CT-003 e CT-004), com capturas em [EVIDENCIAS_HUMANAS](./EVIDENCIAS_HUMANAS/) e registros EX-001–EX-003. Restam 21 dos 24 casos; CT-004 encontrou D-002. |
| P07 — defeitos em Jira/GitHub Issues | Parcial | D-001: **Pronto para reteste**; testes técnicos passaram, CT-013 manual ainda pendente, Issue #1 aberta. D-002: **Novo**, severidade/prioridade média, vinculado à [Issue #3](https://github.com/TiagoCarmelino/Elvio-P2/issues/3) e ao [CSV](./DEFEITOS_EXPORTACAO.csv). Análise/correção/reteste de D-002, decisão/encerramento humano e exportação PDF pendentes. |
| P08 — automação | Parcial | Sete unitários candidatos à cota, mais um contrato simulado fora dela. `test:local` 8/8, Selenium 7/7 e TNF 6/6 foram resultados locais do agente em 16/11; Selenium é da revisão anterior ao PR #2 e não foi repetido após o ajuste de SEL-05. Newman 6/6 requisições/12 verificações também é resultado da coleção anterior. A coleção atual contém PM-01–PM-27 e 51 verificações, ainda sem execução após o merge. Aceite de `node:test` pendente. |
| P09 — aceitação e não funcionais | Parcial | Quatro cenários e instruções para facilitador em [ACEITACAO_E_NAO_FUNCIONAIS.md](./ACEITACAO_E_NAO_FUNCIONAIS.md); 0/4 sessões realizadas. Seis TNF exploratórios locais registrados; critérios, observação humana e repetição na versão final pendem. |
| P10 — métricas | Parcial | [CONTROLE_P2.xlsx](./CONTROLE_P2.xlsx) contém fórmulas e fontes; resultados manuais finais e interpretação dependem das execuções. |
| P11 — TDD, CI/CD e melhoria | Parcial | Ciclo RED/GREEN/REFACTOR e LCOV local permanecem documentados. O Apêndice J registra falha CI intencional no commit `6014a43` (run #7) e reversão com run #8 verde no commit `9b1bf7e`; evidências/prints em [EVIDENCIAS_CI](./EVIDENCIAS_CI/) e URLs em [TDD_CI_QUALIDADE.md](./TDD_CI_QUALIDADE.md). R-SEG-01: verificação executada pelo Claude Code a pedido de Tiago às 15:52 (dois GET, ambos 401 com o plugin); Tiago repetiu às 18:06 de 23/11/2026, no PowerShell, com 401 nas duas requisições — evidência oficial em [EVIDENCIAS_HUMANAS/R-SEG-01](./EVIDENCIAS_HUMANAS/R-SEG-01/). A observação não é defeito. |
| P12 — relatório final | Parcial | DOCX e PDF de preparação com capa, folha de identificação, sumário e seções oficiais 1–13 em [ARTEFATOS_PREPARACAO/](./ARTEFATOS_PREPARACAO/). Dados do grupo, aprovações, execuções, métricas finais, revisão humana e revalidação ainda pendem. |
| P13 — apresentação e demonstração | Parcial | Roteiro de 13 minutos e deck PPTX/PDF de preparação (10 slides) em [ROTEIRO_APRESENTACAO_P2.md](./ROTEIRO_APRESENTACAO_P2.md) e [ARTEFATOS_PREPARACAO/](./ARTEFATOS_PREPARACAO/). Integrantes, ensaio, resultados finais e vídeo de contingência pendem. |
| P14 — diário de participação | Parcial | Apêndice L foi preenchido com atividades datadas e evidências de commits/registros; tempos não informados ficaram como “Não registrado” e não há atividades atribuídas a Mateus sem prova. O grupo deve revisar/validar e continuar o diário. |

## Quantidades mínimas (seção 10, página 15)

Os números a seguir distinguem execuções locais do agente nesta retomada (16/11/2026) e verificações humanas, ainda não realizadas. Um teste com muitas afirmações continua sendo um único caso automatizado. `node:test` depende de aceite do professor como equivalente a JUnit.

| Item | Mínimo | Confirmado no levantamento | Situação |
|---|---:|---:|---|
| Requisitos testáveis | 8 (≥6 RF, ≥2 RNF) | 9: 6 RF e 3 RNF | Especificados em [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md); aprovação humana pendente. |
| Riscos priorizados | 8 | 9 | Priorizados no plano; revisão humana pendente. |
| Casos manuais especificados | 24 | 24 | [CASOS_MANUAIS.md](./CASOS_MANUAIS.md); revisão humana pendente. |
| Execuções manuais completas | 24 | 3 de 24 | Parcial: EX-001/CT-001, EX-002/CT-003 e EX-003/CT-004 registrados por Tiago; 21 casos ainda pendentes. CT-004 está aprovado quanto ao objetivo principal, com D-002 observado. |
| Testes unitários automatizados | 6 | 7 candidatos: 2 autenticação + 4 triagem + 1 status comercial; nesta retomada, o comando isolado aprovou 8/8 testes no total (inclui 1 contrato simulado fora da cota) | Quantidade atendida se `node:test` for aceito como framework equivalente. |
| Testes de integração/API automatizados | 5 | 8 casos reais, 8/8 aprovados nesta retomada em `test:local` | Mínimo numérico demonstrado por automação do agente; `fetch` simulado continua fora da cota; não são execução manual humana. |
| Testes Selenium sistema/interface | 4 | 7 casos, 7/7 aprovados na rodada final do agente em `test:selenium` | Mínimo numérico demonstrado por automação; screenshot por sucesso habilitado. Não são execução manual humana. |
| Cenários de aceitação | 4 | 4 planejados, 0 executados | Decisão de representante humano pendente. |
| Testes não funcionais | 6 em ≥3 categorias | 6/6 executados pelo agente nesta retomada em segurança, desempenho e compatibilidade/usabilidade | Evidência exploratória local; aprovação dos critérios, repetição/observação humana e conclusão oficial pendentes. |
| Métricas | 8 | 8 fórmulas/indicadores preparados na planilha; execução manual 3/24 | Indicadores finais pendentes; agentes e humanos permanecem em trilhas separadas, e cobertura por vínculo não significa aceitação integral. |
| Evolução TDD | 1 ciclo | 1 ciclo documentado e retestado | RED, GREEN e REFACTOR em três commits sucessivos; ver [TDD_CI_QUALIDADE.md](./TDD_CI_QUALIDADE.md). |
| Pipeline CI/CD | 1 | Workflow remoto comprovado; run #7 falhou intencionalmente (7/8) e run #8 passou após reversão (8/8, lint, TypeScript, build e artefatos); mais quatro runs verdes históricos. |
| Análise de qualidade | 2 execuções | 4 análises Sonar locais, incluindo importação LCOV em 12/11/2026 | [Evidência mais recente](./EVIDENCIA_AUDITORIA_SONAR.json): cobertura total do escopo 27,1%; ver limitação do escopo parcial de testes. Quality Gate local `OK`, sem equivalência com aprovação acadêmica ou CI. |

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

Os casos unitários e o único teste agrupado de `tests/local-flows.integration.test.mjs` não devem ser confundidos com sete testes separados no arquivo de API. As seis requisições Postman usam prefixo `PM-` para não colidir com os IDs `HTTP-API-*`. A execução atual dos testes locais do agente e a classificação por CT estão em [REGISTRO_EXECUCOES_AGENTE_20261116.md](./REGISTRO_EXECUCOES_AGENTE_20261116.md); nenhuma execução humana foi lançada em EX-xxx.

## Técnicas, execução, métricas e melhoria (seções 9.2–9.16)

| Exigência | Estado | Ação/evidência necessária |
|---|---|---|
| IDs, critérios de aceitação e exclusões | Parcial | Definidos no plano; confirmar com responsável e professor. |
| Equivalência, limites, positivos, negativos, alternativas e exceções | Parcial | Indicar técnica em cada caso; revisar casos de fronteira contra valores do código e do banco. |
| Execução controlada, reteste e regressão | Pendente | Executar casos passo a passo, anexar captura/log e relacionar defeito real quando houver. |
| Postman com variáveis, contratos, erros e encadeamento | Parcial | Coleção atual tem 27 requisições e 51 verificações, mapeadas como PM-01–PM-27 na rastreabilidade. A execução Newman anterior (6/12) não prova a coleção ampliada; executar e guardar log/export atual. |
| Selenium com localizadores estáveis, espera e captura | Parcial | Sete fluxos aprovados pelo agente no Chrome; capturas de sucesso e a falha inicial do oráculo CT-003 foram preservadas em [EVIDENCIAS_AGENTE/20261116/](./EVIDENCIAS_AGENTE/20261116/). Não são execuções manuais humanas. |
| Aceitação por representante | Pendente humano | Definir 4 tarefas; pessoa externa aos testes registra Aceito / ressalvas / Não aceito. |
| Não funcionais compatíveis e seguros | Parcial | Seis verificações locais seguras passaram em rodada exploratória; revisar critério, ambiente, amostra e observação humana antes do resultado oficial. |
| Métricas e interpretação | Parcial | Oito fórmulas da planilha foram preparadas; três execuções humanas estão registradas (3/24). Interpretar resultados finais e incorporar gráficos no relatório após completar os casos; não usar dados inventados. |
| TDD demonstrado | Concluído localmente | D-001 detectado por RED, corrigido por GREEN e simplificado em REFACTOR; commits e saídas reais documentados. |
| CI/CD com gatilho, instalação, teste e resultado | Parcial | Falha intencional run [#7](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45244036937) em `6014a43`; após reversão, run [#8](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45244667066) passou no commit `9b1bf7e`. Registros e cinco capturas em [EVIDENCIAS_CI](./EVIDENCIAS_CI/). Falta revisar acesso professor e discutir se integração/UI deve ser adicionada ao workflow. |
| Qualidade inicial/final e plano de melhoria | Parcial | Quatro análises SonarQube locais: 4 alertas nas duas primeiras, 0 na terceira; quarta importou LCOV e reportou 27,1% em 1.020 linhas cobráveis. Responsáveis humanos e plano final pendentes. |

## Entrega, relatório e participação (seções 11–16 e Apêndices A–M)

| Exigência | Estado | Dependência |
|---|---|---|
| Pasta oficial no Google Drive com nome `P2_TQS_2026_TURMA_GRUPOXX_NOME-DO-SISTEMA` e subpastas 00–16 | Pendente humano | Turma, número do grupo, acesso à pasta fornecida pelo professor e publicação final. Não criar pasta alternativa como entrega oficial. |
| README da pasta 00 na ordem exigida | Parcial | [README da pasta 00](./ENTREGA/00_IDENTIFICACAO_E_README/README.md) contém as 15 seções na ordem de §11.4 e não expõe senhas. Contatos do grupo e eventual atualização no Drive oficial pendentes. |
| Arquivos finais: DOCX/PDF, planilha editável, Postman JSON, defeitos CSV/PDF, PPTX/PDF e vídeo MP4/link | Parcial | XLSX, coleção/ambiente JSON e CSV de D-001 preparados; DOCX/PDF e PPTX/PDF de preparação existem, marcados como rascunho; dependem de resultados reais, grupo e revisão humana. Vídeo ainda pendente. |
| Relatório com capa, folha, sumário, seções 1–13, referências e anexos | Parcial | Rascunho DOCX/PDF estruturado conforme o enunciado; completar resultados reais, anexos, links e validação final antes de gerar a versão submetível. |
| Apêndices A–M com todos os campos | Parcial | B, C, D, E e H começam a ser representados nos documentos P2; F, G, I, J, K, L, M exigem registros reais ou assinatura. |
| Apresentação de 12–15 minutos, até 5 minutos de perguntas, todos falando, vídeo de contingência | Parcial | Roteiro de 13 minutos e deck PPTX/PDF de preparação existem; fala de todos, ensaio, demonstração final e vídeo dependem do grupo. |
| Ética, dados fictícios, links acessíveis, comprovante de entrega e horário oficial | Parcial | Isolamento local e dados sintéticos atendidos; revisão de licenças, orientação sobre IA, verificação anônima dos links, assinatura e submissão cabem ao grupo. |

## Regras de atualização

Cada mudança de estado deverá indicar arquivo ou execução real, data, versão, resultado e limitação. A matriz será mantida apenas na cópia P2; futuras versões do TCC podem ser integradas por commit/merge revisado, preservando os testes e os fixtures locais.

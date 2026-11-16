# Matriz de conformidade — Projeto Integrado P2

**Referência:** transcrição integral das 26 páginas em [P2_UNISAGRADO_texto_completo_para_Codex.txt](../P2_UNISAGRADO_texto_completo_para_Codex.txt). Em ambiguidades de formatação, prevalece o [PDF oficial](./57402f9d-2b95-418b-850a-b87c479c7b4f.pdf).  
**Sistema:** cópia P2 do Sistema Web WG Hidráulica; branch padrão `p2-unisagrado` publicada no repositório GitHub privado; o grupo ainda deve conceder acesso ao professor.
**Revisão:** 16/11/2026. `Concluído` exige artefato e resultado observado; `Parcial` indica trabalho preparado sem todos os resultados; `Pendente` não recebeu evidência.

## Condições de escolha e ambiente (seções 4, 5, 8 e 9.1)

| Exigência | Estado | Evidência e lacuna |
|---|---|---|
| Grupo de 2 ou 3, participação de todos e diário contínuo | Parcial | O usuário confirmou Tiago Gabriel Carmelino e Mateus Betini como integrantes (2 pessoas). Turma, responsabilidades, evidências individuais e diário contínuo ainda precisam ser preenchidos pelo grupo. |
| Duas opções de sistema e ficha do Apêndice A | Pendente | A cópia WG foi selecionada; segunda opção, ficha e registro de apresentação ao professor faltam. |
| Autorização do sistema pelo professor | Parcial | O usuário confirmou que o professor autorizou o uso do WG Hidráulica. A evidência/documento, data, eventuais ajustes e registro no Apêndice A ainda não foram anexados; confirmação do usuário não substitui esse registro exigido. |
| Código-fonte, versão executável local e instruções | Parcial | Código, Git, Node, pnpm, Docker, Supabase, migrações, seed e README do TCC existem. O README específico de entrega P2 será preparado; disponibilidade durante o semestre depende do grupo. |
| Quatro fluxos relevantes, dois com entrada de dados | Concluído para seleção | Solicitação pública, login, status, itens do orçamento e proposta existem no código. Execução completa em interface ainda precisa evidência. |
| Persistência, comunicação entre camadas e dados fictícios | Concluído para preparação | Supabase local, funções RPC e seed fictícia; o teste de integração local observou autenticação e leitura real. Repetições de mutação e restauração devem ser documentadas. |
| Isolamento de produção e ramo próprio | Concluído na cópia | Branch local `p2-unisagrado`, `.env.local` ignorado e URLs loopback. O TCC original não foi alterado. |
| Ferramentas obrigatórias | Parcial | Node 24.22.3, pnpm 12.18.0 e Supabase CLI 3.1.0 estão disponíveis; o comando Docker existe, mas o daemon não está acessível nesta retomada. A branch remota privada, Issue #1 e GitHub Actions já existem; quatro execuções recentes estão registradas no histórico anterior. Testes locais de integração/UI e Sonar não foram repetidos nesta retomada porque o Docker está indisponível. A equivalência de `node:test` ao JUnit exige aceitação do professor. |

## Produtos P01–P14 (seções 6 e 7)

| Produto | Estado | Situação verificável / próximo passo |
|---|---|---|
| P01 — ficha e autorização | Parcial | O usuário confirmou autorização do professor e informou Tiago Gabriel Carmelino e Mateus Betini. Completar Apêndice A, registrar data/decisão/ajustes com evidência e informar turma, número do grupo e segunda opção. |
| P02 — requisitos, escopo e riscos | Parcial | Requisitos e riscos P2 definidos em [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md); confirmar escopo com grupo/professor. |
| P03 — plano de testes | Parcial | Estratégia e critérios em [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md); responsáveis e calendário dependem do grupo. |
| P04 — catálogo de casos | Parcial | [CASOS_MANUAIS.md](./CASOS_MANUAIS.md) especifica 24 casos; [GUIA_EXECUCAO_MANUAL.md](./GUIA_EXECUCAO_MANUAL.md) detalha passos, esperado e evidências. Revisão humana e execuções seguem pendentes. |
| P05 — matriz de rastreabilidade | Parcial | [RASTREABILIDADE.md](./RASTREABILIDADE.md) liga requisitos, riscos, casos e automação; execuções manuais/evidências/defeitos serão ligados quando existirem. |
| P06 — evidências manuais | Pendente | Nenhuma execução manual de caso P2 foi registrada. |
| P07 — defeitos em Jira/GitHub Issues | Parcial | D-001 verificado, corrigido e retestado, com [Issue #1](https://github.com/TiagoCarmelino/Elvio-P2/issues/1) aberta e [CSV](./DEFEITOS_EXPORTACAO.csv) atualizado. Revisão/fechamento humano e exportação PDF ainda pendentes. |
| P08 — automação | Parcial | Mínimo unitário: 7 casos candidatos (6 exigidos), mais 1 contrato simulado fora da cota; `pnpm run test` foi repetido nesta retomada, com 8/8 aprovados em 16/11/2026. As 8 integrações reais e 4 Selenium são resultados históricos de execução local, ainda dependentes de reteste na versão atual; Postman/Newman: 6 requisições e 12 verificações em rodada histórica. Falta aceite do framework e ampliar a coleção Postman. |
| P09 — aceitação e não funcionais | Parcial | Quatro cenários e instruções para facilitador em [ACEITACAO_E_NAO_FUNCIONAIS.md](./ACEITACAO_E_NAO_FUNCIONAIS.md); 0/4 sessões realizadas. Seis TNF exploratórios locais registrados; critérios, observação humana e repetição na versão final pendem. |
| P10 — métricas | Parcial | [CONTROLE_P2.xlsx](./CONTROLE_P2.xlsx) contém fórmulas e fontes; resultados manuais finais e interpretação dependem das execuções. |
| P11 — TDD, CI/CD e melhoria | Parcial | Ciclo RED `83d519e`, GREEN `68de98e`, REFACTOR `a421b47` comprovado em [TDD_CI_QUALIDADE.md](./TDD_CI_QUALIDADE.md). LCOV gerado/importado em Sonar local com 27,1% no escopo do projeto. [Quatro execuções GitHub Actions](https://github.com/TiagoCarmelino/Elvio-P2/actions) nos commits publicados concluíram com sucesso; falta a falha controlada seguida de correção/sucesso. |
| P12 — relatório final | Parcial | DOCX e PDF de preparação com capa, folha de identificação, sumário e seções oficiais 1–13 em [ARTEFATOS_PREPARACAO/](./ARTEFATOS_PREPARACAO/). Dados do grupo, aprovações, execuções, métricas finais, revisão humana e revalidação ainda pendem. |
| P13 — apresentação e demonstração | Parcial | Roteiro de 13 minutos e deck PPTX/PDF de preparação (10 slides) em [ROTEIRO_APRESENTACAO_P2.md](./ROTEIRO_APRESENTACAO_P2.md) e [ARTEFATOS_PREPARACAO/](./ARTEFATOS_PREPARACAO/). Integrantes, ensaio, resultados finais e vídeo de contingência pendem. |
| P14 — diário de participação | Pendente | Datas, responsáveis, colaboradores, tempo e evidências reais dependem do grupo. |

## Quantidades mínimas (seção 10, página 15)

Os números a seguir combinam a verificação isolada atual de 16/11/2026 e execuções históricas datadas nas evidências; testes locais que dependem de Docker não foram repetidos nesta retomada. Um teste com muitas afirmações continua sendo um único caso automatizado. `node:test` depende de aceite do professor como equivalente a JUnit.

| Item | Mínimo | Confirmado no levantamento | Situação |
|---|---:|---:|---|
| Requisitos testáveis | 8 (≥6 RF, ≥2 RNF) | 9: 6 RF e 3 RNF | Especificados em [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md); aprovação humana pendente. |
| Riscos priorizados | 8 | 9 | Priorizados no plano; revisão humana pendente. |
| Casos manuais especificados | 24 | 24 | [CASOS_MANUAIS.md](./CASOS_MANUAIS.md); revisão humana pendente. |
| Execuções manuais completas | 24 | 0 | Pendente; não confundir testes automatizados com execução manual. |
| Testes unitários automatizados | 6 | 7 candidatos: 2 autenticação + 4 triagem + 1 status comercial; nesta retomada, o comando isolado aprovou 8/8 testes no total (inclui 1 contrato simulado fora da cota) | Quantidade atendida se `node:test` for aceito como framework equivalente. |
| Testes de integração/API automatizados | 5 | 8 casos reais, 8/8 aprovados em `test:local` | Mínimo numérico atendido localmente; `fetch` simulado continua fora da cota. |
| Testes Selenium sistema/interface | 4 | 4 casos, 4/4 aprovados em `test:selenium` | Mínimo numérico atendido em Chrome local; evidência da rodada inicial falha registrada no progresso. |
| Cenários de aceitação | 4 | 4 planejados, 0 executados | Decisão de representante humano pendente. |
| Testes não funcionais | 6 em ≥3 categorias | 6 executados exploratoriamente em segurança, desempenho e compatibilidade/usabilidade | Dados reais locais registrados; aprovação de critérios, repetição/observação humana e conclusão oficial pendentes. |
| Métricas | 8 | 8 fórmulas/indicadores preparados na planilha; finais pendentes | Valores atuais: 0 execuções manuais, 25/25 automações do escopo planejado, 9/9 requisitos com ao menos um teste automatizado executado e 1 defeito verificado. Cobertura por vínculo não significa aceitação integral. |
| Evolução TDD | 1 ciclo | 1 ciclo documentado e retestado | RED, GREEN e REFACTOR em três commits sucessivos; ver [TDD_CI_QUALIDADE.md](./TDD_CI_QUALIDADE.md). |
| Pipeline CI/CD | 1 | 1 workflow e 4 execuções remotas recentes concluídas com sucesso (histórico GitHub). Falta a execução controlada que demonstra falha e correção. |
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

Os seis casos de `tests/triage.test.mjs` e o único teste agrupado de `tests/local-flows.integration.test.mjs` não devem ser confundidos com sete testes separados no arquivo de API. As seis requisições Postman usam prefixo `PM-` para não colidir com os IDs `HTTP-API-*`.

## Técnicas, execução, métricas e melhoria (seções 9.2–9.16)

| Exigência | Estado | Ação/evidência necessária |
|---|---|---|
| IDs, critérios de aceitação e exclusões | Parcial | Definidos no plano; confirmar com responsável e professor. |
| Equivalência, limites, positivos, negativos, alternativas e exceções | Parcial | Indicar técnica em cada caso; revisar casos de fronteira contra valores do código e do banco. |
| Execução controlada, reteste e regressão | Pendente | Executar casos passo a passo, anexar captura/log e relacionar defeito real quando houver. |
| Postman com variáveis, contratos, erros e encadeamento | Parcial | Coleção/ambiente JSON em [postman/](./postman), executada por Newman com 6 requisições e 12 verificações aprovadas. Execução pela interface Postman ainda pendente. |
| Selenium com localizadores estáveis, espera e captura em falha | Concluído localmente | Quatro fluxos aprovados em Chrome; capturas de falhas na primeira rodada ficaram em `test-results/selenium/`, ignorado. |
| Aceitação por representante | Pendente humano | Definir 4 tarefas; pessoa externa aos testes registra Aceito / ressalvas / Não aceito. |
| Não funcionais compatíveis e seguros | Parcial | Seis verificações locais seguras passaram em rodada exploratória; revisar critério, ambiente, amostra e observação humana antes do resultado oficial. |
| Métricas e interpretação | Parcial | Oito fórmulas recalculadas na planilha. Registrar 24 execuções manuais, interpretar resultados finais e incorporar gráficos no relatório; não usar dados inventados. |
| TDD demonstrado | Concluído localmente | D-001 detectado por RED, corrigido por GREEN e simplificado em REFACTOR; commits e saídas reais documentados. |
| CI/CD com gatilho, instalação, teste e resultado | Parcial | Quatro execuções recentes concluíram `success`: [43902629850](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/43902629850), [43903980246](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/43903980246), [43904521607](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/43904521607) e [43905776217](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/43905776217); falta demonstrar falha controlada seguida de correção/aprovação. |
| Qualidade inicial/final e plano de melhoria | Parcial | Quatro análises SonarQube locais: 4 alertas nas duas primeiras, 0 na terceira; quarta importou LCOV e reportou 27,1% em 1.020 linhas cobráveis. Responsáveis humanos e plano final pendentes. |

## Entrega, relatório e participação (seções 11–16 e Apêndices A–M)

| Exigência | Estado | Dependência |
|---|---|---|
| Pasta oficial no Google Drive com nome `P2_TQS_2026_TURMA_GRUPOXX_NOME-DO-SISTEMA` e subpastas 00–16 | Pendente humano | Turma, número do grupo, acesso à pasta fornecida pelo professor e publicação final. Não criar pasta alternativa como entrega oficial. |
| README da pasta 00 na ordem exigida | Parcial | Texto preparatório em [ENTREGA_E_RELATORIO_RASCUNHO.md](./ENTREGA_E_RELATORIO_RASCUNHO.md); completar identificação, link do repositório, contatos e credenciais fictícias por canal restrito. |
| Arquivos finais: DOCX/PDF, planilha editável, Postman JSON, defeitos CSV/PDF, PPTX/PDF e vídeo MP4/link | Parcial | XLSX, coleção/ambiente JSON e CSV de D-001 preparados; DOCX/PDF e PPTX/PDF de preparação existem, marcados como rascunho; dependem de resultados reais, grupo e revisão humana. Vídeo ainda pendente. |
| Relatório com capa, folha, sumário, seções 1–13, referências e anexos | Parcial | Rascunho DOCX/PDF estruturado conforme o enunciado; completar resultados reais, anexos, links e validação final antes de gerar a versão submetível. |
| Apêndices A–M com todos os campos | Parcial | B, C, D, E e H começam a ser representados nos documentos P2; F, G, I, J, K, L, M exigem registros reais ou assinatura. |
| Apresentação de 12–15 minutos, até 5 minutos de perguntas, todos falando, vídeo de contingência | Parcial | Roteiro de 13 minutos e deck PPTX/PDF de preparação existem; fala de todos, ensaio, demonstração final e vídeo dependem do grupo. |
| Ética, dados fictícios, links acessíveis, comprovante de entrega e horário oficial | Parcial | Isolamento local e dados sintéticos atendidos; revisão de licenças, orientação sobre IA, verificação anônima dos links, assinatura e submissão cabem ao grupo. |

## Regras de atualização

Cada mudança de estado deverá indicar arquivo ou execução real, data, versão, resultado e limitação. A matriz será mantida apenas na cópia P2; futuras versões do TCC podem ser integradas por commit/merge revisado, preservando os testes e os fixtures locais.

# Matriz de conformidade — Projeto Integrado P2

**Referência:** transcrição integral das 26 páginas em [P2_UNISAGRADO_texto_completo_para_Codex.txt](../P2_UNISAGRADO_texto_completo_para_Codex.txt). Em ambiguidades de formatação, prevalece o [PDF oficial](./57402f9d-2b95-418b-850a-b87c479c7b4f.pdf).  
**Sistema:** cópia P2 do Sistema Web WG Hidráulica; branch padrão `p2-unisagrado` publicada no repositório GitHub privado; o grupo ainda deve conceder acesso ao professor.
**Revisão:** 25/11/2026, após registro das 24 execuções humanas. `Concluído` exige artefato e resultado observado; `Parcial` indica trabalho preparado sem todos os resultados; `Pendente` não recebeu evidência.

## Condições de escolha e ambiente (seções 4, 5, 8 e 9.1)

| Exigência | Estado | Evidência e lacuna |
|---|---|---|
| Grupo de 2 ou 3, participação de todos e diário contínuo | Parcial | Turma `26-2-COMP-7-08-A`, Grupo 8 (`GRPATVSALA 8`) e Tiago Gabriel Carmelino/Mateus Betini preenchidos no Apêndice A. O diário inclui atividades datadas com evidência; tempo e colaboração não registrados, além de participação futura do grupo, continuam pendentes de revisão/validação humana. |
| Duas opções de sistema e ficha do Apêndice A | Parcial | Ficha preenchida. O grupo informa que apresentou e obteve aprovação verbal em 20/08/2026; não formalizou uma segunda opção específica. A alternativa genérica de desenvolver/adotar outro sistema acadêmico foi descartada em favor do TCC WG Hidráulica por atender ao §5.3. Confirmar com o professor se essa justificativa supre a exigência de duas opções. |
| Autorização do sistema pelo professor | Parcial | O usuário confirmou que o professor autorizou o uso do WG Hidráulica. A evidência/documento, data, eventuais ajustes e registro no Apêndice A ainda não foram anexados; confirmação do usuário não substitui esse registro exigido. |
| Código-fonte, versão executável local e instruções | Parcial | Código, Git, Node, pnpm, Docker, Supabase, migrações, seed e README do TCC existem. O README específico de entrega P2 será preparado; disponibilidade durante o semestre depende do grupo. |
| Quatro fluxos relevantes, dois com entrada de dados | Concluído para seleção | Solicitação pública, login, status, itens do orçamento e proposta existem no código. Execução completa em interface ainda precisa evidência. |
| Persistência, comunicação entre camadas e dados fictícios | Concluído para preparação | Supabase local, funções RPC e seed fictícia; o teste de integração local observou autenticação e leitura real. Repetições de mutação e restauração devem ser documentadas. |
| Isolamento de produção e ramo próprio | Concluído na cópia | Branch local `p2-unisagrado`, `.env.local` ignorado e URLs loopback. O TCC original não foi alterado. |
| Ferramentas obrigatórias | Parcial | Node 24.22.3, pnpm 12.18.0, Docker Desktop e Supabase CLI disponíveis; em 23/11 a branch foi atualizada por `git pull` até `219210a`. Acesso do professor e aceite de `node:test` ainda pendem. CI remoto inclui a falha intencional e a reversão documentadas, além do run #21 verde; a coleção Postman pós-merge passou na rodada final (27 requisições/51 verificações). |

## Produtos P01–P14 (seções 6 e 7)

| Produto | Estado | Situação verificável / próximo passo |
|---|---|---|
| P01 — ficha e autorização | Parcial | Apêndice A preenchido com turma, Grupo 8, integrantes, WG Hidráulica, repositório, decisão “Aprovado (autorizado em aula)” e data informada 20/08/2026. A segunda opção não foi formalizada; consultar o professor quanto à suficiência da justificativa. Registrar ajustes e eventual autorização do responsável pelo código se exigidos. |
| P02 — requisitos, escopo e riscos | Parcial | Requisitos e riscos P2 definidos em [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md); confirmar escopo com grupo/professor. |
| P03 — plano de testes | Parcial | Estratégia e critérios em [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md); responsáveis e calendário dependem do grupo. |
| P04 — catálogo de casos | Parcial | [CASOS_MANUAIS.md](./CASOS_MANUAIS.md) especifica 24 casos e explicita as dependências de CT-004/010/014/018/019 conforme §9.5. Revisão humana do catálogo permanece pendente; os 24 casos têm execuções registradas. |
| P05 — matriz de rastreabilidade | Parcial | [RASTREABILIDADE.md](./RASTREABILIDADE.md) liga requisitos, riscos, casos, automação e as 24 execuções humanas EX-001–EX-024, evidências e defeitos D-001/D-002. |
| P06 — evidências manuais | Parcial | 24 casos humanos registrados por Tiago (CT-001–CT-024), com execuções EX-001–EX-024 e evidências em [EVIDENCIAS_HUMANAS](./EVIDENCIAS_HUMANAS/). CT-004 encontrou D-002, Em análise; não será corrigido na P2 e a correção está recomendada no plano de melhoria e no TCC. A captura de cookie do EX-004 foi intencionalmente omitida por conter segredo de sessão; há evidência alternativa do painel. |
| P07 — defeitos em Jira/GitHub Issues | Parcial | D-001: **Encerrado na P2** após reteste manual aprovado em EX-021/CT-013; Issue #1 foi fechada no GitHub em 25/11/2026 após revisão do grupo. D-002: **Em análise**, severidade/prioridade média; Issue #3 permanece aberta. Decisão: não corrigir na P2; correção recomendada no plano de melhoria e no TCC; vinculado ao [CSV](./DEFEITOS_EXPORTACAO.csv). Exportação PDF e revisão final pendentes. |
| P08 — automação | Parcial | Rodada final de 25/11/2026, commit `2ad8845`: unitários/LCOV 8/8, integração/API 8/8, Selenium 7/7, Newman 27 requisições/51 verificações e TNF 6/6, todas aprovadas; evidências em `EVIDENCIAS_AUTOMACAO/20261125/160236-2ad8845/`. As 24 execuções manuais EX-001–EX-024 permanecem separadas. Aceite do professor sobre `node:test` como equivalente a JUnit continua pendente. |
| P09 — aceitação e não funcionais | Parcial | AC-01–AC-04 realizados com PART-01 e 4/4 aceitos; [registro e evidências](./REGISTRO_ACEITACAO_PART-01_20261125.md). Rodada final local automatizada em 25/11/2026, commit `2ad8845`: TNF-01–05 Atende e TNF-06 Atende parcialmente (observação humana móvel pendente); critérios e interpretações ainda requerem validação do grupo/professor. |
| P10 — métricas | Parcial | [CONTROLE_P2.xlsx](./CONTROLE_P2.xlsx) contém fórmulas e fontes, 24/24 execuções humanas e a rodada automática final registrada; interpretação e revisão final pelo grupo ainda são necessárias. |
| P11 — TDD, CI/CD e melhoria | Parcial | Ciclo RED/GREEN/REFACTOR e LCOV local permanecem documentados. O Apêndice J registra falha CI intencional no commit `6014a43` (run #7) e reversão com run #8 verde no commit `9b1bf7e`; evidências/prints em [EVIDENCIAS_CI](./EVIDENCIAS_CI/) e URLs em [TDD_CI_QUALIDADE.md](./TDD_CI_QUALIDADE.md). R-SEG-01: verificação executada pelo Claude Code a pedido de Tiago às 15:52 (dois GET, ambos 401 com o plugin); Tiago repetiu às 18:06 de 23/11/2026, no PowerShell, com 401 nas duas requisições — evidência oficial em [EVIDENCIAS_HUMANAS/R-SEG-01](./EVIDENCIAS_HUMANAS/R-SEG-01/). A observação não é defeito. |
| P12 — relatório final | Parcial | Texto do relatório final redigido; DOCX/PDF permanecem como artefatos de preparação e requerem atualização/exportação final, conferência de integridade e revisão/assinatura do grupo. |
| P13 — apresentação e demonstração | Parcial | Roteiro de 13 minutos e deck PPTX/PDF de preparação (10 slides) em [ROTEIRO_APRESENTACAO_P2.md](./ROTEIRO_APRESENTACAO_P2.md) e [ARTEFATOS_PREPARACAO/](./ARTEFATOS_PREPARACAO/). Integrantes, ensaio, resultados finais e vídeo de contingência pendem. |
| P14 — diário de participação | Parcial | Apêndice L registra atividades datadas com evidências e atividades de Mateus informadas pelo grupo, sem inventar datas ou tempos. O grupo deve revisar/validar e continuar o diário. |

## Quantidades mínimas (seção 10, página 15)

Os números abaixo distinguem a rodada automática final de 25/11/2026 das execuções humanas. Um teste com muitas afirmações continua sendo um único caso automatizado. `node:test` depende de aceite do professor como equivalente a JUnit.

| Item | Mínimo | Confirmado no levantamento | Situação |
|---|---:|---:|---|
| Requisitos testáveis | 8 (≥6 RF, ≥2 RNF) | 9: 6 RF e 3 RNF | Especificados em [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md); aprovação humana pendente. |
| Riscos priorizados | 8 | 9 | Priorizados no plano; revisão humana pendente. |
| Casos manuais especificados | 24 | 24 | [CASOS_MANUAIS.md](./CASOS_MANUAIS.md); revisão humana pendente. |
| Execuções manuais completas | 24 | 24 de 24 | EX-001–EX-024 registrados por Tiago, com resultados e evidências vinculados caso a caso. CT-004 aprovado quanto ao objetivo principal, com D-002 observado; D-001 retestado e aprovado no EX-021. |
| Testes unitários automatizados | 6 | 7 candidatos: 2 autenticação + 4 triagem + 1 status comercial; nesta retomada, o comando isolado aprovou 8/8 testes no total (inclui 1 contrato simulado fora da cota) | Quantidade atendida se `node:test` for aceito como framework equivalente. |
| Testes de integração/API automatizados | 5 | 8 casos reais, 8/8 aprovados nesta retomada em `test:local` | Mínimo numérico demonstrado por automação do agente; `fetch` simulado continua fora da cota; não são execução manual humana. |
| Testes Selenium sistema/interface | 4 | 7 casos, 7/7 aprovados na rodada final de 25/11/2026 (`2ad8845`) | Evidência automatizada final; não é execução manual humana. |
| Cenários de aceitação | 4 | 4 executados, 4 aceitos | PART-01 externo; consentimento confirmado às 15:10 após AC-01; registro, respostas e evidências vinculados. |
| Testes não funcionais | 6 em ≥3 categorias | 6/6 aprovados na rodada automática final de 25/11/2026 (`2ad8845`) em segurança, desempenho e compatibilidade/usabilidade | TNF-01–05 Atende; TNF-06 Atende parcialmente por faltar observação humana móvel. Critérios ainda aguardam validação do grupo/professor. |
| Métricas | 8 | 8 fórmulas/indicadores preparados na planilha; execução manual 24/24 | Painel recalculado sobre 24/24 execuções humanas (24 aprovadas, nenhuma reprovada); D-002 foi observado em CT-004. Cenários AC-01–AC-04 aceitos por PART-01; revisão final do grupo permanece pendente. |
| Evolução TDD | 1 ciclo | 1 ciclo documentado e retestado | RED, GREEN e REFACTOR em três commits sucessivos; ver [TDD_CI_QUALIDADE.md](./TDD_CI_QUALIDADE.md). |
| Pipeline CI/CD | 1 | Workflow comprovado; run #7 falhou intencionalmente e run #8 passou após reversão. Run #21 verde: [GitHub Actions](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45681826995). |
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
| IDs, critérios de aceitação e exclusões | Parcial | Definidos no plano; confirmar com responsável e professor. |
| Equivalência, limites, positivos, negativos, alternativas e exceções | Parcial | Indicar técnica em cada caso; revisar casos de fronteira contra valores do código e do banco. |
| Execução controlada, reteste e regressão | Pendente | Executar casos passo a passo, anexar captura/log e relacionar defeito real quando houver. |
| Postman com variáveis, contratos, erros e encadeamento | Parcial | Coleção atual tem 27 requisições e 51 verificações, mapeadas como PM-01–PM-27; todas passaram na rodada final de 25/11/2026 (commit `2ad8845`), com log em `EVIDENCIAS_AUTOMACAO/20261125/160236-2ad8845/04-postman-newman.log`. |
| Selenium com localizadores estáveis, espera e captura | Parcial | Sete fluxos aprovados pelo agente no Chrome; capturas de sucesso e a falha inicial do oráculo CT-003 foram preservadas em [EVIDENCIAS_AGENTE/20261116/](./EVIDENCIAS_AGENTE/20261116/). Não são execuções manuais humanas. |
| Aceitação por representante | Concluído nesta sessão | PART-01, pessoa externa ao curso, executou AC-01–AC-04 e decidiu Aceito nos quatro; respostas/evidências vinculadas. Consentimento confirmado após AC-01. |
| Não funcionais compatíveis e seguros | Parcial | Rodada final automatizada 25/11/2026 (`2ad8845`): TNF-01–05 Atende, TNF-06 Atende parcialmente; observação humana móvel e validação dos critérios pelo grupo/professor pendentes. |
| Métricas e interpretação | Parcial | Oito fórmulas da planilha foram preparadas; 24 execuções humanas estão registradas (24/24). Conferir a interpretação e incorporar os gráficos ao relatório após revisão do grupo/aceitação; não usar dados inventados. |
| TDD demonstrado | Concluído localmente | D-001 detectado por RED, corrigido por GREEN e simplificado em REFACTOR; commits e saídas reais documentados. |
| CI/CD com gatilho, instalação, teste e resultado | Parcial | Falha intencional run [#7](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45244036937) em `6014a43`; após reversão, run [#8](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45244667066) passou no commit `9b1bf7e`. Registros e cinco capturas em [EVIDENCIAS_CI](./EVIDENCIAS_CI/). Falta revisar acesso professor e discutir se integração/UI deve ser adicionada ao workflow. |
| Qualidade inicial/final e plano de melhoria | Parcial | Rodada final SonarQube local em 25/11/2026, commit `2ad8845`, importou LCOV e passou Quality Gate (OK); cobertura total 27,1% no escopo de 1.020 linhas. Evidência e limitações documentadas; revisão do grupo/professor permanece pendente. |

## Entrega, relatório e participação (seções 11–16 e Apêndices A–M)

| Exigência | Estado | Dependência |
|---|---|---|
| Pasta oficial no Google Drive com nome `P2_TQS_2026_TURMA_GRUPOXX_NOME-DO-SISTEMA` e subpastas 00–16 | Pendente humano | Turma, número do grupo, acesso à pasta fornecida pelo professor e publicação final. Não criar pasta alternativa como entrega oficial. |
| README da pasta 00 na ordem exigida | Parcial | [README da pasta 00](./ENTREGA/00_IDENTIFICACAO_E_README/README.md) contém as 15 seções na ordem de §11.4 e não expõe senhas. Contatos do grupo e eventual atualização no Drive oficial pendentes. |
| Arquivos finais: DOCX/PDF, planilha editável, Postman JSON, defeitos CSV/PDF, PPTX/PDF e vídeo MP4/link | Parcial | XLSX, coleção/ambiente JSON e CSV com D-001 e D-002 preparados; DOCX/PDF e PPTX/PDF de preparação existem, marcados como rascunho; dependem de resultados reais, grupo e revisão humana. Vídeo ainda pendente. |
| Relatório com capa, folha, sumário, seções 1–13, referências e anexos | Parcial | Rascunho DOCX/PDF estruturado conforme o enunciado; completar resultados reais, anexos, links e validação final antes de gerar a versão submetível. |
| Apêndices A–M com todos os campos | Parcial | B, C, D, E e H começam a ser representados nos documentos P2; F, G, I, J, K, L, M exigem registros reais ou assinatura. |
| Apresentação de 12–15 minutos, até 5 minutos de perguntas, todos falando, vídeo de contingência | Parcial | Roteiro de 13 minutos e deck PPTX/PDF de preparação existem; fala de todos, ensaio, demonstração final e vídeo dependem do grupo. |
| Ética, dados fictícios, links acessíveis, comprovante de entrega e horário oficial | Parcial | Isolamento local e dados sintéticos atendidos; revisão de licenças, orientação sobre IA, verificação anônima dos links, assinatura e submissão cabem ao grupo. |

## Regras de atualização

Cada mudança de estado deverá indicar arquivo ou execução real, data, versão, resultado e limitação. A matriz será mantida apenas na cópia P2; futuras versões do TCC podem ser integradas por commit/merge revisado, preservando os testes e os fixtures locais.

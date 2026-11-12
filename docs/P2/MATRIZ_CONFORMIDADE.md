# Matriz de conformidade — Projeto Integrado P2

**Referência:** transcrição integral das 26 páginas em [P2_UNISAGRADO_texto_completo_para_Codex.txt](../P2_UNISAGRADO_texto_completo_para_Codex.txt). Em ambiguidades de formatação, prevalece o [PDF oficial](./57402f9d-2b95-418b-850a-b87c479c7b4f.pdf).  
**Sistema:** cópia P2 do Sistema Web WG Hidráulica; branch `p2-unisagrado`, sem remoto configurado.  
**Levantamento inicial:** 12/11/2026. `Concluído` exige artefato e resultado observado; `Parcial` indica trabalho preparado sem todos os resultados; `Pendente` não recebeu evidência.

## Condições de escolha e ambiente (seções 4, 5, 8 e 9.1)

| Exigência | Estado | Evidência e lacuna |
|---|---|---|
| Grupo de 2 ou 3, participação de todos e diário contínuo | Pendente | Integrantes, turma e divisão real de atividades não informados. O diário precisa ser preenchido pelo grupo. |
| Duas opções de sistema e ficha do Apêndice A | Pendente | A cópia WG foi selecionada; segunda opção, ficha e registro de apresentação ao professor faltam. |
| Aprovação escrita do sistema pelo professor | Pendente | Não há decisão, data ou ajustes documentados. Não presumir aprovação. |
| Código-fonte, versão executável local e instruções | Parcial | Código, Git, Node, pnpm, Docker, Supabase, migrações, seed e README do TCC existem. O README específico de entrega P2 será preparado; disponibilidade durante o semestre depende do grupo. |
| Quatro fluxos relevantes, dois com entrada de dados | Concluído para seleção | Solicitação pública, login, status, itens do orçamento e proposta existem no código. Execução completa em interface ainda precisa evidência. |
| Persistência, comunicação entre camadas e dados fictícios | Concluído para preparação | Supabase local, funções RPC e seed fictícia; o teste de integração local observou autenticação e leitura real. Repetições de mutação e restauração devem ser documentadas. |
| Isolamento de produção e ramo próprio | Concluído na cópia | Branch local `p2-unisagrado`, `.env.local` ignorado e URLs loopback. O TCC original não foi alterado. |
| Ferramentas obrigatórias | Parcial | VS Code, Git, `node:test`, Chrome/Edge, Docker, Supabase e SonarQube Community disponíveis. Selenium, Postman/Newman e duas análises SonarQube executados localmente; planilha editável pronta. Faltam repositório remoto/Issues e CI remoto executado. A equivalência de `node:test` ao JUnit exige aceitação do professor. |

## Produtos P01–P14 (seções 6 e 7)

| Produto | Estado | Situação verificável / próximo passo |
|---|---|---|
| P01 — ficha e aprovação | Pendente | Preencher Apêndice A com dados do grupo, segunda opção e decisão escrita do professor. |
| P02 — requisitos, escopo e riscos | Parcial | Requisitos e riscos P2 definidos em [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md); confirmar escopo com grupo/professor. |
| P03 — plano de testes | Parcial | Estratégia e critérios em [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md); responsáveis e calendário dependem do grupo. |
| P04 — catálogo de casos | Parcial | [CASOS_MANUAIS.md](./CASOS_MANUAIS.md) especifica casos planejados; a revisão humana e execução ficam pendentes. |
| P05 — matriz de rastreabilidade | Parcial | [RASTREABILIDADE.md](./RASTREABILIDADE.md) liga requisitos, riscos, casos e automação; execuções manuais/evidências/defeitos serão ligados quando existirem. |
| P06 — evidências manuais | Pendente | Nenhuma execução manual de caso P2 foi registrada. |
| P07 — defeitos em Jira/GitHub Issues | Parcial | D-001 verificado, corrigido e retestado em [DEFEITOS.md](./DEFEITOS.md); abertura/vínculo de Issue remoto dependem da configuração do repositório pelo grupo. |
| P08 — automação | Parcial | Mínimos numéricos executados localmente: 7 unitários candidatos, 5 integrações reais e 4 Selenium. Coleção Postman/Newman: 6 requisições, 12 verificações aprovadas. Falta aceite do framework e evidência consolidada de entrega. |
| P09 — aceitação e não funcionais | Parcial | Quatro cenários pendentes de representante; seis TNF executados em rodada exploratória local com medidas em [EVIDENCIA_TNF_EXPLORATORIA.json](./EVIDENCIA_TNF_EXPLORATORIA.json). Critérios oficiais, observações humanas e conclusão final pendem. |
| P10 — métricas | Parcial | [CONTROLE_P2.xlsx](./CONTROLE_P2.xlsx) contém fórmulas e fontes; resultados manuais finais e interpretação dependem das execuções. |
| P11 — TDD, CI/CD e melhoria | Parcial | Ciclo RED `83d519e`, GREEN `68de98e`, REFACTOR `a421b47` comprovado em [TDD_CI_QUALIDADE.md](./TDD_CI_QUALIDADE.md). Workflow preparado; duas rodadas ESLint e duas análises SonarQube locais comparadas. Falta pipeline remoto com falha controlada/correção/sucesso. |
| P12 — relatório final | Pendente | Exige seções e resultados reais, DOCX editável e PDF idêntico. |
| P13 — apresentação e demonstração | Pendente | Slides PPTX/PDF, roteiro, vídeo de contingência e apresentação pelo grupo. |
| P14 — diário de participação | Pendente | Datas, responsáveis, colaboradores, tempo e evidências reais dependem do grupo. |

## Quantidades mínimas (seção 10, página 15)

Os números abaixo refletem o estado após as execuções locais de 12/11/2026. Um teste com muitas afirmações continua sendo um único caso automatizado. `node:test` depende de aceite do professor como equivalente a JUnit.

| Item | Mínimo | Confirmado no levantamento | Situação |
|---|---:|---:|---|
| Requisitos testáveis | 8 (≥6 RF, ≥2 RNF) | 9: 6 RF e 3 RNF | Especificados em [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md); aprovação humana pendente. |
| Riscos priorizados | 8 | 9 | Priorizados no plano; revisão humana pendente. |
| Casos manuais especificados | 24 | 24 | [CASOS_MANUAIS.md](./CASOS_MANUAIS.md); revisão humana pendente. |
| Execuções manuais completas | 24 | 0 | Pendente; não confundir testes automatizados com execução manual. |
| Testes unitários automatizados | 6 | 7 candidatos: 2 autenticação + 4 triagem + 1 status comercial, aprovados no comando isolado | Quantidade atendida se `node:test` for aceito como framework equivalente. |
| Testes de integração/API automatizados | 5 | 5 casos reais, 5/5 aprovados em `test:local` | Mínimo numérico atendido localmente; `fetch` simulado continua fora da cota. |
| Testes Selenium sistema/interface | 4 | 4 casos, 4/4 aprovados em `test:selenium` | Mínimo numérico atendido em Chrome local; evidência da rodada inicial falha registrada no progresso. |
| Cenários de aceitação | 4 | 4 planejados, 0 executados | Decisão de representante humano pendente. |
| Testes não funcionais | 6 em ≥3 categorias | 6 executados exploratoriamente em segurança, desempenho e compatibilidade/usabilidade | Dados reais locais registrados; aprovação de critérios, repetição/observação humana e conclusão oficial pendentes. |
| Métricas | 8 | 8 fórmulas/indicadores preparados na planilha; finais pendentes | Valores iniciais refletem 0 execuções manuais e 1 defeito verificado; interpretar após rodada oficial. |
| Evolução TDD | 1 ciclo | 1 ciclo documentado e retestado | RED, GREEN e REFACTOR em três commits sucessivos; ver [TDD_CI_QUALIDADE.md](./TDD_CI_QUALIDADE.md). |
| Pipeline CI/CD | 1 | 1 workflow preparado; 0 execuções remotas | Conectar repositório e documentar sucesso, falha controlada e correção. |
| Análise de qualidade | 2 execuções | 2 SonarQube locais e 2 ESLint locais comparados | Histórico SonarQube em [EVIDENCIA_SONAR_LOCAL.json](./EVIDENCIA_SONAR_LOCAL.json); 3 bugs sinalizados, 1 code smell e 0 vulnerabilidades nas duas rodadas. Revisão dos achados e cobertura LCOV pendentes. |

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
| `tests/local-flows.integration.test.mjs`: fluxo local agrupado | Integração 1 | Chama HTTP real do Vinext e Supabase local, porém todas as etapas estão sob um único `test(...)`. |

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
| Métricas e interpretação | Pendente | Calcular execução, aprovação, reprovação, cobertura, automação, defeitos por severidade/status e reabertura; não usar dados inventados. |
| TDD demonstrado | Concluído localmente | D-001 detectado por RED, corrigido por GREEN e simplificado em REFACTOR; commits e saídas reais documentados. |
| CI/CD com gatilho, instalação, teste e resultado | Pendente | Workflow, execução bem-sucedida e falha controlada seguida de correção. |
| Qualidade inicial/final e plano de melhoria | Parcial | Duas análises SonarQube com mesmo perfil/escopo e comparação real, mais duas rodadas ESLint; nenhuma mudança nos indicadores. Ações propostas, responsáveis humanos e revisão dos achados pendentes. |

## Entrega, relatório e participação (seções 11–16 e Apêndices A–M)

| Exigência | Estado | Dependência |
|---|---|---|
| Pasta oficial no Google Drive com nome `P2_TQS_2026_TURMA_GRUPOXX_NOME-DO-SISTEMA` e subpastas 00–16 | Pendente humano | Turma, número do grupo, acesso à pasta fornecida pelo professor e publicação final. Não criar pasta alternativa como entrega oficial. |
| README da pasta 00 na ordem exigida | Pendente | Completar identificação, link do repositório, contatos e instruções de teste. |
| Arquivos finais: DOCX/PDF, planilha editável, Postman JSON, defeitos CSV/PDF, PPTX/PDF e vídeo MP4/link | Pendente | Gerar versões finais a partir dos resultados reais e validar abertura/permissões. |
| Relatório com capa, folha, sumário, seções 1–13, referências e anexos | Pendente | Não redigir conclusões numéricas antes das execuções. |
| Apêndices A–M com todos os campos | Parcial | B, C, D, E e H começam a ser representados nos documentos P2; F, G, I, J, K, L, M exigem registros reais ou assinatura. |
| Apresentação de 12–15 minutos, até 5 minutos de perguntas, todos falando, vídeo de contingência | Pendente humano | Grupo, roteiro, slides, vídeo e demonstração. |
| Ética, dados fictícios, links acessíveis, comprovante de entrega e horário oficial | Parcial | Isolamento local e dados sintéticos atendidos; revisão de licenças, orientação sobre IA, verificação anônima dos links, assinatura e submissão cabem ao grupo. |

## Regras de atualização

Cada mudança de estado deverá indicar arquivo ou execução real, data, versão, resultado e limitação. A matriz será mantida apenas na cópia P2; futuras versões do TCC podem ser integradas por commit/merge revisado, preservando os testes e os fixtures locais.

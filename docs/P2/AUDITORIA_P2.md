# Auditoria técnica e acadêmica da P2 — 12/11/2026

**Base:** leitura integral das 26 páginas do [enunciado transcrito](../P2_UNISAGRADO_texto_completo_para_Codex.txt), inclusive Apêndices A–M; o [PDF original](./57402f9d-2b95-418b-850a-b87c479c7b4f.pdf) prevalece para diagramação. **Objeto:** somente a branch `p2-unisagrado` desta cópia. **Critério:** conclusão exige artefato, execução real e, onde aplicável, decisão humana. A existência de um script não prova sua execução no GitHub ou aceitação pelo professor.

## Parecer por produto obrigatório

| Produto | Estado auditado | Evidência observável | Lacuna que impede concluir |
|---|---|---|---|
| P01 — identificação/aprovação | Pendente | O sistema WG Hidráulica foi selecionado e roda localmente. | Falta segunda opção, turma, grupo, integrantes, licença/autorização do responsável e aprovação escrita do professor na ficha A. |
| P02 — requisitos, escopo e riscos | Parcial | [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md): 6 RF, 3 RNF e 9 riscos priorizados. | Validação do escopo pelo grupo/professor; revisar critérios que ainda não têm teste completo, especialmente RF-01 e RF-06. |
| P03 — plano | Parcial | Objetivo, níveis, técnicas, ambiente, dados, critérios e contingência no mesmo documento. | Responsáveis nominais, calendário real e versão final aprovada. |
| P04 — catálogo | Parcial | [CASOS_MANUAIS.md](./CASOS_MANUAIS.md): 24 especificações com entradas, passos e expectativas. | Alguns casos dependem da massa criada por outro (CT-004, CT-014, CT-018/019); preparar fixture próprio antes da execução independente. Revisão humana de limites reais. |
| P05 — rastreabilidade | Parcial | [RASTREABILIDADE.md](./RASTREABILIDADE.md) e aba da [planilha](./CONTROLE_P2.xlsx) associam 9 requisitos, riscos, casos e automação. | Ligar EX, capturas, Issue e decisão final após execuções; a matriz textual ainda não contém IDs de execução. |
| P06 — execução manual | Pendente | 24 linhas planejadas na planilha, todas `Não executado`. | Executar 24 casos manualmente, registrar data/versão/obtido/status/captura, reteste e regressão quando houver falha. |
| P07 — defeitos | Parcial | [DEFEITOS.md](./DEFEITOS.md): D-001 reproduzido em RED, corrigido e retestado. | Registrar na ferramenta GitHub Issues/Jira e exportar relatório final PDF/CSV; responsável e fechamento humanos. Alertas Sonar não foram inventados como defeitos. |
| P08 — automação | Parcial | `test` 7 unitários candidatos + 1 contrato simulado; `test:local` 8 casos HTTP reais; Selenium 4 casos; Newman 6 requisições/12 asserções. | Aprovação de `node:test` como equivalente; manter logs versionados de rodada final; ampliar Postman para positivos/negativos das operações críticas. |
| P09 — aceitação/não funcionais | Parcial | 4 cenários especificados; 6 TNF automatizados em segurança, desempenho e compatibilidade/usabilidade, com evidência local de rodada anterior. | 0/4 decisões de representante; critérios NF preliminares, observações humanas e evidência final por caso. |
| P10 — métricas | Parcial | Planilha XLSX com oito indicadores e fórmulas; cobertura de requisito considera teste manual **ou** automatizado executado. | Gráficos e interpretação final no relatório; preencher dados de execuções humanas. 100% de cobertura por vínculo de execução não significa aderência completa do requisito. |
| P11 — TDD/CI/qualidade | Parcial | Commits RED/GREEN/REFACTOR verificáveis; 3 análises locais Sonar, a última com 0 issues abertos; workflow GitHub Actions preparado. | Sem remoto e sem execução bem-sucedida + falha controlada/correção no GitHub; sem LCOV, responsabilidades do plano de melhoria. |
| P12 — relatório final | Parcial | [ENTREGA_E_RELATORIO_RASCUNHO.md](./ENTREGA_E_RELATORIO_RASCUNHO.md) organiza as 13 seções e pendências. | DOCX editável/PDF idêntico e análise final após dados humanos. |
| P13 — apresentação | Parcial | Roteiro preliminar no rascunho de entrega. | PPTX/PDF, demonstração real, vídeo MP4/link e participação de todos. |
| P14 — diário | Pendente | Modelo L no enunciado. | Registros reais com data, responsável, colaboradores, tempo e evidência; não atribuir a pessoas por inferência. |

## Mínimos do §10 e qualidade dos testes

| Item | Exigido | Comprovado nesta auditoria | Julgamento |
|---|---:|---:|---|
| Requisitos | 8, 6 RF + 2 RNF | 9, 6 RF + 3 RNF | Quantidade especificada; validação final pendente. |
| Riscos | 8 | 9 | Quantidade e prioridade documentadas. |
| Casos manuais | 24 | 24 especificados | Quantidade especificada; independência de fixtures deve melhorar. |
| Execuções manuais | 24 | **0** | Não atendido. |
| Unitários | 6 | 7 candidatos aprovados; o oitavo é contrato HTTP com `fetch` falso | Mínimo técnico local; aprovação do framework pendente. |
| Integração/API | 5 | 8/8 via HTTP real e Supabase local | Mínimo atendido localmente; API-01 é agrupado, não deve ser contado várias vezes. |
| Selenium | 4 | 4/4 em Chrome headless | Mínimo atendido localmente; fragilidade no detector de hidratação descrita abaixo. |
| Aceitação | 4 | 4 roteiros, **0 decisões** | Não atendido na execução. |
| Não funcionais | 6/3 categorias | 6/6 exploratórios em 3 categorias | Quantidade executada localmente; critérios finais pendentes. |
| Indicadores | 8 | 8 fórmulas na planilha | Cálculo parcial; interpretação final pendente. |
| TDD | 1 | 1 ciclo com commits e falha RED | Atendido tecnicamente. |
| CI/CD | 1 | 1 YAML, 0 execuções remotas | Não atendido como execução de pipeline. |
| Qualidade | 2 análises | 3 análises Sonar locais, 2 originais + 1 desta auditoria | Quantidade atendida, cobertura não medida. |

**Revisão de profundidade:** os unitários verificam regras reais sem rede, mas UT-03 e UT-05 têm mais de uma intenção; UT-06 apenas limita comprimento, sem conferir conteúdo do resumo. O teste de contrato simulado em `triage.test.mjs` agrupa múltiplas rotas e muta `globalThis.fetch`; é útil como regressão local, porém não conta para integração. API-02 agora confere o conjunto de IDs antes/depois da rejeição, além de mensagem/status; isso depende da fixture estável durante o teste. API-03/04/05 testam persistência, leitura e restauração; API-05 acumula eventos no histórico local a cada execução. API-06 cobre negativa de login; API-07 confere assinatura, MIME, tamanho e abertura por parser PDF, **sem inspecionar visualmente conteúdo**; API-08 confere os limites 0/1/365/366 e restaura a proposta. SEL-02 confere mensagem de envio, não consulta o registro persistido; SEL-03 combina login e detalhe; SEL-04 confere subtotal e remoção. O detector de hidratação por chave privada `__reactFiber` em SEL-02 e TNF-05/06 depende de detalhe interno do React e pode quebrar em futura atualização do TCC. As solicitações públicas de Selenium/TNF ficam no banco local até reset controlado. O conjunto é relevante e supera mínimos numéricos, mas não cobre sozinho todos os critérios dos RF.

## SonarQube e análise estática

O [baseline e segunda rodada](./EVIDENCIA_SONAR_LOCAL.json) mostraram três alertas `typescript:S6324` em uma classe de caracteres de controle usada para normalizar texto PDF e um `typescript:S8786` por regex de padding Base64 com potencial retrocesso superlinear. A análise de código confirmou que o primeiro era sinalização do padrão intencional, enquanto o segundo apontava custo desnecessário em entrada artificial. A substituição do filtro por comparação de códigos e da regex por remoção linear preservou o comportamento esperado. O teste HTTP de PDF e as suítes existentes passaram. A [terceira rodada](./EVIDENCIA_AUDITORIA_SONAR.json) processou o commit `47222f7` com 0 bugs, 0 code smells e 0 vulnerabilidades. **Cobertura reportada continua 0% porque não há LCOV importado.** O gate local `OK` não valida cobertura global nem a entrega acadêmica. O lint ainda aponta nove avisos `no-img-element` em páginas públicas preexistentes; convertê-las envolve o TCC e deve ser tratado em sincronização revisada, sem substituição indiscriminada.

## CI/CD, reprodutibilidade e sincronização futura

O [workflow](../../.github/workflows/p2-ci.yml) reage a `push`, PR e execução manual na branch P2, instala pnpm/Node, executa teste isolado, lint, TypeScript e build e publica log. Não há remoto Git; portanto **não foi executado no GitHub**. A suíte padrão foi corrigida para selecionar somente os três arquivos isolados, sem descoberta acidental em `tmp/` e sem skips locais no CI. Não há prova de falha controlada e correção do pipeline. As oito integrações, quatro Selenium, seis TNF e Newman são comandos locais separados e não entram na pipeline; uma ampliação da CI requer provisioning isolado do Supabase e Chrome no runner, sem qualquer segredo de produção.

A branch `p2-unisagrado`, fixtures em `supabase/seed.sql`, configuração local ignorada e scripts P2 isolam este trabalho da versão original. Para incorporar uma atualização futura do TCC: registrar hash de origem, revisar diff de `app/` e migrações, resolver conflitos pontuais sem substituir `docs/P2`, executar `test`, `test:local`, `test:selenium`, `test:postman`, `test:nonfunctional`, lint, TypeScript, build e nova análise Sonar; atualizar casos, riscos, rastreabilidade e métricas conforme alteração de comportamento. A planilha tem 24 linhas manuais e 25 automatizadas fixas: ampliar fórmulas/ranges se o escopo crescer.

## Risco de avaliação e prontidão

Os maiores riscos de perda de pontos são P01 sem aprovação escrita; P06 com 0/24 execuções; P09 sem representante; P11 sem pipeline GitHub demonstrada; P12/P13 sem formatos finais; P14 sem diário; e entrega fora da pasta oficial do professor. A planilha não é comprovante de execução manual. O checklist operacional está em [CHECKLIST_FINAL.md](./CHECKLIST_FINAL.md). A situação atual **não autoriza declarar a P2 pronta para entrega**.

**Estimativa de conclusão: 43%.** Método transparente, sem pretensão de nota: cada P01–P14 tem peso igual; conclusão vale 1, ausência vale 0 e preparo parcial vale 0,25/0,5/0,75 conforme evidência. Pontuações: P01 0; P02–P04 0,75 cada; P05 0,5; P06 0; P07 0,5; P08 0,75; P09–P11 0,5 cada; P12–P13 0,25 cada; P14 0. Soma 6/14 = 42,9%, arredondada a 43%. Essa estimativa mede preparação dos produtos, **não a nota**, e cairia se o professor não aprovar o sistema ou o framework.

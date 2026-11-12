# Rastreabilidade — P2

**Versão:** 0.1, 12/11/2026. Esta matriz segue o Apêndice H do [enunciado](../P2_UNISAGRADO_texto_completo_para_Codex.txt). Casos planejados são descritos em [CASOS_MANUAIS.md](./CASOS_MANUAIS.md). `EX-xxx` será atribuído somente após execução manual real; testes automatizados têm IDs próprios e não ocupam esse campo.

| Requisito | Risco | Casos manuais | Automação relacionada | Execução(ões) manuais | Evidência manual | Defeito(s) | Situação |
|---|---|---|---|---|---|---|---|
| RF-01 | R-01 | CT-001–CT-004 | API-02, SEL-02 | Pendente | Pendente | Nenhum registrado | Parcial: automação executada; casos manuais pendentes |
| RF-02 | R-02 | CT-005–CT-008 | unitários de `auth.test.mjs`, API-01, SEL-01/03 | Pendente | Pendente | Nenhum registrado | Parcial: automação executada; casos manuais pendentes |
| RF-03 | R-03 | CT-009–CT-011 | API-01, SEL-03 | Pendente | Pendente | Nenhum registrado | Parcial: automação executada; casos manuais pendentes |
| RF-04 | R-04 | CT-012–CT-015 | API-05, UT-07 | Pendente | Pendente | D-001 corrigido/retestado | Parcial: automação executada; casos manuais pendentes |
| RF-05 | R-05 | CT-016–CT-020 | API-03, SEL-04 | Pendente | Pendente | Nenhum registrado | Parcial: automação executada; casos manuais pendentes |
| RF-06 | R-06 | CT-021–CT-024 | API-01, API-04 | Pendente | Pendente | Nenhum registrado | Parcial: automação executada; PDF visual pendente |
| RNF-01 | R-07 | TNF-01/TNF-02 | API-01/02, SEL-01, UT-07 | Pendente | Pendente | D-001 corrigido/retestado | Rodada NF exploratória executada; critério oficial pendente |
| RNF-02 | R-08 | TNF-03/TNF-04 | — | Pendente | Pendente | Nenhum registrado | Cinco medições por operação; critério oficial pendente |
| RNF-03 | R-09 | TNF-05/TNF-06 | SEL-02/03 em Chrome desktop | Pendente | Pendente | Nenhum registrado | Chrome/Edge desktop e Chrome móvel automatizados; observação humana pendente |

**API-01** é o caso agrupado anterior em `tests/local-flows.integration.test.mjs`; **API-02–05** estão em `tests/p2-api.integration.test.mjs`. **SEL-01–04** estão em `tests/p2-selenium.selenium.mjs`. Os IDs indicam uma associação de cobertura e não substituem as 24 execuções manuais. As cinco integrações e os quatro Selenium passaram na rodada local de 12/11/2026; comandos, restrições e resultados constam em [PROGRESSO.md](./PROGRESSO.md).

**TNF-01–06** estão em `tests/p2-nonfunctional.test.mjs`. A [evidência bruta exploratória](./EVIDENCIA_TNF_EXPLORATORIA.json) registra valores observados; a decisão oficial depende do critério aprovado e das observações humanas solicitadas.

## Registro de execução futura

Ao executar CT-001–CT-024, registrar para cada linha: ID `EX-xxx`, executor, data/hora, commit, versão de navegador, entrada real, resultado obtido, status Aprovado/Reprovado/Bloqueado, caminho de captura/log e defeito correspondente quando aplicável. Nenhum desses campos pode ser preenchido por inferência a partir da automação. Atualizar esta matriz e a planilha editável após cada rodada.

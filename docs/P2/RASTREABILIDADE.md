# Rastreabilidade — P2

**Versão:** 0.1, 12/11/2026. Esta matriz segue o Apêndice H do [enunciado](../P2_UNISAGRADO_texto_completo_para_Codex.txt). Casos planejados são descritos em [CASOS_MANUAIS.md](./CASOS_MANUAIS.md). `EX-xxx` será atribuído somente após execução manual real; testes automatizados têm IDs próprios e não ocupam esse campo.

| Requisito | Risco | Casos manuais | Automação relacionada | Execução(ões) manuais | Evidência manual | Defeito(s) | Situação |
|---|---|---|---|---|---|---|---|
| RF-01 | R-01 | CT-001–CT-004 | HTTP-API-02, SEL-02 | Pendente | Pendente | Nenhum registrado | Parcial: automação executada; casos manuais pendentes |
| RF-02 | R-02 | CT-005–CT-008 | UT-01/02, LOC-01, HTTP-API-06, SEL-01/03 | Pendente | Pendente | Nenhum registrado | Parcial: automação executada; casos manuais pendentes |
| RF-03 | R-03 | CT-009–CT-011 | LOC-01, SEL-03 | Pendente | Pendente | Nenhum registrado | Parcial: automação executada; casos manuais pendentes |
| RF-04 | R-04 | CT-012–CT-015 | HTTP-API-04/05/08, UT-07 | Pendente | Pendente | D-001 corrigido/retestado | Parcial: automação executada; casos manuais pendentes |
| RF-05 | R-05 | CT-016–CT-020 | HTTP-API-03, SEL-04 | Pendente | Pendente | Nenhum registrado | Parcial: automação executada; casos manuais pendentes |
| RF-06 | R-06 | CT-021–CT-024 | LOC-01, HTTP-API-04/07/08 | Pendente | Pendente | Nenhum registrado | Parcial: API valida resposta/estrutura; conteúdo visual e comparação com banco pendentes |
| RNF-01 | R-07 | TNF-01/TNF-02 | LOC-01, HTTP-API-02/06, SEL-01, UT-07 | Pendente | Pendente | D-001 corrigido/retestado | Rodada NF exploratória executada; critério oficial pendente |
| RNF-02 | R-08 | TNF-03/TNF-04 | — | Pendente | Pendente | Nenhum registrado | Cinco medições por operação; critério oficial pendente |
| RNF-03 | R-09 | TNF-05/TNF-06 | SEL-02/03 em Chrome desktop | Pendente | Pendente | Nenhum registrado | Chrome/Edge desktop e Chrome móvel automatizados; observação humana pendente |

**LOC-01** é o único teste agrupado em `tests/local-flows.integration.test.mjs`. **HTTP-API-02–08** são sete testes separados em `tests/p2-api.integration.test.mjs`; total de integração/API: oito casos automatizados, não cinco. **PM-01–06** identificam as seis requisições da coleção Postman em `postman/P2_WG_Hidraulica.postman_collection.json` e não são os IDs dos testes HTTP. **UT-01–07**, **SEL-01–04** e **TNF-01–06** identificam, respectivamente, os casos unitários, Selenium e não funcionais. Os IDs indicam associação de cobertura e não substituem as 24 execuções manuais. Os oito casos de integração/API e os quatro Selenium passaram na rodada local registrada em 12/11/2026; são resultados históricos, não reexecutados nesta auditoria.

Limitação de prova: HTTP-API-07 verifica MIME, nome do arquivo, assinatura `%PDF-` e que `pdf-lib` consegue ler ao menos uma página; não compara o conteúdo do PDF com o banco nem confirma legibilidade visual. HTTP-API-08 verifica resposta e valor nas fronteiras aceitas e rejeitadas, restaurando o estado inicial; a restauração deve ser observada no ambiente local. SEL-02 confirma a mensagem de envio, não a persistência posterior da solicitação. Esses limites exigem a conferência prevista nos casos manuais.

**TNF-01–06** estão em `tests/p2-nonfunctional.test.mjs`. A [evidência bruta exploratória](./EVIDENCIA_TNF_EXPLORATORIA.json) registra valores observados; a decisão oficial depende do critério aprovado e das observações humanas solicitadas.

## Registro de execução futura

Ao executar CT-001–CT-024, registrar para cada linha: ID `EX-xxx`, executor, data/hora, commit, versão de navegador, entrada real, resultado obtido, status Aprovado/Reprovado/Bloqueado, caminho de captura/log e defeito correspondente quando aplicável. Nenhum desses campos pode ser preenchido por inferência a partir da automação. Atualizar esta matriz e a planilha editável após cada rodada.

# Verificação de segurança básica — cabeçalho de identidade forjado (R-SEG-01)

- Executor: Tiago Gabriel Carmelino
- Data/hora: 23/11/2026, 18:06 (−03:00) — cabeçalho `Date` das respostas: 21:06:01 e 21:06:04 GMT
- Ambiente: Windows, PowerShell 5.1, curl.exe; app local em http://localhost:3000 (pasta principal, branch p2-unisagrado)
- Verificação anterior: o mesmo par de requisições foi executado pelo Claude Code (agente) às 15:52, a pedido de Tiago, com o mesmo resultado.

| Requisição | Esperado | Obtido |
|---|---|---|
| 1) GET /api/painel/solicitacoes sem sessão e sem cabeçalho | 401 | HTTP/1.1 401 Unauthorized — {"message":"Acesso não autorizado."} |
| 2) GET /api/painel/solicitacoes com `oai-authenticated-user-email: administrador.p2@local.test` | 401 (se o cabeçalho for removido pela plataforma) | HTTP/1.1 401 Unauthorized — {"message":"Acesso não autorizado."} |

Conclusão: o cabeçalho forjado não concede acesso no ambiente da P2. Hipótese de defeito descartada; mantido apenas como risco de configuração (R-SEG-01) no plano de melhoria contínua.

Observação: o texto "nÃúo" no print é só a codificação do console do PowerShell; a resposta da API é "não".

Evidência: `SEG-01_GETs_controle_e_cabecalho_forjado_20261123_1806.png`

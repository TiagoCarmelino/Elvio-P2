# Registro de defeitos verificados — P2

## D-001 — validador aceita nome herdado como status comercial

| Campo do Apêndice G | Registro observado |
|---|---|
| Requisito/caso relacionado | RF-04, RNF-01, CT-013. O caso manual permanece **não executado**; o defeito foi descoberto por teste unitário TDD. |
| Ambiente e versão | Cópia P2, Windows, Node v24.22.3; estado anterior ao commit `68de98e`. |
| Pré-condições | Módulo `app/lib/commercial-status.ts` com `isCommercialStatus` usando `value in commercialStatusLabels`. |
| Dados utilizados | Strings sintéticas `toString` e `constructor`, que pertencem à cadeia de protótipos e não ao catálogo comercial. |
| Passos para reproduzir | No commit RED `83d519e`, executar `node --test tests/commercial-status.test.mjs`. |
| Resultado esperado | `isCommercialStatus('toString')` e `isCommercialStatus('constructor')` retornam `false`. |
| Resultado obtido | O teste falhou em `toString`: `true !== false`. O efeito HTTP anterior à correção não foi medido e não é afirmado aqui. |
| Severidade / prioridade | Média / Alta: entrada inválida poderia avançar pela validação de rota; o banco ainda poderia rejeitá-la, mas esse efeito não foi medido antes da correção. |
| Evidências | Saída RED registrada em [TDD_CI_QUALIDADE.md](./TDD_CI_QUALIDADE.md); commits `83d519e`, `68de98e`, `a421b47`. |
| Status / responsável | Corrigido e retestado tecnicamente na cópia P2. Responsável humano e Issue remoto pendentes. |
| Reteste e conclusão | Após `a421b47`, o unitário passou 1/1; `test:local` passou 5/5 e inclui `POST status=toString` com HTTP 400. Revisão/fechamento pelo grupo pendente. |

O repositório remoto da cópia P2 foi informado pelo usuário. Abrir e vincular D-001 no GitHub Issues ou Jira após confirmar acesso à branch/repositório; não atribuir URL de Issue fictícia.

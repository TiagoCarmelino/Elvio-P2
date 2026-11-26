# Registro de defeitos verificados — P2

**Fluxo de status oficial (§9.7):** Novo → Em análise → Em correção → Pronto para reteste → Encerrado; Reaberto pode ser usado quando um defeito retorna após reteste. Usar somente esses valores no campo Status e nas ferramentas/planilha.

## D-001 — validador aceita nome herdado como status comercial

**Status (§9.7): Encerrado na P2 após reteste manual aprovado no EX-021 (CT-013), em 25/11/2026.**

| Campo do Apêndice G | Registro observado |
|---|---|
| Requisito/caso relacionado | RF-04, RNF-01, CT-013. Defeito descoberto por teste unitário TDD e retestado manualmente no EX-021. |
| Ambiente e versão | Cópia P2, Windows, Node v24.22.3; estado anterior ao commit `68de98e`. |
| Pré-condições | Módulo `app/lib/commercial-status.ts` com `isCommercialStatus` usando `value in commercialStatusLabels`. |
| Dados utilizados | Strings sintéticas `toString` e `constructor`, que pertencem à cadeia de protótipos e não ao catálogo comercial. |
| Passos para reproduzir | No commit RED `83d519e`, executar `node --test tests/commercial-status.test.mjs`. |
| Resultado esperado | `isCommercialStatus('toString')` e `isCommercialStatus('constructor')` retornam `false`. |
| Resultado obtido | O teste falhou em `toString`: `true !== false`. O efeito HTTP anterior à correção não foi medido e não é afirmado aqui. |
| Severidade / prioridade | Média / Alta: entrada inválida poderia avançar pela validação de rota; o banco ainda poderia rejeitá-la, mas esse efeito não foi medido antes da correção. |
| Evidências | Saída RED registrada em [TDD_CI_QUALIDADE.md](./TDD_CI_QUALIDADE.md); commits `83d519e`, `68de98e`, `a421b47`. |
| Status / responsável | **Encerrado na P2** após reteste manual aprovado no EX-021 (CT-013), que rejeitou `status=toString` com HTTP 400. A Issue [#1](https://github.com/TiagoCarmelino/Elvio-P2/issues/1) foi fechada no GitHub em 25/11/2026, após revisão do grupo. |
| Reteste e conclusão | Após `a421b47`, o unitário passou 1/1; `test:local` passou 5/5 (na época; hoje são 8 casos) e inclui `POST status=toString` com HTTP 400. Reteste manual em 25/11/2026, EX-021: aprovado; Issue #1 fechada no GitHub em 25/11/2026 após revisão do grupo. |

Issue [#1](https://github.com/TiagoCarmelino/Elvio-P2/issues/1) criada após a correção e fechada no GitHub em 25/11/2026, após revisão do grupo. O reteste manual CT-013 está registrado como aprovado no EX-021. A Issue #3 de D-002 continua aberta; seu status permanece Em análise.

## D-002 — Novo envio com WhatsApp já cadastrado sobrescreve empresa e e-mail do cliente

**Status (§9.7): Em análise. Decisão para a P2: não será corrigido; a correção fica recomendada no plano de melhoria contínua e no TCC.**

| Campo do Apêndice G | Registro observado |
|---|---|
| Requisito/caso relacionado | RF-01; observado em EX-003 (CT-004), com pré-condição EX-001 (CT-001). |
| Ambiente e versão | Windows; Google Chrome (versão não registrada); app local `http://localhost:3000`; Supabase local; branch `p2-unisagrado`; código da aplicação do merge `219210a`. |
| Pré-condições | Solicitação de CT-001 existente com WhatsApp `14999001611`, Empresa `Reparo fictício de bomba hidráulica CT-001` e e-mail `ct001@exemplo.test`. |
| Dados utilizados | Segundo envio: Nome `Cliente P2 A`; Empresa `Empresa Fictícia P2`; WhatsApp `14999001611`; e-mail `ct004@exemplo.test`; descrição `Segunda solicitação fictícia CT-004 com WhatsApp já conhecido`. Dados fictícios. |
| Passos para reproduzir | 1. Em `/contato`, enviar solicitação com WhatsApp novo, empresa X e e-mail X. 2. No painel, conferir os dados da solicitação. 3. Enviar outra solicitação com o mesmo WhatsApp, empresa Y e e-mail Y. 4. Abrir novamente a primeira solicitação. |
| Resultado esperado | A primeira solicitação mantém os dados informados no próprio envio (empresa X e e-mail X); o envio público não altera silenciosamente os dados apresentados no histórico. |
| Resultado obtido | A primeira solicitação passou a mostrar Empresa `Empresa Fictícia P2` e e-mail `ct004@exemplo.test`; o título do card também mudou de `Reparo fictício de bomba hidráulica CT-001` para `Empresa Fictícia P2`. A nova solicitação foi criada e ambas ficaram ligadas ao mesmo cliente. |
| Impacto | Perda do histórico de empresa/e-mail exibidos para solicitações anteriores. O registro observado ocorreu por envio público com WhatsApp já cadastrado. |
| Severidade / prioridade | Média / Média. |
| Evidências | [CT-001 antes](./EVIDENCIAS_HUMANAS/CT-001_EX-001_20261123_1838_painel.png), [CT-003 antes](./EVIDENCIAS_HUMANAS/CT-003_EX-002_20261123_1850_painel.png), [painel depois](./EVIDENCIAS_HUMANAS/CT-004_EX-003_20261123_1903_painel.png), [detalhe CT-001 alterado](./EVIDENCIAS_HUMANAS/CT-004_EX-003_20261123_1920_detalhe_CT001_sobrescrito.png). Rascunho recebido em [DEFEITO_D-002_rascunho.md](./EVIDENCIAS_HUMANAS/DEFEITO_D-002_rascunho.md). |
| Status / responsável | **Em análise**; Tiago Gabriel Carmelino. Issue [#3](https://github.com/TiagoCarmelino/Elvio-P2/issues/3) permanece aberta. |
| Reteste e conclusão | Não será corrigido na P2; correção recomendada no plano de melhoria contínua e no TCC. Não há reteste registrado. |
| Observação técnica para análise | A revisão de código indicou como causa provável o `on conflict (whatsapp) do update` na migração `supabase/migrations/202609010001_initial_commercial_schema.sql`, atualizando dados do cliente. A causa é uma hipótese da revisão e ainda não foi confirmada tecnicamente. A decisão de escopo é não corrigir na P2; a correção fica recomendada no plano de melhoria contínua e no TCC. |

O registro detalhado original foi fornecido em [DEFEITO_D-002_rascunho.md](./EVIDENCIAS_HUMANAS/DEFEITO_D-002_rascunho.md). Não classificar D-002 como R-SEG-01: são assuntos distintos.

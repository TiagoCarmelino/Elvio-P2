# D-002 — Novo envio com WhatsApp já cadastrado sobrescreve os dados do cliente nas solicitações anteriores

| Campo | Conteúdo |
|---|---|
| ID e título | D-002 — Novo envio com WhatsApp já cadastrado sobrescreve empresa e e-mail do cliente, alterando os dados exibidos em solicitações anteriores |
| Requisito/caso relacionado | RF-01; encontrado na execução EX-003 (CT-004), com pré-condição do EX-001 (CT-001) |
| Ambiente e versão | Windows; Google Chrome; app local http://localhost:3000; Supabase local; branch `p2-unisagrado`, código da aplicação do merge `219210a` |
| Pré-condições | Existe uma solicitação enviada pelo formulário público com WhatsApp `14999001611`, Empresa `Reparo fictício de bomba hidráulica CT-001` e E-mail `ct001@exemplo.test` (CT-001, 18:18). |
| Dados utilizados | Segundo envio: Nome `Cliente P2 A`; Empresa `Empresa Fictícia P2`; WhatsApp `14999001611`; E-mail `ct004@exemplo.test`; Descrição `Segunda solicitação fictícia CT-004 com WhatsApp já conhecido` |
| Passos para reproduzir | 1. Em `/contato`, enviar uma solicitação com um WhatsApp novo, empresa X e e-mail X. 2. Conferir no painel o detalhe dessa solicitação (empresa X, e-mail X). 3. Em `/contato`, enviar outra solicitação com o MESMO WhatsApp, empresa Y e e-mail Y. 4. No painel, abrir de novo o detalhe da PRIMEIRA solicitação. |
| Resultado esperado | A primeira solicitação continua exibindo os dados informados no envio dela (empresa X, e-mail X). Um envio público não deveria alterar silenciosamente os dados de um cliente existente. |
| Resultado obtido | A primeira solicitação passa a exibir empresa Y ("Empresa Fictícia P2") e e-mail Y ("ct004@exemplo.test"). O título do card da primeira solicitação no painel também muda de "Reparo fictício de bomba hidráulica CT-001" para "Empresa Fictícia P2". |
| Impacto | Perda do histórico dos dados de contato de cada pedido. Qualquer pessoa que envie o formulário com o WhatsApp de um cliente existente altera empresa e e-mail desse cliente, sem autenticação. |
| Severidade | Média |
| Prioridade | Média |
| Evidências | `CT-001_EX-001_20261123_1838_painel.png` (antes), `CT-003_EX-002_20261123_1850_painel.png` (antes), `CT-004_EX-003_20261123_1903_painel.png` (depois), `CT-004_EX-003_20261123_1920_detalhe_CT001_sobrescrito.png` (detalhe da primeira solicitação após o segundo envio) |
| Status inicial do rascunho | Novo (rascunho original; status atual: Em análise) |
| Responsável | Tiago Gabriel Carmelino |
| Reteste e conclusão | Pendente |
| Observação técnica (para análise) | Causa provável indicada na revisão de código: a migração `supabase/migrations/202609010001_initial_commercial_schema.sql` usa `on conflict (whatsapp) do update`, atualizando nome, e-mail e empresa do cliente a cada envio. A correção depende de decidir a regra de negócio (manter o cadastro original, guardar os dados de contato por solicitação ou exigir confirmação). |

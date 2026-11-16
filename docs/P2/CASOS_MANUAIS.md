# Catálogo inicial de casos manuais — P2

**Versão:** 0.1, 12/11/2026. **Estado:** especificados, **não executados**. Cada caso é independente e usa apenas a cópia P2 com dados fictícios. Fonte: Apêndice E e seções 9.5–9.7 do [manual transcrito](../P2_UNISAGRADO_texto_completo_para_Codex.txt). Responsável por cada execução: **a definir pelo grupo**. Registrar resultados somente em [RASTREABILIDADE.md](./RASTREABILIDADE.md) e no futuro registro de execuções, com `EX`, data, versão e evidência.

Os valores `P2_LOCAL_REQUEST_ID` e demais credenciais fictícias estão no `.env.local` ignorado pelo Git. Antes de executar casos que alteram dados, identificar solicitação de teste e restaurar a seed local se necessário; nunca usar produção. Casos de API podem ser executados manualmente no Postman, com variáveis locais.

## RF-01 — solicitação pública (R-01)

### CT-001 — Envio válido pelo formulário

- **Nível/tipo; técnica; prioridade; responsável:** Sistema/funcional; partição válida; alta; a definir.
- **Pré-condições:** site e Supabase locais ativos; telefone fictício novo.
- **Entrada:** nome `Cliente P2 A`, telefone fictício com ≥8 caracteres, descrição `Reparo de cilindro hidráulico de teste`.
- **Passos:** 1. Abrir `/contato`. 2. Preencher obrigatórios. 3. Enviar. 4. Entrar no painel local e procurar a solicitação.
- **Esperado:** mensagem de sucesso; solicitação com descrição, cliente e status `novo` no painel; nenhuma informação real usada.
- **Automação:** sim, Selenium + integração API, por ser fluxo crítico repetitivo.

### CT-002 — Nome inválido

- **Nível/tipo; técnica; prioridade; responsável:** API/funcional; partição inválida e limite inferior; alta; a definir.
- **Pré-condições:** Postman apontado ao site local.
- **Entrada:** `name=A`; WhatsApp e descrição válidos.
- **Passos:** 1. Enviar `POST /api/solicitacoes` com JSON fictício. 2. Consultar lista autenticada.
- **Esperado:** HTTP 400 com mensagem de validação; nenhum registro novo.
- **Automação:** sim, Postman/integração, para prevenir gravação inválida.

### CT-003 — Limite da descrição

- **Nível/tipo; técnica; prioridade; responsável:** API/funcional; valor limite 9/10 caracteres; alta; a definir.
- **Pré-condições:** banco local restaurado; dados restantes válidos.
- **Entrada:** descrição de 9 caracteres e depois de 10 caracteres, com telefones fictícios diferentes.
- **Passos:** 1. Enviar solicitação com 9 caracteres. 2. Conferir rejeição. 3. Enviar com 10 caracteres. 4. Consultar painel.
- **Esperado:** primeira HTTP 400, segunda HTTP 201 e registro `novo` na lista.
- **Automação:** sim, integração API, pois exercita fronteira e persistência.

### CT-004 — Cliente com WhatsApp já conhecido

- **Nível/tipo; técnica; prioridade; responsável:** Integração/funcional; alternativa; média; a definir.
- **Pré-condições:** cliente fictício já criado pelo CT-001; dados do cliente anotados.
- **Entrada:** mesmo WhatsApp fictício; descrição diferente.
- **Passos:** 1. Enviar nova solicitação válida. 2. Consultar painel. 3. Conferir as duas solicitações e o cliente no banco local.
- **Esperado:** nova solicitação criada, vinculada ao mesmo cliente, sem duplicar WhatsApp.
- **Automação:** sim, integração API; requer limpeza de massa gerada.

## RF-02 — autenticação e autorização (R-02)

### CT-005 — Login administrativo válido

- **Nível/tipo; técnica; prioridade; responsável:** Sistema/funcional; partição válida; alta; a definir.
- **Pré-condições:** conta fictícia provisionada no Supabase local e e-mail listado em `ADMIN_EMAILS`.
- **Entrada:** credenciais fictícias em `.env.local`.
- **Passos:** 1. Abrir `/login`. 2. Preencher e-mail/senha. 3. Enviar. 4. Abrir `/sistema`.
- **Esperado:** redirecionamento ao painel e solicitações visíveis; cookie de sessão HTTP-only.
- **Automação:** sim, Selenium e integração API.

### CT-006 — Senha incorreta

- **Nível/tipo; técnica; prioridade; responsável:** Sistema/funcional; partição inválida; alta; a definir.
- **Pré-condições:** conta fictícia existente.
- **Entrada:** e-mail autorizado e senha inválida fictícia.
- **Passos:** 1. Abrir `/login`. 2. Informar credenciais inválidas. 3. Enviar. 4. Tentar `/sistema`.
- **Esperado:** retorno à tela de login, sem sessão administrativa e sem dados comerciais.
- **Automação:** sim, Selenium e integração API.

### CT-007 — Conta autenticada fora da lista administrativa

- **Nível/tipo; técnica; prioridade; responsável:** Integração/funcional; exceção de autorização; alta; a definir.
- **Pré-condições:** segunda conta fictícia no Auth local, não listada em `ADMIN_EMAILS`.
- **Entrada:** credenciais da conta não autorizada.
- **Passos:** 1. Autenticar pelo formulário. 2. Observar redirecionamento. 3. Acessar API de lista sem cookie administrativo.
- **Esperado:** acesso negado, nenhuma sessão administrativa emitida, API HTTP 401.
- **Automação:** sim, integração/API; usuário deve ser preparado em banco local.

### CT-008 — Visitante sem sessão

- **Nível/tipo; técnica; prioridade; responsável:** Sistema/funcional; partição inválida; alta; a definir.
- **Pré-condições:** janela privada, sem cookies.
- **Entrada:** acesso direto a `/sistema` e `/api/painel/solicitacoes`.
- **Passos:** 1. Abrir página protegida. 2. Chamar API protegida.
- **Esperado:** página de acesso não autorizado; API HTTP 401 e sem dados.
- **Automação:** sim, Selenium e integração API.

## RF-03 — consulta comercial (R-03)

### CT-009 — Lista com solicitação da seed

- **Nível/tipo; técnica; prioridade; responsável:** Sistema/funcional; partição válida; alta; a definir.
- **Pré-condições:** seed local aplicada e administrador autenticado.
- **Entrada:** solicitação fictícia `P2_LOCAL_REQUEST_ID`.
- **Passos:** 1. Abrir `/sistema`. 2. Aguardar carregamento. 3. Localizar cliente e status.
- **Esperado:** cliente fictício e status `orcamento` visíveis, coerentes com a seed.
- **Automação:** sim, Selenium e integração API.

### CT-010 — Detalhe da solicitação

- **Nível/tipo; técnica; prioridade; responsável:** Sistema/funcional; transição de navegação; média; a definir.
- **Pré-condições:** CT-009 preparado.
- **Entrada:** ID da solicitação fictícia.
- **Passos:** 1. Selecionar `Ver detalhes`. 2. Conferir descrição, cliente, contato, origem e status.
- **Esperado:** página de detalhe corresponde à solicitação selecionada e apresenta os dados da seed.
- **Automação:** sim, Selenium.

### CT-011 — ID inexistente

- **Nível/tipo; técnica; prioridade; responsável:** Sistema/funcional; exceção; média; a definir.
- **Pré-condições:** administrador autenticado.
- **Entrada:** UUID fictício não existente.
- **Passos:** 1. Abrir `/sistema/solicitacoes/<uuid-inexistente>`. 2. Conferir mensagem e retorno ao painel.
- **Esperado:** `Registro não encontrado`, sem dados de outra solicitação.
- **Automação:** sim, Selenium/integração.

## RF-04 — status e histórico (R-04)

### CT-012 — Mudança válida de status

- **Nível/tipo; técnica; prioridade; responsável:** Sistema/funcional; transição de estados; alta; a definir.
- **Pré-condições:** administrador autenticado; status inicial anotado em solicitação fictícia.
- **Entrada:** mudança de `orcamento` para `negociacao`.
- **Passos:** 1. Abrir detalhe. 2. Escolher `Negociação`. 3. Atualizar lista ou API. 4. Restaurar status inicial ao final.
- **Esperado:** status intermediário persistido e exibido; restauração registrada.
- **Automação:** sim, integração API e Selenium.

### CT-013 — Status fora do catálogo

- **Nível/tipo; técnica; prioridade; responsável:** API/funcional; partição inválida; alta; a definir.
- **Pré-condições:** cookie administrativo e status original anotado.
- **Entrada:** `status=desconhecido` no endpoint de status local.
- **Passos:** 1. Enviar POST inválido. 2. Consultar status.
- **Esperado:** HTTP 400; status original permanece.
- **Automação:** sim, Postman/integração.

### CT-014 — Histórico após transição

- **Nível/tipo; técnica; prioridade; responsável:** Integração/funcional; transição de estados; alta; a definir.
- **Pré-condições:** executar CT-012 em massa local.
- **Entrada:** ID da solicitação e estados anterior/novo.
- **Passos:** 1. Abrir a linha do tempo. 2. Consultar endpoint de histórico. 3. Comparar registros.
- **Esperado:** evento de status com estado anterior e novo e data, sem perder eventos anteriores.
- **Automação:** sim, integração API.

### CT-015 — Repetição do mesmo status

- **Nível/tipo; técnica; prioridade; responsável:** API/funcional; alternativa/idempotência; média; a definir.
- **Pré-condições:** status e contagem do histórico anotados.
- **Entrada:** POST com o status atual.
- **Passos:** 1. Enviar mudança redundante. 2. Consultar status e histórico.
- **Esperado:** resposta de sucesso, status mantido e nenhum novo evento de transição.
- **Automação:** sim, integração API.

## RF-05 — itens do orçamento (R-05)

### CT-016 — Adicionar item válido

- **Nível/tipo; técnica; prioridade; responsável:** Sistema/funcional; partição válida; alta; a definir.
- **Pré-condições:** administrador autenticado, solicitação fictícia aberta.
- **Entrada:** item `Peça fictícia P2`, quantidade 2, valor unitário R$ 30,00.
- **Passos:** 1. Preencher formulário do item. 2. Salvar. 3. Conferir lista.
- **Esperado:** item listado com subtotal R$ 60,00; persistência na API.
- **Automação:** sim, Selenium/integração; remover item ao final.

### CT-017 — Quantidade e valor inválidos

- **Nível/tipo; técnica; prioridade; responsável:** API/funcional; valores limite; alta; a definir.
- **Pré-condições:** sessão administrativa local.
- **Entrada:** quantidade 0, depois valor unitário -0,01.
- **Passos:** 1. Enviar cada payload ao endpoint de itens. 2. Consultar lista.
- **Esperado:** HTTP 400 para ambos; nenhum item novo.
- **Automação:** sim, Postman/integração.

### CT-018 — Editar item existente

- **Nível/tipo; técnica; prioridade; responsável:** Sistema/funcional; alternativa; média; a definir.
- **Pré-condições:** item temporário de CT-016.
- **Entrada:** alterar quantidade para 3, manter valor unitário R$ 30,00.
- **Passos:** 1. Selecionar `Editar`. 2. Ajustar quantidade. 3. Salvar. 4. Consultar API.
- **Esperado:** item atualizado, subtotal R$ 90,00 e mesmo ID; sem duplicação.
- **Automação:** sim, Selenium/integração.

### CT-019 — Remover item com confirmação

- **Nível/tipo; técnica; prioridade; responsável:** Sistema/funcional; alternativa; média; a definir.
- **Pré-condições:** item temporário de CT-016/018.
- **Entrada:** selecionar `Remover` e confirmar no diálogo.
- **Passos:** 1. Abrir confirmação. 2. Conferir identificação do item. 3. Confirmar. 4. Recarregar.
- **Esperado:** somente o item escolhido desaparece; total é recalculado.
- **Automação:** sim, Selenium/integração.

### CT-020 — Total com dois itens

- **Nível/tipo; técnica; prioridade; responsável:** Sistema/funcional; cálculo e partição válida; alta; a definir.
- **Pré-condições:** solicitação temporária sem outros itens; adicionar apenas os dois itens do caso e anotar valores.
- **Entrada:** 2 × R$ 30,00 e 3 × R$ 20,00.
- **Passos:** 1. Consultar itens. 2. Conferir subtotais. 3. Conferir total. 4. Remover itens temporários.
- **Esperado:** subtotais R$ 60,00 e R$ 60,00; total R$ 120,00 antes da limpeza.
- **Automação:** sim, Selenium/integração.

## RF-06 — condições e proposta (R-06)

### CT-021 — Salvar condições válidas

- **Nível/tipo; técnica; prioridade; responsável:** Sistema/funcional; partição válida; média; a definir.
- **Pré-condições:** solicitação fictícia com item; condições originais anotadas.
- **Entrada:** validade 30 dias, prazo `15 dias úteis`, condição e observação fictícias.
- **Passos:** 1. Preencher condições. 2. Salvar. 3. Recarregar. 4. Restaurar condições originais.
- **Esperado:** dados persistidos e exibidos após recarga; restauração concluída.
- **Automação:** sim, integração API/Selenium.

### CT-022 — Validade fora dos limites

- **Nível/tipo; técnica; prioridade; responsável:** API/funcional; valores limite 0/1/365/366; média; a definir.
- **Pré-condições:** sessão administrativa e proposta original anotada.
- **Entrada:** 0 e 366 dias (inválidos); 1 e 365 dias (válidos).
- **Passos:** 1. Enviar cada valor. 2. Consultar dados. 3. Restaurar valor inicial.
- **Esperado:** inválidos HTTP 400 e sem alteração; válidos persistem.
- **Automação:** sim, integração API.

### CT-023 — Download de proposta PDF

- **Nível/tipo; técnica; prioridade; responsável:** Sistema/funcional; partição válida; média; a definir.
- **Pré-condições:** solicitação com item e condições salvas; administrador autenticado.
- **Entrada:** solicitação fictícia da seed.
- **Passos:** 1. Acionar download. 2. Abrir PDF localmente. 3. Conferir cliente, item, valores e condições.
- **Esperado:** arquivo PDF íntegro com dados da solicitação; resposta `application/pdf`.
- **Automação:** sim para assinatura/contrato HTTP; inspeção visual permanece manual.

### CT-024 — Proposta sem item

- **Nível/tipo; técnica; prioridade; responsável:** API/funcional; exceção; média; a definir.
- **Pré-condições:** solicitação temporária fictícia sem itens, administrador autenticado.
- **Entrada:** ID da solicitação vazia.
- **Passos:** 1. Solicitar PDF. 2. Conferir resposta. 3. Restaurar dados de teste.
- **Esperado:** HTTP 400 e mensagem de inclusão de item; nenhum PDF gerado.
- **Automação:** sim, integração API; requer fixture temporária/limpeza.

## Execução

**0 de 24 casos manuais executados nesta versão.** Os resultados esperados acima são especificações, não evidência de aprovação. Cada caso deverá receber execução `EX-xxx`, captura/log e vínculo de defeito apenas se falhar de fato. A planilha editável e os quatro cenários de aceitação serão preparados separadamente sem preencher resultados fictícios.

As explorações do agente estão discriminadas em [REGISTRO_EXECUCOES_AGENTE_20261116.md](./REGISTRO_EXECUCOES_AGENTE_20261116.md), com casos completos, parciais e não executados. Elas não são execuções humanas e não devem ser copiadas para o Apêndice F como se o grupo tivesse executado/conferido o resultado.

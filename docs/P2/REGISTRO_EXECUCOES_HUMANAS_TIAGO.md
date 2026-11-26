# Registro das execuções manuais — Tiago Gabriel Carmelino

Ambiente comum: Windows; navegador Google Chrome (confirmar versão em chrome://settings/help); app local em http://localhost:3000, executado a partir da pasta principal (branch `p2-unisagrado`); Supabase local. Código da aplicação: merge `219210a` (os commits posteriores alteraram só documentação).

---

## EX-001 — CT-001 — Envio válido pelo formulário

- Executor: Tiago Gabriel Carmelino
- Data/hora: 23/11/2026, envio às 18:18 (−03:00); conferência no painel às 18:38
- Requisito: RF-01
- Dados enviados (fictícios): Nome `Cliente P2 A`; Empresa `Reparo fictício de bomba hidráulica CT-001` (texto colocado nesse campo durante o preenchimento); WhatsApp `14999001611`; E-mail `ct001@exemplo.test`; Descrição `Reparo fictício de bomba hidráulica CT-001`
- Passos realizados:
  1. Abriu `/contato`.
  2. Primeira tentativa com o campo "Como podemos ajudar?" vazio: o navegador bloqueou o envio com "Preencha este campo" (validação obrigatória funcionando; não faz parte do caso).
  3. Preencheu todos os campos e clicou em "Enviar solicitação".
  4. Entrou no painel com a conta administrativa local e localizou a solicitação em "Solicitações recentes".
- Resultado esperado: confirmação clara do envio; solicitação persistida com cliente e descrição, status `novo`.
- Resultado obtido: mensagem "Solicitação enviada. Nossa equipe entrará em contato." e formulário limpo. No painel, a solicitação aparece no topo da lista com a descrição "Reparo fictício de bomba hidráulica CT-001", cliente "Cliente P2 A · 14999001611 · 23 de nov., 18:18" e status "Novo". O título do card exibe o valor do campo Empresa.
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-001_EX-001_20261123_1818_formulario.png`, `CT-001_EX-001_20261123_1818_confirmacao.png`, `CT-001_EX-001_20261123_1838_painel.png`
- Observações: a solicitação criada deve ser mantida; será usada no CT-004 (mesmo WhatsApp) e nos casos de itens e proposta (solicitação sem itens).

---

## EX-002 — CT-003 — Limite da descrição (9 e 10 caracteres)

- Executor: Tiago Gabriel Carmelino
- Data/hora: 23/11/2026, entre 18:40 e 18:50 (−03:00)
- Requisito: RF-01
- Técnica: análise de valor limite (mínimo de 10 caracteres na descrição)
- Dados (fictícios):
  - Tentativa A (9 caracteres): Nome `Cliente P2 CT003 A`; Empresa `Empresa Fictícia P2`; WhatsApp `14999001612`; E-mail `ct003a@exemplo.test`; Descrição `Bomba 123`
  - Tentativa B (10 caracteres): Nome `Cliente P2 CT003 B`; Empresa `Empresa Fictícia P2`; WhatsApp `14999001613`; E-mail `ct003b@exemplo.test`; Descrição `Bomba 1234`
- Passos realizados:
  1. Preencheu a tentativa A e clicou em "Enviar solicitação".
  2. Preencheu a tentativa B e clicou em "Enviar solicitação".
  3. No painel, clicou em "Atualizar" e conferiu a lista.
- Resultado esperado: 9 caracteres recusado e sem registro; 10 caracteres aceito e registrado com status `novo`.
- Resultado obtido:
  - A: envio bloqueado pelo navegador com a mensagem "Aumente este texto para 10 caracteres ou mais. No momento, você está usando 9 caracteres". Nenhum registro do "Cliente P2 CT003 A" no painel.
  - B: mensagem "Solicitação enviada. Nossa equipe entrará em contato." e formulário limpo. No painel, "Empresa Fictícia P2 / Bomba 1234 / Cliente P2 CT003 B · 14999001613", status "Novo".
  - O contador "Oportunidades abertas" passou de 32 (após o CT-001) para 34.
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-003_EX-002_20261123_1840_9caracteres_bloqueado.png`, `CT-003_EX-002_20261123_1840_10caracteres_dados.png`, `CT-003_EX-002_20261123_1840_10caracteres_confirmacao.png`, `CT-003_EX-002_20261123_1850_painel.png`
- Observações:
  - A tentativa B foi enviada duas vezes (18:40 e 18:49), porque a sequência foi repetida para refazer as capturas. Por isso aparecem duas solicitações do "Cliente P2 CT003 B" (as duas com status "Novo"), o que explica o contador subir 2.
  - A recusa dos 9 caracteres ocorreu na validação do navegador, antes do envio ao servidor. A recusa no servidor (HTTP 400) é coberta pelo teste automatizado de API e pode ser repetida no Postman.

---

## EX-003 — CT-004 — Nova solicitação com WhatsApp já conhecido

- Executor: Tiago Gabriel Carmelino
- Data/hora: 23/11/2026, envio às 19:01 (−03:00); conferências às 19:03 e 19:20
- Requisito: RF-01
- Pré-condição: solicitação do CT-001 (EX-001) existente, com WhatsApp `14999001611`, Empresa `Reparo fictício de bomba hidráulica CT-001` e E-mail `ct001@exemplo.test`.
- Dados enviados (fictícios): Nome `Cliente P2 A`; Empresa `Empresa Fictícia P2`; WhatsApp `14999001611` (o mesmo do CT-001); E-mail `ct004@exemplo.test`; Descrição `Segunda solicitação fictícia CT-004 com WhatsApp já conhecido`
- Passos realizados:
  1. Preencheu o formulário em `/contato` e enviou.
  2. No painel, clicou em "Atualizar" e conferiu a lista.
  3. Abriu o detalhe da solicitação nova (19:01) e o da solicitação do CT-001 (18:18).
- Resultado esperado: nova solicitação criada; as duas vinculadas ao mesmo cliente, sem duplicar o cadastro.
- Resultado obtido:
  - Mensagem "Solicitação enviada. Nossa equipe entrará em contato.".
  - A lista mostra duas solicitações do "Cliente P2 A · 14999001611" (18:18 e 19:01), sem cliente duplicado. O contador "Oportunidades abertas" passou de 34 para 35.
  - Detalhe da nova (19:01): Cliente P2 A; Empresa Fictícia P2; WhatsApp 14999001611; E-mail ct004@exemplo.test; origem site.
  - **Efeito colateral observado:** a solicitação do CT-001 (recebida às 18:18, descrição "Reparo fictício de bomba hidráulica CT-001") passou a exibir Empresa "Empresa Fictícia P2" e E-mail "ct004@exemplo.test". Antes do CT-004, nos prints das 18:38 e 18:50, o título do card dessa solicitação era "Reparo fictício de bomba hidráulica CT-001" (valor do campo Empresa enviado no CT-001).
- Situação: **Aprovado** quanto ao resultado esperado do caso (mesmo cliente, sem duplicação), **com defeito encontrado** no comportamento observado.
- Defeito: D-002 — GitHub Issue #3 (https://github.com/TiagoCarmelino/Elvio-P2/issues/3); relatório em `DEFEITO_D-002_rascunho.md`
- Evidências: `CT-004_EX-003_20261123_1901_formulario.png`, `CT-004_EX-003_20261123_1901_confirmacao.png`, `CT-004_EX-003_20261123_1901_detalhe_nova.png`, `CT-004_EX-003_20261123_1903_painel.png`, `CT-004_EX-003_20261123_1920_detalhe_CT001_sobrescrito.png`; comparação com `CT-001_EX-001_20261123_1838_painel.png` e `CT-003_EX-002_20261123_1850_painel.png`.

---

## EX-004 — CT-005 — Login administrativo válido

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:11 (−03:00)
- Requisito: RF-02
- Dados: conta fictícia local `administrador.p2@local.test` (senha fictícia do `.env.local`, não registrada)
- Passos realizados:
  1. Saiu do painel (sessão anterior encerrada).
  2. Abriu `/login`, informou e-mail e senha da conta administrativa local e entrou.
  3. Conferiu o painel "Central comercial" com as solicitações.
  4. Nas ferramentas do desenvolvedor do Chrome (Application → Cookies → http://localhost:3000), conferiu o cookie de sessão.
- Resultado esperado: redirecionamento ao painel com solicitações visíveis; cookie de sessão HTTP-only.
- Resultado obtido: painel "Central comercial" aberto, com 35 oportunidades abertas e a lista de solicitações; usuário "administrador.p2@local.test — Administrador" no rodapé do menu. Cookie `wg_admin_session` presente com Path `/`, HttpOnly marcado e SameSite Strict (valor não registrado).
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-005_EX-004_20261125_1411_painel.png`. A captura `CT-005_EX-004_20261125_1411_cookie_httponly.png` foi omitida da pasta por revelar o valor de um cookie de sessão.

---

## EX-005 — CT-006 — Senha incorreta

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:14 (−03:00)
- Requisito: RF-02
- Dados: e-mail `administrador.p2@local.test`; senha fictícia propositalmente inválida `[valor da senha fictícia omitido]`
- Passos realizados:
  1. Saiu do painel.
  2. Em `/login`, informou o e-mail autorizado e a senha inválida e clicou em "Entrar no sistema".
  3. Acessou diretamente `/sistema` sem sessão.
- Resultado esperado: retorno à tela de login, sem sessão administrativa e sem dados comerciais.
- Resultado obtido: a tela de login exibiu "E-mail ou senha inválidos." e permaneceu em "Entrar". O acesso direto a `/sistema` mostrou "Acesso não autorizado — Entre com a conta administrativa autorizada para consultar as solicitações", sem nenhuma solicitação.
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-006_EX-005_20261125_1414_senha_invalida.png`, `CT-006_EX-005_20261125_1414_sistema_negado.png`

---

## EX-006 — CT-007 — Conta autenticada fora da lista administrativa

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:17 a 14:20 (−03:00)
- Requisito: RF-02
- Dados: conta fictícia local `p2.ct007.nao-admin@local.test`, não listada em `ADMIN_EMAILS` (senha fictícia do `.env.local`, não registrada)
- Passos realizados:
  1. Em `/login`, informou as credenciais da conta não administrativa e clicou em "Entrar no sistema".
  2. Na mesma janela, acessou diretamente `/sistema`.
- Resultado esperado: acesso negado e nenhuma sessão administrativa emitida.
- Resultado obtido: a tela de login exibiu "Esta conta não está autorizada a acessar o painel." O acesso a `/sistema` mostrou "Acesso não autorizado", sem solicitações. A resposta HTTP 401 da API sem sessão administrativa foi verificada no EX-007.
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-007_EX-006_20261125_1417_login_nao_admin.png`, `CT-007_EX-006_20261125_1420_sistema_negado.png`

---

## EX-007 — CT-008 — Visitante sem sessão

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:18 a 14:22 (−03:00)
- Requisito: RF-02 (e RNF-01)
- Passos realizados:
  1. No PowerShell, sem cookie: `curl.exe -s -i "http://localhost:3000/api/painel/solicitacoes"`.
  2. Em janela anônima do Chrome (sem cookies), acessou `/sistema`.
- Resultado esperado: interface impede o acesso; API responde HTTP 401 sem dados comerciais.
- Resultado obtido: a API respondeu `HTTP/1.1 401 Unauthorized` com corpo `{"message":"Acesso não autorizado."}` (cabeçalho Date 17:18:25 GMT = 14:18 local), sem dados de clientes. Na janela anônima, `/sistema` mostrou "Acesso não autorizado", sem solicitações. (O "nÃúo" no print do PowerShell é só a codificação do console.)
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-008_EX-007_20261125_1418_api_401.png`, `CT-008_EX-007_20261125_1422_anonima_sistema_negado.png`

---

## EX-008 — CT-009 — Lista com a solicitação da seed

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:24 (−03:00)
- Requisito: RF-03
- Pré-condição: administrador autenticado; seed local aplicada (solicitação fictícia `20000000-0000-4000-8000-000000000001`).
- Passos realizados:
  1. Entrou como `administrador.p2@local.test`.
  2. Abriu "Solicitações" e percorreu a lista até a solicitação mais antiga.
- Resultado esperado: cliente fictício e status `orcamento` visíveis, coerentes com a seed.
- Resultado obtido: a lista mostra "Oficina Exemplo Ltda." — "Teste P2: avaliar reparo de cilindro hidráulico fictício, com vazamento no conjunto de vedação." — "Cliente de Teste P2 · 5511999990001 · 12 de nov., 14:59", com status "Orçamento".
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-009_EX-008_20261125_1424_lista_seed.png`
- Observação (fora de caso de teste): às 14:23, o status da solicitação do CT-004 (19:01) foi alterado manualmente de "Novo" para "Orçamento" pelo executor, fora de um caso de teste (`OBS_20261125_1423_status_CT004_alterado.png`), e restaurado para "Novo" em seguida. A mudança pode ter gerado eventos no histórico dessa solicitação.

---

## EX-009 — CT-010 — Detalhe da solicitação

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:28 (−03:00)
- Requisito: RF-03
- Pré-condição: EX-008 (solicitação da seed localizada na lista).
- Passos realizados:
  1. Na linha "Oficina Exemplo Ltda.", clicou em "Ver detalhes".
  2. Conferiu o endereço e os dados exibidos.
- Resultado esperado: o detalhe corresponde à solicitação selecionada e apresenta os dados da seed.
- Resultado obtido: endereço `localhost:3000/sistema/solicitacoes/20000000-0000-4000-8000-000000000001`. A página mostra "Oficina Exemplo Ltda.", recebida em 12/11/2026 às 14:59, status "Orçamento"; descrição "Teste P2: avaliar reparo de cilindro hidráulico fictício, com vazamento no conjunto de vedação."; contato "Cliente de Teste P2", empresa "Oficina Exemplo Ltda.", WhatsApp 5511999990001, e-mail cliente.p2@exemplo.local, origem "teste_p2". O orçamento tem o item "Kit de vedação (item fictício)", 1 × R$ 250,00, total R$ 250,00. Nenhum dado de outra solicitação aparece.
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-010_EX-009_20261125_1428_detalhe_seed.png`

---

## EX-010 — CT-011 — ID inexistente

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:29 (−03:00)
- Requisito: RF-03
- Dados: UUID fictício inexistente `00000000-0000-4000-8000-000000000999`
- Passos realizados: com o administrador autenticado, abriu `localhost:3000/sistema/solicitacoes/00000000-0000-4000-8000-000000000999`.
- Resultado esperado: mensagem "Registro não encontrado", sem dados de outra solicitação.
- Resultado obtido: página "Solicitação — Registro não encontrado — A solicitação pode ter sido removida ou o endereço está incorreto.", com o botão "Voltar para o painel". Nenhum dado de solicitação exibido.
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-011_EX-010_20261125_1429_id_inexistente.png`

---

## EX-011 — CT-012 — Mudança válida de status

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:30 a 14:32 (−03:00)
- Requisito: RF-04
- Pré-condição: solicitação da seed `20000000-0000-4000-8000-000000000001` com status inicial "Orçamento" (EX-009).
- Passos realizados:
  1. No detalhe da solicitação, alterou "Status do atendimento" de "Orçamento" para "Negociação".
  2. Recarregou a página (F5) e conferiu o status.
  3. Restaurou o status para "Orçamento", recarregou e conferiu o histórico.
- Resultado esperado: status intermediário gravado e exibido; restauração gravada.
- Resultado obtido: após recarregar, o status permaneceu "Negociação" (14:30). Após a restauração, o histórico registrou "Negociação → Orçamento" às 14:32, por administrador.p2@local.test, e o status voltou ao valor original.
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-012_EX-011_20261125_1430_status_negociacao.png`, `CT-012_CT-014_20261125_1432_historico_restauracao.png`

---

## EX-012 — CT-014 — Histórico após transição

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:31 a 14:32 (−03:00)
- Requisito: RF-04
- Pré-condição: EX-011 (transição Orçamento → Negociação realizada).
- Passos realizados:
  1. Na mesma solicitação, abriu a seção "Rastreabilidade — Histórico do atendimento".
  2. Conferiu o evento da transição e os eventos anteriores.
  3. Após a restauração do status (EX-011), conferiu novamente o histórico.
- Resultado esperado: o histórico acrescenta o evento com estado anterior, estado novo e data, preservando os eventos antigos.
- Resultado obtido: novo evento "Mudança de status — Orçamento → Negociação — Status alterado por administrador.p2@local.test", 25/11/2026 14:30, no topo da lista; eventos anteriores (16/11 e 12/11, gerados pelos testes automatizados) preservados. Após a restauração, novo evento "Negociação → Orçamento", 25/11/2026 14:32.
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-014_EX-012_20261125_1431_historico.png`, `CT-012_CT-014_20261125_1432_historico_restauracao.png`

---

## EX-013 — CT-024 — Proposta sem item

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:34 (−03:00)
- Requisito: RF-06
- Pré-condição: solicitação fictícia sem itens — "Bomba 1234", Cliente P2 CT003 B, recebida em 23/11/2026 às 18:49 (criada no EX-002).
- Passos realizados: abriu o detalhe da solicitação, conferiu o orçamento vazio e foi até "Condições da proposta" para gerar o PDF.
- Resultado esperado: a proposta não é gerada e o sistema orienta a incluir um item.
- Resultado obtido: "Valor total do orçamento R$ 0,00"; o botão "Baixar proposta em PDF" aparece desabilitado, com a mensagem "Adicione ao menos um item para gerar o PDF." Nenhum PDF foi gerado.
- Situação: **Aprovado** (verificação pela interface)
- Defeito: nenhum
- Evidências: `CT-024_EX-013_20261125_1434_proposta_sem_item.png`
- Observação: a recusa da API para proposta sem itens (HTTP 4xx) é verificada também na rodada final do Postman/integração.

---

## EX-014 — CT-016 — Adicionar item válido

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:35 (−03:00)
- Requisito: RF-05
- Pré-condição: solicitação "Bomba 1234" (Cliente P2 CT003 B, 23/11/2026 18:49), sem itens (EX-013).
- Dados: descrição `Peça fictícia P2`; quantidade 2; valor unitário R$ 30,00
- Passos realizados: em "Itens da proposta", preencheu os campos e clicou em "+ Adicionar item".
- Resultado esperado: item gravado na lista; subtotal R$ 60,00.
- Resultado obtido: mensagem "Item adicionado ao orçamento."; item "Peça fictícia P2 — 2 × R$ 30,00 — R$ 60,00"; "Valor total do orçamento R$ 60,00".
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-016_EX-014_20261125_1435_item_adicionado.png`
- Observação: depois da inclusão do item, o status da solicitação passou de "Novo" para "Orçamento". O histórico (conferido às 14:44) mostra que é um comportamento automático do sistema: "Mudança de status — Novo → Orçamento — Orçamento iniciado com o cadastro do primeiro item — Responsável: Sistema", 25/11/2026 14:35.

---

## EX-015 — CT-018 — Editar item existente

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:36 (−03:00)
- Requisito: RF-05
- Pré-condição: item "Peça fictícia P2", 2 × R$ 30,00, criado no EX-014.
- Passos realizados: clicou em "Editar" no item, alterou a quantidade de 2 para 3 e salvou.
- Resultado esperado: mesmo item, quantidade 3, subtotal R$ 90,00, sem duplicação.
- Resultado obtido: mensagem "Item atualizado."; um único item "Peça fictícia P2 — 3 × R$ 30,00 — R$ 90,00"; "Valor total do orçamento R$ 90,00".
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-018_EX-015_20261125_1436_item_editado.png`

---

## EX-016 — CT-019 — Remover item com confirmação

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:37 (−03:00)
- Requisito: RF-05
- Pré-condição: item "Peça fictícia P2", 3 × R$ 30,00 (EX-015).
- Passos realizados: clicou em "Remover", leu o diálogo de confirmação e clicou em "Remover item".
- Resultado esperado: o diálogo identifica o item correto; somente o item escolhido desaparece e o total é recalculado.
- Resultado obtido: diálogo "Remover item do orçamento? Esta ação remove o item da proposta e recalcula o valor total do orçamento.", identificando "Peça fictícia P2 — 3 × R$ 30,00 = R$ 90,00", com os botões "Cancelar" e "Remover item". Após confirmar: mensagem "Item removido do orçamento.", lista "Nenhum item adicionado" e "Valor total do orçamento R$ 0,00".
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-019_EX-016_20261125_1437_confirmacao_remocao.png`, `CT-019_EX-016_20261125_1437_item_removido.png`

---

## EX-017 — CT-020 — Total com dois itens

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:38 (−03:00)
- Requisito: RF-05
- Pré-condição: a mesma solicitação sem itens após o EX-016.
- Dados: item 1 `Peça fictícia P2`, 2 × R$ 30,00; item 2 `Mangueira fictícia P2`, 3 × R$ 20,00
- Passos realizados: adicionou os dois itens, um de cada vez, e conferiu subtotais e total.
- Resultado esperado: subtotais R$ 60,00 + R$ 60,00; total R$ 120,00.
- Resultado obtido: "Peça fictícia P2 — 2 × R$ 30,00 — R$ 60,00"; "Mangueira fictícia P2 — 3 × R$ 20,00 — R$ 60,00"; "Valor total do orçamento R$ 120,00".
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-020_EX-017_20261125_1438_total_dois_itens.png`
- Observação: os itens foram mantidos para o CT-021 e o CT-023.

---

## EX-018 — CT-021 — Salvar condições válidas

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:42 a 14:44 (−03:00)
- Requisito: RF-06
- Pré-condição: solicitação com dois itens (EX-017). Valores originais: validade 15 dias; prazo, condições de pagamento e observações vazios.
- Dados: validade `30`; prazo `15 dias úteis`; condições `Pagamento fictício P2: 50% na aprovação e 50% na entrega`; observações `Observação fictícia P2 para teste de condições`
- Passos realizados: preencheu os campos, clicou em "Salvar condições", recarregou a página (F5) e conferiu os campos.
- Resultado esperado: dados gravados e mantidos após recarregar.
- Resultado obtido: após recarregar, os quatro campos mantiveram os valores informados, e o botão "Baixar proposta em PDF" ficou habilitado.
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-021_EX-018_20261125_1442_condicoes_antes.png`, `CT-021_EX-018_20261125_1444_condicoes_salvas.png`
- Observação: as condições foram mantidas para o CT-023; a restauração dos valores originais fica registrada após o CT-023.

---

## EX-019 — CT-023 — Download da proposta em PDF

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:44 (−03:00)
- Requisito: RF-06
- Pré-condição: solicitação com dois itens (EX-017) e condições salvas (EX-018).
- Passos realizados: clicou em "Baixar proposta em PDF", abriu o arquivo baixado e comparou com os dados registrados.
- Resultado esperado: o PDF abre e corresponde ao pedido, aos valores e às condições registrados; o arquivo é um PDF válido.
- Resultado obtido: arquivo `proposta-wg-a993c1fc.pdf`, 1 página A4, assinatura `%PDF`, gerado pela biblioteca pdf-lib. Conteúdo: "Proposta comercial WG-2026-A993C1FC"; cliente "Empresa Fictícia P2", responsável "Cliente P2 CT003 B", WhatsApp 14999001613, e-mail ct003b@exemplo.test; emissão 25/11/2026 e validade até 25/12/2026 (30 dias); necessidade "Bomba 1234"; itens "Peça fictícia P2 — 2 × R$ 30,00 — R$ 60,00" e "Mangueira fictícia P2 — 3 × R$ 20,00 — R$ 60,00"; valor total R$ 120,00; prazo "15 dias úteis"; condições de pagamento e observações iguais às salvas. Todos os dados conferem.
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-023_EX-019_20261125_1444_pdf_aberto.png`, `CT-023_EX-019_20261125_1444_proposta-wg-a993c1fc.pdf`
- Observação (melhoria, não defeito): alguns rótulos do PDF aparecem sem acento ("RESPONSAVEL", "EMISSAO", "VALIDA ATE", "UNITARIO"), enquanto o conteúdo tem acentos corretos.

---

## EX-020 — CT-002 — Nome inválido

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:48 (−03:00)
- Requisito: RF-01
- Ferramenta: Console do Chrome (DevTools), com `fetch` na própria aplicação local; administrador autenticado apenas para a contagem da lista.
- Dados: `POST /api/solicitacoes` com `{"name":"A","phone":"14999001699","request":"Descricao valida ficticia CT-002"}`
- Passos realizados: contou as solicitações da lista autenticada, enviou a requisição com nome de 1 caractere e contou de novo.
- Resultado esperado: HTTP 400 com mensagem de validação; nenhum registro novo.
- Resultado obtido: `HTTP 400 (Bad Request)` com `{"message":"Preencha nome, WhatsApp e uma descrição mais detalhada."}`; solicitações antes 35, depois 35, novas 0.
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-002_EX-020_20261125_1448_console_nome_invalido.png`
- Observação: a mensagem é genérica (não indica qual campo está inválido) — sugestão de melhoria, não defeito.

---

## EX-021 — CT-013 — Status fora do catálogo (inclui reteste do D-001)

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:49 (−03:00)
- Requisitos: RF-04, RNF-01; defeito D-001
- Ferramenta: Console do Chrome (DevTools), com administrador autenticado.
- Dados: solicitação da seed `20000000-0000-4000-8000-000000000001`; `POST .../status` com `{"status":"desconhecido"}` e com `{"status":"toString"}`
- Passos realizados: leu o status atual, enviou os dois status inválidos e leu o status de novo.
- Resultado esperado: HTTP 400 nos dois envios; status inalterado.
- Resultado obtido: status antes `orcamento`; `status=desconhecido` → HTTP 400 `{"message":"Status inválido."}`; `status=toString` → HTTP 400 `{"message":"Status inválido."}`; status depois `orcamento`.
- Situação: **Aprovado**
- Defeito: nenhum novo. **Reteste do D-001 aprovado**: o nome herdado `toString` é recusado com HTTP 400 (antes da correção, a validação o aceitava).
- Evidências: `CT-013_EX-021_20261125_1449_console_status_invalido.png`

---

## EX-022 — CT-015 — Repetição do mesmo status

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:51 (−03:00)
- Requisito: RF-04
- Ferramenta: Console do Chrome (DevTools), com administrador autenticado.
- Pré-condição: solicitação da seed com status `orcamento`; último evento do histórico "Negociação → Orçamento", 25/11/2026 14:32 (EX-011).
- Dados: `POST /api/painel/solicitacoes/20000000-0000-4000-8000-000000000001/status` com `{"status":"orcamento"}`
- Passos realizados: reenviou o status atual e depois abriu o histórico da solicitação.
- Resultado esperado: resposta de sucesso conforme o contrato; estado mantido e nenhum evento redundante no histórico.
- Resultado obtido: HTTP 200 `{"message":"Status atualizado."}`. O histórico conferido às 14:51 continua com o evento mais recente "Negociação → Orçamento" de 14:32; nenhum evento novo foi criado pelo reenvio.
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-015_EX-022_20261125_1451_console_status_repetido.png`, `CT-015_EX-022_20261125_1451_historico_sem_evento_novo.png`

---

## EX-023 — CT-017 — Quantidade e valor inválidos

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:53 (−03:00)
- Requisito: RF-05
- Ferramenta: Console do Chrome (DevTools), com administrador autenticado.
- Técnica: valores limite (quantidade 0; valor unitário −0,01)
- Dados: `POST /api/painel/solicitacoes/20000000-0000-4000-8000-000000000001/itens` com `{"descricao":"Item invalido CT-017 qtd 0","quantidade":0,"valorUnitario":30}` e com `{"descricao":"Item invalido CT-017 valor negativo","quantidade":1,"valorUnitario":-0.01}`
- Passos realizados: contou os itens da solicitação, enviou os dois itens inválidos e contou de novo.
- Resultado esperado: HTTP 400 nas duas respostas; nenhum item inválido criado.
- Resultado obtido: quantidade 0 → HTTP 400 `{"message":"Preencha o item com valores válidos."}`; valor −0,01 → HTTP 400 `{"message":"Preencha o item com valores válidos."}`; itens antes 1, depois 1, novos 0.
- Situação: **Aprovado**
- Defeito: nenhum
- Evidências: `CT-017_EX-023_20261125_1453_console_item_invalido.png`

---

## EX-024 — CT-022 — Limites da validade da proposta

- Executor: Tiago Gabriel Carmelino
- Data/hora: 25/11/2026, 14:55 (−03:00)
- Requisito: RF-06
- Ferramenta: Console do Chrome (DevTools), administrador autenticado; console limpo antes da execução
- Técnica: análise de valor limite (0, 1, 365, 366)
- Dados: `POST /api/painel/solicitacoes/20000000-0000-4000-8000-000000000001/proposta/dados` com `validadeDias` 0, 1, 365 e 366, mantendo os demais campos originais; leitura do valor gravado após cada envio via `GET` no mesmo endpoint
- Passos realizados: leu a validade original (15); enviou os quatro valores; conferiu o valor gravado após cada envio; restaurou a validade original.
- Resultado esperado: 0 e 366 → HTTP 400 sem alterar o valor gravado; 1 e 365 → aceitos e gravados; validade restaurada ao final.
- Resultado obtido:
  - 0 → HTTP 400 `{"message":"Informe uma validade entre 1 e 365 dias."}`, gravado 15
  - 1 → HTTP 200 `{"message":"Dados da proposta salvos."}`, gravado 1
  - 365 → HTTP 200, gravado 365
  - 366 → HTTP 400 `{"message":"Informe uma validade entre 1 e 365 dias."}`, gravado continuou 365
  - restauração 15 → HTTP 200, gravado 15
- Situação: **Aprovado**
- Defeito: nenhum
- Observação: o histórico da solicitação da seed exibido no mesmo print mostra duas mudanças de status feitas pelo administrador em 25/11/2026 (14:30 Orçamento → Negociação; 14:32 Negociação → Orçamento), antes do CT-022. O status final voltou a Orçamento, igual ao da seed.
- Evidências: `CT-022_EX-024_20261125_1455_console_validade_limites.png`

---

## Observações de restauração de dados (25/11/2026)

- **Solicitação do CT-004 (Empresa Fictícia P2, recebida em 23/11/2026 19:01):** o histórico mostra a alteração de status Novo → Orçamento às 14:24 e a volta Orçamento → Novo às 14:25 de 25/11/2026, ambas feitas por administrador.p2@local.test. Conferido às 14:57: o status atual é **Novo** e não há itens. Isso corrige o horário 14:23 anotado antes na observação do EX-008; o horário certo da alteração é 14:24. Evidências: `OBS_20261125_1457_CT004_status_Novo.png`, `OBS_20261125_1457_CT004_historico_restauracao.png`.
- **Condições da proposta da solicitação da seed:** a validade voltou a 15 dias ao final do EX-024. Os demais campos das condições preenchidos no CT-021/CT-023 foram mantidos de propósito, porque sustentam a evidência do PDF gerado no CT-023.


**Contagem humana comprovada:** 24 de 24 casos aprovados (EX-001–EX-024), todos executados por Tiago Gabriel Carmelino. Na [sessão de aceitação de 25/11/2026](./REGISTRO_ACEITACAO_PART-01_20261125.md), PART-01 aceitou 4/4 cenários.

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
- Defeito: D-002 (ver `DEFEITO_D-002_rascunho.md`)
- Evidências: `CT-004_EX-003_20261123_1901_formulario.png`, `CT-004_EX-003_20261123_1901_confirmacao.png`, `CT-004_EX-003_20261123_1901_detalhe_nova.png`, `CT-004_EX-003_20261123_1903_painel.png`, `CT-004_EX-003_20261123_1920_detalhe_CT001_sobrescrito.png`; comparação com `CT-001_EX-001_20261123_1838_painel.png` e `CT-003_EX-002_20261123_1850_painel.png`.

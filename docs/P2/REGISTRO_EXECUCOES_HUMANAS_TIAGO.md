# Registro das execuções manuais — Tiago Gabriel Carmelino

Este arquivo registra procedimentos executados e informados por Tiago. A automação do agente está separada em [REGISTRO_EXECUCOES_AGENTE_20261116.md](./REGISTRO_EXECUCOES_AGENTE_20261116.md). Mateus Betini não é apontado como executor sem participação comprovada.

**Aplicação/versão:** cópia P2, branch `p2-unisagrado`; código da aplicação do merge `219210a`. **Ambiente:** Windows, Google Chrome (versão não registrada), `http://localhost:3000`, Supabase local. **Data:** 23/11/2026. Os dados de cliente usados nos casos são fictícios.

## EX-001 — CT-001 — Envio válido pelo formulário

- **Executor:** Tiago Gabriel Carmelino.
- **Data/hora:** envio às 18:18 (UTC−03:00); conferência no painel às 18:38.
- **Requisito:** RF-01.
- **Dados fictícios:** Nome `Cliente P2 A`; Empresa `Reparo fictício de bomba hidráulica CT-001` (texto colocado nesse campo durante o preenchimento); WhatsApp `14999001611`; e-mail `ct001@exemplo.test`; descrição `Reparo fictício de bomba hidráulica CT-001`.
- **Passos:** abriu `/contato`; uma primeira tentativa sem descrição foi bloqueada pelo navegador com “Preencha este campo” (validação obrigatória observada, fora do caso); preencheu todos os campos e enviou; entrou no painel com a conta administrativa local e localizou a solicitação em “Solicitações recentes”.
- **Esperado:** confirmação clara; solicitação persistida com cliente, descrição e status `novo`.
- **Obtido:** mensagem “Solicitação enviada. Nossa equipe entrará em contato.” e formulário limpo. O painel mostrou a solicitação no topo, descrição informada, cliente “Cliente P2 A · 14999001611 · 23 de nov., 18:18” e status “Novo”. O título do card exibiu o valor do campo Empresa.
- **Resultado:** **Aprovado**. Nenhum defeito observado neste caso.
- **Evidências:** [formulário](./EVIDENCIAS_HUMANAS/CT-001_EX-001_20261123_1818_formulario.png), [confirmação](./EVIDENCIAS_HUMANAS/CT-001_EX-001_20261123_1818_confirmacao.png), [painel às 18:38](./EVIDENCIAS_HUMANAS/CT-001_EX-001_20261123_1838_painel.png).
- **Observação:** a solicitação foi mantida para uso como pré-condição do CT-004 e dos casos de itens/proposta.

## EX-002 — CT-003 — Limite da descrição (9 e 10 caracteres)

- **Executor:** Tiago Gabriel Carmelino.
- **Data/hora:** entre 18:40 e 18:50 (UTC−03:00).
- **Requisito/técnica:** RF-01; análise do limite mínimo de 10 caracteres.
- **Dados fictícios:** tentativa A (9 caracteres): Nome `Cliente P2 CT003 A`; Empresa `Empresa Fictícia P2`; WhatsApp `14999001612`; e-mail `ct003a@exemplo.test`; descrição `Bomba 123`. Tentativa B (10 caracteres): Nome `Cliente P2 CT003 B`; Empresa `Empresa Fictícia P2`; WhatsApp `14999001613`; e-mail `ct003b@exemplo.test`; descrição `Bomba 1234`.
- **Passos:** preencheu e enviou a tentativa A; preencheu e enviou a tentativa B; no painel, clicou em “Atualizar” e conferiu a lista.
- **Esperado:** 9 caracteres recusados sem registro; 10 caracteres aceitos e registrados com status `novo`.
- **Obtido:** A foi bloqueada pela validação do navegador com “Aumente este texto para 10 caracteres ou mais. No momento, você está usando 9 caracteres”; não apareceu no painel. B exibiu a confirmação de envio e apareceu no painel como “Empresa Fictícia P2 / Bomba 1234 / Cliente P2 CT003 B · 14999001613”, status “Novo”. O contador “Oportunidades abertas” passou de 32 (após CT-001) para 34.
- **Resultado:** **Aprovado**. Nenhum defeito observado neste caso.
- **Evidências:** [9 caracteres bloqueados](./EVIDENCIAS_HUMANAS/CT-003_EX-002_20261123_1840_9caracteres_bloqueado.png), [dados de 10 caracteres](./EVIDENCIAS_HUMANAS/CT-003_EX-002_20261123_1840_10caracteres_dados.png), [confirmação](./EVIDENCIAS_HUMANAS/CT-003_EX-002_20261123_1840_10caracteres_confirmacao.png), [painel às 18:50](./EVIDENCIAS_HUMANAS/CT-003_EX-002_20261123_1850_painel.png).
- **Observações/limites:** a tentativa B foi enviada duas vezes (18:40 e 18:49) para refazer capturas; as duas solicitações aparecem como “Novo”, explicando o aumento de duas unidades no contador. A recusa de nove caracteres foi observada no navegador, antes do servidor. A resposta HTTP 400 do servidor é coberta por teste automatizado de API, não por esta execução manual, e pode ser repetida no Postman.

## EX-003 — CT-004 — Nova solicitação com WhatsApp já conhecido

- **Executor:** Tiago Gabriel Carmelino.
- **Data/hora:** envio às 19:01; conferências às 19:03 e 19:20 (UTC−03:00).
- **Requisito:** RF-01.
- **Pré-condição:** solicitação de CT-001/EX-001 existente com WhatsApp `14999001611`, Empresa `Reparo fictício de bomba hidráulica CT-001` e e-mail `ct001@exemplo.test`.
- **Dados fictícios:** Nome `Cliente P2 A`; Empresa `Empresa Fictícia P2`; WhatsApp `14999001611` (igual ao CT-001); e-mail `ct004@exemplo.test`; descrição `Segunda solicitação fictícia CT-004 com WhatsApp já conhecido`.
- **Passos:** enviou os dados em `/contato`; atualizou e conferiu a lista no painel; abriu o detalhe da nova solicitação (19:01) e o da solicitação CT-001 (18:18).
- **Esperado:** nova solicitação criada e ambas vinculadas ao mesmo cliente, sem duplicação do cadastro.
- **Obtido:** houve confirmação de envio; a lista mostrou duas solicitações do mesmo cliente/WhatsApp (18:18 e 19:01), sem cliente duplicado; “Oportunidades abertas” passou de 34 para 35. O detalhe novo mostrou os dados de CT-004. **Efeito colateral:** a solicitação anterior de CT-001 passou a exibir Empresa `Empresa Fictícia P2` e e-mail `ct004@exemplo.test`. Nas capturas anteriores (18:38 e 18:50), ela mostrava os valores enviados originalmente em CT-001.
- **Resultado:** **Aprovado quanto ao objetivo principal do caso, com defeito encontrado**. Defeito relacionado: [D-002](./DEFEITOS.md#d-002--novo-envio-com-whatsapp-já-cadastrado-sobrescreve-empresa-e-e-mail-do-cliente).
- **Evidências:** [formulário](./EVIDENCIAS_HUMANAS/CT-004_EX-003_20261123_1901_formulario.png), [confirmação](./EVIDENCIAS_HUMANAS/CT-004_EX-003_20261123_1901_confirmacao.png), [detalhe da nova](./EVIDENCIAS_HUMANAS/CT-004_EX-003_20261123_1901_detalhe_nova.png), [painel às 19:03](./EVIDENCIAS_HUMANAS/CT-004_EX-003_20261123_1903_painel.png), [detalhe CT-001 alterado às 19:20](./EVIDENCIAS_HUMANAS/CT-004_EX-003_20261123_1920_detalhe_CT001_sobrescrito.png). Comparação anterior: [painel CT-001 às 18:38](./EVIDENCIAS_HUMANAS/CT-001_EX-001_20261123_1838_painel.png) e [painel CT-003 às 18:50](./EVIDENCIAS_HUMANAS/CT-003_EX-002_20261123_1850_painel.png).

**Contagem humana comprovada:** 3 de 24 casos executados e registrados. CT-002 e CT-005–CT-024 ainda aguardam execução. Este registro não representa execução dos cenários de aceitação.

# Guia prático de execução dos 24 casos manuais

**Estado:** os 24 casos foram executados manualmente por Tiago (24/24), conforme o registro [EX-001–EX-024](./REGISTRO_EXECUCOES_HUMANAS_TIAGO.md). Este guia permanece como roteiro de reprodução/conferência dos casos do catálogo, Apêndices E/F/H e §§9.5–9.7 do [enunciado](../P2_UNISAGRADO_texto_completo_para_Codex.txt).

**Executor desta rodada:** Tiago Gabriel Carmelino conduzirá e confirmará suas próprias execuções. Mateus Betini permanece integrante do grupo; não lhe atribuir execução, revisão ou evidência sem participação efetiva registrada.

O agente também realizou explorações e automações separadas; consulte [REGISTRO_EXECUCOES_AGENTE_20261116.md](./REGISTRO_EXECUCOES_AGENTE_20261116.md). Esses resultados e capturas/logs não preenchem os `EX-xxx` humanos, que estão registrados em trilha própria.

## Antes de cada execução

1. Combine um executor do grupo e confirme que outra pessoa consegue repetir o procedimento.
2. Registre o `git rev-parse --short HEAD`, branch, data/hora, navegador/versão e ambiente no controle existente. Se o TCC tiver sido sincronizado ou o código mudar após o hash documentado, faça revisão de impacto e repita os testes afetados antes de apresentar os resultados antigos.
3. Use somente a cópia P2 e `localhost`; confirme Supabase local nas portas configuradas e os dados sintéticos. Não execute `supabase link`, `db push`, nem use URL ou credencial de produção.
4. Inicie a aplicação com `pnpm run dev` em um terminal. Em outro, abra `http://localhost:3000`. Use `.env.local` apenas localmente; não registre senha, token, cookie, chave ou corpo com segredo em capturas/logs.
5. Confira as pré-condições e dados específicos do caso em [CASOS_MANUAIS.md](./CASOS_MANUAIS.md). Anote o estado original de status, item e proposta quando o teste puder alterá-los.
6. Para cada caso, atribua `EX-001` em diante **somente quando executar de fato**. Registre um status: Aprovado, Reprovado, Bloqueado ou Não executado. Compare obtido com esperado; não transforme expectativa em resultado.
7. Nomeie evidências `CT-xxx_EX-xxx_YYYYMMDD_HHMM_tipo.ext`. Capture somente a tela/resposta necessária, sem dados pessoais ou segredos. Guarde os originais na pasta de execução manual da entrega oficial e relacione o caminho à planilha e à [rastreabilidade](./RASTREABILIDADE.md).
8. Ao final, restaure os dados fictícios que alterou, verifique a restauração e anote-a. Não use reset do banco se houver dados locais necessários sem antes combinar backup/fixture com o grupo.
9. Se falhar, preserve a evidência, descreva passo, esperado e obtido, registre D-xxx no controle e abra Issue apenas no repositório P2 autorizado. Reteste e execute regressão relacionada após correção.

## Roteiro por caso

| Caso | Passos para executar | Resultado esperado (especificação) | Evidência a salvar |
|---|---|---|---|
| CT-001 — Envio válido | 1. Abra `/contato`. 2. Use nome/WhatsApp fictícios ainda não usados e descrição válida. 3. Envie. 4. Entre no painel local e localize o novo registro. | Confirmação clara; pedido persistido com descrição, cliente e status `novo`. | Captura da confirmação e do registro no painel com mesmo dado fictício; não mostre contato real. |
| CT-002 — Nome inválido | 1. No Postman local, envie `POST /api/solicitacoes` com `name=A` e os demais campos válidos. 2. Consulte a lista autenticada antes/depois e compare IDs. | HTTP 400; lista sem novo registro. | Export da requisição/resposta e comparação de IDs, com cabeçalhos secretos removidos. |
| CT-003 — Limite da descrição | 1. Prepare dois telefones fictícios. 2. Envie descrição com 9 caracteres. 3. Envie outra com 10. 4. Consulte a lista. | 9 caracteres: HTTP 400 e sem registro. 10 caracteres: HTTP 201 e registro `novo`. | Requisições/respostas dos dois valores e confirmação de persistência somente do válido. |
| CT-004 — WhatsApp conhecido | 1. Execute CT-001 e anote o cliente fictício. 2. Envie novo pedido válido usando o mesmo WhatsApp e outra descrição. 3. Confira ambos no painel/banco local. | Nova solicitação; ambas vinculadas ao mesmo cliente, sem duplicar o cadastro. | Captura/consulta dos dois pedidos com identificador sintético do cliente, ocultando número completo. |
| CT-005 — Login válido | 1. Abra `/login`. 2. Use a conta administrativa exclusivamente local indicada pelo grupo. 3. Entre e abra `/sistema`. | Acesso ao painel e pedidos visíveis; sessão administrativa criada. | Captura do painel autenticado. Não capture senha, cookie nem tela de variáveis. |
| CT-006 — Senha incorreta | 1. Abra `/login`. 2. Use o e-mail da conta local e senha deliberadamente inválida. 3. Tente `/sistema`. | Mensagem/retorno ao login; nenhum acesso a dados nem cookie administrativo. | Captura da mensagem e da negativa. Não registrar a senha digitada nem cabeçalhos `Set-Cookie`. |
| CT-007 — Conta não autorizada | 1. Confirme com o grupo uma segunda conta fictícia do Auth local não listada em `ADMIN_EMAILS`. 2. Autentique-se. 3. Consulte a API administrativa sem sessão autorizada. | Nenhuma sessão administrativa; endpoint protegido responde HTTP 401. | Status/body expurgado e captura de acesso negado. Não crie conta em produção. |
| CT-008 — Visitante sem sessão | 1. Abra janela privativa limpa. 2. Acesse `/sistema`. 3. Consulte `GET /api/painel/solicitacoes` sem cookie. | Interface impede acesso; API responde 401 sem conteúdo comercial. | Captura da tela e resposta HTTP sem cookie ou dados sensíveis. |
| CT-009 — Lista da seed | 1. Faça login local. 2. Abra `/sistema`. 3. Procure o pedido fictício `P2_LOCAL_REQUEST_ID` e confira cliente/status. | Pedido de teste aparece com status `orcamento`, conforme seed vigente. | Captura da linha e anotação do hash da seed/versão testada. |
| CT-010 — Detalhe | 1. A partir da lista, abra os detalhes do pedido fictício. 2. Compare ID, cliente, descrição, contato, origem e status com a seed local. | Detalhe corresponde ao pedido escolhido; nenhum dado de outro registro aparece. | Captura do detalhe e referência do fixture; ocultar contato completo. |
| CT-011 — ID inexistente | 1. Entre no painel. 2. Abra `/sistema/solicitacoes/<UUID fictício inexistente>`. | Mensagem `Registro não encontrado` e retorno/estado seguro; sem exibir outro registro. | Captura da URL fictícia e da mensagem. |
| CT-012 — Mudança de status | 1. Anote status inicial. 2. Mude `orcamento` para `negociacao`. 3. Recarregue/consulte a API. 4. Restaure status original. | Novo status persiste e é mostrado; restauração também persiste. | Capturas antes/depois e confirmação da restauração; guardar cada transição separadamente. |
| CT-013 — Status inválido | 1. Com administrador local, envie status `desconhecido`. 2. Consulte o pedido. | HTTP 400; estado permanece igual ao anotado antes. | Request/response e leitura antes/depois sem segredo. |
| CT-014 — Histórico | 1. Anote histórico atual. 2. Faça uma transição válida. 3. Abra a linha do tempo/endpoint de histórico. 4. Restaure o status inicial. | Histórico acrescenta evento com estados anterior/novo e data, preservando eventos antigos. | Captura ou JSON expurgado do evento e da restauração. |
| CT-015 — Status repetido | 1. Anote status e quantidade de eventos. 2. Reenvie o mesmo status permitido. 3. Consulte estado e histórico. | Resposta de sucesso conforme contrato; estado mantido e nenhum evento redundante de transição. | Request/response e contagem antes/depois do histórico. |
| CT-016 — Adicionar item | 1. Abra pedido fictício. 2. Adicione `Peça fictícia P2`, quantidade 2 e valor R$ 30,00. 3. Confira lista. 4. Continue CT-018/019 ou remova ao final. | Item persiste; subtotal R$ 60,00. | Captura do item/subtotal e ID sintético; registrar limpeza posterior. |
| CT-017 — Item inválido | 1. Envie item com quantidade 0. 2. Envie item com valor unitário -0,01. 3. Consulte a lista. | Ambas respostas HTTP 400; nenhum item inválido foi criado. | Dois pares request/response e comparação da lista antes/depois. |
| CT-018 — Editar item | 1. Use item temporário de CT-016. 2. Altere quantidade de 2 para 3. 3. Salve e consulte lista/API. | Mesmo ID, quantidade 3, subtotal R$ 90,00; sem duplicação. | Captura antes/depois com mesmo ID e subtotal; limpar item depois. |
| CT-019 — Remover item | 1. Acione remoção do item temporário. 2. Leia o diálogo e confirme que identifica o item correto. 3. Confirme e recarregue. | Só o item escolhido desaparece; total recalculado. | Captura do diálogo e da lista/total após remover. |
| CT-020 — Total de dois itens | 1. Use solicitação temporária sem itens. 2. Adicione 2 × R$ 30,00 e 3 × R$ 20,00. 3. Some subtotais/total. 4. Remova os itens temporários. | Subtotais R$ 60,00 + R$ 60,00; total R$ 120,00 antes da limpeza. | Captura dos dois itens e total; registro da limpeza. |
| CT-021 — Condições válidas | 1. Anote condições originais. 2. Defina validade 30 dias, prazo `15 dias úteis` e texto fictício. 3. Salve/recarregue. 4. Restaure valores originais. | Dados permanecem após recarga e voltam aos valores originais após restauração. | Capturas antes/depois e após restauração, sem dados comerciais reais. |
| CT-022 — Limites de validade | 1. Anote validade atual. 2. Teste 0, 1, 365 e 366 dias via API. 3. Consulte valor persistido. 4. Restaure. | 0 e 366: HTTP 400 sem alteração. 1 e 365: aceitos e persistidos. | Quatro request/responses, leitura final e prova de restauração. |
| CT-023 — PDF da proposta | 1. Use pedido fictício com item/condições conhecidos. 2. Baixe PDF. 3. Abra em leitor. 4. Confira cliente, item, quantidades, valores, total e condições contra a seed. | PDF abre, corresponde ao pedido e aos valores registrados; contrato HTTP também indica `application/pdf`. | Arquivo gerado fictício, captura de páginas relevantes e response headers sem segredo. A inspeção visual é humana. |
| CT-024 — Proposta sem item | 1. Use solicitação temporária fictícia sem itens. 2. Tente gerar proposta. 3. Confira resposta e banco. 4. Remova/restaure fixture. | HTTP 400 com orientação para incluir item; nenhum PDF gerado. | Request/response, confirmação de ausência de arquivo e limpeza. |

## Registro e critérios de encerramento

| Campo a preencher por execução | Valor real a registrar |
|---|---|
| Identificação | `EX-xxx`, CT correspondente e executor(es) |
| Versão | Hash Git, branch, versão do app e data/hora local |
| Ambiente | SO, navegador/versão, URL loopback e estado do Supabase local |
| Execução | Pré-condição confirmada, entrada, passos realmente realizados e resultado obtido |
| Resultado | Aprovado / Reprovado / Bloqueado / Não executado; justificar divergência |
| Evidência | Caminho do original, tipo, horário e confirmação de que foi expurgado |
| Defeito/restauração | Issue apenas para falha reproduzida; estado de dados restaurados |

Considere o conjunto pronto para revisão do grupo somente depois de cada CT ter sua execução real, evidência legível, rastreabilidade atualizada, defeitos retestados e fixtures restaurados. Uma repetição automatizada não preenche `EX-xxx`.

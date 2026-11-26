# Execuções exploratórias do agente — 16/11/2026

**Escopo:** exploração assistida da cópia P2 em loopback. Este registro separa as ações do agente das execuções manuais dos integrantes. **Nenhuma linha abaixo conta como execução humana EX-xxx nem como decisão de aceitação.** Dados enviados ao site eram fictícios. Aplicação executada sobre o código do commit `6f6cafe`; o arquivo de teste Selenium foi ampliado no working tree e validado nesta sessão. Não houve alteração na aplicação/TCC original.

**Classificação para entrega:** exploração do agente, não usada como evidência final. Os logs de saída antigos não têm, em todos os casos, um script versionado que reproduza exatamente a execução. Use-os somente como histórico técnico; as evidências humanas e os testes automatizados reproduzíveis devem ser avaliados separadamente.

## Ambiente e salvaguardas observadas

- Branch `p2-unisagrado`; Supabase Auth local `http://127.0.0.1:54321/auth/v1/health` respondeu HTTP 200. A configuração `SUPABASE_URL` apontava a `127.0.0.1` e `P2_LOCAL_BASE_URL` a `localhost`; os testes existentes também exigem host loopback.
- A aplicação abriu `/login` com HTTP 200 em `http://localhost:3000`; o listener ficou em `::1:3000`. Nenhum serviço de produção foi consultado.
- A stack foi validada sem `db reset`. As suítes de integração restauraram o status/proposta e removeram itens temporários conforme seus `finally`; envios públicos Selenium/TNF e os dois envios pelo formulário exploratório permanecem como registros sintéticos locais. Não foi feita exclusão de dados.
- Credenciais, cookies e chaves não foram copiados para os logs publicados nesta pasta. O log Newman foi filtrado para linhas de autenticação/segredo.

## Execuções do agente observadas

| Identificação | Tipo | Resultado real | Evidência |
|---|---|---|---|
| `AG-UI-001` | Navegador, CUA, formulário de contato | Enviados nome/WhatsApp/descrição fictícios. A interface mostrou “Solicitação enviada”. Consulta autenticada posterior encontrou a solicitação, ID `7ddb090c-a0fb-4699-a5a9-71f3319d8dd7`, status `novo`. | Captura visível no histórico da sessão; fluxo equivalente automatizado em `CT-001_fluxo-de-envio_agent_Selenium.png`; `log_persistencia_CT-001-003.txt`. A captura CUA desta interação não foi exportável como arquivo pelo navegador disponível. |
| `AG-UI-003-9` | Navegador, CUA, formulário | Descrição de 9 caracteres foi rejeitada no cliente pelo `minlength`; aviso exibido pelo Chrome. | Captura visível no histórico da sessão; reprodução Selenium em `CT-003_descricao-9-caracteres_rejeitada.png`. |
| `AG-UI-003-10` | Navegador, CUA, formulário | Descrição de 10 caracteres foi aceita; interface mostrou confirmação. Consulta autenticada encontrou o pedido com status `novo`, ID `6e1f4c5c-ddf7-47d0-8525-76cefda5f1c0`. | Captura visível no histórico da sessão; reprodução Selenium em `CT-003_descricao-10-caracteres_aceita.png`; `log_persistencia_CT-001-003.txt`. |
| `AG-UI-008` | Navegador, CUA, sem sessão | `/sistema` mostrou “Acesso não autorizado” e link de retorno ao login. | Captura visível no histórico da sessão; fluxo Selenium em `CT-008_painel_bloqueado_sem-sessao.png`. |
| `AG-INT-01` | Integração/API real local | `pnpm run test:local`: 8/8 passaram, incluindo fluxo local, rejeição pública, CRUD de item com restauração, proposta com restauração, status/histórico com restauração, senha incorreta sem cookie administrativo e PDF legível por parser. | `log_integracao_api.txt`. |
| `AG-SEL-01` | Selenium/Chrome headless | Execução final: 7/7 passaram (acesso anônimo, envio público, login/lista/detalhe, criação/remoção de item, fronteira 9/10, total adicional de dois itens e ID inexistente). | `log_selenium_7-casos_final.txt` e capturas por caso. |
| `AG-PM-01` | Newman/Postman contra loopback | 6 requisições e 12 verificações passaram; 0 falhas. | `log_postman_redigido.txt`. |
| `AG-TNF-01` | Testes não funcionais exploratórios | 6/6 passaram nos critérios preliminares existentes. Isso não é validação humana nem aprovação dos critérios. | `log_nao-funcionais.txt` e `evidencia_nao-funcional_20261116.json`. |
| `AG-CT009` | Consulta autenticada read-only | Fixture `P2_LOCAL_REQUEST_ID` encontrada; nome esperado corresponde e status observado `orcamento`. | `log_CT-009_seed.txt` e captura da tela de detalhe. |

### Tentativa automatizada inicial preservada

A primeira versão do teste Selenium para CT-003 falhou porque esperava um elemento `role=status` depois de enviar 9 caracteres. A tela mostrou a validação nativa do Chrome (“Aumente este texto para 10 caracteres...”), antes do envio. Corrigi o oráculo para verificar `validity.tooShort`/`validationMessage`; a repetição passou. É falha do teste recém-adicionado, não defeito reproduzido na aplicação. A captura e o log inicial foram preservados em `CT-003_primeira-tentativa_oraculo-ajustado.png` e `log_selenium_tentativa-inicial.txt`; não abri defeito de produto.

## Estado dos CT-001 a CT-024

Classificação do agente em 16/11/2026: **16 casos cobertos no escopo observado e 8 parciais; nenhum caso ficou sem qualquer verificação exploratória**. `Coberto` não significa aprovação manual. Naquela data, 0/24 execuções humanas; em 23/11, Tiago executou EX-001–EX-003 e, em 25/11, concluiu as 24 execuções humanas, conforme [registro humano](./REGISTRO_EXECUCOES_HUMANAS_TIAGO.md).

Os passos e resultados esperados oficiais estão em [CASOS_MANUAIS.md](./CASOS_MANUAIS.md); a tabela abaixo registra o resultado observado e os desvios em relação àquele procedimento. Os dados de interface foram sintéticos. Foram registrados especificamente: CT-001 nome `Cliente P2 Agente 16112026` e WhatsApp `14999000126`; CT-003 descrições de 9 e 10 caracteres em solicitações separadas; CT-004 reutilizou o WhatsApp sintético de CT-001; CT-007 criou a conta local `p2.ct007.nao-admin@local.test` (senha omitida); CT-011 usou UUID fictício `ffffffff-ffff-4fff-8fff-fffffffffff1`; CT-013 tentou `desconhecido`; CT-015 reenviou `orcamento`; CT-017 enviou quantidade 0 e preço -R$ 0,01 em requisições separadas; CT-020 criou itens 2 × R$ 30,00 e 3 × R$ 20,00 sobre a fixture seed; CT-024 usou solicitação sem itens. Para os outros casos, as suítes usaram suas fixtures/payloads locais, que não coincidem integralmente com os dados manuais prescritos; por isso foram classificados como parciais quando essa diferença afeta o oráculo.

**Data/hora:** 16/11/2026, horários locais registrados nos logs do dia. **Versão do sistema:** código da aplicação no commit `6f6cafe`, branch `p2-unisagrado`; teste Selenium alterado nesta rodada permaneceu no working tree (sem commit). **Ambiente:** Docker/Supabase local e `localhost:3000`, Chrome headless; nenhum acesso a produção. As capturas e logs citados são arquivos efetivamente preservados em [EVIDENCIAS_AGENTE/20261116](./EVIDENCIAS_AGENTE/20261116/). O registro do agente não preenche os campos EX humanos.

| Caso | Estado agente | Resultado / limite que impede chamar de manual concluído |
|---|---|---|
| CT-001 | Coberto pelo agente | Formulário enviou e pedido fictício foi encontrado autenticadamente como `novo`; execução automatizada por agente, sem EX humano. |
| CT-002 | Coberto pelo agente | API-02 e PM-06 rejeitaram entrada inválida; API comparou IDs da lista antes/depois. |
| CT-003 | Coberto pelo agente | UI rejeitou 9 e aceitou 10; o válido persistiu. Capturas Selenium e tentativa inicial do oráculo preservadas. |
| CT-004 | Coberto pelo agente, API/DB | Reenvio com o mesmo WhatsApp retornou HTTP 201; consulta local antes/depois observou 1 cliente e 2 solicitações, com vínculo pelo mesmo cliente. Não percorreu o formulário visual. `ct004-same-whatsapp.log`, `ct004-db-check.log`. |
| CT-005 | Coberto pelo agente | Login fictício e abertura/lista do painel passaram na integração local e SEL-03. Resultado da exploração de 16/11. |
| CT-006 | Parcial, via API | API-06 confirmou redirecionamento por credencial incorreta e ausência de cookie administrativo; interação de formulário não repetida manualmente no navegador. |
| CT-007 | Coberto pelo agente, API/UI | Criada conta fictícia local fora da lista administrativa; login redirecionou com `nao-autorizado`, sem cookie administrativo; endpoint protegido retornou 401. Não foi usada senha real. `ct007-nonadmin.log`. |
| CT-008 | Coberto pelo agente | Interface sem sessão bloqueou `/sistema`; teste local confirmou 401 na API protegida. |
| CT-009 | Coberto pelo agente | Fixture foi encontrada com cliente fictício e status `orcamento`; screenshot da tela de detalhe mostra a listagem/dados da fixture. |
| CT-010 | Parcial | SEL-03 abriu o detalhe; a captura mostra descrição, contato, origem e status, mas a comparação completa de todos os campos/ID com a fonte da seed não foi registrada. |
| CT-011 | Coberto pelo agente, Selenium | Com sessão administrativa, UUID sintético inexistente exibiu “Registro não encontrado” e retorno ao painel. `CT-011_sucesso-*.png`, log Selenium final. |
| CT-012 | Coberto pelo agente, API | API-05 alterou status e o restaurou; não houve execução pelo seletor da interface. |
| CT-013 | Coberto pelo agente, API | `status=desconhecido` retornou HTTP 400; status `orcamento` e 16 eventos do histórico permaneceram iguais antes/depois. `ct013-invalid-status.log`. |
| CT-014 | Coberto pelo agente, API | API-05 observou evento de histórico após transição e restaurou estado. Não houve inspeção humana da linha do tempo visual. |
| CT-015 | Coberto pelo agente, API | Reenvio do status atual `orcamento` retornou HTTP 200, sem alteração de estado nem duplicação de evento (16 antes/depois). `ct015-same-status.log`. |
| CT-016 | Parcial | SEL-04/API-03 criaram item fictício; valores/descrição não foram os especificados por CT-016 (2 × R$ 30,00). |
| CT-017 | Coberto pelo agente, API | Duas requisições independentes (quantidade 0 e preço -R$ 0,01) retornaram HTTP 400; item não foi alterado. `ct017-invalid-items.log`. |
| CT-018 | Parcial, API | API-03 editou item e preservou ID; não usou exatamente os valores especificados de CT-016/018 nem apresentou subtotal de R$ 90,00 em evidência. |
| CT-019 | Parcial | Selenium removeu item escolhido após diálogo; não há comprovação isolada do total recalculado com os dados prescritos. |
| CT-020 | Parcial, Selenium | Dois itens com subtotais de R$ 60 foram criados; total subiu R$ 120 (R$ 250→R$ 370) e voltou ao inicial após remoção. Pedido base tinha item da seed, não cenário vazio. Capturas de acréscimo/restauração. |
| CT-021 | Parcial, API | API-04 alterou/restaurou validade; prazo, condições e observação prescritos não foram alterados e reabertos na interface. |
| CT-022 | Coberto pelo agente, API | API-08 testou 0, 1, 365 e 366, verificou persistência/preservação e restaurou a validade original. |
| CT-023 | Parcial, API | API-07 confirmou resposta `application/pdf`, assinatura `%PDF-` e leitura por parser. Conteúdo do documento não foi comparado visualmente com a proposta. |
| CT-024 | Coberto pelo agente, API | Solicitação fictícia sem itens retornou HTTP 400 com orientação para adicionar item; consulta confirmou 0 itens. Fixture foi mantida localmente. `ct024-empty-proposal.log`. |

## Cenários de aceitação AC-01 a AC-04

Em 16/11/2026 a exploração cobriu os fluxos técnicos. A sessão de aceitação ocorreu em 25/11/2026, com [4/4 cenários aceitos por PART-01](./REGISTRO_ACEITACAO_PART-01_20261125.md).

## Execuções humanas realizadas

Tiago executou os 24 casos manuais em 23 e 25/11/2026. Resultados e evidências constam no [registro humano](./REGISTRO_EXECUCOES_HUMANAS_TIAGO.md).

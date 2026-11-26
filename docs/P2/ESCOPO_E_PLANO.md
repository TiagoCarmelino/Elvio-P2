# Requisitos, riscos e plano de testes — P2

**Versão 1.0, 25/11/2026.** **Sistema:** cópia acadêmica P2 do Sistema Web WG Hidráulica, branch `p2-unisagrado`. **Aprovação do professor:** verbal, em aula, em 20/08/2026, sem ajustes solicitados. **Integrantes:** Tiago Gabriel Carmelino e Mateus Betini, turma `26-2-COMP-7-08-A`, Grupo 8 (`GRPATVSALA 8`). Este documento aplica os campos dos Apêndices B, C e D do [manual transcrito](../P2_UNISAGRADO_texto_completo_para_Codex.txt).

## Objetivo e escopo

Avaliar os fluxos comerciais disponíveis na cópia local: solicitação de orçamento, autenticação administrativa, consulta do painel, mudança de status, itens de orçamento e proposta PDF. O sistema dispõe de código-fonte, interface e API, funções PostgreSQL e dados sintéticos. São seis requisitos funcionais e três não funcionais, todos com critérios observáveis.

Ficam fora deste ciclo as integrações externas com IA, n8n, e-mail real e WhatsApp, testes em produção, carga intensa/invasão e funcionalidades futuras do TCC. Mudanças futuras do TCC serão incorporadas por revisão de diff e atualização dos contratos da P2, sem sobrescrever fixtures ou evidências anteriores.

## Catálogo de requisitos selecionados (Apêndice B)

| ID | Descrição verificável | Tipo | Prioridade | Critério de aceitação |
|---|---|---|---|---|
| RF-01 | Cliente envia solicitação pelo formulário público, com nome, WhatsApp e descrição; a API persiste cliente/solicitação e rejeita dados inválidos. | Funcional | Alta | Entrada válida recebe HTTP 201 e aparece no painel com status `novo`; nome <2, WhatsApp <8 ou descrição <10 recebem HTTP 400 e não criam solicitação. |
| RF-02 | Conta cadastrada e listada em `ADMIN_EMAILS` inicia sessão administrativa; visitante e credencial inválida não obtêm dados protegidos. | Funcional | Alta | Login válido redireciona a `/sistema` e emite cookie HTTP-only; listagem sem sessão retorna 401; senha inválida não cria sessão. |
| RF-03 | Administrador consulta solicitações e detalhes do atendimento. | Funcional | Alta | Lista e detalhe mostram ID, cliente, descrição, contato, origem e status coerentes com o banco; ID ausente mostra estado de não encontrado. |
| RF-04 | Administrador altera status permitido e consulta histórico. | Funcional | Alta | Status válido é persistido e gera histórico com estado anterior/novo; estado inválido recebe HTTP 400 sem mudança. |
| RF-05 | Administrador cadastra, edita e remove itens do orçamento. | Funcional | Alta | Item válido aparece na lista e total exibido é soma de quantidade × valor unitário; quantidade ≤0/valor negativo recebe 400; item removido deixa de aparecer. |
| RF-06 | Administrador salva condições comerciais e gera proposta PDF. | Funcional | Média | Validade entre 1 e 365 dias persiste; valores fora do intervalo retornam 400; com itens e condições, download responde 200, `application/pdf` e assinatura `%PDF`. |
| RNF-01 | APIs administrativas preservam controle de acesso e validação de entrada. | Não funcional — segurança básica | Alta | Requisições anônimas em endpoints de lista, itens, status e PDF recebem 401; entradas excessivas/ilegítimas são rejeitadas sem expor segredo. |
| RNF-02 | Fluxos escolhidos respondem em tempo compatível com uso local. | Não funcional — desempenho básico | Média | Em ambiente local controlado, registrar 20 medições por operação (início, login e listagem), com máximo de até 3 s. Informar a mediana, o máximo e o hardware. |
| RNF-03 | Formulário e painel permanecem utilizáveis em Chrome e Edge e em larguras desktop/móvel. | Não funcional — compatibilidade/usabilidade | Média | Envio, login e leitura do painel funcionam nos dois navegadores em 1366×768; formulário público permanece utilizável em 390×844, sem campos inacessíveis. Registrar observações de usuário. |

## Matriz de riscos (Apêndice C)

Escala: probabilidade e impacto baixos, médios ou altos; prioridade alta quando a falha bloqueia atendimento ou expõe dados. A avaliação inicial é hipótese de planejamento, não defeito observado.

| ID | Requisito | Risco | Probabilidade | Impacto | Prioridade | Resposta/teste |
|---|---|---|---|---|---|---|
| R-01 | RF-01 | Solicitação válida não persistir ou inválida ser aceita | Média | Alto | Alta | CT-001–CT-004; integração real entre API/RPC/banco. |
| R-02 | RF-02 | Acesso indevido ao painel ou sessão inválida | Média | Alto | Alta | CT-005–CT-008; unitários de sessão, integração e Selenium. |
| R-03 | RF-03 | Painel apresentar dados divergentes ou falhar com ID ausente | Média | Médio | Média | CT-009–CT-011; comparação com fixture. |
| R-04 | RF-04 | Alteração de status não deixar trilha | Média | Alto | Alta | CT-012–CT-015; verificar status e histórico. |
| R-05 | RF-05 | Total incorreto, item inválido ou remoção errada | Média | Alto | Alta | CT-016–CT-020; fronteiras e operações reversíveis. |
| R-06 | RF-06 | PDF ausente ou condições comerciais divergentes | Média | Médio | Média | CT-021–CT-024; contrato e abertura do arquivo. |
| R-07 | RNF-01 | Dados comerciais expostos ou mensagem revelar segredo | Baixa | Alto | Alta | TNF-01/TNF-02; acesso anônimo e validação segura. |
| R-08 | RNF-02 | Tempo de resposta impedir uso regular | Média | Médio | Média | TNF-03/TNF-04; 20 medições por operação, mediana e máximo. |
| R-09 | RNF-03 | Fluxo inacessível em navegador/resolução diferente | Média | Médio | Média | TNF-05/TNF-06; Chrome/Edge e resolução móvel. |

## Estratégia, níveis e técnicas (Apêndice D)

| Campo | Plano |
|---|---|
| Identificação e versão | Cópia P2 do WG Hidráulica; registrar hash Git e versão de Node/Vinext/Supabase em cada rodada. |
| Objetivo | Determinar aderência aos RF/RNF selecionados e riscos residuais a partir de resultados reproduzíveis. |
| Escopo/fora do escopo | Conforme seção acima; apenas loopback e dados fictícios. |
| Níveis e tipos | Unitário (`node:test`), integração/API (HTTP real com Supabase local e Postman), sistema/interface (Selenium), execução manual, aceitação e não funcionais. |
| Técnicas | Particionamento de equivalência, valor limite, transição de estados, casos positivos/negativos, alternativos e exceções. |
| Ambiente e ferramentas | Windows, Node 24, pnpm 12, Docker Desktop, Supabase CLI 3.1, PostgreSQL local, Vinext, Chrome/Edge, Selenium WebDriver; Postman/Newman, SonarQube e GitHub Issues/Actions. |
| Dados e restauração | `.env.local` ignorado, contas e clientes fictícios, `supabase/seed.sql`. Antes de rodada destrutiva, usar `pnpm exec supabase db reset` **somente no projeto local**, depois reprovisionar a conta fictícia. Preservar logs/evidências anteriores. |
| Responsabilidades | Tiago Gabriel Carmelino executou os casos manuais, conduziu a aceitação e conferiu a automação final com apoio de IA. Mateus Betini observou a aceitação e revisou o relatório. O professor aprovou a proposta em aula. |
| Critérios de entrada | Sistema e banco locais ativos; URL loopback; dados seed; versão e hash Git registrados; casos aprovados para execução. |
| Critérios de saída | Mínimos da seção 10 executados; todos os requisitos ligados a risco, caso, execução e evidência; falhas reais registradas/retestadas; métricas calculadas; limitações declaradas. |
| Suspensão e retomada | Suspender caso se banco/site indisponível, fixture ausente ou integração externa não isolada. Registrar `Bloqueado`, causa e versão; retomar após restaurar ambiente e repetir caso. |
| Cronograma | Aprovação da proposta em 20/08/2026; execuções manuais em 23 e 25/11/2026; aceitação, rodada automática e SonarQube em 25/11/2026; entrega em 26/11/2026. |
| Riscos do processo | Indisponibilidade do ambiente local (Docker/Supabase) ou do navegador/driver do Selenium. Preservar evidências e dados fictícios para retomar as verificações. |
| Produtos e comunicação | P01–P14 conforme [MATRIZ_CONFORMIDADE.md](./MATRIZ_CONFORMIDADE.md); versões em Git e Drive oficial; a aprovação verbal consta no Apêndice A. |

## Protocolo de execução e evidência

Cada execução manual receberá `EX-001` etc., com caso, data/hora, hash Git, ambiente, resultado Aprovado/Reprovado/Bloqueado/Não executado, resultado obtido, evidência e defeito real quando houver. A ausência de execução não será interpretada como aprovação. Para automação, registrar comando, saída, código de retorno, ambiente e vínculo `CT`/`RF`. Métricas serão calculadas apenas dessas linhas e interpretadas no relatório.

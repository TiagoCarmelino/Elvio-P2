# Aceitação e verificações não funcionais — protocolos P2

**Estado:** quatro cenários de aceitação sem decisão humana. Os seis TNF foram executados em rodada **exploratória local** com critérios preliminares; resultados brutos estão em [EVIDENCIA_TNF_EXPLORATORIA.json](./EVIDENCIA_TNF_EXPLORATORIA.json). O grupo/professor ainda precisa validar critérios, interpretação e evidências da rodada oficial. Usar somente o sistema e o Supabase locais. Registrar data, participante, versão Git, ambiente, dados, observações, resultado e evidência de cada execução. A pessoa representante deve preferencialmente não ter produzido os testes, conforme seção 9.11 do [enunciado](../P2_UNISAGRADO_texto_completo_para_Codex.txt).

## Quatro cenários de aceitação

| ID | Objetivo e papel | Dados/tarefa | Critério de sucesso | Decisão/observações |
|---|---|---|---|---|
| AC-01 | Cliente solicita orçamento | Pessoa representante preenche nome/WhatsApp fictícios e necessidade de reparo; envia no formulário. | Confirmação compreensível e solicitação visível no painel local. | Pendente: Aceito / Aceito com ressalvas / Não aceito, observações e evidência. |
| AC-02 | Atendente encontra pedido | Administrador fictício entra e localiza a solicitação de AC-01. | Identifica cliente, contato, descrição e origem sem orientação do autor dos testes. | Pendente. |
| AC-03 | Atendente prepara orçamento | Insere dois itens fictícios, revisa subtotais, edita um e remove outro. | Total e itens resultantes correspondem aos dados informados; ações são compreensíveis. | Pendente. |
| AC-04 | Atendente finaliza proposta | Define validade/condições fictícias e abre PDF da solicitação. | PDF abre e mostra cliente, item, total e condições corretas. | Pendente. |

## Guia do facilitador para a sessão com participante

**Esta sessão ainda não foi realizada.** Convide uma pessoa que não escreveu os testes; na ausência de cliente, o enunciado permite outro grupo como representante. Combine data, duração, privacidade e gravação antes. Peça autorização para anotações/capturas e não registre nome, contato ou imagem identificável sem consentimento. Use conta, solicitação e valores inteiramente fictícios.

### Preparação

1. O grupo confirma a aprovação dos critérios pelo professor, a versão/hash do sistema, ambiente local, conta fictícia e fixture limpa.
2. Separe o facilitador do observador. O facilitador lê a tarefa sem explicar como executar; o observador anota início/fim, ações, dúvidas, erros, ajuda oferecida e conclusão.
3. Explique: “Estamos avaliando o fluxo do sistema. Você pode interromper ou pedir para parar; não há resposta certa sobre você.” Não ensine antes da primeira tentativa.
4. Registre código do participante (ex.: `PART-01`, sem nome), consentimento, data/hora, sistema/navegador, hash Git e tamanho da janela. Guarde qualquer autorização em local restrito, separado das evidências públicas.

### Roteiros lidos ao participante

| Cenário | Instrução neutra | Observar sem orientar | Critério de sucesso e evidência |
|---|---|---|---|
| AC-01 — Cliente solicita orçamento | “Você precisa solicitar um orçamento para um reparo hidráulico. Envie uma solicitação usando os dados fictícios fornecidos.” | Se encontra formulário, entende campos obrigatórios, corrige erros, percebe confirmação e relata próximos passos. | A solicitação fictícia é confirmada e aparece no painel. Salvar código PART, tempo, resultado observado, notas e capturas consentidas sem dados reais. |
| AC-02 — Atendente localiza pedido | “Você recebeu uma solicitação fictícia. Entre no painel e encontre o pedido que acabou de chegar.” | Se consegue autenticar com a conta de teste e localizar cliente, descrição, origem e status sem dica. | Pessoa identifica o pedido correto e seus dados sintéticos. Guardar resultado e evidência de tela sem senha/cookie. |
| AC-03 — Atendente monta orçamento | “Para o pedido indicado, inclua dois itens com as quantidades e valores desta ficha. Altere a quantidade do primeiro e remova o segundo.” | Se entende formulários/edição/confirmação; se total e subtotais são compreensíveis; erros e ajuda solicitada. | Os itens finais e total correspondem à ficha de dados. Anotar cada valor, tempo e captura; ao final restaurar/remover os itens. |
| AC-04 — Atendente prepara proposta | “Defina a validade e as condições indicadas e gere a proposta para este pedido.” | Se localiza condições, entende validade, inicia download e consegue abrir o PDF. | PDF abre e corresponde a cliente/itens/total/condições da fixture. Guardar o PDF sintético e uma comparação dos valores; inspeção real continua pendente. |

### Encerramento e registro

Após cada tarefa, pergunte sem induzir: “O que ficou claro?”, “Onde teve dúvida ou esperava outro comportamento?” e “Você considera que concluiu a tarefa?”. Registre respostas literais curtas sem identificar a pessoa, obstáculos, ajuda oferecida e discrepâncias observadas. Peça a decisão explícita para cada cenário: **Aceito**, **Aceito com ressalvas** ou **Não aceito**, com justificativa. Não infira aceitação a partir de uma tarefa concluída.

Crie uma execução `AC-xx-EX-yyy` somente após a sessão real. Inclua versão/hash, pré-condições, valores fictícios, passos observados, esperado/obtido, decisão e referência de evidência. Se o participante não concluir, marque o resultado sem reclassificar a falha como aprovação. Restaure a fixture e registre a confirmação. Nenhum cenário possui participante, decisão ou evidência nesta versão.

## Seis verificações não funcionais (Apêndice I)

Cada `TNF` exige registrar resultado obtido, conclusão `Atende / Atende parcialmente / Não atende` e captura/log. Critérios são preliminares e devem ser aprovados pelo grupo/professor antes da rodada oficial.

| ID e categoria | Objetivo | Métrica/critério preliminar | Procedimento e dados/repetições | Resultado/conclusão/evidência |
|---|---|---|---|---|
| TNF-01, segurança básica | Confirmar proteção de dados comerciais | GET anônimo de lista, itens, histórico e PDF retorna 401, sem payload privado | No loopback, consultar quatro rotas sem cookie; guardar status e corpo expurgado | Exploratório: 4 respostas 401, sem cliente no corpo. Rodada oficial pendente. |
| TNF-02, segurança básica | Confirmar validação sem exposição de segredo | POST inválidos de solicitação, status e item retornam 400; resposta sem chave/token | Três entradas fictícias inválidas; guardar corpo e cabeçalhos sem credenciais | Exploratório: 3 respostas 400, sem nomes de campos de segredo no corpo. Rodada oficial pendente. |
| TNF-03, desempenho básico | Medir início e login | Cinco medições por operação; p95 ≤3 s preliminar | HTTP local, máquina registrada; cinco repetições por rota; cache/ordem da rodada devem ser interpretados | Exploratório: p95 início 38,4 ms e login 74,9 ms. Rodada oficial pendente. |
| TNF-04, desempenho básico | Medir consulta comercial | Cinco medições da lista; p95 ≤3 s preliminar | Administrador local, fixture estável, cinco repetições; anotar tempo e ambiente | Exploratório: p95 68 ms. Rodada oficial pendente. |
| TNF-05, compatibilidade | Usar envio e login em Chrome e Edge desktop | Fluxos completam em ambos a 1366×768 sem campo inacessível | Uma execução automatizada por navegador com dados fictícios; anotar versões. Repetição adicional/observação humana ficam para rodada oficial | Exploratório: envio e login passaram no Chrome 157.0.8103.51 e Edge 157.0.4341.46. |
| TNF-06, usabilidade/compatibilidade | Usar formulário em largura móvel | Campos, feedback e envio acessíveis a 390×844; observações do participante | Chrome com emulação 390×844, envio fictício; pessoa representante observa tarefa e dificuldades na rodada oficial | Exploratório: envio passou, largura interna e largura do documento 390 px, sem rolagem horizontal. Observação humana pendente. |

**Ambiente exploratório:** Windows/Node 24.22.3, AMD Ryzen 5 7600X, 16 GB RAM, Vinext em `localhost:3000`, Supabase local em `127.0.0.1:54321`, seed fictícia e conta administrativa local. O ensaio mediu latência HTTP do cliente no mesmo computador, não desempenho de usuário remoto; os cinco valores e data UTC estão no JSON. Os critérios do professor/grupo, repetição com versão Git anotada e avaliação humana ainda precisam constar na execução oficial. Não medir produção nem executar carga intensa.

## Formulário em branco da sessão de aceitação

Preencher uma cópia por participante/sessão somente durante a realização. Não preencher decisões por inferência e não registrar nome, contato, imagem identificável ou fala pessoal sem autorização adequada. Os cenários de teste continuam sem execução até que um representante real participe.

| Identificação da sessão | Preenchimento durante a sessão |
|---|---|
| Código do participante (sem nome) | Pendente |
| Consentimento para anotações/capturas | Pendente; confirmar antes de iniciar |
| Data e horários de início/fim | Pendente |
| Facilitador / observador | Pendente; integrantes do grupo a definir |
| Sistema, branch e commit | Pendente; registrar o estado efetivamente testado |
| Ambiente, navegador/versão e viewport | Pendente |
| Dados fictícios e fixture usada | Pendente |
| Ajuda ou instrução adicional oferecida | Registrar o que ocorreu; não preencher previamente |
| Referências das evidências consentidas | Pendente; salvar por cenário, sem dados pessoais |
| Restauração da fixture ao fim | Pendente; descrever e verificar sem `db reset` não revisado |

| Cenário | Início/fim | Concluiu sem ajuda? | Esperado | Obtido/observações literais sem identificação | Decisão explícita | Evidência |
|---|---|---|---|---|---|---|
| AC-01 | Pendente | Pendente | Confirmação e solicitação no painel | Pendente | Pendente: Aceito / Aceito com ressalvas / Não aceito | Pendente |
| AC-02 | Pendente | Pendente | Encontrar pedido correto sem orientação | Pendente | Pendente: Aceito / Aceito com ressalvas / Não aceito | Pendente |
| AC-03 | Pendente | Pendente | Dois itens, edição/remoção e total correto | Pendente | Pendente: Aceito / Aceito com ressalvas / Não aceito | Pendente |
| AC-04 | Pendente | Pendente | Condições e PDF coerentes com a ficha | Pendente | Pendente: Aceito / Aceito com ressalvas / Não aceito | Pendente |

**Situação:** 0/4 participantes/sessões/decisões registrados. Este formulário é somente preparação, não é evidência de aceitação.

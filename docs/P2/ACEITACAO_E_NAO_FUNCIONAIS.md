# Aceitação e verificações não funcionais — protocolos P2

**Estado:** AC-01–AC-04 foram realizados em 25/11/2026 com PART-01 e os quatro foram aceitos. Os seis TNF foram executados em rodada **exploratória local** com critérios preliminares; resultados brutos estão em [EVIDENCIA_TNF_EXPLORATORIA.json](./EVIDENCIA_TNF_EXPLORATORIA.json). O grupo/professor ainda precisa validar critérios, interpretação e evidências da rodada oficial. Usar somente o sistema e o Supabase locais. Registrar data, participante, versão Git, ambiente, dados, observações, resultado e evidência de cada execução. A pessoa representante deve preferencialmente não ter produzido os testes, conforme seção 9.11 do [enunciado](../P2_UNISAGRADO_texto_completo_para_Codex.txt).

## Quatro cenários de aceitação

| ID | Objetivo e papel | Dados/tarefa | Critério de sucesso | Decisão/observações |
|---|---|---|---|---|
| AC-01 | Cliente solicita orçamento | Pessoa representante preenche nome/WhatsApp fictícios e necessidade de reparo; envia no formulário. | Confirmação compreensível e solicitação visível no painel local. | Aceito — PART-01 concluiu sem ajuda. [Registro/evidências](./REGISTRO_ACEITACAO_PART-01_20261125.md). |
| AC-02 | Atendente encontra pedido | Administrador fictício entra e localiza a solicitação de AC-01. | Identifica cliente, contato, descrição e origem sem orientação do autor dos testes. | Aceito — PART-01 concluiu sem ajuda, com senha colada pelo facilitador conforme previsto. [Registro/evidências](./REGISTRO_ACEITACAO_PART-01_20261125.md). |
| AC-03 | Atendente prepara orçamento | Insere dois itens fictícios, revisa subtotais, edita um e remove outro. | Total e itens resultantes correspondem aos dados informados; ações são compreensíveis. | Aceito — PART-01 concluiu sem ajuda; totais conferidos. [Registro/evidências](./REGISTRO_ACEITACAO_PART-01_20261125.md). |
| AC-04 | Atendente finaliza proposta | Define validade/condições fictícias e abre PDF da solicitação. | PDF abre e mostra cliente, item, total e condições corretas. | Aceito — concluiu com uma orientação sobre “Observações comerciais”. [Registro/evidências](./REGISTRO_ACEITACAO_PART-01_20261125.md). |

## Guia do facilitador para a sessão com participante

**Protocolo para sessões futuras.** A sessão PART-01 descrita no registro vinculado já foi realizada; use este roteiro em novas sessões, se necessário. Convide uma pessoa que não escreveu os testes; na ausência de cliente, o enunciado permite outro grupo como representante. Combine data, duração, privacidade e gravação antes. Peça autorização para anotações/capturas e não registre nome, contato ou imagem identificável sem consentimento. Use conta, solicitação e valores inteiramente fictícios.

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

Para futuras sessões, use ID próprio e registre versão/hash, pré-condições, dados fictícios, passos, esperado/obtido, decisão e evidências. Se o participante não concluir, registre sem reclassificar como aprovação. A sessão PART-01 concluída está separada no registro vinculado; não substitua suas evidências.

## Seis verificações não funcionais (Apêndice I)

Cada `TNF` exige registrar resultado obtido, conclusão `Atende / Atende parcialmente / Não atende` e captura/log. Critérios são preliminares e devem ser aprovados pelo grupo/professor antes da rodada oficial.

| ID e categoria | Objetivo | Métrica/critério preliminar | Procedimento e dados/repetições | Resultado/conclusão/evidência |
|---|---|---|---|---|
| TNF-01, segurança básica | Confirmar proteção de dados comerciais | GET anônimo de lista, itens, histórico e PDF retorna 401, sem payload privado | No loopback, consultar quatro rotas sem cookie; guardar status e corpo expurgado | Exploratório: 4 respostas 401, sem cliente no corpo. Rodada oficial pendente. |
| TNF-02, segurança básica | Confirmar validação sem exposição de segredo | POST inválidos de solicitação, status e item retornam 400; resposta sem chave/token | Três entradas fictícias inválidas; guardar corpo e cabeçalhos sem credenciais | Exploratório: 3 respostas 400, sem nomes de campos de segredo no corpo. Rodada oficial pendente. |
| TNF-03, desempenho básico | Medir início e login | 20 medições por operação; máximo ≤3 s preliminar; informar máximo e mediana | HTTP local, máquina registrada; 20 repetições por rota; guardar todas as amostras e informar máximo e mediana (não reportar p95) | Exploração histórica: 5 amostras por operação; o JSON original rotulou o maior valor como `p95Ms`, rótulo que não deve ser usado na rodada final. Rodada final (20 amostras, máximo e mediana) pendente. |
| TNF-04, desempenho básico | Medir consulta comercial | 20 medições da lista; máximo ≤3 s preliminar; informar máximo e mediana | Administrador local, fixture estável, 20 repetições; guardar todas as amostras e anotar máximo, mediana e ambiente | Exploração histórica: 5 amostras; o maior valor foi armazenado como `p95Ms` no JSON original, sem tratá-lo como percentil válido. Rodada final (20 amostras, máximo e mediana) pendente. |
| TNF-05, compatibilidade | Usar envio e login em Chrome e Edge desktop | Fluxos completam em ambos a 1366×768 sem campo inacessível | Uma execução automatizada por navegador com dados fictícios; anotar versões. Repetição adicional/observação humana ficam para rodada oficial | Exploratório: envio e login passaram no Chrome 157.0.8103.51 e Edge 157.0.4341.46. |
| TNF-06, usabilidade/compatibilidade | Usar formulário em largura móvel | Campos, feedback e envio acessíveis a 390×844; observações do participante | Chrome com emulação 390×844, envio fictício; pessoa representante observa tarefa e dificuldades na rodada oficial | Exploratório: envio passou, largura interna e largura do documento 390 px, sem rolagem horizontal. Observação humana pendente. |

**Ambiente exploratório:** Windows/Node 24.22.3, AMD Ryzen 5 7600X, 16 GB RAM, Vinext em `localhost:3000`, Supabase local em `127.0.0.1:54321`, seed fictícia e conta administrativa local. O ensaio mediu latência HTTP do cliente no mesmo computador, não desempenho de usuário remoto; as cinco amostras históricas e data UTC estão no JSON; não representam a rodada final de 20 amostras. Os critérios do professor/grupo, repetição com versão Git anotada e avaliação humana ainda precisam constar na execução oficial. Não medir produção nem executar carga intensa.

## Formulário em branco da sessão de aceitação

Preencher uma cópia por participante/sessão somente durante a realização. Não preencher decisões por inferência e não registrar nome, contato, imagem identificável ou fala pessoal sem autorização adequada. O participante foi externo ao curso; ele está anonimizado como PART-01.

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

**Situação:** os quatro cenários foram executados e aceitos por PART-01. Este formulário em branco permanece como modelo para sessões futuras; os resultados desta sessão estão no registro vinculado.


### Runner da rodada final

O script [scripts/p2-rodada-final.ps1](../../scripts/p2-rodada-final.ps1) executa, em sequência, cobertura unitária/LCOV, integração local, Selenium, Newman e os seis TNF. Para TNF-03 e TNF-04, usa 20 repetições por operação e registra todas as amostras, o máximo e a mediana. Os logs, resumo e evidências LCOV/JSON/Selenium são organizados em docs/P2/EVIDENCIAS_AUTOMACAO/<data>/<hora>-<commit>/. Antes de executá-lo, conclua os testes manuais e confirme que .env.local aponta apenas para HTTP loopback; o script não faz reset do banco. Esta preparação foi revisada sem executar o runner.


## Sessão concluída — 25/11/2026

[Registro detalhado da sessão PART-01](./REGISTRO_ACEITACAO_PART-01_20261125.md): AC-01–AC-04 aceitos (4/4). A sessão foi facilitada por Tiago Gabriel Carmelino e observada por Mateus Betini. Consentimento foi confirmado às 15:10, depois do AC-01, conforme registrado. O horário inicial do AC-01 não foi anotado; os prints AC-01 e o print 9 do AC-04 não mostram relógio. A dúvida sobre “Observações comerciais” está registrada como achado de usabilidade, com sugestão de incluir “(opcional)” no rótulo, não como defeito. A observação cosmética de rótulos PDF sem acento já constava nos testes manuais.

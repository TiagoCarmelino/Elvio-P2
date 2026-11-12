# Aceitação e verificações não funcionais — protocolos P2

**Estado:** quatro cenários de aceitação sem decisão humana. Os seis TNF foram executados em rodada **exploratória local** com critérios preliminares; resultados brutos estão em [EVIDENCIA_TNF_EXPLORATORIA.json](./EVIDENCIA_TNF_EXPLORATORIA.json). O grupo/professor ainda precisa validar critérios, interpretação e evidências da rodada oficial. Usar somente o sistema e o Supabase locais. Registrar data, participante, versão Git, ambiente, dados, observações, resultado e evidência de cada execução. A pessoa representante deve preferencialmente não ter produzido os testes, conforme seção 9.11 do [enunciado](../P2_UNISAGRADO_texto_completo_para_Codex.txt).

## Quatro cenários de aceitação

| ID | Objetivo e papel | Dados/tarefa | Critério de sucesso | Decisão/observações |
|---|---|---|---|---|
| AC-01 | Cliente solicita orçamento | Pessoa representante preenche nome/WhatsApp fictícios e necessidade de reparo; envia no formulário. | Confirmação compreensível e solicitação visível no painel local. | Pendente: Aceito / Aceito com ressalvas / Não aceito, observações e evidência. |
| AC-02 | Atendente encontra pedido | Administrador fictício entra e localiza a solicitação de AC-01. | Identifica cliente, contato, descrição e origem sem orientação do autor dos testes. | Pendente. |
| AC-03 | Atendente prepara orçamento | Insere dois itens fictícios, revisa subtotais, edita um e remove outro. | Total e itens resultantes correspondem aos dados informados; ações são compreensíveis. | Pendente. |
| AC-04 | Atendente finaliza proposta | Define validade/condições fictícias e abre PDF da solicitação. | PDF abre e mostra cliente, item, total e condições corretas. | Pendente. |

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

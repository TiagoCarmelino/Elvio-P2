# Aceitação e verificações não funcionais — protocolos P2

**Estado:** planejado, sem decisão humana de aceitação nem resultados dos seis TNF. Usar somente o sistema e o Supabase locais. Registrar data, participante, versão Git, ambiente, dados, observações, resultado e evidência de cada execução. A pessoa representante deve preferencialmente não ter produzido os testes, conforme seção 9.11 do [enunciado](../P2_UNISAGRADO_texto_completo_para_Codex.txt).

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
| TNF-01, segurança básica | Confirmar proteção de dados comerciais | GET anônimo de lista, itens, histórico e PDF retorna 401, sem payload privado | No loopback, consultar quatro rotas sem cookie; guardar status e corpo expurgado | Pendente |
| TNF-02, segurança básica | Confirmar validação sem exposição de segredo | POST inválidos de solicitação, status e item retornam 400; resposta sem chave/token | Três entradas fictícias inválidas; guardar corpo e cabeçalhos sem credenciais | Pendente |
| TNF-03, desempenho básico | Medir início e login | Cinco medições por operação; p95 ≤3 s preliminar | Chrome local, máquina e carga registrados; cache/ordem documentados; cinco repetições por rota | Pendente |
| TNF-04, desempenho básico | Medir consulta comercial | Cinco medições da lista; p95 ≤3 s preliminar | Administrador local, fixture estável, cinco repetições; anotar tempo e ambiente | Pendente |
| TNF-05, compatibilidade | Usar envio e login em Chrome e Edge desktop | Fluxos completam em ambos a 1366×768 sem campo inacessível | Duas execuções por navegador com dados fictícios; anotar versões e capturas | Pendente |
| TNF-06, usabilidade/compatibilidade | Usar formulário em largura móvel | Campos, feedback e envio acessíveis a 390×844; observações do participante | Tarefa guiada com pessoa representante, uma ou mais tentativas; registrar tempo, dificuldades e decisão | Pendente |

**Ambiente padrão:** Windows, Vinext em `localhost:3000`, Supabase local em `127.0.0.1:54321`, seed fictícia e conta administrativa local; versões exatas, hardware e commit devem ser anotados na execução. Não medir produção, não executar carga intensa e não transformar resultados de API/Selenium em conclusão TNF sem a rodada e seus critérios próprios.

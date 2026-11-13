# Progresso da preparação da P2

**Atualizado em:** 12/11/2026  
O PDF oficial [57402f9d-2b95-418b-850a-b87c479c7b4f.pdf](./57402f9d-2b95-418b-850a-b87c479c7b4f.pdf) foi preservado sem alterações.

## Retomada técnica e checkpoint — 12/11/2026

> Registro histórico: o HEAD `7f1a2b7` descrito abaixo era o estado de abertura daquela rodada. O checkpoint posterior e HEAD atual no início desta preparação é `8517a76`; os quatro arquivos soltos preexistentes em `docs/` continuam fora do escopo.

- Inspecionados `PROGRESSO.md`, [MATRIZ_CONFORMIDADE.md](./MATRIZ_CONFORMIDADE.md), checklist e Git. Branch `p2-unisagrado`, HEAD `7f1a2b7`; alterações anteriores de LCOV/workflow/testes preservadas. Quatro arquivos DOC/DOCX/MSI em `docs/` já estavam soltos e foram mantidos fora do escopo; não foram adicionados ao checkpoint.
- Concluída a configuração LCOV: `pnpm run test:coverage` passou **8/8**, sem skips; c8 mediu 97,44% linhas, 85,36% ramos e 100% funções nos três módulos `app/lib` instrumentados. O normalizador confirma os caminhos `SF:` e limita o relatório a `app/lib/`.
- SonarScanner NPM 5.1.0 leu `coverage/p2/lcov.info`; processamento da tarefa `00925064-663f-4c9b-b156-3ff46b073fb7` concluiu `SUCCESS`. Sonar local reportou **27,1%** (229/1.020 linhas), 0 bugs, 0 code smells, 0 vulnerabilidades, 0% duplicação e Quality Gate `OK`. A taxa da suíte e a taxa do projeto têm escopos diferentes; a suíte não cobre a maioria das fontes. Evidência em [EVIDENCIA_AUDITORIA_SONAR.json](./EVIDENCIA_AUDITORIA_SONAR.json). O scanner rodou com worktree sujo/revisão `7f1a2b7`; repetir após o checkpoint.
- GitHub Actions revisado e formatado; `pipefail` foi adicionado para que a falha de testes não seja escondida pelo `tee`. `pnpm install --frozen-lockfile` foi preservado da rodada anterior. O workflow **não** foi executado no GitHub: branch sem remoto, sem publicação ou envio.
- Revalidação nesta sessão: `test` **8/8**; integração/API local **8/8** depois de iniciar Vinext, Supabase Auth local HTTP 200; Selenium **4/4**; Newman **6 requisições/12 asserções**; não funcionais **6/6**; lint exit 0 com **9 avisos** preexistentes de `<img>` após excluir `coverage/` gerado; TypeScript exit 0; build exit 0, com aviso de classificação dinâmica Vinext. Na primeira tentativa, API falhou porque Vinext ainda não escutava; `localhost:3000/login` passou a responder 200 após iniciar o servidor. Nenhuma chamada a produção.
- A matriz, auditoria, checklist e [TDD_CI_QUALIDADE.md](./TDD_CI_QUALIDADE.md) foram alinhados à quarta análise Sonar. A estimativa de preparação subiu de 43% para **45%**, usando o mesmo cálculo P01–P14, sem equivaler a nota.
- Entregáveis de submissão permanecem em preparo, não “finais”: dependem de identificação do grupo, 24 execuções manuais, avaliação do representante, aprovação do professor, apresentação/assinaturas e pasta oficial. A planilha existente contém os indicadores preparados; a medição LCOV é registrada na evidência e nos documentos para não confundir os 8 indicadores acadêmicos.
- A revisão automatizada do workflow e `package.json` passou no Prettier; `pipefail` preserva falhas de teste através do `tee`. Links Markdown relativos e JSON passaram na verificação. Checkpoint seletivo criado: `b9e7ddd` (`test: integrar cobertura LCOV e revisar CI P2`); inclui somente arquivos desta P2 e preserva sem stage os quatro arquivos preexistentes soltos em `docs/`. Sonar foi repetido após esse commit: tarefa `8e3a51ab-5006-4c4d-85b8-e10c847bee85`, `SUCCESS`, revisão `b9e7ddd`, mesmas métricas LCOV e Quality Gate local `OK`. Evidências em [EVIDENCIA_AUDITORIA_SONAR.json](./EVIDENCIA_AUDITORIA_SONAR.json) e [EVIDENCIA_VALIDACAO_LOCAL_20261112.md](./EVIDENCIA_VALIDACAO_LOCAL_20261112.md). Nada foi publicado ou enviado ao GitHub.

## Preparação de entrega final — 12/11/2026

- Relida integralmente a transcrição textual das 26 páginas, incluindo os Apêndices A–M, e conferida contra os produtos P01–P14, quantidades mínimas, formatos, estrutura Drive, relatório e apresentação. O PDF oficial permanece preservado.
- Preparados [GUIA_EXECUCAO_MANUAL.md](./GUIA_EXECUCAO_MANUAL.md) com passos, resultados esperados e evidências para CT-001–CT-024; [ACEITACAO_E_NAO_FUNCIONAIS.md](./ACEITACAO_E_NAO_FUNCIONAIS.md) com protocolo e quatro cenários; [ROTEIRO_APRESENTACAO_P2.md](./ROTEIRO_APRESENTACAO_P2.md) com pauta de 13 minutos; e [ESTRUTURA_ENTREGA.md](./ESTRUTURA_ENTREGA.md) mapeando os itens para a pasta oficial. Continua 0/24 manual e 0/4 aceitação; nenhum resultado humano foi preenchido.
- Criados em [ARTEFATOS_PREPARACAO/](./ARTEFATOS_PREPARACAO/) o relatório DOCX/PDF com capa, folha de identificação, sumário, seções oficiais 1–13, referências e status A–M, e apresentação PPTX/PDF de 10 slides. Todos estão marcados como rascunho e não submetíveis. O relatório foi renderizado e as quatro páginas inspecionadas; apresentação validada estruturalmente, importada novamente e as 10 páginas do PDF/deck inspecionadas.
- Corrigida a descrição dos testes unitários: a suíte isolada foi 8/8, composta de sete candidatos unitários mais um contrato simulado; o contrato não é contado como integração real. Integração/API 8/8, Selenium 4/4 e Newman 6 requisições/12 asserções são resultados históricos da versão registrada, não reexecutados nesta preparação.
- A planilha [CONTROLE_P2.xlsx](./CONTROLE_P2.xlsx) foi aberta em leitura, com 5 abas, 8 fórmulas do painel, 27 fórmulas na rastreabilidade, caches calculados e sem erros de fórmula. A exportação de prévia mostrou que a impressão em PDF divide algumas tabelas entre páginas; o XLSX editável é a fonte canônica e não foi regravado. Execução manual continua 0/24; não chamar os indicadores de aceitação integral.
- Matriz e checklist atualizados para distinguir arquivos preparados de produtos concluídos. Nenhum teste funcional, lint, TypeScript ou build foi executado nesta preparação porque alterações futuras no TCC podem mudar os fluxos; resultados históricos exigem nova validação antes da entrega. Nenhuma publicação/alteração no GitHub nem acesso a produção ocorreu.
- Pendências humanas/técnicas: completar ficha A, aprovação/segunda opção, aceite de `node:test`, identificação e diário do grupo; executar 24 casos manuais, quatro sessões de aceitação e TNF aprovados na versão final; abrir Issue/exportar relatório; rodar CI remoto e demonstrar falha controlada seguida de sucesso; consolidar evidências, métricas, vídeo e permissões Drive; colher assinaturas e entregar oficialmente.

## Auditoria rigorosa em andamento — 12/11/2026

- Relidas as 26 páginas da transcrição, incluindo Apêndices A–M. Git estava limpo em `p2-unisagrado`; Supabase e SonarQube locais ativos. O site em `localhost:3000` havia parado entre sessões e foi reiniciado com Vinext; nenhuma conexão de produção foi usada.
- Detectada contaminação de descoberta de testes/lint pelo worktree temporário `tmp/sonar-baseline`: antes da correção, `pnpm run test` reportou 15 aprovados e 19 ignorados por duplicar arquivos; lint mostrou 18 avisos. Os scripts agora delimitam os três arquivos de testes isolados e ignoram `tmp/` no lint. Repetição real: 8 aprovados, 0 ignorados/falhas; lint exit 0, 9 avisos existentes. TypeScript exit 0.
- Adicionados casos HTTP reais para senha inválida, assinatura/conteúdo básico do PDF e limites inválidos da validade. A primeira tentativa de senha inválida falhou por expectativa incorreta da automação: a rota redireciona com 303 para `/login?erro=credenciais`, sem cookie; a expectativa foi corrigida. Repetição `test:local`: 8/8 aprovados, 0 falhas. Isso não prova abertura ou legibilidade visual do PDF.
- Investigados os quatro alertas Sonar anteriores: a regex de remoção de padding Base64 tinha retrocesso superlinear em entrada artificial; substituída por laço linear em `admin-auth.ts`. A regra de caracteres de controle em `proposal-pdf.ts` sinalizava uma classe usada intencionalmente para filtrar texto; substituída por filtro de códigos de caracteres com semântica equivalente. Nova análise Sonar após commit ainda pendente neste momento; não declarar alertas resolvidos sem scanner.
- Auditoria de consistência, reexecução Selenium/não funcionais/Postman/build, artefatos e checklist estão em andamento. As 24 execuções manuais e quatro decisões de aceitação seguem **pendentes**, sem reaproveitar automação como evidência manual.
- Repetições após as correções: Selenium **4/4**, não funcionais **6/6**, Newman **6 requisições e 12 verificações**, build exit 0 com aviso de classificação Vinext. O teste NF gravou novo `test-results/p2-nonfunctional-local.json` local; o JSON versionado anterior continua identificado como rodada anterior, sem substituição silenciosa. As suítes de navegador enviam solicitações fictícias ao banco local e devem ser restauradas antes da entrega final, preservando evidências.
- Terceira análise SonarQube do commit `47222f7`: processamento `SUCCESS`, 0 bugs, 0 code smells, 0 vulnerabilidades, 0 alertas abertos, 0% de cobertura reportada por ausência de LCOV; dados em [EVIDENCIA_AUDITORIA_SONAR.json](./EVIDENCIA_AUDITORIA_SONAR.json). O scanner também detectou o `tsconfig.json` do worktree temporário, mas não analisou arquivos desse tsconfig; o escopo de fontes continuou 48 arquivos indexados. Revisão dos dois padrões de código e limites consta em [AUDITORIA_P2.md](./AUDITORIA_P2.md).
- A [planilha](./CONTROLE_P2.xlsx) foi recalculada para 25 casos automatizados executados (7 unitários, 8 integração/API, 4 Selenium, 6 TNF) e cobertura de requisitos com teste manual **ou** automatizado executado, conforme §9.13. Painel observado: execução manual 0%, cobertura por vínculo 100%, automação do escopo planejado 100%, 1 defeito médio corrigido/retestado; aprovação/reprovação manual pendentes. Inspeção de fórmulas sem erros e prévias visuais de Painel, Rastreabilidade e Automação revisadas. Esses 100% não comprovam aceitação funcional integral nem substituem execução humana.
- Fortalecidos API-02 (IDs da lista antes/depois de entrada inválida), API-07 (PDF também abre no parser) e API-08 (fronteiras 0/1/365/366 e restauração). `test:local` repetido: **8/8**, 0 falhas. Nomes dos casos corrigidos para não alegar inspeção de conteúdo do PDF. Criados [AUDITORIA_P2.md](./AUDITORIA_P2.md), [CHECKLIST_FINAL.md](./CHECKLIST_FINAL.md) e [FORMULARIOS_HUMANOS.md](./FORMULARIOS_HUMANOS.md), todos distinguindo evidência de pendência.
- Exportado [DEFEITOS_EXPORTACAO.csv](./DEFEITOS_EXPORTACAO.csv) com D-001 real e campos do Apêndice G, sem URL de Issue fictícia. DOCX/PDF do relatório, PPTX/PDF da apresentação e vídeo seguem pendentes porque os resultados manuais, decisões e identificações ainda não existem; o rascunho técnico não deve ser rotulado como versão final.
- Fechamento das validações nesta auditoria: `test` **8/8** sem skips; `test:local` **8/8**; Selenium **4/4**; não funcionais **6/6**; Newman **6 requisições/12 asserções**; lint exit 0 com **9 avisos preexistentes**; TypeScript exit 0; build exit 0 com aviso Vinext conhecido. Ferramenta de problemas não apontou erros nos três arquivos de código/teste alterados. Verificador local examinou **109 links relativos** dos documentos P2, nenhum ausente. CSV D-001 abriu com 1 registro e 17 colunas. Resultados representam execuções locais nesta cópia; nenhum deles é evidência de CI remoto ou execução manual.
- Parecer em [AUDITORIA_P2.md](./AUDITORIA_P2.md): **43% estimados** por pontuação explícita dos 14 produtos, não nota acadêmica. Principais bloqueios e ações humanas em [CHECKLIST_FINAL.md](./CHECKLIST_FINAL.md). A implementação desta rodada ficou restrita à branch P2; sincronização futura do TCC exige diff/merge revisado e repetição das verificações.

## Histórico das etapas anteriores (resultados na data em que ocorreram)

## Ciclo TDD e fechamento técnico — 12/11/2026

- Criado [ENTREGA_E_RELATORIO_RASCUNHO.md](./ENTREGA_E_RELATORIO_RASCUNHO.md) com README da pasta 00 na ordem oficial, mapeamento das 17 subpastas, roteiro das 13 seções do relatório e sequência sugerida para apresentação. Nenhum DOCX/PDF/PPTX, vídeo ou submissão foi declarado pronto; resultados manuais, participantes e decisão do professor continuam faltando.
- **SonarQube local executado:** imagem Community em contêiner `p2-sonarqube-local`, porta `127.0.0.1:9000`, limite de 4 GB, H2 temporário e sem produção. A configuração local `sonar.telemetry.enable=false` foi confirmada por log `Sharing of SonarQube statistics is disabled`. Token/senha exclusivos do contêiner ficam em `.env.sonar.local`, ignorado; scanner NPM 5.1.0 usou `SONAR_TOKEN` no ambiente, sem imprimir o segredo. Foram processadas duas análises no mesmo projeto/escopo: baseline `a038129` em worktree temporário e após TDD `caf0a0d`, ambas em 12/11/2026 UTC. [EVIDENCIA_SONAR_LOCAL.json](./EVIDENCIA_SONAR_LOCAL.json) contém IDs, horários, métricas e achados obtidos da API local. Antes/depois: 3 bugs sinalizados, 1 code smell, 0 vulnerabilidades, 0% de cobertura **sem LCOV importado**, 0% de duplicação, 5.464 linhas; sem mudança nas métricas. Gate `OK` avalia somente `new_violations=0` nesta configuração. Os quatro achados são alertas da ferramenta, não defeitos reproduzidos; revisar antes de abrir Issue. Detalhes em [TDD_CI_QUALIDADE.md](./TDD_CI_QUALIDADE.md).
- [sonar-project.properties](../../sonar-project.properties) fixa chave e escopo P2 para futuras análises locais. `.scannerwork/` foi ignorado. Nenhum ajuste global do Windows foi feito. O contêiner local continua ativo nesta sessão; o banco H2 se perde se o contêiner for removido, então preservar o JSON versionado como evidência e usar `docker start p2-sonarqube-local` quando necessário.
- `pnpm.cmd --store-dir <store temporário existente> install --frozen-lockfile` confirmou o lockfile atualizado (exit 0). Após a rodada TDD, `http://localhost:3000/login` e `http://127.0.0.1:54321/auth/v1/health` responderam 200. O workflow foi ajustado para publicar o log dos testes como artefato do GitHub Actions; publicação remota não ocorreu.
- Identificado defeito verificável D-001: `isCommercialStatus('toString')` devolvia `true` por usar o operador `in` em objeto com protótipo. O teste RED em `83d519e` falhou exatamente com `true !== false` (0/1); o código ainda não havia sido corrigido. GREEN em `68de98e` trocou por verificação de chave própria e passou 1/1. REFACTOR em `a421b47` simplificou para `Object.hasOwn` e adicionou verificação HTTP 400 para `status=toString` dentro de API-05; unitário 1/1, `test:local` 5/5 e TypeScript sem erro. O efeito HTTP antes da correção não foi medido. Detalhes em [DEFEITOS.md](./DEFEITOS.md) e [TDD_CI_QUALIDADE.md](./TDD_CI_QUALIDADE.md). O TCC original não foi editado.
- A suíte isolada após TDD: `pnpm.cmd run test` — **8 aprovados**, 0 falhas, 11 ignorados por exigirem ambiente local explícito. São 7 testes unitários candidatos para o mínimo de 6, mais 1 contrato HTTP simulado que não conta como integração. `pnpm.cmd run lint` — 0 erros e os mesmos 9 avisos; `pnpm.cmd run build` — exit 0; `pnpm.cmd exec tsc --noEmit` — exit 0. Uma revisão do professor ainda é necessária para aceitar `node:test` como equivalente a JUnit.
- Duas rodadas locais de ESLint (antes/depois do TDD) foram comparadas: 0 erros e 9 avisos em ambas. Isso não comprova SonarQube; ferramenta oficial, responsáveis e plano de melhoria final continuam pendentes. O workflow CI foi escrito, mas não executado em GitHub Actions. O teste RED local não substitui a falha controlada no pipeline exigida pelo professor.
- [CONTROLE_P2.xlsx](./CONTROLE_P2.xlsx) foi atualizado para 16 casos automatizados planejados/executados localmente (7 unitários, 5 integração, 4 Selenium) e 1 defeito real de severidade média, corrigido e retestado tecnicamente. A fórmula de reabertura agora usa **defeitos retestados** no denominador, conforme §9.13. Fórmulas inspecionadas sem erros e abas alteradas renderizadas; resultados manuais ainda 0/24. A abertura de D-001 em GitHub Issues/Jira depende do remoto/grupo.


## Implementação e validação dos mínimos automatizados — 12/11/2026

- **Verificações não funcionais exploratórias:** `pnpm.cmd run test:nonfunctional` passou 6/6 em segurança básica, desempenho e compatibilidade. [EVIDENCIA_TNF_EXPLORATORIA.json](./EVIDENCIA_TNF_EXPLORATORIA.json) preserva data UTC, ambiente e medições reais. TNF-01: quatro respostas anônimas 401; TNF-02: três entradas inválidas 400, sem campos de segredo na resposta; TNF-03: cinco medições HTTP para início (p95 38,4 ms) e login (p95 74,9 ms); TNF-04: cinco medições da lista (p95 68 ms); TNF-05: envio e login em Chrome 157.0.8103.51 e Edge 157.0.4341.46 a 1366×768; TNF-06: envio no Chrome emulado 390×844, sem rolagem horizontal. Na primeira rodada, o redimensionamento headless produziu largura real de **500 px**, apesar de solicitar 390; foi substituído por emulação móvel do Chrome e a suíte repetida com largura observada de 390 px. Não se usam resultados dessa primeira tentativa para a conclusão TNF-06. As medições são locais e os critérios ainda são preliminares; observação humana e aceite oficial pendem.
- A execução TNF-05 e TNF-06 enviou novos pedidos **fictícios** ao banco isolado. A evidência JSON não contém senha, cookie ou chave. O script exige URLs HTTP de loopback. A suíte padrão `pnpm run test` agora descobrirá esses seis testes, mas os ignorará sem `.env.local`; `test:nonfunctional` os executa explicitamente.
- O checkpoint Git anterior a esta extensão é `a038129` (`test: preparar matriz e automacao P2 local`), na branch P2. Um novo commit será feito após validar esta extensão.

- **Fechamento da rodada técnica:** `pnpm.cmd run test` — 7 aprovados, 0 falhas, 5 integrações ignoradas por não carregar `.env.local` nesse comando; `pnpm.cmd run test:local` — 5/5; `pnpm.cmd run test:selenium` — 4/4 (rodada final, após limpeza do item temporário reservado pela suíte); `pnpm.cmd run test:postman` — 6 requisições/12 verificações aprovadas; `pnpm.cmd run lint` — exit 0, 0 erros e 9 avisos antigos de `<img>`; `pnpm.cmd exec tsc --noEmit` — exit 0; `pnpm.cmd run build` — exit 0, com aviso Vinext já conhecido de classificação estática. Todos esses números foram observados nesta sessão.
- Preparados [postman/P2_WG_Hidraulica.postman_collection.json](./postman/P2_WG_Hidraulica.postman_collection.json) e [postman/P2_local.postman_environment.json](./postman/P2_local.postman_environment.json), sem senha exportada, mais runner local `scripts/p2-postman-local.mjs`. A primeira execução Newman falhou por colisão do identificador `data` no script, deixando `requestId` vazio e 404 subsequentes; corrigido para nomes exclusivos e repetido com 12/12 verificações. O Postman gráfico não foi executado.
- Criado workflow `.github/workflows/p2-ci.yml` com instalação congelada, testes isolados, lint, TypeScript e build para branch P2. A execução remota, inclusive falha controlada e correção, ainda não ocorreu porque não há remoto configurado. A execução local das etapas não é evidência de pipeline GitHub Actions.
- Criada [CONTROLE_P2.xlsx](./CONTROLE_P2.xlsx) editável com 24 linhas de casos/execuções manuais, 9 requisitos/riscos, 15 casos automatizados, registro de defeitos e 8 indicadores com fórmulas. Visualizadas as cinco abas e inspecionadas as fórmulas: nenhuma célula com erro foi encontrada. O painel inicial mostra 0% de execuções manuais, aprovação/reprovação e reabertura pendentes, 0 defeitos registrados e 100% dos 15 casos planejados de automação executados localmente; a equivalência de `node:test` depende de decisão do professor. Não considerar esses valores como métricas finais do trabalho. A planilha foi gerada pela ferramenta de artefatos em JS; o script temporário fica em `tmp/`, ignorado.
- A nova rotina Selenium removeu o item com prefixo reservado `Item Selenium P2` deixado pela falha anterior e repetiu o ciclo de criação/remoção com 4/4 aprovados. Envios públicos da suíte geram solicitações fictícias únicas no Supabase local; um `db reset --local` futuro deverá ser acompanhado de reprovisionamento da conta administrativa fictícia.
- Faltam aprovação do sistema e do framework pelo professor, integrantes e segunda opção do sistema, 24 execuções manuais, aceite por representante, medições TNF, TDD documentado, duas análises de qualidade, pipeline remoto com falha/sucesso, relatório/slides/vídeo, Drive oficial e submissão humana. Não há evidência que autorize marcar qualquer um desses itens como concluído.

- Branch `p2-unisagrado` criada a partir do checkpoint anterior. Arquivos do TCC original e PDF não foram alterados. `docs/P2_UNISAGRADO_texto_completo_para_Codex.txt` foi localizado um nível acima do caminho informado e lido integralmente.
- Criados [MATRIZ_CONFORMIDADE.md](./MATRIZ_CONFORMIDADE.md), [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md), [CASOS_MANUAIS.md](./CASOS_MANUAIS.md), [RASTREABILIDADE.md](./RASTREABILIDADE.md) e [ACEITACAO_E_NAO_FUNCIONAIS.md](./ACEITACAO_E_NAO_FUNCIONAIS.md). São 6 RF, 3 RNF, 9 riscos, 24 casos manuais especificados, 4 cenários de aceitação e 6 protocolos TNF. **Execuções manuais, decisões humanas e resultados TNF continuam em zero.** O caso CT-020 foi ajustado para requerer solicitação temporária sem item prévio.
- Instalado `selenium-webdriver` 4.52.0 como dependência de desenvolvimento, usando `--store-dir` apenas no comando porque `node_modules` estava ligado a um store temporário. Nenhuma configuração global do pnpm ou Windows foi alterada. O Selenium Manager obteve o driver para o Chrome local.
- Criados quatro casos HTTP reais em `tests/p2-api.integration.test.mjs`. Com o caso anterior `tests/local-flows.integration.test.mjs`, o comando `pnpm.cmd run test:local` passou **5/5**, 0 falhas e 0 ignorados, contra Vinext + Supabase locais. Cobertura inclui rejeição de pedido inválido, CRUD de item com remoção, proposta com restauração e status/histórico com restauração. Alterações de status deixam eventos de auditoria locais, embora o estado seja restaurado.
- Criados quatro casos de navegador em `tests/p2-selenium.selenium.mjs`; `pnpm.cmd run test:selenium` passou **4/4**, 0 falhas e 0 ignorados na segunda execução. A primeira execução obteve 1/4 e revelou três erros nas expectativas/localizadores da automação: o acesso anônimo mostra página de bloqueio em vez de redirecionar, o formulário exigia aguardar hidratação React antes do clique e o modal é elemento nativo `<dialog>`. As capturas reais dessa rodada ficaram em `test-results/selenium/` (ignorado pelo Git). Nenhum desses três pontos foi classificado como defeito do produto. A primeira falha SEL-04 deixou um item fictício temporário no banco local; será removido ao normalizar o fixture.
- A segunda rodada Selenium cobriu bloqueio anônimo, envio público fictício, login/leitura do pedido seed e inclusão/remoção de item. O envio válido criou dado sintético no banco local; a suíte usa identificador único para não colidir em repetições. `test-results/` é ignorado; a política de retenção das evidências finais deve ser definida pelo grupo.
- O servidor Vinext foi reiniciado em `http://localhost:3000` e permanece na sessão de terminal desta etapa; Supabase local está ativo. As credenciais permanecem em `.env.local`, ignorado, com URL de banco loopback. A suíte recusa URLs fora de loopback.
- Próximas ações nesta etapa: limpar item temporário da falha Selenium, preparar Postman/CI/planilha, executar testes gerais/lint/TypeScript/build, revisar documentação e registrar commit. CI remoto, falha controlada/correção, TDD formal, SonarQube, execuções manuais, aprovação e entrega continuam pendentes conforme matriz.

## Leitura dos requisitos oficiais e retomada técnica — 12/11/2026

- Lida integralmente a transcrição das 26 páginas, inclusive Apêndices A–M. O arquivo fornecido está em `docs/P2_UNISAGRADO_texto_completo_para_Codex.txt`, e não em `docs/P2/` como indicado inicialmente. O PDF original continua sendo a referência prevalente em ambiguidades de formatação.
- Mínimos oficiais: 8 requisitos (6 RF e 2 RNF), 8 riscos, 24 casos manuais, 24 execuções manuais, 6 unitários, 5 integração/API, 4 Selenium, 4 cenários de aceitação, 6 testes não funcionais em 3 categorias, 8 métricas, 1 ciclo TDD, 1 pipeline com evidências e 2 análises de qualidade.
- Auditoria do código existente: 2 testes isolados de autenticação e 4 de triagem são candidatos válidos aos 6 unitários mínimos; o teste amplo de contratos HTTP com `fetch` simulado não comprova integração real. O único teste local com aplicação e Supabase reais agrupa várias verificações, mas equivale a **1 caso de integração**. Não há testes Selenium, casos/execuções manuais da P2, Postman exportado, aprovação do professor ou evidências de TDD/CI/CD.
- O Supabase local respondeu na porta 54321. O servidor Vinext da sessão anterior não estava em execução ao iniciar esta retomada; será reiniciado para validar as novas suítes. Nenhum resultado novo de teste foi presumido.
- A matriz de conformidade, o plano, os casos e a rastreabilidade serão preparados nesta cópia P2. Toda execução manual, avaliação de aceitação, aprovação do professor, dados do grupo, Drive e apresentação dependem de participação humana e ficam explicitamente pendentes.

As seções antigas abaixo registram o histórico de cada etapa no momento em que ocorreu; os estados atuais devem ser lidos pelas atualizações cronológicas mais recentes.

## Retomada em 12/11/2026

### Estado observado nesta sessão

- `git`, Node.js, npm e pnpm estão disponíveis no terminal: Git 2.56.1.windows.1, Node v24.22.3, npm 11.19.1 e pnpm 12.18.0. No PowerShell, usar `pnpm.cmd` e `npm.cmd`; os shims `.ps1` são bloqueados pela política atual.
- Docker Desktop estava instalado em `C:\Users\tiago\AppData\Local\Programs\DockerDesktop`, caminho protegido que o sandbox não conseguia inspecionar inicialmente. Com autorização para iniciar a aplicação, o Docker Desktop abriu e o daemon respondeu com Docker 29.9.3 e Compose 5.7.0. Não alterei configurações globais do Windows.
- A CLI local Supabase 3.1.0 precisou de execução autorizada para acessar o daemon Docker e gravar telemetria em `C:\Users\tiago\.supabase\telemetry.json`; a tentativa de desativar telemetria por variável de ambiente não evitou essa gravação. `supabase start` e `db reset --local` concluíram. Nenhuma operação de link ou conexão remota foi feita.
- O histórico da sessão anterior foi consultado; não há transcrição disponível no serviço de histórico. Este arquivo preserva o contexto anterior. O PDF foi aberto no visualizador local, mas o leitor integrado não forneceu páginas/texto nesta execução; os requisitos formais da P2 ainda precisam ser extraídos antes de definir cobertura específica.

### Checkpoint Git

- Criado commit local `5cef3d169fd1ba541d9213c4cd57637118c69573` (`chore: checkpoint inicial da preparação P2`) na branch `main`, consolidando os 103 arquivos existentes desta cópia, inclusive o PDF e os documentos atuais. A árvore ficou limpa após o commit.
- Após a configuração local e a automação, criado segundo checkpoint `c4330307b4b0b2b76cc7ee24b0f219209c1a3f2c` (`test: preparar integração local da P2`). `.env.local` e segredos continuam ignorados pelo Git.
- O `.git` pertence à identidade do sandbox, portanto a gravação precisou de execução autorizada com `safe.directory` somente no comando. A identidade de commit é técnica e restrita ao comando; nenhuma configuração global do Git foi alterada. Não há remoto configurado.

### Validações repetidas

| Verificação | Resultado observado em 12/11/2026 |
|---|---|
| `pnpm.cmd run test` | 7 passaram, 0 falharam; testes unitários/contratos com chamadas externas simuladas. |
| `pnpm.cmd run lint` | Exit 0; 0 erros e 9 avisos de `<img>` nas páginas públicas, conforme registro anterior. |
| `pnpm.cmd exec tsc --noEmit` | Exit 0, sem erros TypeScript. |
| `pnpm.cmd run build` | Exit 0; build Vinext concluído, com o aviso já registrado sobre classificação estática de rotas dinâmicas. |
| `pnpm.cmd exec vinext dev --host 127.0.0.1 --port 3000` | Servidor iniciado. O listener observado foi `[::1]:3000`; `http://localhost:3000` respondeu HTTP 200 para a página inicial, login, contato e painel (que redireciona usuários sem sessão). O endereço IPv4 `127.0.0.1:3000` ainda recusa conexão. O uso de `localhost` funciona no ambiente atual. |

### Supabase local e autenticação de teste

- Docker Desktop ativo; `pnpm exec supabase start` iniciou a stack local nas portas 54321–54324 e 54322 para o PostgreSQL. As imagens foram obtidas apesar de limites temporários do registry.
- As cinco migrações foram aplicadas sem erro. O `supabase start` inicial avisou que ainda não havia seed; após criar `supabase/seed.sql`, `pnpm exec supabase db reset --local` reaplicou migrações e seed com sucesso.
- A seed cria `private.painel_config` com hash de segredo de teste, uma solicitação, cliente, item de orçamento, proposta e atividade fictícios. A consulta real a `listar_solicitacoes_painel` retornou o fixture esperado pelo endpoint local. Não há dados de produção.
- `.env.local` foi criado e permanece ignorado pelo Git. `SUPABASE_URL` aponta para `http://127.0.0.1:54321`; chaves são as emitidas pela stack local; IA e n8n permanecem desligados. A conta local fictícia `administrador.p2@local.test` foi provisionada pelo Supabase Auth local e autenticou com sucesso.
- A senha de demonstração local está em `.env.local`, junto das variáveis `P2_LOCAL_ADMIN_EMAIL`, `P2_LOCAL_ADMIN_PASSWORD`, `P2_LOCAL_BASE_URL` e `P2_LOCAL_REQUEST_ID`. Ela só deve ser usada contra a stack local.

### Automação de integração inicial

- Adicionado `pnpm run test:local` e `tests/local-flows.integration.test.mjs`. O teste exige `.env.local`, valida que aplicação e Supabase usam loopback e cobre bloqueio anônimo, login, cookie administrativo, listagem da solicitação fictícia, item, proposta e histórico.
- Resultado real inicial: `pnpm.cmd run test:local` — 1 passou, 0 falharam, sem skips. Após integrar o novo teste, as verificações foram repetidas: suíte padrão 7 passaram e 1 integração foi ignorada por exigir serviço local; suíte `test:local` 1 passou sem skips; TypeScript e build passaram; lint terminou com 0 erros e os mesmos 9 avisos de `<img>`. A suíte padrão permanece independente de serviços externos e não usa configuração de produção.

### Escopo técnico pendente

- A conta Supabase, seed e aplicação local estão prontas. Próximas ações: extrair o texto completo do PDF do professor para mapear a suíte aos critérios oficiais e ampliar a matriz de testes para operações de alteração de status/itens/proposta sem prejudicar fixtures.
- A interface e as APIs foram exercitadas localmente; o teste de integração automatizado cobre leitura, autenticação e os dados comerciais de teste. Ainda falta executar fluxos de mutação controlados e ampliar a matriz de testes a partir do PDF.
- Não foi alterado o código de negócio do site nesta retomada. O PDF oficial e a cópia original do TCC permanecem sem alterações.

## Ferramentas e versões

| Ferramenta | Estado |
|---|---|
| Git for Windows | 2.56.1.windows.1 instalado; não reconhecido no PATH do terminal atual. |
| Node.js | v24.22.3 LTS, x64. |
| npm | 11.19.1. PowerShell bloqueou `npm.ps1`; usar `npm.cmd`. |
| pnpm | 12.18.0 global via npm; PATH de usuário atualizado para incluir `%APPDATA%\npm`. Reiniciar VS Code/terminal. |
| Docker Desktop | 4.99.0.245822 instalado. |
| Docker CLI | 29.9.3. |
| WSL | 3.0.3, kernel 6.18.54.1. |
| Supabase CLI | 3.1.0, dependência local; comando `pnpm exec supabase`. |

Windows reportado: Windows 10 Education 26H2, build 26300, x64. A consulta de distribuições WSL foi negada pelo ambiente isolado.

## Cópia segura, Git e alterações

Antes de modificar o repositório foi criado backup fora dele: `C:\Users\tiago\AppData\Local\Temp\vscode-agent-codex-sandbox-uMcB8g\WG-Hidraulica-TCC-preparacao-P2-20261112.zip` (108 arquivos). A comparação identificou alterações em `package.json` e `pnpm-lock.yaml`; nenhum código de negócio nem o PDF foi alterado.

O projeto não tinha Git. Repositório inicializado na branch `main`, sem commit ou remoto, sem sobrescrever histórico existente. Arquivos atuais estão pendentes de revisão e, sem commit inicial, os originais aparecem como não rastreados.

- `package.json`: fixado `packageManager` em pnpm 12.18.0, script `test` com `node --test` e Supabase CLI 3.1.0 em dependências de desenvolvimento.
- `pnpm-lock.yaml`: atualizado para refletir as dependências.
- Dependências instaladas com `pnpm install --frozen-lockfile`.
- Nenhuma funcionalidade/regra de negócio alterada.

## Resultados reais

Execuções feitas durante a preparação e não repetidas ao encerrar:

| Verificação | Resultado |
|---|---|
| `pnpm run test` | 7 passaram, 0 falharam. Testes `node:test` de auth/sessão e triagem/HTTP com fetch simulado; sem banco real. |
| `pnpm run lint` | Exit 0; 0 erros e 9 avisos de `<img>` em `app/page.tsx`, `app/produtos/page.tsx`, `app/quem-somos/page.tsx`. |
| `pnpm exec tsc --noEmit` | Exit 0, sem erros TypeScript. |
| `pnpm run build` | Exit 0, build Vinext concluído. Aviso de classificação estática de algumas rotas com APIs dinâmicas. |
| `pnpm run dev` | Vinext anunciou localhost:3000, mas não abriu listener; HTTP recusado, inclusive com `--host 127.0.0.1 --port 3000`. Servidor Node mínimo respondeu na mesma porta, apontando para problema específico do caminho Vinext/Vite/Cloudflare. Causa-raiz desconhecida. |

## Vinext

Build e testes passam, mas o servidor de desenvolvimento não escuta na porta anunciada. Uma execução inicial em sandbox exibiu fallback `Request.cf` com `AggregateError [EACCES]`; não se repetiu e ainda não explica a ausência de listener. Retomar com saída integral e investigação de configuração/compatibilidade Vinext/Vite/Cloudflare. Navegação manual local permanece não validada.

## Docker e Supabase

- Docker Desktop instalado, daemon não iniciado: pipe `npipe:////./pipe/docker_engine` ausente. Nenhum container ou banco iniciado. Memória livre observada: cerca de 2,4 GB de 15,1 GB.
- WSL está acima do mínimo 2.1.5 consultado na documentação Docker; virtualização de hardware não foi inspecionada diretamente. `LanmanServer` estava ativo e automático.
- Supabase CLI disponível. `supabase/` tem configuração e cinco migrações. `supabase/config.toml` referencia `supabase/seed.sql`, que não existe. Migrações não criam registro inicial de `private.painel_config`, que precisa de hash de segredo exclusivo de teste.
- Nenhum `supabase link`, URL, credencial, banco ou dado de produção foi usado. Não existe `.env.local` de teste.

## Pendências por prioridade

1. **P0 — revisão e baseline:** revisar alterações e decidir commit inicial; verificar o ZIP de segurança antes de novas mudanças. Não substituir histórico remoto/local sem revisão.
2. **P0 — Vinext:** diagnosticar por que o servidor não abre listener e validar aplicação em 127.0.0.1.
3. **P1 — banco isolado:** iniciar Docker quando houver memória suficiente e confirmar daemon; usar apenas Supabase local. Não usar `supabase link` ou `db push` remoto.
4. **P1 — seed:** criar `supabase/seed.sql` com dados fictícios e hash exclusivo para `private.painel_config`; revisar dependências externas das migrações.
5. **P1 — configuração:** criar `.env.local` ignorado pelo Git, apontado somente a `http://127.0.0.1:54321`, usando chaves locais e segredos de teste. Desligar/simular IA, e-mail e n8n.
6. **P2 — requisitos da P2:** após Vinext e banco local, implementar critérios do PDF e ampliar integração contra banco local.

## Continuação em nova sessão

1. Abrir o repositório e reiniciar terminal/VS Code para recarregar PATH. Conferir `git --version`, `node --version`, `npm.cmd --version`, `pnpm --version`; se necessário, atualizar PATH da sessão para Git.
2. Conferir `git status --short --branch`; revisar `package.json` e `pnpm-lock.yaml`. Git está sem histórico/commit inicial: revisar arquivos antes de criar baseline.
3. Se necessário, executar `pnpm install --frozen-lockfile`. Os resultados acima são os últimos resultados reais, não repetidos ao encerrar.
4. Diagnosticar `pnpm run dev`, saída integral e listener em 127.0.0.1:3000, sem credenciais/URLs de produção.
5. Com Docker iniciado e daemon confirmado, preparar Supabase local por `pnpm exec supabase start`, após revisar configuração e seed fictício; apontar aplicação somente para URL/chaves locais.
6. Após mudanças, executar `pnpm run test`, `pnpm run lint`, `pnpm exec tsc --noEmit` e `pnpm run build`, registrando resultados reais.

## Encerramento

Não havia listeners nas portas 3000, 5173, 54321–54323, 5678 ou 9229. Processos `node.exe` observados pertencem ao runtime Codex/CUA, não a servidores do projeto; foram mantidos para não interromper a sessão. Docker não estava rodando. Mudanças do repositório pendem revisão; nenhum commit criado.

## Fontes oficiais

- [Node.js v24.22.3](https://nodejs.org/en/blog/release/v24.22.3)
- [Git para Windows](https://git-scm.com/install/windows)
- [Instalação pnpm](https://pnpm.io/installation/)
- [Docker Desktop no Windows](https://docs.docker.com/desktop/setup/install/windows-install/)
- [Supabase CLI](https://supabase.com/docs/guides/local-development/cli/getting-started)


# Roteiro de capturas do SonarQube — rodada final P2

Este roteiro prepara a coleta de evidência visual após a rodada final. Nenhuma análise SonarQube foi iniciada nesta preparação. Usar somente a instância local em http://127.0.0.1:9000 e associar cada captura ao commit efetivamente analisado.

1. Antes da análise, registre git rev-parse --short HEAD e confirme que coverage/p2/lcov.info foi gerado pela rodada que será analisada. Não reutilize o arquivo de uma execução anterior.
2. Execute o scanner local conforme docs/P2/TDD_CI_QUALIDADE.md, usando token local por variável de ambiente. Não capture token, senha, .env.sonar.local ou dados pessoais.
3. Abra o projeto P2 no painel local e confirme que a análise exibida corresponde ao commit registrado.
4. Capture a página Overview mostrando data/análise, branch ou revisão, Quality Gate, bugs, vulnerabilidades, code smells, duplicação e cobertura. Salve como SONAR-01-overview-<commit>.png.
5. Na página Measures → Coverage, capture as linhas cobráveis e cobertura total importada. Salve como SONAR-02-coverage-<commit>.png. Registre em legenda que a porcentagem depende do escopo de fontes e LCOV analisado.
6. Na página Issues, capture o filtro de issues abertas e a contagem, mesmo se zero. Salve como SONAR-03-issues-<commit>.png.
7. Se o Quality Gate falhar, capture também o detalhe da condição reprovada; não altere a evidência para ocultar o resultado.
8. Copie as capturas para docs/P2/EVIDENCIAS_AUTOMACAO/<data>/sonar/ e anote no registro a hora local, commit, versão do SonarQube/scanner, projeto e nomes dos arquivos.

As capturas demonstram o estado do painel naquela análise local; não equivalem a aprovação do professor nem substituem o JSON/relatório do scanner.

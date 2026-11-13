# Evidência de validação local da P2

**Data local:** 12/11/2026 (America/Sao_Paulo)  
**Branch:** `p2-unisagrado`  
**Uso:** registro das execuções desta retomada. Não representa execução no GitHub Actions, avaliação manual ou aprovação do professor.

## Resultados observados

| Verificação | Comando | Resultado observado |
|---|---|---|
| Testes unitários isolados | `pnpm run test` | 8 aprovados, 0 falhas, 0 ignorados. |
| Cobertura unitária LCOV | `pnpm run test:coverage` | 8 aprovados; c8 mediu 97,44% linhas, 85,36% ramos e 100% funções nos três módulos `app/lib` selecionados. Relatório normalizado em `coverage/p2/lcov.info` (gerado, ignorado pelo Git). |
| Integração/API local | `pnpm run test:local` | 8 aprovados, 0 falhas, 0 ignorados, contra aplicação e Supabase locais. |
| Selenium | `pnpm run test:selenium` | 4 aprovados, 0 falhas, 0 ignorados em Chrome local. |
| API via Newman | `pnpm run test:postman` | 6 requisições, 12 asserções, 0 falhas. |
| Não funcionais | `pnpm run test:nonfunctional` | 6 aprovados, 0 falhas, 0 ignorados nas categorias de segurança, desempenho e compatibilidade/usabilidade previstas pelos scripts. |
| ESLint | `pnpm run lint` | Exit 0; 0 erros e 9 avisos `@next/next/no-img-element` em páginas existentes. A pasta de cobertura gerada foi excluída da análise. |
| TypeScript | `pnpm exec tsc --noEmit` | Exit 0. |
| Build | `pnpm run build` | Exit 0. Vinext informou que algumas rotas não foram classificadas estaticamente por usarem APIs dinâmicas. |
| Formatação | `pnpm dlx prettier@3.5.3 --check .github/workflows/p2-ci.yml package.json` | Todos os arquivos conferidos no padrão. |
| Integridade dos docs | Verificador PowerShell de links Markdown relativos e parse de JSON | Nenhum destino relativo ausente; JSON da evidência Sonar e `package.json` válidos. |
| Diff | `git diff --check` | Exit 0, sem erro de whitespace. |

## Cobertura SonarQube

O scanner NPM `@sonar/scan` 5.1.0 foi executado contra a instância local em `127.0.0.1:9000` após o checkpoint `b9e7ddd`. A tarefa `8e3a51ab-5006-4c4d-85b8-e10c847bee85` terminou `SUCCESS`, analysis ID `190c029c-743e-4a79-a5a4-35f65fbf9253`. O scanner registrou explicitamente a leitura de `coverage/p2/lcov.info`. Sonar reportou 27,1% no projeto (229 de 1.020 linhas cobráveis), 0 bugs, 0 code smells, 0 vulnerabilidades, 0% de duplicação e Quality Gate local `OK`.

Os percentuais não são intercambiáveis: c8 cobre três módulos unitários e Sonar calcula sobre o escopo inteiro da aplicação. O restante do código não foi exercitado pela suíte instrumentada. A análise usa a revisão `b9e7ddd`, com arquivos rastreados da P2 sem alterações. O resultado não demonstra CI remoto nem aprovação acadêmica.

## Inicialização do ambiente

Na primeira tentativa, os testes HTTP encontraram `ECONNREFUSED` em `localhost:3000`, pois Vinext ainda não escutava. Docker e Supabase locais estavam ativos; a saúde do Supabase Auth respondeu HTTP 200. Após iniciar Vinext, `http://localhost:3000/login` respondeu HTTP 200 e a suíte de integração passou 8/8. A stack apontou para loopback e nenhum banco/segredo de produção foi usado.

## CI/CD

O workflow foi formatado e revisado; `set -o pipefail` assegura que a etapa que usa `tee` preserve o código de saída dos testes. O YAML foi processado pelo Prettier, mas nenhuma ferramenta de validação do GitHub nem execução remota substitui o workflow real. A branch não tem remoto; o repositório não foi publicado e nada foi enviado ao GitHub.

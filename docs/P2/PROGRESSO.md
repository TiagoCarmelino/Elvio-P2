# Progresso da preparação da P2

**Atualizado em:** 12/11/2026  
O PDF oficial [57402f9d-2b95-418b-850a-b87c479c7b4f.pdf](./57402f9d-2b95-418b-850a-b87c479c7b4f.pdf) foi preservado sem alterações.

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


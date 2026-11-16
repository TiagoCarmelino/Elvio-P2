# Projeto Integrado P2 — UNISAGRADO

Esta é a cópia de trabalho da P2 do sistema WG Hidráulica, mantida na branch `p2-unisagrado`. Ela foi separada para permitir que o TCC original continue evoluindo. Não considere este repositório uma cópia final do TCC nem uma entrega acadêmica concluída.

O repositório GitHub está privado e usa `p2-unisagrado` como branch padrão. O grupo precisa conceder acesso ao professor e confirmar as permissões de leitura antes da avaliação. A visibilidade não foi alterada.

## Estado da entrega

O trabalho está em preparação. A auditoria registra lacunas e resultados históricos na [matriz de conformidade](./MATRIZ_CONFORMIDADE.md), na [auditoria técnica](./AUDITORIA_P2.md) e no [PROGRESSO.md](./PROGRESSO.md). Entre as pendências estão as 24 execuções manuais, quatro sessões de aceitação, validação escrita do professor, diário do grupo e execução real do GitHub Actions. Os documentos em `ARTEFATOS_PREPARACAO/` estão marcados como rascunhos e não devem ser submetidos como versões finais.

## Requisitos locais

- Windows com Docker Desktop em execução;
- Node.js 22.13 ou superior e pnpm;
- Supabase CLI disponível pelo workspace ou instalado localmente;
- Chrome para Selenium.

## Preparação local isolada

Use apenas a stack Supabase local definida em `supabase/config.toml`. Não execute `supabase link`, não use URL, chave ou conta de produção e não copie credenciais reais para arquivos versionados.

```powershell
pnpm install --frozen-lockfile
pnpm exec supabase start
pnpm exec supabase db reset --local
```

O reset reaplica migrações e o seed fictício e substitui os dados do banco local. Execute-o somente quando puder descartar os dados locais; preserve qualquer evidência antes de fazê-lo. Recrie a conta administrativa fictícia conforme os procedimentos locais do grupo após o reset.

Crie `.env.local` localmente. Para a aplicação e as suítes locais, configure `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_DASHBOARD_SECRET` ou `AUTH_SESSION_SECRET`, `ADMIN_EMAILS`, e as variáveis `P2_LOCAL_BASE_URL`, `P2_LOCAL_ADMIN_EMAIL`, `P2_LOCAL_ADMIN_PASSWORD` e `P2_LOCAL_REQUEST_ID`, usando apenas endpoints locais, conta fictícia e valores obtidos/gerados para esta stack. O arquivo é ignorado pelo Git. Não compartilhe nem versione senhas, chaves, cookies ou tokens. Inicie a aplicação em outro terminal:

```powershell
pnpm run dev
```

A interface local fica em `http://localhost:3000`. A API Supabase local usa `http://127.0.0.1:54321`; verifique o estado com `pnpm exec supabase status`. Não use banco remoto durante os testes.

## Verificações disponíveis

```powershell
pnpm run test
pnpm run test:coverage
pnpm run test:local
pnpm run test:selenium
pnpm run test:postman
pnpm run test:nonfunctional
pnpm run lint
pnpm exec tsc --noEmit
pnpm run build
```

`test` e `test:coverage` executam a suíte isolada. Os comandos `test:local`, `test:selenium`, `test:postman` e `test:nonfunctional` requerem aplicação/Supabase locais e `.env.local` corretamente configurado. Alguns testes escrevem dados fictícios no banco local; consulte o [plano e escopo](./ESCOPO_E_PLANO.md) e os [casos manuais](./CASOS_MANUAIS.md) para limites e restauração. Resultados de rodadas anteriores estão datados no progresso; não são prova de que a versão atual foi retestada.

## CI GitHub Actions

O workflow em `.github/workflows/p2-ci.yml` está configurado para a branch `p2-unisagrado` e executa testes isolados, cobertura LCOV, lint, TypeScript e build. A existência do YAML não comprova execução ou aprovação do CI. Consulte a aba **Actions** deste repositório após cada envio e registre URL, commit, resultado e artefatos em `docs/P2/PROGRESSO.md`. A falha controlada seguida da correção exigida pelo professor permanece pendente até ser executada e documentada.

## Documentação P2

- [Progresso](./PROGRESSO.md)
- [Matriz de conformidade P01–P14](./MATRIZ_CONFORMIDADE.md)
- [Auditoria e riscos](./AUDITORIA_P2.md)
- [Checklist final](./CHECKLIST_FINAL.md)
- [Guia para executar os 24 casos manuais](./GUIA_EXECUCAO_MANUAL.md)
- [Cenários de aceitação e testes não funcionais](./ACEITACAO_E_NAO_FUNCIONAIS.md)
- [Rastreabilidade](./RASTREABILIDADE.md)
- [Estrutura da entrega oficial](./ESTRUTURA_ENTREGA.md)

O grupo deve transferir somente materiais revisados para a pasta oficial indicada pelo professor. Não preencher evidências, métricas, participantes, aprovações ou resultados humanos por inferência.

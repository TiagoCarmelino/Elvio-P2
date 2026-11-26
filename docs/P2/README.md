# Projeto Integrado P2 — UNISAGRADO

Este repositório é o **ambiente de testes e preparação da P2 do projeto do Elvio (WG Hidráulica)**, mantido na branch `p2-unisagrado`. Destina-se à validação acadêmica com dados fictícios e ambiente local isolado. Não é ambiente de produção nem substitui o repositório original do TCC, que continua em desenvolvimento e não foi alterado.

O repositório GitHub está privado e usa `p2-unisagrado` como branch padrão. O grupo precisa conceder acesso ao professor e confirmar as permissões de leitura antes da avaliação. A visibilidade não foi alterada.

## Estado da entrega

O trabalho está em preparação. A auditoria registra lacunas e resultados históricos na [matriz de conformidade](./MATRIZ_CONFORMIDADE.md), na [auditoria técnica](./AUDITORIA_P2.md) e no [PROGRESSO.md](./PROGRESSO.md). A falha controlada e a reversão no GitHub Actions foram comprovadas no run #7 (vermelho intencional) e #8 (verde). Os 24 casos manuais foram executados e registrados por Tiago (EX-001–EX-024); D-002 foi observado em CT-004 e D-001 teve reteste aprovado em EX-021. Permanecem revisão da sessão de aceitação (4/4 aceitos por PART-01), formalização/revisão da autorização, diário do grupo, compartilhamento com o professor, aceite de `node:test` e execução da coleção Postman atual. Selenium e integração precisam ser revalidados após o merge do PR #2. Os documentos em `ARTEFATOS_PREPARACAO/` continuam rascunhos e não devem ser submetidos como versões finais.

O README na ordem oficial do §11.4, destinado à pasta `00_IDENTIFICACAO_E_README`, está em [ENTREGA/00_IDENTIFICACAO_E_README/README.md](./ENTREGA/00_IDENTIFICACAO_E_README/README.md). O Apêndice A e o diário L editáveis estão em [FORMULARIOS_HUMANOS.md](./FORMULARIOS_HUMANOS.md).

## Requisitos locais

- Windows com Docker Desktop em execução;
- Node.js 22.13 ou superior e pnpm;
- Supabase CLI disponível pelo workspace ou instalado localmente;
- Chrome para Selenium.

## Preparação local isolada

Use apenas a stack Supabase local definida em `supabase/config.toml`. Não execute `supabase link`, não use URL, chave ou conta de produção e não copie credenciais reais para arquivos versionados.

### 1. Dependências e banco local

```powershell
pnpm install --frozen-lockfile
pnpm exec supabase start
```

Na primeira execução, `supabase start` cria o banco local e aplica as cinco migrações e o seed fictício (`supabase/seed.sql`), que inclui a solicitação de teste `20000000-0000-4000-8000-000000000001`. Nas execuções seguintes, os dados locais são preservados.

`pnpm exec supabase db reset --local` **apaga** o banco local e o recria a partir das migrações e do seed. Use-o somente para restaurar um estado limpo, depois de preservar as evidências necessárias. Após um reset, repita os passos 3 e 4.

### 2. Endereços e chave pública local

```powershell
pnpm exec supabase status
```

Anote `API URL` (esperado `http://127.0.0.1:54321`) e a chave **Publishable** (`sb_publishable_...`). Elas valem apenas para esta stack local.

### 3. Chave do painel administrativo

O backend do painel envia a chave `SUPABASE_DASHBOARD_SECRET` às funções do banco, que comparam o hash SHA-256 dela com o valor de `private.painel_config`. O seed grava apenas um hash; por isso, gere uma chave própria e grave o hash correspondente no banco local:

```powershell
node -e "console.log(require('crypto').randomBytes(24).toString('hex'))"
```

Abra o Supabase Studio local em `http://127.0.0.1:54323` → **SQL Editor** e execute, substituindo `<SUA_CHAVE>` pelo valor gerado:

```sql
update private.painel_config
set chave_hash = encode(extensions.digest('<SUA_CHAVE>', 'sha256'), 'hex'),
    atualizado_em = now()
where id = true;
```

Use o mesmo valor em `SUPABASE_DASHBOARD_SECRET` no `.env.local`. Gere outro valor aleatório, com pelo menos 24 caracteres, para `AUTH_SESSION_SECRET`.

### 4. Contas fictícias no Supabase Auth local

São necessárias duas contas exclusivamente locais, com e-mails fictícios e senha fictícia de pelo menos 6 caracteres:

| Conta | E-mail sugerido | Uso |
|---|---|---|
| Administrativa | `administrador.p2@local.test` | Painel, suítes locais e Postman; deve constar em `ADMIN_EMAILS` |
| Não administrativa | `p2.ct007.nao-admin@local.test` | CT-007; **não** incluir em `ADMIN_EMAILS` |

No Studio local (`http://127.0.0.1:54323`) → **Authentication** → **Users** → **Add user** → **Create new user**, informe e-mail e senha e marque **Auto Confirm User**. Alternativa pelo PowerShell (o cadastro local está habilitado e não exige confirmação de e-mail em `supabase/config.toml`):

```powershell
$publishable = "<chave Publishable do passo 2>"
Invoke-RestMethod -Method Post -Uri "http://127.0.0.1:54321/auth/v1/signup" `
  -Headers @{ apikey = $publishable } -ContentType "application/json" `
  -Body (@{ email = "administrador.p2@local.test"; password = "<senha fictícia>" } | ConvertTo-Json)
```

Repita para a conta não administrativa. Nunca crie essas contas em um projeto Supabase remoto.

### 5. Arquivo `.env.local`

Copie `.env.example` para `.env.local` (ignorado pelo Git) e preencha:

| Variável | Valor local |
|---|---|
| `SUPABASE_URL` | `http://127.0.0.1:54321` |
| `SUPABASE_PUBLISHABLE_KEY` | chave Publishable do passo 2 |
| `SUPABASE_DASHBOARD_SECRET` | chave gerada no passo 3 |
| `AUTH_SESSION_SECRET` | valor aleatório com 24+ caracteres |
| `ADMIN_EMAILS` | `administrador.p2@local.test` |
| `AUTH_DEV_BYPASS`, `TRIAGE_AI_ENABLED`, `CHATBOT_AI_ENABLED` | `false` |
| `P2_LOCAL_BASE_URL` | `http://localhost:3000` |
| `P2_LOCAL_REQUEST_ID` | `20000000-0000-4000-8000-000000000001` |
| `P2_LOCAL_ADMIN_EMAIL` / `P2_LOCAL_ADMIN_PASSWORD` | conta administrativa do passo 4 |
| `P2_LOCAL_NONADMIN_EMAIL` / `P2_LOCAL_NONADMIN_PASSWORD` | conta não administrativa do passo 4 |

As suítes locais recusam URLs que não sejam de loopback. Não compartilhe nem versione senhas, chaves, cookies ou tokens.

### 6. Aplicação

Inicie a aplicação em outro terminal:

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

O workflow em `.github/workflows/p2-ci.yml` está configurado para a branch `p2-unisagrado` e executa testes isolados, cobertura LCOV, lint, TypeScript e build. O Apêndice J registra a falha controlada intencional do run #7 e o run #8 verde após reversão. Isso comprova o pipeline isolado; não substitui integração, Selenium, Postman ou testes manuais. Consulte a aba **Actions** após cada envio e registre URL, commit, resultado e artefatos em `docs/P2/PROGRESSO.md`.

## Documentação P2

- [Progresso](./PROGRESSO.md)
- [Matriz de conformidade P01–P14](./MATRIZ_CONFORMIDADE.md)
- [Auditoria e riscos](./AUDITORIA_P2.md)
- [Checklist final](./CHECKLIST_FINAL.md)
- [Guia para executar os 24 casos manuais](./GUIA_EXECUCAO_MANUAL.md)
- [Registro das execuções exploratórias do agente](./REGISTRO_EXECUCOES_AGENTE_20261116.md) — não substitui as execuções humanas.
- [Capturas e logs do agente](./EVIDENCIAS_AGENTE/20261116/LEIA-ME.md)
- [Cenários de aceitação e testes não funcionais](./ACEITACAO_E_NAO_FUNCIONAIS.md)
- [Rastreabilidade](./RASTREABILIDADE.md)
- [Estrutura da entrega oficial](./ESTRUTURA_ENTREGA.md)

O grupo deve transferir somente materiais revisados para a pasta oficial indicada pelo professor. Não preencher evidências, métricas, participantes, aprovações ou resultados humanos por inferência.

## Rodada final automatizada

Depois de concluir as execuções manuais, restaurar a fixture e confirmar que a aplicação e o Supabase usam apenas o ambiente local, execute o runner. Ele não inicia serviços nem faz reset do banco.

```powershell
powershell -NoProfile -File scripts/p2-rodada-final.ps1
```

O script exige `.env.local`, rejeita URLs fora de HTTP loopback e grava log por suíte com timestamp e commit em `docs/P2/EVIDENCIAS_AUTOMACAO/<data>/<hora>-<commit>/`. A última etapa executa TNF-01–TNF-06; TNF-03/04 fazem 20 medições por operação e registram máximo e mediana. A rodada final foi executada em 25/11/2026 no commit `2ad8845`; resultados e logs estão em `EVIDENCIAS_AUTOMACAO/20261125/160236-2ad8845/`. Consulte também o [roteiro de capturas SonarQube](./ROTEIRO_PRINTS_SONARQUBE.md).

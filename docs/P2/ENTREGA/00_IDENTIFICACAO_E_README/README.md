# README da pasta 00 — Identificação e execução

Este README acompanha a preparação da entrega P2 e deve ser copiado para `00_IDENTIFICACAO_E_README` na pasta oficial fornecida pelo professor. Campos marcados para preenchimento continuam pendentes.

## 1. Integrantes

- Turma: `26-2-COMP-7-08-A`
- Grupo: 8 (`GRPATVSALA 8`)
- Tiago Gabriel Carmelino
- Mateus Betini

## 2. Nome e versão do sistema

- Sistema: **WG Hidráulica**.
- Versão da aplicação validada nos registros atuais: código do merge `219210a`.
- O repositório contém a cópia acadêmica P2 na branch `p2-unisagrado`. Consultar o commit `HEAD` no dia da entrega para identificar a revisão completa dos documentos.
- O TCC original permanece em desenvolvimento e fora desta cópia P2.

## 3. Link do repositório

https://github.com/TiagoCarmelino/Elvio-P2

Repositório privado. O grupo deve confirmar que o professor possui acesso de leitura.

## 4. Tecnologias

React, TypeScript, Vinext, Node.js, pnpm, Supabase, PostgreSQL, Docker Desktop, Postman/Newman, Selenium e SonarQube.

## 5. Pré-requisitos

- Node.js 22.13 ou superior (ambiente registrado: Node.js 24.22.3).
- pnpm 12.18.0.
- Docker Desktop iniciado.
- Supabase CLI local via dependência do projeto (3.1.0 nos registros de preparação).
- Chrome para a execução Selenium documentada; usar as versões definidas pelo ambiente no dia da entrega.
- PowerShell no Windows, se aplicável.

## 6. Instalação

Na raiz do repositório P2, instalar as dependências com `pnpm install --frozen-lockfile`. Se a política do PowerShell bloquear o shim `.ps1`, usar `pnpm.cmd`.

## 7. Configuração

1. Crie `.env.local` a partir de `.env.example` e preencha somente variáveis `P2_*` com dados fictícios/locais. Gere `SUPABASE_DASHBOARD_SECRET` com `node -e "console.log(require('crypto').randomBytes(24).toString('hex'))"` e guarde a chave apenas no `.env.local`.
2. No Supabase Studio local (`http://127.0.0.1:54323`), abra SQL Editor e execute abaixo, trocando `<SUA_CHAVE>` pela chave gerada. O banco recebe apenas o SHA-256; mantenha a chave em `SUPABASE_DASHBOARD_SECRET` no `.env.local` e não em arquivos versionados.

```sql
update private.painel_config
set chave_hash = encode(extensions.digest('<SUA_CHAVE>', 'sha256'), 'hex'),
    atualizado_em = now()
where id = true;
```

Gere também `AUTH_SESSION_SECRET` aleatório com pelo menos 24 caracteres.
3. Em Authentication → Users → Add user → Create new user, crie `administrador.p2@local.test` e `p2.ct007.nao-admin@local.test` com senhas fictícias e marque Auto Confirm User. A conta administrativa deve corresponder a `ADMIN_EMAILS`; a não administrativa não deve constar nessa lista. O passo 4 de `docs/P2/README.md` contém o procedimento detalhado e alternativa por PowerShell.
Mantenha `.env.local` fora do Git e da pasta de entrega; não copie chaves, cookies, senhas ou credenciais reais para este README.

## 8. Banco e dados

Iniciar o Docker Desktop e, na raiz do projeto, executar `pnpm exec supabase start`. O Supabase local aplica as migrações e os dados de seed previstos pelo projeto. Utilizar exclusivamente `localhost`/`127.0.0.1` e dados fictícios; não apontar variáveis a produção. Um reset deve ser feito somente no banco local e requer reprovisionar o usuário administrativo fictício.

## 9. Execução

Com o ambiente local configurado, executar `pnpm run dev` e acessar `http://localhost:3000`. A API e o banco Supabase locais são disponibilizados nas portas configuradas pelo CLI; conferir `pnpm exec supabase status`.

## 10. Execução dos testes

Executar na raiz, conforme os serviços locais exigidos por cada suíte:

```powershell
pnpm run test
pnpm run test:local
pnpm run test:selenium
pnpm run test:postman
pnpm run test:nonfunctional
pnpm run lint
pnpm exec tsc --noEmit
pnpm run build
```

Os resultados atuais têm datas e limites em `docs/P2/PROGRESSO.md`; não considerar registros históricos como execução desta revisão. As 24 execuções manuais são registradas separadamente e não são substituídas pela automação.

## 11. Acesso ao pipeline

Workflow: [P2 CI — GitHub Actions](https://github.com/TiagoCarmelino/Elvio-P2/actions/workflows/p2-ci.yml). A falha intencional do run #7 e sua reversão com run #8 estão registradas em `docs/P2/TDD_CI_QUALIDADE.md`. Conferir a revisão/commit de cada execução ao apresentar resultados.

## 12. Localização dos documentos

Documentação, matriz de conformidade, requisitos, casos, rastreabilidade, evidências, defeitos, métricas e relatórios de preparação estão em `docs/P2/`. Fontes principais:

- `docs/P2/PROGRESSO.md`
- `docs/P2/MATRIZ_CONFORMIDADE.md`
- `docs/P2/ESCOPO_E_PLANO.md`
- `docs/P2/CASOS_MANUAIS.md`
- `docs/P2/RASTREABILIDADE.md`
- `docs/P2/REGISTRO_EXECUCOES_HUMANAS_TIAGO.md`
- `docs/P2/DEFEITOS.md` e `docs/P2/DEFEITOS_EXPORTACAO.csv`
- `docs/P2/CONTROLE_P2.xlsx`
- `docs/P2/EVIDENCIAS_HUMANAS/`

## 13. Credenciais fictícias

Conta administrativa local documentada: `administrador.p2@local.test`. A senha fictícia local fica apenas no `.env.local`, na variável `P2_LOCAL_ADMIN_PASSWORD`; não incluir seu valor neste README, no repositório nem na pasta de entrega. Não usar contas ou senhas reais.

## 14. Problemas conhecidos

- D-002 (Issue #3, status Em análise; não será corrigido na P2, correção recomendada no plano de melhoria e no TCC): envio com WhatsApp já cadastrado alterou empresa/e-mail exibidos em solicitação anterior. A decisão é não corrigir o defeito na P2; a correção está recomendada no plano de melhoria e no TCC. Não haverá reteste desta correção nesta P2.
- D-001 (Encerrado na P2 após reteste manual aprovado em EX-021/CT-013); Issue #1 foi fechada no GitHub em 25/11/2026, após revisão do grupo.
- Execuções manuais: 24/24 registradas por Tiago (EX-001–EX-024); CT-004 encontrou D-002, ainda Em análise e sem correção nesta P2.
- Aceitação: quatro cenários aguardam participante real.
- A execução da coleção Postman pós-merge e a revalidação de Selenium/integração após mudanças recentes precisam ser conferidas antes da entrega final.
- A autorização do professor foi informada como “Aprovado (autorizado em aula)” em 20/08/2026, verbalmente em aula durante a apresentação da proposta. O grupo não formalizou uma segunda opção: considerou desenvolver/adotar outro sistema acadêmico sem especificar um sistema e descartou a alternativa em favor do WG Hidráulica por ser um TCC real já desenvolvido, com código-fonte disponível, persistência e integrações (§5.3). Confirmar com o professor se essa justificativa atende ao Apêndice A.

## 15. Contato do grupo

- Tiago Gabriel Carmelino — tiago.23110513@alunos.unisagrado.edu.br.
- Mateus Betini — mateus.23111245@alunos.unisagrado.edu.br.

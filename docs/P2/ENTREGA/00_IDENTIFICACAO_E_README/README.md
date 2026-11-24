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

Criar `.env.local` localmente a partir de `.env.example` e preencher somente variáveis `P2_*` com valores fictícios/de desenvolvimento local. Manter `.env.local` fora do Git e da pasta de entrega. Não copiar chaves, cookies, senhas ou credenciais reais para este README.

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

Conta administrativa local documentada: `administrador.p2@local.test`. A senha não é incluída neste README nem no repositório. O grupo deve fornecê-la em canal restrito quando necessário para a demonstração local. Não usar contas ou senhas reais.

## 14. Problemas conhecidos

- D-002 (Issue #3, status Novo): envio com WhatsApp já cadastrado alterou empresa/e-mail exibidos em solicitação anterior. A análise da regra de negócio, eventual correção e reteste estão pendentes.
- D-001 (Issue #1, pronto para reteste): correção e testes técnicos registrados; reteste manual CT-013 e encerramento ainda pendentes.
- Execuções manuais: 3/24 registradas (CT-001, CT-003 e CT-004); 21 casos pendentes. CT-004 encontrou D-002.
- Aceitação: quatro cenários aguardam participante real.
- A execução da coleção Postman pós-merge e a revalidação de Selenium/integração após mudanças recentes precisam ser conferidas antes da entrega final.
- A autorização do professor foi informada como “Aprovado (autorizado em aula)” em 20/08/2026, verbalmente em aula durante a apresentação da proposta. O grupo não formalizou uma segunda opção: considerou desenvolver/adotar outro sistema acadêmico sem especificar um sistema e descartou a alternativa em favor do WG Hidráulica por ser um TCC real já desenvolvido, com código-fonte disponível, persistência e integrações (§5.3). Confirmar com o professor se essa justificativa atende ao Apêndice A.

## 15. Contato do grupo

- Tiago Gabriel Carmelino — tiago.23110513@alunos.unisagrado.edu.br.
- Mateus Betini — mateus.23111245@alunos.unisagrado.edu.br.

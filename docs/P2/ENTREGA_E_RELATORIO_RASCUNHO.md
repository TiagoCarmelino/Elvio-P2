# Preparação do relatório e da entrega P2

**Estado:** roteiro editável, não é relatório final nem comprovante de submissão. Preencher com resultados e participantes reais antes de gerar DOCX/PDF, PPTX/PDF e enviar ao Drive oficial. Referência: seções 11–13 e Apêndices A–M do [enunciado](../P2_UNISAGRADO_texto_completo_para_Codex.txt).

## Identificação e README da pasta 00 — ordem obrigatória

1. **Integrantes, turma e grupo:** Tiago Gabriel Carmelino e Mateus Betini; turma `26-2-COMP-7-08-A`, Grupo 8 (`GRPATVSALA 8`). Contatos no README da pasta 00.
2. **Sistema e versão:** WG Hidráulica, cópia P2; Tiago informou aprovação verbal do professor em aula em 20/08/2026 (“Aprovado (autorizado em aula)”). Anexar eventual registro formal da autorização e registrar hash do commit submetido.
3. **Repositório:** cópia P2 em `https://github.com/TiagoCarmelino/Elvio-P2`, branch `p2-unisagrado`; confirmar hash publicado no fechamento da entrega.
4. **Tecnologias:** TypeScript, React, Vinext, Node.js, pnpm, Supabase/PostgreSQL, Docker, Selenium, Newman/Postman e SonarQube local.
5. **Pré-requisitos:** Node ≥22.13, pnpm 12.18.0, Docker Desktop, Supabase CLI 3.1.0, Chrome/Edge para as respectivas suítes. Conferir versões na máquina de demonstração.
6. **Instalação:** `pnpm install --frozen-lockfile` nesta cópia P2. No PowerShell com política que bloqueia `.ps1`, usar `pnpm.cmd`.
7. **Configuração:** criar `.env.local` **local e ignorado**, com URLs de loopback e credenciais fictícias. Usar `.env.example` e a documentação técnica existente como referência; não incluir chave nem senha no Drive público.
8. **Banco e dados:** iniciar Docker e `pnpm exec supabase start`; aplicar migrações/seed local. Um reset local exige reprovisionar o administrador fictício.
9. **Execução:** `pnpm run dev`; verificar `http://localhost:3000`, banco em `http://127.0.0.1:54321`.
10. **Testes:** `pnpm run test`, `pnpm run test:local`, `pnpm run test:selenium`, `pnpm run test:postman`, `pnpm run test:nonfunctional`, `pnpm run lint`, `pnpm exec tsc --noEmit`, `pnpm run build`. As suítes locais exigem serviços e `.env.local`.
11. **Pipeline:** [p2-ci.yml](../../.github/workflows/p2-ci.yml); URL e resultado GitHub Actions pendentes.
12. **Documentos:** [matriz](./MATRIZ_CONFORMIDADE.md), [plano](./ESCOPO_E_PLANO.md), [casos](./CASOS_MANUAIS.md), [rastreabilidade](./RASTREABILIDADE.md), [planilha](./CONTROLE_P2.xlsx), [aceitação/TNF](./ACEITACAO_E_NAO_FUNCIONAIS.md), [defeitos](./DEFEITOS.md) e [TDD/qualidade](./TDD_CI_QUALIDADE.md).
13. **Credenciais fictícias, problemas conhecidos e contato:** e-mail `administrador.p2@local.test`; senha deve ser fornecida de modo restrito pelo grupo. Limitações atuais: 24/24 execuções manuais registradas por Tiago; D-002 está em análise em CT-004, não será corrigido na P2 e tem correção recomendada no plano de melhoria e no TCC; quatro sessões de aceitação aguardam representante; CI remoto com falha intencional #7 e reversão verde #8 documentadas; a coleção Postman pós-merge (27 requisições/51 verificações) ainda não foi executada; Selenium precisa reteste após o ajuste no PR #2; aceite do framework, avisos ESLint e qualidade final ainda dependem de revisão. Contatos informados no [README da pasta 00](./ENTREGA/00_IDENTIFICACAO_E_README/README.md).

## Estrutura oficial do Drive

Usar **somente** a pasta disponibilizada pelo professor, com nome `P2_TQS_2026_TURMA_GRUPOXX_NOME-DO-SISTEMA` após preencher turma/grupo. Mapear os artefatos e verificar permissões:

| Pasta oficial | Conteúdo preparado ou pendente |
|---|---|
| `00_IDENTIFICACAO_E_README` | README na ordem acima, dados do grupo pendentes. |
| `01_SISTEMA_ALVO` | Código da cópia P2 e instruções; Tiago informou aprovação verbal do professor em aula em 20/08/2026. |
| `02_REQUISITOS_ESCOPO_RISCOS` | [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md). |
| `03_PLANO_DE_TESTES` | Seção de estratégia do plano; responsáveis/calendário pendentes. |
| `04_CASOS_E_RASTREABILIDADE` | [CASOS_MANUAIS.md](./CASOS_MANUAIS.md), [RASTREABILIDADE.md](./RASTREABILIDADE.md), [CONTROLE_P2.xlsx](./CONTROLE_P2.xlsx). |
| `05_EXECUCAO_MANUAL` | 24 registros e evidências pendentes. |
| `06_DEFEITOS` | [DEFEITOS.md](./DEFEITOS.md); Issue/CSV ou PDF final pendentes. |
| `07_AUTOMACAO_UNITARIA` | Suíte `tests/auth.test.mjs`, `tests/triage.test.mjs`, `tests/commercial-status.test.mjs` e log real de execução a exportar. |
| `08_INTEGRACAO_API` | Suítes API e [postman/](./postman), evidências e instruções locais. |
| `09_SISTEMA_INTERFACE` | Suíte Selenium e capturas/logs a selecionar. |
| `10_ACEITACAO_NAO_FUNCIONAIS` | [protocolos](./ACEITACAO_E_NAO_FUNCIONAIS.md) e [evidência exploratória](./EVIDENCIA_TNF_EXPLORATORIA.json); decisões humanas pendentes. |
| `11_METRICAS_E_QUALIDADE` | Planilha e [evidência SonarQube](./EVIDENCIA_SONAR_LOCAL.json); interpretação final pendente. |
| `12_TDD_CICD_MELHORIA` | [TDD_CI_QUALIDADE.md](./TDD_CI_QUALIDADE.md), workflow e links remotos pendentes. |
| `13_RELATORIO_FINAL` | DOCX editável e PDF idêntico pendentes. |
| `14_APRESENTACAO_E_VIDEO_CONTINGENCIA` | PPTX/PDF e vídeo real pendentes. |
| `15_DIARIO_DE_PARTICIPACAO` | Integrantes, datas, contribuições e evidências reais pendentes. |
| `16_BACKUP_ENTREGA` | Cópia de segurança final, checklist e comprovante de entrega assinados pendentes. |

## Estrutura do relatório final — conteúdo já disponível e lacunas

| Parte obrigatória | Fonte factual atual / lacuna |
|---|---|
| Capa, folha de identificação e sumário | Curso, disciplina e ano no enunciado; integrantes, turma, professor e declaração de participação a preencher pelo grupo. Gerar sumário automático no DOCX. |
| 1. Introdução | Contexto da qualidade do fluxo comercial e objetivo de avaliar a cópia P2; justificar escolha após aprovação do professor. |
| 2. Caracterização do sistema | Interface pública, painel administrativo, API e Supabase local; hash da versão final a inserir. |
| 3. Escopo, requisitos e riscos | 6 RF, 3 RNF e 9 riscos em [ESCOPO_E_PLANO.md](./ESCOPO_E_PLANO.md); revisão humana pendente. |
| 4. Planejamento dos testes | Estratégia, dados fictícios, ambiente e critérios no plano; participantes/calendário pendentes. |
| 5. Especificação dos casos | 24 CT especificados em [CASOS_MANUAIS.md](./CASOS_MANUAIS.md); revisão pendente. |
| 6. Execução manual e defeitos | 24/24 execuções manuais registradas (EX-001–EX-024). D-001 teve reteste manual aprovado em EX-021/CT-013; D-002 foi observado em EX-003/CT-004 e permanece Em análise, sem correção nesta P2. |
| 7. Automação | 7 unitários candidatos, 5 integrações, 4 Selenium; comandos/ambiente/resultados em [PROGRESSO.md](./PROGRESSO.md). Aceite do framework pendente. |
| 8. Integração e sistema | HTTP real + Supabase local, fluxos Selenium e coleção Postman/Newman; limitações e restauro de dados. |
| 9. Aceitação e não funcionais | 4 cenários de aceitação sem participante; 6 TNF exploratórios com valores reais, critério final e observação humana pendentes. |
| 10. Métricas e indicadores | 8 indicadores na planilha; taxas manuais finais só após execuções. Explicar denominadores e cobertura SonarQube sem LCOV. |
| 11. TDD, CI/CD e melhoria contínua | Três commits TDD, três análises SonarQube locais e ações propostas em [TDD_CI_QUALIDADE.md](./TDD_CI_QUALIDADE.md); CI remoto pendente. |
| 12. Discussão dos resultados | Analisar riscos residuais, achados da ferramenta não verificados, ausência de dados manuais/aceitação e limitações do ambiente após a rodada final. |
| 13. Conclusão | Escrever apenas após decisão do professor, execução manual, aceitação e métricas finais; não declarar prontidão antes disso. |
| Referências e anexos | Enunciado oficial, documentação técnica realmente utilizada, registros e evidências com versão/data; listar sem fontes fictícias. |

## Apresentação e submissão — responsabilidades humanas

Preparar exposição de 12–15 minutos com todos os integrantes falando e até 5 minutos de perguntas. Sequência sugerida: identificação/escopo, arquitetura e riscos, casos e automação, demonstração local, resultados manuais/aceitação, métricas/qualidade, TDD/CI e conclusões. Gerar PPTX/PDF e vídeo MP4 ou link acessível somente com demonstrações reais. Antes da entrega, revisar arquivos, testar links em janela anônima, conferir acesso do professor e produzir `COMPROVANTE_DE_ENTREGA.pdf` com data/hora e assinaturas do grupo. Essas ações ainda não ocorreram.

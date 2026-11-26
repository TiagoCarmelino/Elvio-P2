# Formulários de preenchimento humano — P2

Estes registros seguem os Apêndices A, F, L e M do [manual](../P2_UNISAGRADO_texto_completo_para_Codex.txt). O Apêndice A registra a aprovação verbal do professor. O Apêndice F referencia as 24 execuções manuais aprovadas por Tiago. O Apêndice L reúne as contribuições do grupo com as durações documentadas ou aproximadas pelos horários das evidências.

## Apêndice A — proposta e aprovação

| Campo obrigatório | Preenchimento |
|---|---|
| Turma e grupo | Turma `26-2-COMP-7-08-A`; Grupo 8 (`GRPATVSALA 8`) |
| Integrantes | Tiago Gabriel Carmelino; Mateus Betini |
| Nome do sistema | WG Hidráulica |
| Origem do sistema | Sistema do TCC em desenvolvimento, trabalhado nesta cópia independente destinada à P2. |
| Link do repositório | https://github.com/TiagoCarmelino/Elvio-P2 — repositório P2, branch `p2-unisagrado` |
| Licença/autorização | Código do TCC WG Hidráulica, do qual Tiago Gabriel Carmelino é um dos autores. O TCC tem outros integrantes; Tiago e Mateus escolheram o sistema para a P2 porque nem todos os membros do TCC fazem parte deste grupo da disciplina. Uso nesta cópia acadêmica aprovado verbalmente pelo professor em 20/08/2026; o TCC original não foi alterado. |
| Tecnologias principais | React, TypeScript, Vinext, Node.js, pnpm, Supabase/PostgreSQL e Docker; Postman/Newman, Selenium e SonarQube no processo de qualidade. |
| Como executar | Pré-requisitos, configuração e comandos locais descritos no [README da pasta 00](./ENTREGA/00_IDENTIFICACAO_E_README/README.md). |
| Fluxos selecionados | Solicitação pública; autenticação administrativa; consulta e atualização de status/histórico; itens de orçamento; condições e geração de proposta PDF. |
| Integrações existentes | Interface web com APIs locais; autenticação Supabase; persistência PostgreSQL/RPC no Supabase local; proposta PDF. |
| Segunda opção de sistema | O grupo **não formalizou uma segunda opção**. Foi considerada, sem definição de um sistema específico, a alternativa de desenvolver ou adotar outro sistema acadêmico; ela foi descartada em favor do WG Hidráulica. |
| Justificativa da escolha | O WG Hidráulica é um sistema real já desenvolvido como TCC, com código-fonte disponível, persistência de dados e integrações, conforme informação do grupo e requisitos do §5.3. O trabalho ocorre em cópia P2 isolada enquanto o TCC original continua em desenvolvimento. |
| Riscos de viabilidade | O ambiente depende do Supabase local e do Docker; os testes usam exclusivamente dados fictícios. |
| Decisão do professor | **Aprovado verbalmente em aula** |
| Ajustes solicitados | Nenhum; o sistema foi aprovado sem ajustes. |
| Data da aprovação | **20/08/2026** (informada por Tiago; aprovação verbal em aula durante a apresentação da proposta). |

## Apêndice F — registro de execução manual

O [registro completo](./REGISTRO_EXECUCOES_HUMANAS_TIAGO.md) reúne EX-001–EX-024 com resultados e evidências. As três primeiras execuções estão resumidas abaixo. A consolidação está em [CONTROLE_P2.xlsx](./CONTROLE_P2.xlsx).

| Execução | Caso | Data/versão/commit | Executor | Dados e resultado obtido | Resultado | Evidência | Defeito |
|---|---|---|---|---|---|---|---|
| EX-001 | CT-001 | 23/11/2026; aplicação do merge `219210a` | Tiago Gabriel Carmelino | Dados fictícios; envio confirmado e solicitação observada no painel com status Novo. | Aprovado | Capturas `CT-001_EX-001_*` em `EVIDENCIAS_HUMANAS/` | — |
| EX-002 | CT-003 | 23/11/2026; aplicação do merge `219210a` | Tiago Gabriel Carmelino | 9 caracteres bloqueados na validação do navegador; 10 aceitos e listados no painel. | Aprovado | Capturas `CT-003_EX-002_*` em `EVIDENCIAS_HUMANAS/` | — |
| EX-003 | CT-004 | 23/11/2026; aplicação do merge `219210a` | Tiago Gabriel Carmelino | Segunda solicitação vinculada ao mesmo cliente; dados exibidos na solicitação anterior foram sobrescritos. | Aprovado quanto ao objetivo principal, com defeito | Capturas `CT-004_EX-003_*` em `EVIDENCIAS_HUMANAS/` | D-002, Issue #3 |

As execuções exploratórias do agente constam em [REGISTRO_EXECUCOES_AGENTE_20261116.md](./REGISTRO_EXECUCOES_AGENTE_20261116.md). Tiago executou os casos CT/EX e Mateus observou a sessão de aceitação, conforme Apêndice L.

## Apêndice L — diário de participação

| Data | Atividade | Responsável principal | Colaboradores | Tempo | Evidência |
|---|---|---|---|---|---|
| 20/08/2026 | Participou da escolha do WG Hidráulica e da apresentação da proposta ao professor, aprovada verbalmente. | Mateus Betini | Não registrados | Não registrado | Informação fornecida pelo grupo; aprovação verbal registrada no Apêndice A. |
| 23/11/2026 | Ampliação da coleção Postman para caminhos positivos/negativos das operações críticas. | Tiago Gabriel Carmelino (com apoio de IA: Claude/Codex) | Não registrados | Não registrado | Commit `e3bc4f2`; coleção `postman/P2_WG_Hidraulica.postman_collection.json`. |
| 23/11/2026 | Preparação da documentação de ambiente local reproduzível para a P2. | Tiago Gabriel Carmelino (com apoio de IA: Claude/Codex) | Não registrados | Não registrado | Commit `05c3ca1`; `docs/P2/README.md` e arquivos relacionados. |
| 23/11/2026 | Ajuste do vínculo dos testes de RF-04 na rastreabilidade. | Tiago Gabriel Carmelino (com apoio de IA: Claude/Codex) | Não registrados | Não registrado | Commit `f0d0170`; `docs/P2/RASTREABILIDADE.md`. |
| 23/11/2026 | Vínculo das requisições Postman PM-01–PM-27 aos requisitos. | Tiago Gabriel Carmelino (com apoio de IA: Claude/Codex) | Não registrados | Não registrado | Commit `f8f1c8a`; `docs/P2/RASTREABILIDADE.md`. |
| 23/11/2026 | Ajuste dos testes de integração local para evitar concorrência entre arquivos. | Tiago Gabriel Carmelino (com apoio de IA: Claude/Codex) | Não registrados | Não registrado | Commit `cdafc40`; alterações em `tests/`. |
| 23/11/2026 | Ajuste Selenium SEL-05 para aguardar a hidratação do formulário. | Tiago Gabriel Carmelino (com apoio de IA: Claude/Codex) | Não registrados | Não registrado | Commit `8b4abff`; alteração em `tests/`. |
| 23/11/2026 | Demonstração controlada da falha do CI e reversão subsequente para estado verde. | Tiago Gabriel Carmelino (com apoio de IA: Claude/Codex) | Não registrados | Não registrado | Commits `6014a43` e `9b1bf7e`; runs [#7](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45244036937) e [#8](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45244667066). |
| 23/11/2026 | Integração do PR #2 à branch `p2-unisagrado`. | Tiago Gabriel Carmelino (autor do merge) | Não registrados | Não registrado | Commit `219210a`; merge de `p2-claude-correcoes`. |
| 23/11/2026 | Execução manual de CT-001 (EX-001), CT-003 (EX-002) e CT-004 (EX-003), com registro dos resultados; D-002 observado no CT-004. | Execução por Tiago Gabriel Carmelino; organização documental com apoio de IA (Claude/Codex), revisada por Tiago | Não registrados | Não registrado | Commit `2fcb2b6`; [Registro humano](./REGISTRO_EXECUCOES_HUMANAS_TIAGO.md) e capturas `CT-001_EX-001_*`, `CT-003_EX-002_*`, `CT-004_EX-003_*` em `EVIDENCIAS_HUMANAS/`. |
| 23/11/2026 | Verificação manual R-SEG-01 em PowerShell: duas requisições GET somente leitura retornaram HTTP 401. | Tiago Gabriel Carmelino; documentação com apoio de IA (Claude/Codex), revisada por Tiago | Não registrados | Não registrado | [Registro e captura humana](./EVIDENCIAS_HUMANAS/R-SEG-01/REGISTRO_SEG-01_Tiago.md); commit `b880825`. |
| 25/11/2026, 14:11–14:57 | Executou manualmente EX-004 a EX-024 e conferiu a restauração do CT-004. | Tiago Gabriel Carmelino | Não registrados | aprox. 46 min | [REGISTRO_EXECUCOES_HUMANAS_TIAGO.md](./REGISTRO_EXECUCOES_HUMANAS_TIAGO.md) e [EVIDENCIAS_HUMANAS/](./EVIDENCIAS_HUMANAS/) |
| 25/11/2026, 15:00–15:23 | Conduziu a sessão de aceitação AC-01 a AC-04. | Tiago Gabriel Carmelino | Mateus Betini (observador), PART-01 | aprox. 23 min | [REGISTRO_ACEITACAO_PART-01_20261125.md](./REGISTRO_ACEITACAO_PART-01_20261125.md) |
| 25/11/2026 | Observou a sessão de aceitação AC-01 a AC-04, aproximadamente das 15:00 às 15:23; participou como observador desde o início do AC-01. | Mateus Betini | Não se aplica | Aproximadamente 23 minutos, conforme informado no registro | [Registro da sessão PART-01](./REGISTRO_ACEITACAO_PART-01_20261125.md) e capturas em `EVIDENCIAS_ACEITACAO/`. Relato de Mateus em 25/11/2026 às 15:26: “Acompanhei os quatro cenários de aceitação e observei que o participante conseguiu utilizar o sistema com facilidade. A única dúvida identificada foi sobre o preenchimento das observações comerciais, mas todas as tarefas foram concluídas com sucesso.” O texto foi repassado por Tiago no chat. |
| 25/11/2026, 15:38–16:10 | Executou a rodada automática final e a análise SonarQube com apoio de IA (Claude Code). Tiago conferiu os resultados. | Tiago Gabriel Carmelino | Não registrados | aprox. 32 min | [EVIDENCIAS_AUTOMACAO/20261125/](./EVIDENCIAS_AUTOMACAO/20261125/) e [run #21](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45681826995) |
| 25/11/2026 | Redigiu o relatório final com apoio de IA (Claude) e revisou o texto. | Tiago Gabriel Carmelino | Mateus Betini (revisão com três apontamentos) | Não registrado | Relatório final (pasta 13) |
| 25/11/2026 | Revisou o relatório final e apontou: commit da seção 2.3 desatualizado; contagem de casos por requisito na seção 5; divergência entre D-001 como Encerrado e Issue #1 aberta. Tiago repassou os apontamentos no chat e todos foram incorporados ao relatório. | Mateus Betini | Tiago Gabriel Carmelino (repassou os apontamentos) | Não registrado | Relato informado pelo grupo no chat; revisão incorporada ao relatório final. |
| 25/11/2026, 21:00 | Fechou a Issue #1 após revisão do grupo. | Tiago Gabriel Carmelino | Não registrados | Não registrado | [GitHub Issue #1](https://github.com/TiagoCarmelino/Elvio-P2/issues/1) |
| 26/11/2026, 00:07–00:41 | Montou as subpastas 00–16 da entrega e enviou a pasta ao Google Drive, com apoio de IA. | Tiago Gabriel Carmelino | Não registrados | aprox. 34 min | Estrutura da entrega 00–16 no Google Drive |
| 26/11/2026 | Elaborou a apresentação PPTX/PDF com apoio de IA e revisou o material. | Tiago Gabriel Carmelino | Não registrados | Não registrado | Apresentação (pasta 14) |
| Ao longo do projeto (sem data específica) | Revisou documentos do projeto. | Mateus Betini | Não registrados | Não registrado | Atividade informada pelo grupo. |

**Durações do diário.** Os intervalos marcados com “aprox.” foram calculados pelos horários das evidências. Atividades sem duração verificável constam como “Não registrado”.

## Registro da sessão de aceitação

Sessão realizada em 25/11/2026 com participante anônimo PART-01 (pessoa externa ao curso), facilitada por Tiago Gabriel Carmelino e observada por Mateus Betini. O registro detalhado, respostas literais, desvios de protocolo e evidências estão em [REGISTRO_ACEITACAO_PART-01_20261125.md](./REGISTRO_ACEITACAO_PART-01_20261125.md). Resultado: **4/4 cenários Aceito**.

## Apêndice M — declaração final

> Declaramos que os arquivos entregues representam o trabalho efetivamente realizado pelo grupo, que as execuções e métricas são reais, que os dados utilizados são fictícios e que respeitamos as autorizações, licenças e orientações da disciplina.

Tiago Gabriel Carmelino: __________________________  Data: ____/____/________

Mateus Betini: __________________________  Data: ____/____/________

**Declaração pronta. Assinaturas a incluir na entrega de 26/11/2026.**

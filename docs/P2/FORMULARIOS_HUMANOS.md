# Formulários de preenchimento humano — P2

Estes registros preservam os campos dos Apêndices A, F, L e M do [manual](../P2_UNISAGRADO_texto_completo_para_Codex.txt). A ficha A foi preenchida com os dados confirmados; a aprovação verbal e sua data são informações fornecidas por Tiago, e a segunda opção está documentada como não formalizada. O Apêndice F contém três execuções humanas (3/24); o Apêndice L inclui atividades datadas com referências a commits e registros, sem horas ou colaboradores inferidos. Campos ainda vazios são **pendências**, não resultados negativos.

## Apêndice A — proposta e aprovação

| Campo obrigatório | Preenchimento |
|---|---|
| Turma e grupo | Turma `26-2-COMP-7-08-A`; Grupo 8 (`GRPATVSALA 8`) |
| Integrantes | Tiago Gabriel Carmelino; Mateus Betini |
| Nome do sistema | WG Hidráulica |
| Origem do sistema | Sistema do TCC em desenvolvimento, trabalhado nesta cópia independente destinada à P2. |
| Link do repositório | https://github.com/TiagoCarmelino/Elvio-P2 — repositório P2, branch `p2-unisagrado` |
| Licença/autorização | Aprovação verbal do professor em aula, na apresentação da proposta: **Aprovado (autorizado em aula), em 20/08/2026**. A autorização/licença do responsável pelo código-fonte, se exigida além da autorização do professor: **confirmar/anexar registro**. |
| Tecnologias principais | React, TypeScript, Vinext, Node.js, pnpm, Supabase/PostgreSQL e Docker; Postman/Newman, Selenium e SonarQube no processo de qualidade. |
| Como executar | Pré-requisitos, configuração e comandos locais descritos no [README da pasta 00](./ENTREGA/00_IDENTIFICACAO_E_README/README.md). |
| Fluxos selecionados | Solicitação pública; autenticação administrativa; consulta e atualização de status/histórico; itens de orçamento; condições e geração de proposta PDF. |
| Integrações existentes | Interface web com APIs locais; autenticação Supabase; persistência PostgreSQL/RPC no Supabase local; proposta PDF. |
| Segunda opção de sistema | O grupo **não formalizou uma segunda opção**. Foi considerada, sem definição de um sistema específico, a alternativa de desenvolver ou adotar outro sistema acadêmico; ela foi descartada em favor do WG Hidráulica. |
| Justificativa da escolha | O WG Hidráulica é um sistema real já desenvolvido como TCC, com código-fonte disponível, persistência de dados e integrações, conforme informação do grupo e requisitos do §5.3. O trabalho ocorre em cópia P2 isolada enquanto o TCC original continua em desenvolvimento. |
| Riscos de viabilidade | A segunda opção não foi formalizada; confirmar com o professor se a justificativa registrada atende ao formulário. Ainda falta registrar autorização/licença do responsável pelo código, se aplicável, e confirmar acesso do professor ao repositório. |
| Decisão do professor | **Aprovado (autorizado em aula)** |
| Ajustes solicitados | Não informado; confirmar com o professor se houve ajustes. |
| Data da aprovação | **20/08/2026** (informada por Tiago; aprovação verbal em aula durante a apresentação da proposta). |

## Apêndice F — registro de execução manual

Copiar uma linha por execução em [CONTROLE_P2.xlsx](./CONTROLE_P2.xlsx); não reaproveitar execução automatizada.

| Execução | Caso | Data/versão/commit | Executor | Dados e resultado obtido | Resultado | Evidência | Defeito |
|---|---|---|---|---|---|---|---|
| EX-001 | CT-001 | 23/11/2026; aplicação do merge `219210a` | Tiago Gabriel Carmelino | Dados fictícios; envio confirmado e solicitação observada no painel com status Novo. | Aprovado | Capturas `CT-001_EX-001_*` em `EVIDENCIAS_HUMANAS/` | — |
| EX-002 | CT-003 | 23/11/2026; aplicação do merge `219210a` | Tiago Gabriel Carmelino | 9 caracteres bloqueados na validação do navegador; 10 aceitos e listados no painel. | Aprovado | Capturas `CT-003_EX-002_*` em `EVIDENCIAS_HUMANAS/` | — |
| EX-003 | CT-004 | 23/11/2026; aplicação do merge `219210a` | Tiago Gabriel Carmelino | Segunda solicitação vinculada ao mesmo cliente; dados exibidos na solicitação anterior foram sobrescritos. | Aprovado quanto ao objetivo principal, com defeito | Capturas `CT-004_EX-003_*` em `EVIDENCIAS_HUMANAS/` | D-002, Issue #3 |

As execuções do agente estão separadas em [REGISTRO_EXECUCOES_AGENTE_20261116.md](./REGISTRO_EXECUCOES_AGENTE_20261116.md). Elas não recebem ID `EX` e não substituem a execução/conferência humana. Mateus não é identificado como executor porque não há participação dele registrada nesta rodada.

## Apêndice L — diário de participação

| Data | Atividade | Responsável principal | Colaboradores | Tempo | Evidência |
|---|---|---|---|---|---|
| 23/11/2026 | Ampliação da coleção Postman para caminhos positivos/negativos das operações críticas. | Tiago Gabriel Carmelino (autor registrado no Git) | Não registrados | Não registrado | Commit `e3bc4f2`; coleção `postman/P2_WG_Hidraulica.postman_collection.json`. |
| 23/11/2026 | Preparação da documentação de ambiente local reproduzível para a P2. | Tiago Gabriel Carmelino (autor registrado no Git) | Não registrados | Não registrado | Commit `05c3ca1`; `docs/P2/README.md` e arquivos relacionados. |
| 23/11/2026 | Ajuste do vínculo dos testes de RF-04 na rastreabilidade. | Tiago Gabriel Carmelino (autor registrado no Git) | Não registrados | Não registrado | Commit `f0d0170`; `docs/P2/RASTREABILIDADE.md`. |
| 23/11/2026 | Vínculo das requisições Postman PM-01–PM-27 aos requisitos. | Tiago Gabriel Carmelino (autor registrado no Git) | Não registrados | Não registrado | Commit `f8f1c8a`; `docs/P2/RASTREABILIDADE.md`. |
| 23/11/2026 | Ajuste dos testes de integração local para evitar concorrência entre arquivos. | Tiago Gabriel Carmelino (autor registrado no Git) | Não registrados | Não registrado | Commit `cdafc40`; alterações em `tests/`. |
| 23/11/2026 | Ajuste Selenium SEL-05 para aguardar a hidratação do formulário. | Tiago Gabriel Carmelino (autor registrado no Git) | Não registrados | Não registrado | Commit `8b4abff`; alteração em `tests/`. |
| 23/11/2026 | Demonstração controlada da falha do CI e reversão subsequente para estado verde. | Tiago Gabriel Carmelino (autor registrado nos commits) | Não registrados | Não registrado | Commits `6014a43` e `9b1bf7e`; runs [#7](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45244036937) e [#8](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45244667066). |
| 23/11/2026 | Integração do PR #2 à branch `p2-unisagrado`. | Tiago Gabriel Carmelino (autor do merge) | Não registrados | Não registrado | Commit `219210a`; merge de `p2-claude-correcoes`. |
| 23/11/2026 | Execução manual de CT-001 (EX-001), CT-003 (EX-002) e CT-004 (EX-003), com registro dos resultados; D-002 observado no CT-004. | Tiago Gabriel Carmelino | Não registrados | Não registrado | [Registro humano](./REGISTRO_EXECUCOES_HUMANAS_TIAGO.md) e capturas `CT-001_EX-001_*`, `CT-003_EX-002_*`, `CT-004_EX-003_*` em `EVIDENCIAS_HUMANAS/`. |
| 23/11/2026 | Verificação manual R-SEG-01 em PowerShell: duas requisições GET somente leitura retornaram HTTP 401. | Tiago Gabriel Carmelino | Não registrados | Não registrado | [Registro e captura humana](./EVIDENCIAS_HUMANAS/R-SEG-01/REGISTRO_SEG-01_Tiago.md); commit `b880825`. |

**Limite do registro:** o Git fornece datas/autores dos commits, mas não registra duração ou participação de colaboradores; por isso o tempo está como “Não registrado” e não se atribuem atividades a Mateus sem evidência. A aprovação do Apêndice A continua sem data até preenchimento humano.

As ações técnicas documentadas pelo agente não devem ser atribuídas a integrantes sem conferência e contribuição efetiva do grupo.

## Apêndice M — declaração final

> Declaramos que os arquivos entregues representam o trabalho efetivamente realizado pelo grupo, que as execuções e métricas são reais, que os dados utilizados são fictícios e que respeitamos as autorizações, licenças e orientações da disciplina.

Integrante 1: __________________________  Data: ____/____/________  
Integrante 2: __________________________  Data: ____/____/________  
Integrante 3, se houver: __________________________  Data: ____/____/________

**Assinatura somente após revisão humana da entrega.**

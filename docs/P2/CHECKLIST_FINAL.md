# Checklist de fechamento da P2

**Atualizado em 25/11/2026:** aprovação verbal informada por Tiago, datada de 20/08/2026; o grupo não formalizou uma segunda opção específica, e essa justificativa aguarda confirmação do professor. Nenhuma assinatura foi presumida. A falha controlada de CI está registrada. Referência: seções 5, 9–16 e Apêndices A–M do [enunciado](../P2_UNISAGRADO_texto_completo_para_Codex.txt).

## Professor e grupo

- [ ] Integrantes confirmados: Tiago Gabriel Carmelino e Mateus Betini; turma 26-2-COMP-7-08-A e Grupo 8 (GRPATVSALA 8) informados. Preencher responsabilidades, contatos e calendário oficial; revisar/validar o diário L (atividades com evidência já registradas; tempo sem fonte permanece não registrado).
- [ ] Apêndice A preenchido com a aprovação verbal informada em 20/08/2026. O grupo não formalizou segunda opção; a alternativa genérica de desenvolver/adotar outro sistema acadêmico foi descartada em favor do WG Hidráulica (§5.3). Confirmar com o professor se isso atende à exigência de duas opções; anexar registro/ajustes da autorização se disponíveis.
- [ ] Confirmar por escrito a aceitação de `node:test` como framework equivalente ao JUnit para JavaScript.
- [ ] Confirmar orientação do professor sobre uso de IA e critérios não funcionais preliminares.
- [ ] Confirmar licença/autorização para uso acadêmico do sistema e do código nesta cópia.

## Execução e qualidade

- [x] Execução manual registrada: **24/24 casos (EX-001–EX-024), todos por Tiago Gabriel Carmelino**, com dados, resultados e evidências em [REGISTRO_EXECUCOES_HUMANAS_TIAGO.md](./REGISTRO_EXECUCOES_HUMANAS_TIAGO.md) e [RASTREABILIDADE.md](./RASTREABILIDADE.md). CT-004 encontrou D-002; CT-013/EX-021 retestou D-001 com aprovação.
- [x] Registrar as dependências e restaurações observadas; CT-004 voltou a Novo às 14:25 de 25/11 e a validade da seed foi restaurada para 15 dias em EX-024.
- [x] Registrar D-001 na [Issue #1](https://github.com/TiagoCarmelino/Elvio-P2/issues/1) e atualizar CSV.
- [x] Registrar D-002, Status Em análise, severidade/prioridade Média, Issue [#3](https://github.com/TiagoCarmelino/Elvio-P2/issues/3), CSV e evidências de CT-004; decisão desta P2: não corrigir, recomendar a correção no plano de melhoria e no TCC; sem correção nesta P2; correção recomendada no plano de melhoria e no TCC.
- [x] Atualizar catálogo com pré-condições explícitas dos CT-004/010/014/018/019; classificar logs de exploração do agente como não usados para evidência final.
- [ ] Grupo revisar o resultado do EX-021 e decidir sobre o fechamento da Issue #1; ela permanece aberta até essa revisão. Exportar o relatório PDF final.
- [ ] Retestar e executar regressão dos casos afetados após cada correção; registrar reaberturas reais.
- [x] Após o PR #2, revalidar `test:local` (8/8) e Selenium (7/7, incluindo SEL-05 atualizado) na rodada final de 25/11/2026, commit `2ad8845`; evidências em `EVIDENCIAS_AUTOMACAO/20261125/160236-2ad8845/`.
- [x] Executar AC-01–AC-04 com participante externo PART-01; os quatro foram aceitos. Respostas e evidências estão no [registro da sessão](./REGISTRO_ACEITACAO_PART-01_20261125.md).
- [ ] Grupo revisar o registro e os achados; não inferir fala de Mateus além da observação registrada. Colher assinatura da declaração final após revisão.
- [x] Executar rodada automática final TNF-01–06 em 25/11/2026 (`2ad8845`): TNF-01–05 Atende; TNF-06 Atende parcialmente (390×844 sem rolagem horizontal). **Pendente:** observação humana em largura móvel e validação final dos critérios pelo grupo/professor.
- [x] Ampliar a coleção Postman para caminhos positivos/negativos das operações críticas: 27 requisições/51 verificações, PM-01–PM-27 mapeadas na rastreabilidade.
- [x] Executar/exportar a coleção Postman pós-merge na rodada final: 27 requisições e 51 verificações aprovadas; log em `EVIDENCIAS_AUTOMACAO/20261125/160236-2ad8845/04-postman-newman.log`.
- [x] Reexecutar a suíte de integração/API (8/8), incluindo validações de fronteira/restauração, na rodada final; log em `02-integracao-local.log`.
- [ ] Fechar a lacuna de SEL-02: após envio pela interface, verificar a solicitação persistida no painel e planejar limpeza/restauração segura dos registros fictícios Selenium no banco local.
- [ ] Avaliar visualmente o PDF de proposta e checar dados/valores em comparação com o banco, além da assinatura HTTP automatizada.
- [x] Gerar LCOV e importar no SonarQube local na rodada final (`2ad8845`); Quality Gate **OK/aprovado**. Capturas, scanner e JSON em `EVIDENCIAS_AUTOMACAO/20261125/sonar/`. Cobertura global 27,1%; conferir a limitação de escopo no registro Sonar.
- [ ] Revisar os nove avisos ESLint de imagem com a próxima atualização do TCC, preservando arquitetura e layout.
- [ ] Avaliar hardening condicional R-SEG-01 (flag explícita para confiar no cabeçalho hospedado e testes para flag falsa/verdadeira) na revisão técnica apropriada. A verificação de 23/11 no plugin retornou 401 nos dois casos e não gerou defeito.

- [x] Rodada automática final em 25/11/2026, commit `2ad8845`: unitários/LCOV 8/8, integração/API 8/8, Selenium 7/7, Newman 27 requisições/51 verificações e TNF 6/6, todas as suítes aprovadas.
- [x] SonarQube final com LCOV importado e Quality Gate aprovado; cobertura global registrada em 27,1%, com limites de escopo descritos nas evidências.
- [x] Relatório final redigido; revisão de Mateus em 25/11 apontou três inconsistências, todas incorporadas ao texto. DOCX/PDF ainda requerem atualização/exportação e revisão de formato.

## Repositório e CI/CD

- [x] `origin` verificado no destino exclusivo P2; repositório privado, branch padrão `p2-unisagrado`; nenhum arquivo de credencial foi incluído.
- [x] Enviar a branch P2 e confirmar o hash publicado `fe8c0a160a80967e4dcc9749a19edb44e929bcff`.
- [x] Registrar a execução verde do GitHub Actions [run #21](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45681826995).
- [x] Registrar falha **controlada intencional** na pipeline e posterior reversão/aprovação: commit `6014a43`, run [#7 vermelho](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45244036937); commit `9b1bf7e`, run [#8 verde](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45244667066). Não é o ciclo TDD local. Capturas em [EVIDENCIAS_CI/](./EVIDENCIAS_CI/).
- [ ] Revisar acesso/permissões do professor e avaliar se integração/API/Selenium/Postman devem ser adicionados à CI.
- [ ] Grupo conceder acesso de leitura ao professor e conferir Issues, pipeline e artefatos com essa conta; não mudar o repositório para público sem aprovação.

## Documentos e entrega oficial

- [x] Atualizar [CONTROLE_P2.xlsx](./CONTROLE_P2.xlsx) com as 24 execuções humanas, os resultados da rodada automática final e os indicadores recalculados; interpretação e revisão final pelo grupo continuam necessárias.
- [x] Redigir o texto do relatório final com os resultados e métricas atualizados.
- [ ] Atualizar/exportar DOCX/PDF definitivos em [ARTEFATOS_PREPARACAO/](./ARTEFATOS_PREPARACAO/) e revisar integridade, formatação, apêndices e assinaturas do grupo; os arquivos atuais ainda são rascunhos não submetíveis.
- [ ] Revisar o PPTX/PDF de preparação (10 slides) e [ROTEIRO_APRESENTACAO_P2.md](./ROTEIRO_APRESENTACAO_P2.md); completar integrantes/resultados, ensaiar 12–15 minutos mais perguntas, com fala de todos.
- [ ] Gravar vídeo de contingência MP4 ou disponibilizar link acessível, com demonstração curta dos testes principais; o roteiro preparado não substitui o vídeo.
- [ ] Revisar e manter o Diário de Participação (Apêndice L) com pessoas, tempos e evidências reais; o modelo e atividades datadas comprováveis estão em [FORMULARIOS_HUMANOS.md](./FORMULARIOS_HUMANOS.md), sem horas ou colaboradores inventados.
- [ ] Preencher e assinar declaração final do grupo (Apêndice M), somente após conferir a veracidade das evidências.
- [ ] Organizar exclusivamente a pasta oficial fornecida pelo professor, com nome `P2_TQS_2026_TURMA_GRUPOXX_NOME-DO-SISTEMA` e subpastas 00–16.
- [x] Preparar README da pasta 00 na ordem exigida em §11.4, sem senhas reais ou senha local: [ENTREGA/00_IDENTIFICACAO_E_README/README.md](./ENTREGA/00_IDENTIFICACAO_E_README/README.md). Contatos e cópia para a pasta oficial do professor ainda dependem do grupo.
- [ ] Gerar `COMPROVANTE_DE_ENTREGA.pdf` com data, hora, integrantes e checklist assinado; fazer backup na pasta 16 e em local do grupo.
- [ ] Abrir arquivos finais e verificar integridade, download e permissão do professor; entregar antes do prazo oficial e não alterar após o horário sem autorização.

**Procedimento para atualização futura do TCC:** preservar branch e commits P2; incorporar mudanças por diff/merge revisado; atualizar fixtures, requisitos e casos afetados; repetir toda a validação antes de atribuir novo status de conformidade.

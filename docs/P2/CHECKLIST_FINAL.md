# Checklist de fechamento da P2

**Atualizado em 26/11/2026.** Referência nas seções 5, 9–16 e Apêndices A–M do [enunciado](../P2_UNISAGRADO_texto_completo_para_Codex.txt).

## Professor e grupo

- [x] Identificar Tiago Gabriel Carmelino e Mateus Betini, turma `26-2-COMP-7-08-A`, Grupo 8 (`GRPATVSALA 8`). Responsabilidades no plano de testes e contatos no README da pasta 00.
- [x] Registrar no [Apêndice A](./FORMULARIOS_HUMANOS.md#apêndice-a--proposta-e-aprovação) a origem do código, a justificativa da escolha e a aprovação verbal em aula em 20/08/2026, sem ajustes solicitados.

## Execução e qualidade

- [x] Registrar as **24/24 execuções manuais aprovadas** (EX-001–EX-024), realizadas por Tiago Gabriel Carmelino. CT-004 atingiu o objetivo principal e revelou D-002. Resultados, evidências e restaurações constam no [registro](./REGISTRO_EXECUCOES_HUMANAS_TIAGO.md) e na [rastreabilidade](./RASTREABILIDADE.md).
- [x] Retestar D-001 em EX-021/CT-013 e fechar a [Issue #1](https://github.com/TiagoCarmelino/Elvio-P2/issues/1) após revisão do grupo em 25/11/2026.
- [x] Registrar D-002, em análise na [Issue #3](https://github.com/TiagoCarmelino/Elvio-P2/issues/3), no CSV e nas evidências do CT-004. A correção está prevista como recomendação no plano de melhoria e no TCC.
- [x] Registrar a aceitação **4/4** por PART-01, com respostas, consentimento e evidências no [registro da sessão](./REGISTRO_ACEITACAO_PART-01_20261125.md).
- [x] Registrar a rodada automática final de 25/11/2026 em `2ad8845`: unitários/LCOV 8/8, integração/API 8/8, Selenium 7/7, Newman com 27 requisições e 51 verificações aprovadas e TNF 6/6. [Evidências da rodada](./EVIDENCIAS_AUTOMACAO/20261125/160236-2ad8845/)
- [x] Registrar os resultados dos TNF. TNF-01–05 atendem. TNF-06 **atende parcialmente**: o teste automatizado em 390×844 passou sem rolagem horizontal, e a observação humana em celular não foi realizada.
- [x] Registrar SonarQube final com LCOV importado e Quality Gate aprovado (OK). Cobertura global de 27,1%, com escopo descrito nas [evidências Sonar](./EVIDENCIAS_AUTOMACAO/20261125/sonar/).
- [x] Atualizar a [planilha de controle](./CONTROLE_P2.xlsx) com execuções, resultados e indicadores recalculados.

## Repositório e CI/CD

- [x] Publicar a branch `p2-unisagrado` no repositório P2 privado.
- [x] Registrar os runs verdes do GitHub Actions [#21](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45681826995) e #22.
- [x] Registrar a falha controlada de CI no commit `6014a43`, [run #7](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45244036937), e a reversão no commit `9b1bf7e`, [run #8](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45244667066). [Evidências de CI](./EVIDENCIAS_CI/)

## Documentos e entrega oficial

- [x] Preparar o [README da pasta 00](./ENTREGA/00_IDENTIFICACAO_E_README/README.md) na ordem do §11.4, com contatos e instruções locais.
- [x] Concluir o relatório final (pasta 13) com os resultados e métricas atualizados e os três apontamentos de Mateus incorporados.
- [x] Concluir a apresentação em PPTX e PDF (pasta 14).
- [x] Atualizar o Diário de Participação e preparar a declaração final. [Apêndices L e M](./FORMULARIOS_HUMANOS.md)
- [x] Montar as subpastas 00–16 e enviar a pasta de entrega ao Google Drive em 26/11.
- [ ] Incluir o vídeo de contingência na pasta 14 na entrega de 26/11.
- [ ] Incluir as assinaturas do grupo na declaração e nos documentos de entrega que as exigem.

Ao fechar a entrega, conferir a abertura dos arquivos, o acesso do professor e o procedimento de comprovante e backup da pasta 16. Usar os arquivos e a estrutura mapeados em [ESTRUTURA_ENTREGA.md](./ESTRUTURA_ENTREGA.md).

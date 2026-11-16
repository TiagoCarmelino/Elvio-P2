# Checklist de fechamento da P2

**Estado em 12/11/2026:** itens vazios exigem evidência posterior; nenhuma assinatura, aprovação ou execução humana foi presumida. Referência: seções 5, 9–16 e Apêndices A–M do [enunciado](../P2_UNISAGRADO_texto_completo_para_Codex.txt).

## Professor e grupo

- [ ] Informar turma, número do grupo, 2–3 integrantes, responsabilidades, contatos e calendário oficial.
- [ ] Documentar segunda opção de sistema e preencher todos os campos da ficha do Apêndice A; obter decisão escrita do professor e registrar ajustes/data.
- [ ] Confirmar por escrito a aceitação de `node:test` como framework equivalente ao JUnit para JavaScript.
- [ ] Confirmar orientação do professor sobre uso de IA e critérios não funcionais preliminares.
- [ ] Confirmar licença/autorização para uso acadêmico do sistema e do código nesta cópia.

## Execução e qualidade

- [ ] Usar [GUIA_EXECUCAO_MANUAL.md](./GUIA_EXECUCAO_MANUAL.md) para executar manualmente CT-001–CT-024: anotar EX, executor, data/hora, commit, pré-condições, dados, resultado obtido, Aprovado/Reprovado/Bloqueado e evidência identificada.
- [ ] Preparar massa própria para casos dependentes (CT-004, CT-014, CT-018/019) e limpar/restaurar apenas o banco local.
- [x] Registrar D-001 na [Issue #1](https://github.com/TiagoCarmelino/Elvio-P2/issues/1) e atualizar CSV.
- [ ] Grupo revisar/atribuir/fechar a Issue após CT-013 manual e exportar relatório PDF final.
- [ ] Retestar e executar regressão dos casos afetados após cada correção; registrar reaberturas reais.
- [ ] Usar os quatro cenários e protocolo de facilitação em [ACEITACAO_E_NAO_FUNCIONAIS.md](./ACEITACAO_E_NAO_FUNCIONAIS.md); convidar representante que não escreveu os testes e executar AC-01–AC-04 e registrar observações e decisão Aceito/Aceito com ressalvas/Não aceito.
- [ ] Repetir TNF-01–06 na versão final com critérios aprovados, dados/medidas, capturas e conclusão individual; observar usabilidade com participante.
- [ ] Ampliar a coleção Postman para positivo e negativo das operações críticas e executar/exportar evidências finais.
- [ ] Reexecutar HTTP-API-08 depois da asserção fortalecida e confirmar no Supabase local que os valores rejeitados 0/366 preservam o estado anterior; anexar log da rodada final.
- [ ] Fechar a lacuna de SEL-02: após envio pela interface, verificar a solicitação persistida no painel e planejar limpeza/restauração segura dos registros fictícios Selenium no banco local.
- [ ] Avaliar visualmente o PDF de proposta e checar dados/valores em comparação com o banco, além da assinatura HTTP automatizada.
- [x] Gerar LCOV e importar no SonarQube local; resultado documentado em [EVIDENCIA_AUDITORIA_SONAR.json](./EVIDENCIA_AUDITORIA_SONAR.json). [ ] Repetir na versão final e revisar cobertura/achados após as mudanças finais.
- [ ] Revisar os nove avisos ESLint de imagem com a próxima atualização do TCC, preservando arquitetura e layout.

## Repositório e CI/CD

- [x] Destino GitHub exclusivo da cópia P2 informado pelo usuário; verificar que o `origin` aponta apenas para este destino e que nenhum arquivo de credencial está incluído.
- [x] Enviar a branch P2 e confirmar o hash publicado `fe8c0a160a80967e4dcc9749a19edb44e929bcff`.
- [x] Observar execução GitHub Actions aprovada no commit publicado: [run 43902629850](https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/43902629850); log e artefato LCOV ficam disponíveis no run.
- [ ] Demonstrar falha **controlada** de teste na pipeline e posterior correção/aprovação, registrando commits e URLs; não apresentar RED local como falha da CI.
- [ ] Testar acesso a repositório, Issues, pipeline e artefatos em janela anônima ou conta sem privilégios especiais.

## Documentos e entrega oficial

- [ ] Completar [CONTROLE_P2.xlsx](./CONTROLE_P2.xlsx) e interpretar os oito indicadores e gráficos após as execuções manuais; a estrutura/formulários existentes foram abertos e os valores de fórmula estão calculados, mas resultados manuais permanecem pendentes.
- [ ] Revisar o rascunho DOCX/PDF em [ARTEFATOS_PREPARACAO/](./ARTEFATOS_PREPARACAO/), completar dados reais, execuções, métricas e apêndices; gerar versões finais idênticas somente após validação do grupo. O rascunho atual cobre as 13 seções oficiais e segue explicitamente não submetível.
- [ ] Revisar o PPTX/PDF de preparação (10 slides) e [ROTEIRO_APRESENTACAO_P2.md](./ROTEIRO_APRESENTACAO_P2.md); completar integrantes/resultados, ensaiar 12–15 minutos mais perguntas, com fala de todos.
- [ ] Gravar vídeo de contingência MP4 ou disponibilizar link acessível, com demonstração curta dos testes principais; o roteiro preparado não substitui o vídeo.
- [ ] Preencher continuamente o Diário de Participação (Apêndice L) com pessoas, tempos e evidências reais.
- [ ] Preencher e assinar declaração final do grupo (Apêndice M), somente após conferir a veracidade das evidências.
- [ ] Organizar exclusivamente a pasta oficial fornecida pelo professor, com nome `P2_TQS_2026_TURMA_GRUPOXX_NOME-DO-SISTEMA` e subpastas 00–16.
- [ ] Criar README da pasta 00 na ordem exigida em §11.4 e incluir credenciais fictícias apenas em canal/arquivo apropriado, nunca senhas reais no repositório.
- [ ] Gerar `COMPROVANTE_DE_ENTREGA.pdf` com data, hora, integrantes e checklist assinado; fazer backup na pasta 16 e em local do grupo.
- [ ] Abrir arquivos finais e verificar integridade, download e permissão do professor; entregar antes do prazo oficial e não alterar após o horário sem autorização.

**Procedimento para atualização futura do TCC:** preservar branch e commits P2; incorporar mudanças por diff/merge revisado; atualizar fixtures, requisitos e casos afetados; repetir toda a validação antes de atribuir novo status de conformidade.

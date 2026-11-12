# Checklist de fechamento da P2

**Estado em 12/11/2026:** itens vazios exigem evidência posterior; nenhuma assinatura, aprovação ou execução humana foi presumida. Referência: seções 5, 9–16 e Apêndices A–M do [enunciado](../P2_UNISAGRADO_texto_completo_para_Codex.txt).

## Professor e grupo

- [ ] Informar turma, número do grupo, 2–3 integrantes, responsabilidades, contatos e calendário oficial.
- [ ] Documentar segunda opção de sistema e preencher todos os campos da ficha do Apêndice A; obter decisão escrita do professor e registrar ajustes/data.
- [ ] Confirmar por escrito a aceitação de `node:test` como framework equivalente ao JUnit para JavaScript.
- [ ] Confirmar orientação do professor sobre uso de IA e critérios não funcionais preliminares.
- [ ] Confirmar licença/autorização para uso acadêmico do sistema e do código nesta cópia.

## Execução e qualidade

- [ ] Executar manualmente CT-001–CT-024: anotar EX, executor, data/hora, commit, pré-condições, dados, resultado obtido, Aprovado/Reprovado/Bloqueado e evidência identificada.
- [ ] Preparar massa própria para casos dependentes (CT-004, CT-014, CT-018/019) e limpar/restaurar apenas o banco local.
- [ ] Abrir D-001 em GitHub Issues/Jira, vincular requisito/teste/commits e exportar CSV/PDF; registrar novos defeitos somente quando reproduzidos.
- [ ] Retestar e executar regressão dos casos afetados após cada correção; registrar reaberturas reais.
- [ ] Convidar representante que não escreveu os testes, executar AC-01–AC-04 e registrar observações e decisão Aceito/Aceito com ressalvas/Não aceito.
- [ ] Repetir TNF-01–06 na versão final com critérios aprovados, dados/medidas, capturas e conclusão individual; observar usabilidade com participante.
- [ ] Ampliar a coleção Postman para positivo e negativo das operações críticas e executar/exportar evidências finais.
- [ ] Avaliar visualmente o PDF de proposta e checar dados/valores em comparação com o banco, além da assinatura HTTP automatizada.
- [ ] Importar cobertura LCOV se tecnicamente viável; executar nova análise SonarQube na versão final e interpretar achados, duplicação e cobertura sem confundir ausência de dado com 0% real.
- [ ] Revisar os nove avisos ESLint de imagem com a próxima atualização do TCC, preservando arquitetura e layout.

## Repositório e CI/CD

- [ ] Configurar remoto autorizado da **cópia P2**, sem apontar para o repositório original do TCC; conferir visibilidade e permissões.
- [ ] Enviar a branch P2, observar execução aprovada no GitHub Actions e salvar URL/log/artefato.
- [ ] Demonstrar falha **controlada** de teste na pipeline e posterior correção/aprovação, registrando commits e URLs; não apresentar RED local como falha da CI.
- [ ] Testar acesso a repositório, Issues, pipeline e artefatos em janela anônima ou conta sem privilégios especiais.

## Documentos e entrega oficial

- [ ] Completar [CONTROLE_P2.xlsx](./CONTROLE_P2.xlsx) e interpretar os oito indicadores e gráficos a partir das linhas reais.
- [ ] Produzir relatório final em DOCX editável e PDF idêntico, com capa, folha, sumário, seções 1–13, referências, apêndices e links válidos.
- [ ] Produzir apresentação em PPTX/PDF, ensaiar 12–15 minutos mais perguntas, com fala de todos.
- [ ] Gravar vídeo de contingência MP4 ou disponibilizar link acessível, com demonstração curta dos testes principais.
- [ ] Preencher continuamente o Diário de Participação (Apêndice L) com pessoas, tempos e evidências reais.
- [ ] Preencher e assinar declaração final do grupo (Apêndice M), somente após conferir a veracidade das evidências.
- [ ] Organizar exclusivamente a pasta oficial fornecida pelo professor, com nome `P2_TQS_2026_TURMA_GRUPOXX_NOME-DO-SISTEMA` e subpastas 00–16.
- [ ] Criar README da pasta 00 na ordem exigida em §11.4 e incluir credenciais fictícias apenas em canal/arquivo apropriado, nunca senhas reais no repositório.
- [ ] Gerar `COMPROVANTE_DE_ENTREGA.pdf` com data, hora, integrantes e checklist assinado; fazer backup na pasta 16 e em local do grupo.
- [ ] Abrir arquivos finais e verificar integridade, download e permissão do professor; entregar antes do prazo oficial e não alterar após o horário sem autorização.

**Procedimento para atualização futura do TCC:** preservar branch e commits P2; incorporar mudanças por diff/merge revisado; atualizar fixtures, requisitos e casos afetados; repetir toda a validação antes de atribuir novo status de conformidade.

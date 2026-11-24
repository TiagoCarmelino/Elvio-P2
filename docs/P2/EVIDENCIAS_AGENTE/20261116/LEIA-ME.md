# Evidências da exploração do agente — 16/11/2026

Esta pasta reúne cópias de capturas e logs de testes feitos pelo agente contra a cópia P2 e serviços em loopback. **Não contém execuções manuais dos integrantes nem resultados de aceitação.** A classificação, dados, limites e mapeamento CT estão em [REGISTRO_EXECUCOES_AGENTE_20261116.md](../../REGISTRO_EXECUCOES_AGENTE_20261116.md).

> **Classificação dos arquivos antigos de saída:** “Exploração do agente, não usada como evidência final.” Aplica-se aos logs `.txt` e `.log` e ao JSON de resultados desta pasta: não há para todos eles um script/versionamento imutável que reproduza exatamente cada execução e ambiente. Podem apoiar a análise histórica, mas não comprovam os produtos finais nem substituem as execuções humanas. Os arquivos brutos são mantidos sem alteração.

## Capturas

| Arquivo | O que mostra | Limite |
|---|---|---|
| `CT-001_fluxo-de-envio_agent_Selenium.png` | Confirmação visual do envio público Selenium | É execução automatizada por agente; consulta posterior confirma a persistência de outro envio exploratório em `log_persistencia_CT-001-003.txt`. |
| `CT-003_descricao-9-caracteres_rejeitada.png` | Chrome mostra texto de validação nativa para 9 caracteres | A captura é do teste Selenium final; o envio não foi realizado por causa de `minlength`. |
| `CT-003_descricao-10-caracteres_aceita.png` | Confirmação do formulário para descrição de 10 caracteres | O pedido sintético permaneceu na base local. |
| `CT-003_primeira-tentativa_oraculo-ajustado.png` | Aviso nativo visto na primeira tentativa automatizada | Falha do oráculo do teste Selenium; não é defeito do produto. Ver log inicial e repetição aprovada. |
| `CT-008_painel_bloqueado_sem-sessao.png` | Mensagem de bloqueio do painel sem sessão | Captura Selenium do fluxo anônimo. |
| `CT-009-010_fixture_lista-e-detalhe.png` | Detalhe de fixture fictícia, status e campos exibidos | Screenshot automatizado; CT-010 permanece parcial porque não documenta comparação completa com a fonte da seed. |
| `CT-016-019_item_criar-remover.png` | Item de orçamento adicionado/removido pela interface | Valores diferentes dos especificados nos casos; CT-016/019 não considerados integralmente comprovados. |
| `CT-020_total-acrescimo-120_restaura.png` | Total do pedido aumentou R$ 120 pelos dois itens temporários | Pedido base tinha item da seed, total passou de R$ 250 a R$ 370; não foi o caso vazio exigido por CT-020. |
| `CT-020_total-restaurado.png` | Tela após remoção dos itens, total restaurado | Evidência Selenium; agente, não execução humana. |

As interações diretas CUA para CT-001, CT-003 (9/10) e CT-008 também foram capturadas e exibidas na sessão do agente; o navegador não forneceu exportação local dessas três imagens. Por isso, os arquivos acima são capturas Selenium equivalentes, claramente identificadas como automação.

## Logs e evidências estruturadas

- `log_integracao_api.txt`: oito testes API/integração local aprovados.
- `log_selenium_7-casos_final.txt`: sete testes Selenium aprovados; inclui SEL-06 (total/restauração) e SEL-07 (registro inexistente).
- `ct004-same-whatsapp.log` e `ct004-db-check.log`: solicitação adicional com mesmo WhatsApp e conferência somente leitura do cadastro local.
- `ct007-nonadmin.log`: conta local fictícia fora da lista de administradores, login bloqueado e endpoint protegido com 401; senha não incluída.
- `ct013-invalid-status.log`, `ct015-same-status.log`, `ct017-invalid-items.log` e `ct024-empty-proposal.log`: respostas e verificações locais dos CTs correspondentes.
- `CT-011_sucesso-*.png`: estado de registro não encontrado com sessão administrativa.
- `log_selenium_final.txt`: rodada anterior com cinco testes Selenium aprovados após corrigir o oráculo da validação HTML nativa.
- `log_selenium_tentativa-inicial.txt`: tentativa inicial com o oráculo inadequado; preservada.
- `log_postman_redigido.txt`: seis requisições e doze verificações; linhas potencialmente relacionadas a autenticação foram removidas.
- `log_nao-funcionais.txt` e `evidencia_nao-funcional_20261116.json`: seis verificações exploratórias com critérios preliminares.
- `log_CT-009_seed.txt`: consulta da fixture com status observado `orcamento`.
- `log_persistencia_CT-001-003.txt`: confirma presença/status das duas solicitações sintéticas submetidas pelo CUA.

Todos os dados são de teste e foram produzidos localmente. Nenhuma captura ou log representa participante real ou aprovação humana.

-- Fixture exclusivamente local para a preparação e automação da P2.
-- Dados fictícios; a chave administrativa abaixo é conhecida e não deve ser reutilizada.

insert into private.painel_config (id, chave_hash)
values (true, '6ffc061c285c3b5f63f7edd95f524c294cd4b0427e6ee5823fc8ea5442f5efc3')
on conflict (id) do update
set chave_hash = excluded.chave_hash,
    atualizado_em = now();

insert into public.clientes (id, nome, empresa, whatsapp, email)
values (
  '10000000-0000-4000-8000-000000000001',
  'Cliente de Teste P2',
  'Oficina Exemplo Ltda.',
  '5511999990001',
  'cliente.p2@exemplo.local'
)
on conflict (id) do nothing;

insert into public.solicitacoes (id, cliente_id, descricao, status, origem)
values (
  '20000000-0000-4000-8000-000000000001',
  '10000000-0000-4000-8000-000000000001',
  'Teste P2: avaliar reparo de cilindro hidráulico fictício, com vazamento no conjunto de vedação.',
  'orcamento',
  'teste_p2'
)
on conflict (id) do nothing;

insert into public.historico_status (solicitacao_id, status_anterior, status_novo, observacao)
values (
  '20000000-0000-4000-8000-000000000001',
  'novo',
  'orcamento',
  'Registro fictício carregado pela seed local da P2.'
)
on conflict do nothing;

insert into public.itens_orcamento (solicitacao_id, descricao, quantidade, valor_unitario)
select '20000000-0000-4000-8000-000000000001', 'Kit de vedação (item fictício)', 1, 250.00
where not exists (
  select 1 from public.itens_orcamento
  where solicitacao_id = '20000000-0000-4000-8000-000000000001'
    and descricao = 'Kit de vedação (item fictício)'
);

insert into public.orcamentos (
  solicitacao_id,
  validade_dias,
  prazo_entrega,
  condicoes_pagamento,
  observacoes
)
values (
  '20000000-0000-4000-8000-000000000001',
  15,
  '10 dias úteis (teste)',
  'Condição fictícia para teste local',
  'Não representa preço ou condição comercial real.'
)
on conflict (solicitacao_id) do nothing;

insert into public.atividades_comerciais (
  solicitacao_id,
  tipo,
  descricao,
  responsavel_email
)
select
  '20000000-0000-4000-8000-000000000001',
  'observacao',
  'Atividade fictícia carregada pela seed local da P2.',
  'administrador.p2@local.test'
where not exists (
  select 1 from public.atividades_comerciais
  where solicitacao_id = '20000000-0000-4000-8000-000000000001'
    and descricao = 'Atividade fictícia carregada pela seed local da P2.'
);

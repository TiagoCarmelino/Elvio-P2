# Evidências de CI — falha controlada (§9.15)

Registradas por Tiago Gabriel Carmelino em 23/11/2026.

## Execução com falha (intencional)

- Pull Request: #2 (Draft), `p2-claude-correcoes` → `p2-unisagrado`
- Commit: `6014a43` — "ci: falha controlada intencional (demonstração §9.15) — será revertida"
- Run: #7 — https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45244036937
- Etapa com falha: "Testes isolados e cobertura LCOV" (etapas anteriores aprovadas)
- Resultado: 8 testes, 7 aprovados, 1 reprovado
- Teste reprovado: "valida a resposta estruturada do chatbot" (tests/triage.test.mjs) — obtido 'nao_sei', esperado 'manutencao' (asserção alterada de propósito)
- Prints: `01_PR2_checks_falhou.png`, `02_run7_falha_controlada_log_com_URL.png`

## Execução aprovada (após reversão)

- Commit de reversão: `9b1bf7e` — "ci: reverte falha controlada intencional (§9.15)"
- Run: #8 — https://github.com/TiagoCarmelino/Elvio-P2/actions/runs/45244667066
- Resultado: job "validar" aprovado em 53 s; todas as etapas verdes (Testes isolados e cobertura LCOV, Lint, TypeScript, Build, Publicar log e cobertura)
- Etapa "Testes isolados e cobertura LCOV": 8 testes, 8 aprovados, 0 reprovados (inclusive "valida a resposta estruturada do chatbot")
- Cobertura LCOV dos testes unitários (3 módulos: admin-auth.ts, commercial-status.ts, commercial-triage.ts): 97,44% statements, 85,36% branches, 100% funções, 97,44% linhas. Atenção: é a cobertura só desses 3 módulos, diferente da cobertura geral do projeto no SonarQube.
- No PR #2, "Files changed: 0" após a reversão: o código voltou a ser idêntico ao do `b5dd483`
- Prints: `03_PR2_checks_passaram.png`, `04_run8_aprovado_etapas_com_URL.png`, `05_run8_log_testes_aprovados.png`

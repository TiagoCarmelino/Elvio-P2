#requires -Version 5.1
[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
$repoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$previousLocation = Get-Location
Set-Location $repoRoot

function Get-LastMatchNumber([string]$Text, [string]$Pattern) {
    $matches = [regex]::Matches($Text, $Pattern)
    if ($matches.Count -eq 0) { return $null }
    return [int]$matches[$matches.Count - 1].Groups[1].Value
}

function Get-PostmanRequests($Items) {
    $result = @()
    foreach ($item in $Items) {
        if ($item.item) { $result += Get-PostmanRequests $item.item }
        elseif ($item.request) { $result += $item }
    }
    return $result
}

try {
    $pnpmCommand = Get-Command pnpm.cmd -ErrorAction Stop
    $pnpmPath = $pnpmCommand.Source
    $envFile = Join-Path $repoRoot '.env.local'
    if (-not (Test-Path -LiteralPath $envFile -PathType Leaf)) {
        throw 'Arquivo .env.local ausente. Configure o ambiente P2 local antes da rodada.'
    }

    # Lê apenas variáveis necessárias; os valores nunca são escritos nos logs.
    $dotenv = @{}
    foreach ($line in Get-Content -LiteralPath $envFile) {
        if ($line -match '^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$' -and -not $line.TrimStart().StartsWith('#')) {
            $value = $Matches[2]
            if ($value.Length -ge 2 -and (($value.StartsWith('"') -and $value.EndsWith('"')) -or ($value.StartsWith("'") -and $value.EndsWith("'")))) {
                $value = $value.Substring(1, $value.Length - 2)
            }
            $dotenv[$Matches[1]] = $value
        }
    }

    $requiredKeys = @('P2_LOCAL_BASE_URL','SUPABASE_URL','SUPABASE_PUBLISHABLE_KEY','SUPABASE_DASHBOARD_SECRET','ADMIN_EMAILS','AUTH_SESSION_SECRET','P2_LOCAL_REQUEST_ID','P2_LOCAL_ADMIN_EMAIL','P2_LOCAL_ADMIN_PASSWORD')
    foreach ($key in $requiredKeys) {
        if (-not $dotenv.ContainsKey($key) -or [string]::IsNullOrWhiteSpace([string]$dotenv[$key])) {
            throw "Variável obrigatória ausente em .env.local: $key"
        }
        Set-Item -Path "Env:$key" -Value ([string]$dotenv[$key])
    }

    foreach ($key in @('P2_LOCAL_BASE_URL','SUPABASE_URL')) {
        $uri = [Uri]$dotenv[$key]
        if ($uri.Scheme -ne 'http' -or -not $uri.IsLoopback) {
            throw "$key deve apontar para HTTP em loopback. Nenhum teste foi iniciado."
        }
    }
    if (-not ([string]$dotenv['P2_LOCAL_ADMIN_EMAIL']).EndsWith('@local.test')) {
        throw 'P2_LOCAL_ADMIN_EMAIL deve ser uma conta fictícia @local.test.'
    }
    $adminList = @(([string]$dotenv['ADMIN_EMAILS'] -split ',') | ForEach-Object { $_.Trim().ToLowerInvariant() } | Where-Object { $_ })
    if ($adminList.Count -eq 0 -or @($adminList | Where-Object { -not $_.EndsWith('@local.test') }).Count -gt 0 -or $adminList -notcontains ([string]$dotenv['P2_LOCAL_ADMIN_EMAIL']).ToLowerInvariant()) {
        throw 'ADMIN_EMAILS deve conter somente contas fictícias @local.test e incluir P2_LOCAL_ADMIN_EMAIL.'
    }

    $collectionPath = Join-Path $repoRoot 'docs/P2/postman/P2_WG_Hidraulica.postman_collection.json'
    $collection = Get-Content -LiteralPath $collectionPath -Raw -Encoding UTF8 | ConvertFrom-Json
    $requestCount = (Get-PostmanRequests $collection.item).Count
    if ($requestCount -ne 27) { throw "A coleção Postman esperada deve ter 27 requisições; encontradas: $requestCount. Nenhum teste foi iniciado." }

    $startedAt = Get-Date
    $dateFolder = Join-Path $repoRoot (Join-Path 'docs/P2/EVIDENCIAS_AUTOMACAO' $startedAt.ToString('yyyyMMdd'))
    $runName = '{0}-{1}' -f $startedAt.ToString('HHmmss'), (& git rev-parse --short HEAD).Trim()
    $runDirectory = Join-Path $dateFolder $runName
    if (Test-Path -LiteralPath $runDirectory) { $runName += '-{0}' -f (Get-Random -Minimum 100000 -Maximum 999999); $runDirectory = Join-Path $dateFolder $runName }
    New-Item -ItemType Directory -Path $runDirectory -Force | Out-Null

    $commit = (& git rev-parse --short HEAD).Trim()
    $branch = (& git branch --show-current).Trim()
    $dirty = [bool](& git status --porcelain)
    $os = Get-CimInstance Win32_OperatingSystem
    $cpu = (Get-CimInstance Win32_Processor | Select-Object -First 1 -ExpandProperty Name)
    # No Windows PowerShell 5.1, stderr de comando nativo com 2>&1 vira ErrorRecord e,
    # sob 'Stop', aborta o script. Avisos (ex.: atualização do Supabase CLI) não são falha:
    # o resultado é decidido pelo $LASTEXITCODE.
    $ErrorActionPreference = 'Continue'
    try {
        $nodeVersion = (& node --version 2>&1 | ForEach-Object { $_.ToString() } | Out-String).Trim()
        $pnpmVersion = (& $pnpmPath --version 2>&1 | ForEach-Object { $_.ToString() } | Out-String).Trim()
        $supabaseVersion = (& $pnpmPath exec supabase --version 2>&1 | ForEach-Object { $_.ToString() } | Out-String).Trim()
        $supabaseExit = $LASTEXITCODE
    }
    finally { $ErrorActionPreference = 'Stop' }
    if ($supabaseExit -ne 0) { $supabaseVersion = "indisponível (exit $supabaseExit): $supabaseVersion" }

    $chromeCandidates = @(
        (Join-Path $env:ProgramFiles 'Google/Chrome/Application/chrome.exe'),
        (Join-Path ${env:ProgramFiles(x86)} 'Google/Chrome/Application/chrome.exe'),
        (Join-Path $env:LOCALAPPDATA 'Google/Chrome/Application/chrome.exe')
    ) | Where-Object { $_ -and (Test-Path -LiteralPath $_ -PathType Leaf) }
    $chromeVersion = 'não encontrado'
    if ($chromeCandidates.Count -gt 0) {
        $chromeVersion = (Get-Item -LiteralPath $chromeCandidates[0]).VersionInfo.ProductVersion
        if (-not $chromeVersion) { $chromeVersion = (Get-Item -LiteralPath $chromeCandidates[0]).VersionInfo.FileVersion }
    }

    $env:P2_RUN_COMMIT = $commit
    $env:P2_AUTOMATION_EVIDENCE_DIR = $runDirectory
    $env:P2_NF_EVIDENCE_PATH = Join-Path $runDirectory 'TNF-evidencia.json'
    $collectionHash = (Get-FileHash -LiteralPath $collectionPath -Algorithm SHA256).Hash
    $metadata = @(
        'Rodada final de automação P2 — somente ambiente local',
        "Início local: $($startedAt.ToString('o'))",
        "Commit: $commit",
        "Branch: $branch",
        "Working tree sujo no início: $dirty",
        "Sistema operacional: $($os.Caption) $($os.Version) build $($os.BuildNumber)",
        "PowerShell: $($PSVersionTable.PSVersion)",
        "Node.js: $nodeVersion",
        "pnpm: $pnpmVersion",
        "Supabase CLI: $supabaseVersion",
        "Chrome: $chromeVersion",
        "CPU: $cpu",
        "RAM (bytes): $([int64]$os.TotalVisibleMemorySize * 1024)",
        "P2_LOCAL_BASE_URL: $($dotenv['P2_LOCAL_BASE_URL'])",
        "SUPABASE_URL: $($dotenv['SUPABASE_URL'])",
        "Postman requests: $requestCount",
        "SHA-256 coleção: $collectionHash",
        'Credenciais e valores secretos foram omitidos.'
    )
    $metadata | Set-Content -LiteralPath (Join-Path $runDirectory 'AMBIENTE.txt') -Encoding UTF8

    $suites = @(
        [pscustomobject]@{ Id='01-unitarios-cobertura'; Label='Unitários com cobertura LCOV'; Arguments=@('run','test:coverage'); Kind='node' },
        [pscustomobject]@{ Id='02-integracao-local'; Label='Integração/API local'; Arguments=@('run','test:local'); Kind='node' },
        [pscustomobject]@{ Id='03-selenium'; Label='Selenium'; Arguments=@('run','test:selenium'); Kind='node' },
        [pscustomobject]@{ Id='04-postman-newman'; Label='Postman/Newman (27 requisições)'; Arguments=@('run','test:postman'); Kind='newman' },
        [pscustomobject]@{ Id='05-nao-funcionais'; Label='Não funcionais oficiais (TNF-01–TNF-06; 20 medições temporais)'; Arguments=@('run','test:nonfunctional'); Kind='node' }
    )

    $results = @()
    foreach ($suite in $suites) {
        $logPath = Join-Path $runDirectory ($suite.Id + '.log')
        $suiteStart = Get-Date
        $commandText = 'pnpm.cmd ' + ($suite.Arguments -join ' ')
        @(
            "Suíte: $($suite.Label)",
            "Início local: $($suiteStart.ToString('o'))",
            "Commit: $commit",
            "Comando: $commandText",
            '--- saída completa ---'
        ) | Set-Content -LiteralPath $logPath -Encoding UTF8
        Write-Host "`n[$($suite.Id)] $($suite.Label)"
        $suiteArguments = @($suite.Arguments)
        # stderr das suítes (avisos do Node, Newman, Selenium) é registrado no log, mas não
        # aborta a rodada; aprovação/reprovação vem do $LASTEXITCODE do processo.
        $ErrorActionPreference = 'Continue'
        try {
            & $pnpmPath @suiteArguments 2>&1 | ForEach-Object {
                $outputLine = $_.ToString()
                Add-Content -LiteralPath $logPath -Value $outputLine -Encoding UTF8
                Write-Host $outputLine
            }
            $exitCode = $LASTEXITCODE
        }
        finally { $ErrorActionPreference = 'Stop' }
        $suiteEnd = Get-Date
        if ($suite.Id -eq '01-unitarios-cobertura') {
            $lcovSource = Join-Path $repoRoot 'coverage/p2/lcov.info'
            if (Test-Path -LiteralPath $lcovSource -PathType Leaf) {
                Copy-Item -LiteralPath $lcovSource -Destination (Join-Path $runDirectory 'lcov.info')
                $lcovHash = (Get-FileHash -LiteralPath $lcovSource -Algorithm SHA256).Hash
                Add-Content -LiteralPath $logPath -Value "LCOV copiado para lcov.info; SHA-256: $lcovHash" -Encoding UTF8
            } else { Add-Content -LiteralPath $logPath -Value 'LCOV não encontrado após a suíte de cobertura.' -Encoding UTF8 }
        }
        Add-Content -LiteralPath $logPath -Value @('--- fim da saída ---',"Fim local: $($suiteEnd.ToString('o'))","Exit code: $exitCode") -Encoding UTF8
        $text = Get-Content -LiteralPath $logPath -Raw -Encoding UTF8
        $approved = $null
        $failed = $null
        $total = $null
        if ($suite.Kind -eq 'newman') {
            $marker = [regex]::Matches($text, 'P2_SUMMARY requests=(\d+) assertions=(\d+) assertionFailures=(\d+) failures=(\d+)')
            if ($marker.Count -gt 0) {
                $values = $marker[$marker.Count - 1].Groups
                $assertions = [int]$values[2].Value
                $assertionFailures = [int]$values[3].Value
                $failed = [int]$values[4].Value
                $approved = [Math]::Max(0, $assertions - $assertionFailures)
                $total = $assertions
            }
        } else {
            $approved = Get-LastMatchNumber $text '(?im)^\s*(?:ℹ\s*|#\s*)?pass\s+(\d+)\s*$'
            $failed = Get-LastMatchNumber $text '(?im)^\s*(?:ℹ\s*|#\s*)?fail\s+(\d+)\s*$'
            $total = Get-LastMatchNumber $text '(?im)^\s*(?:ℹ\s*|#\s*)?tests?\s+(\d+)\s*$'
        }
        $passed = ($exitCode -eq 0)
        $results += [pscustomobject]@{
            id=$suite.Id; suite=$suite.Label; command=$commandText; log=(Split-Path $logPath -Leaf)
            start=$suiteStart.ToString('o'); end=$suiteEnd.ToString('o'); exitCode=$exitCode
            status=$(if ($passed) { 'Aprovada' } else { 'Reprovada' })
            aprovados=$approved; reprovados=$failed; total=$total
        }
    }

    $summaryLines = @('Resumo da rodada final P2',"Commit: $commit","Pasta: $runDirectory",'')
    foreach ($result in $results) {
        $approvedText = if ($null -eq $result.aprovados) { 'não extraído do log' } else { [string]$result.aprovados }
        $failedText = if ($null -eq $result.reprovados) { 'não extraído do log' } else { [string]$result.reprovados }
        $summaryLines += ('{0}: {1}; aprovados={2}; reprovados={3}; exit={4}; log={5}' -f $result.suite,$result.status,$approvedText,$failedText,$result.exitCode,$result.log)
    }
    $overall = @($results | Where-Object { $_.exitCode -ne 0 }).Count -eq 0
    $summaryLines += ''
    $summaryLines += ('Resultado geral: ' + $(if ($overall) { 'todas as suítes terminaram sem erro de processo' } else { 'uma ou mais suítes falharam; consultar logs individuais' }))
    $summaryLines | Set-Content -LiteralPath (Join-Path $runDirectory 'RESUMO.txt') -Encoding UTF8
    [pscustomobject]@{ startedAt=$startedAt.ToString('o'); commit=$commit; branch=$branch; environment=$metadata; suites=$results; overallSuccess=$overall } |
        ConvertTo-Json -Depth 8 | Set-Content -LiteralPath (Join-Path $runDirectory 'resumo.json') -Encoding UTF8
    Get-Content -LiteralPath (Join-Path $runDirectory 'RESUMO.txt')
    if (-not $overall) { exit 1 }
}
finally {
    Set-Location $previousLocation
}

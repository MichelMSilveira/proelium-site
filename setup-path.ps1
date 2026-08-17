$currentPath = [Environment]::GetEnvironmentVariable('PATH', 'User')
if ($currentPath -notlike '*nodejs*') {
    [Environment]::SetEnvironmentVariable('PATH', $currentPath + ';C:\Program Files\nodejs', 'User')
    Write-Host 'Node.js adicionado ao PATH'
}

cd 'C:\Users\miche\Documents\proelium-site'
& 'C:\Program Files\nodejs\node.exe' 'C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js' run dev


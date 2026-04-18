mkcert -install

$ip = ipconfig | Select-String "IPv4" |
ForEach-Object { ($_ -split ":")[-1].Trim() } |
Select-Object -Last 1

New-Item -ItemType Directory -Force certs | Out-Null

mkcert `
-key-file certs/key.pem `
-cert-file certs/cert.pem `
localhost 127.0.0.1 ::1 $ip

Write-Host "Done!"
Write-Host "IP Used: $ip"
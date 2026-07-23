# deploy-prod.ps1
# Clean Git Push & Full Server Deployment Runner
# Run in PowerShell: powershell -ExecutionPolicy Bypass -File deploy-prod.ps1

Set-Location $PSScriptRoot
node deploy-and-verify.js

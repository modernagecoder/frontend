$originalCSS = git show HEAD:src/css/style.css
Set-Content -Path "src/css/style.css" -Value $originalCSS
Write-Host "Original CSS restored successfully!"

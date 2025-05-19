#!/bin/bash
# Prosty skrypt do backupu bazy danych

DB_NAME="app_database"
BACKUP_DIR="/var/backups/db"
DATE=$(date +%Y%m%d_%H%M%S)
FILENAME="${BACKUP_DIR}/${DB_NAME}_${DATE}.sql.gz"

# Sprawdź czy katalog istnieje
if [ ! -d "$BACKUP_DIR" ]; then
  mkdir -p "$BACKUP_DIR"
  echo "Utworzono katalog $BACKUP_DIR"
fi

# Wykonaj backup
echo "Rozpoczynam backup bazy $DB_NAME..."
mysqldump -u root -p "$DB_NAME" | gzip > "$FILENAME"

if [ $? -eq 0 ]; then
  echo "Backup zakończony sukcesem: $FILENAME"
else
  echo "Błąd podczas wykonywania backupu!"
  exit 1
fi :
### Przekonwertuj ten skrypt bash na równoważny skrypt PowerShell dla Windows.


ChatGPT said:
Jasne! Oto równoważny skrypt PowerShell (backup-database.ps1) dla systemu Windows, który realizuje to samo co Twój skrypt Bash:

📁 backup-database.ps1
powershell
Copy
Edit
# Prosty skrypt do backupu bazy danych MySQL (PowerShell)

$DBName = "app_database"
$BackupDir = "C:\Backups\db"
$Date = Get-Date -Format "yyyyMMdd_HHmmss"
$Filename = "$BackupDir\$DBName`_$Date.sql.gz"

# Sprawdź czy katalog istnieje
if (-Not (Test-Path -Path $BackupDir)) {
    New-Item -ItemType Directory -Path $BackupDir -Force | Out-Null
    Write-Output "Utworzono katalog $BackupDir"
}

# Wykonaj backup
Write-Output "Rozpoczynam backup bazy $DBName..."

# Uwaga: Upewnij się, że `mysqldump` jest w PATH i że użytkownik poda hasło przy wywołaniu
# Możesz także użyć pliku konfiguracyjnego `.my.cnf` lub jawnego hasła, jeśli to konieczne
try {
    & mysqldump.exe -u root -p $DBName | & gzip.exe > $Filename
    if ($LASTEXITCODE -eq 0) {
        Write-Output "Backup zakończony sukcesem: $Filename"
    } else {
        Write-Error "Błąd podczas wykonywania backupu!"
        exit 1
    }
}
catch {
    Write-Error "Wyjątek: $_"
    exit 1
}
🔧 Wymagania:
mysqldump.exe musi być dostępny w systemie (np. w PATH lub podaj pełną ścieżkę).

gzip.exe również musi być dostępny (np. zainstalowany z GnuWin32 lub użyj wersji z Git Bash, WSL lub innego źródła).

Jeśli chcesz używać hasła w skrypcie bez podawania go interaktywnie, mogę dodać obsługę bezpiecznego przechowywania.



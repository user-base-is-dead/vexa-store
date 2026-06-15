@echo off
title VERA Shop - Preview
cd /d "%~dp0"

where npm >nul 2>&1
if errorlevel 1 (
    echo Node.js install karo: https://nodejs.org
    pause
    exit /b 1
)

echo Building site...
call npm run build
if errorlevel 1 (
    echo Build failed!
    pause
    exit /b 1
)

echo.
echo  Site ready: http://localhost:4173
echo.
start "" cmd /c "timeout /t 2 /nobreak >nul && start http://localhost:4173"
npm run preview -- --host --open
pause
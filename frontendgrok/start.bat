@echo off
title VERA Shop
cd /d "%~dp0"

where npm >nul 2>&1
if errorlevel 1 (
    echo.
    echo  ERROR: Node.js installed nahi hai!
    echo  Download karo: https://nodejs.org
    echo.
    pause
    exit /b 1
)

echo.
echo  ========================================
echo   VERA Shop start ho rahi hai...
echo   Browser automatically khulega
echo   URL: http://localhost:5173
echo   Band karne ke liye Ctrl+C
echo  ========================================
echo.

start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:5173"
npm start
pause
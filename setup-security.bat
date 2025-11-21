@echo off
echo ========================================
echo Beat the Babu - Security Setup Script
echo ========================================
echo.

echo Step 1: Installing API dependencies...
cd api
call npm install
cd ..
echo ✓ Dependencies installed
echo.

echo Step 2: Checking for .env file...
if exist .env (
    echo ✓ .env file found
) else (
    echo ⚠ .env file not found!
    echo Creating .env from template...
    copy .env.example .env
    echo.
    echo ⚠ IMPORTANT: Edit .env file with your Firebase credentials!
    echo Get them from: https://console.firebase.google.com/project/babu-f0594/settings/serviceaccounts/adminsdk
    echo.
    pause
)
echo.

echo Step 3: Testing local API server...
echo Starting server on http://localhost:3001
echo Press Ctrl+C to stop when done testing
echo.
cd api
call npm start

pause

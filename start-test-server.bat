@echo off
echo ========================================
echo  Modern Age Coders - Test Server
echo ========================================
echo.
echo Starting local test server...
echo.
echo Once started, you can access:
echo   - Test Page: http://localhost:8000/test-mobile-navigation.html
echo   - Home Page: http://localhost:8000/src/pages/index.html
echo   - Login Page: http://localhost:8000/src/pages/login.html
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Python is not installed or not in PATH
    echo Please install Python from https://www.python.org/
    pause
    exit /b 1
)

REM Start Python HTTP server
python -m http.server 8000

pause

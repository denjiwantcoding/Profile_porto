@echo off
echo ========================================
echo   Portfolio Website - Development
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo [INFO] Dependencies not found. Installing...
    echo.
    call npm install
    echo.
)

echo [INFO] Starting development server...
echo [INFO] Website will be available at: http://localhost:4321
echo.
echo Press Ctrl+C to stop the server
echo.

call npm run dev

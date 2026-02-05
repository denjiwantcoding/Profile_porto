@echo off
echo ========================================
echo   DEPLOY TO XAMPP
echo ========================================
echo.

echo [1/3] Building website...
call npm run build
if errorlevel 1 (
    echo Build failed!
    pause
    exit /b 1
)
echo Build complete!
echo.

echo [2/3] Copying to XAMPP htdocs...
if not exist "C:\xampp\htdocs\portfolio" mkdir "C:\xampp\htdocs\portfolio"
xcopy /E /I /Y /Q dist\* C:\xampp\htdocs\portfolio
echo Files copied successfully!
echo.

echo [3/3] Done!
echo ========================================
echo.
echo Website is now available at:
echo http://localhost/portfolio
echo.
echo ========================================
pause

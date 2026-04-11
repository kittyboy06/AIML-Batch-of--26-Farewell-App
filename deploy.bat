@echo off
setlocal

:: deploy.bat
:: A reusable script to build and deploy a Vite project directly to GitHub Pages
:: Usage: .\deploy.bat [REPOSITORY_URL]
:: Example: .\deploy.bat git@github.com:kittyboy06/farewell-app.git

echo ===========================================
echo 🚀 Starting deployment process...
echo ===========================================

:: 1. Build the Vite application
echo 📦 Building the project...
call npm run build
if %ERRORLEVEL% neq 0 (
  echo ❌ Error: Build failed.
  exit /b %ERRORLEVEL%
)

:: 2. Bypass Jekyll processing on GitHub Pages
:: This ensures files/folders starting with an underscore are not ignored
echo. > dist\.nojekyll

:: 3. Determine the remote URL
:: Prioritize the provided argument, otherwise fallback to the origin of the repository
set "REPO_URL=%~1"
if "%REPO_URL%"=="" (
  for /f "delims=" %%i in ('git config --get remote.origin.url') do set "REPO_URL=%%i"
)

if "%REPO_URL%"=="" (
  echo ❌ Error: Could not determine Git repository URL.
  echo You must provide it as an argument because 'origin' is not set.
  echo Run it like this: .\deploy.bat git@github.com:USERNAME/REPO.git
  exit /b 1
)

:: 4. Use the gh-pages module to securely branch and push the 'dist' folder exclusively
echo ⚙️  Pushing specifically to the gh-pages branch of %REPO_URL%...
call npx gh-pages -d dist -r "%REPO_URL%" -t -b gh-pages
if %ERRORLEVEL% neq 0 (
  echo ❌ Error: Deployment failed.
  exit /b %ERRORLEVEL%
)

echo ✅ Successfully deployed branch!
exit /b 0

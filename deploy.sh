#!/usr/bin/env bash

# deploy.sh
# A reusable script to build and deploy a Vite project directly to GitHub Pages
# Usage: ./deploy.sh [REPOSITORY_URL]
# Example: ./deploy.sh git@github.com:kittyboy06/farewell-app.git

# Abort the script if any command fails
set -e

echo "🚀 Starting deployment process..."

# 1. Build the Vite application
echo "📦 Building the project..."
npm run build

# 2. Bypass Jekyll processing on GitHub Pages
# This ensures files/folders starting with an underscore are not ignored
echo > dist/.nojekyll

# 3. Determine the remote URL
# Prioritize the provided argument, otherwise fallback to the origin of the parent folder
REPO_URL=$1
if [ -z "$REPO_URL" ]; then
  # Grab the URL natively if one exists
  REPO_URL=$(git config --get remote.origin.url || true)
  
  if [ -z "$REPO_URL" ]; then
    echo "❌ Error: Could not determine Git repository URL."
    echo "You must provide it as an argument because 'origin' is not set."
    echo "Run it like this: ./deploy.sh git@github.com:USERNAME/REPO.git"
    exit 1
  fi
fi

# 4. Use the gh-pages module to securely branch and push the 'dist' folder exclusively
echo "⚙️ Pushing specifically to the gh-pages branch of $REPO_URL..."
npx gh-pages -d dist -r "$REPO_URL" -t true -b gh-pages

echo "✅ Successfully deployed branch!"

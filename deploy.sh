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

# 2. Navigate into the built output directory
cd dist

# 3. Bypass Jekyll processing on GitHub Pages
# This ensures files/folders starting with an underscore are not ignored
echo > .nojekyll

# Ensure we start with a clean git repository for the deploy
rm -rf .git

# 4. Initialize a temporary Git repository inside the dist folder
echo "⚙️ Initializing deployment repository..."
git init
git checkout -B main
git add -A

# We use an empty commit fallback just in case no files changed between builds
git commit -m "deploy: $(date +"%Y-%m-%d %H:%M:%S")" --allow-empty

# 5. Determine the remote URL
# Prioritize the provided argument, otherwise fallback to the origin of the parent folder
REPO_URL=$1
if [ -z "$REPO_URL" ]; then
  # Go back to root to find the origin URL safely
  cd ..
  REPO_URL=$(git config --get remote.origin.url)
  cd dist
  
  if [ -z "$REPO_URL" ]; then
    echo "❌ Error: Could not determine Git repository URL."
    echo "Please provide it as an argument: ./deploy.sh <REPO_URL>"
    exit 1
  fi
fi

# 6. Force push the built application to the gh-pages branch
echo "🚀 Pushing to gh-pages branch of $REPO_URL..."
git push -f "$REPO_URL" main:gh-pages

# 7. Clean up by navigating back
cd -

echo "✅ Successfully deployed to gh-pages!"

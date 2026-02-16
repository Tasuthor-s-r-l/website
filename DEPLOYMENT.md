# GitHub Pages Deployment Guide

## Overview

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

## GitHub Pages Configuration

**IMPORTANT**: You need to configure GitHub Pages in your repository settings to use GitHub Actions as the source.

### Steps to Configure:

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. In the left sidebar, click on **Pages**
4. Under "Build and deployment", set:
   - **Source**: GitHub Actions
   
That's it! The workflow is already configured.

## How Deployment Works

The deployment process uses the official GitHub Pages actions and consists of two jobs:

### Build Job
1. Checks out the code
2. Sets up Node.js with npm cache
3. Configures GitHub Pages
4. Installs dependencies with `npm ci`
5. Builds the project with `npm run build`
6. Uploads the `dist` folder as a Pages artifact

### Deploy Job
1. Deploys the uploaded artifact to GitHub Pages
2. Runs in the `github-pages` environment
3. Provides the deployment URL

## Permissions

The workflow requires the following permissions:
- `contents: read` - To read the repository content
- `pages: write` - To deploy to GitHub Pages
- `id-token: write` - For OIDC authentication

## Deployment URL

After the first successful deployment, your site will be available at:
```
https://<username>.github.io/<repository-name>/
```

Or if you're using a custom domain configured in GitHub Pages settings:
```
https://your-custom-domain.com
```

## Troubleshooting

### 403 Permission Error
If you see a 403 permission error, make sure:
1. GitHub Pages is configured to use "GitHub Actions" as the source (not "Deploy from a branch")
2. The workflow has the correct permissions configured

### Build Fails
Check the GitHub Actions workflow logs to see what went wrong:
1. Go to the **Actions** tab in your repository
2. Click on the failed workflow run
3. Review the logs for any error messages

### Assets Not Loading
The project is configured with `base: './'` in `vite.config.ts` to work with GitHub Pages subpaths. This should work automatically.

## Manual Deployment

If you need to deploy manually, you can:
1. Run `npm run build` locally
2. The build output will be in the `dist` folder
3. You can use the `gh-pages` package (already installed) with `npm run deploy`

Note: Manual deployment requires the `gh-pages` branch method and different permissions.

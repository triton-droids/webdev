# Deployment Guide

This guide covers how to deploy the Triton Droids website to production.

## Deployment Overview

The website is deployed to **GitHub Pages** using GitHub Actions. The deployment process is automated and runs on every push to the `main` branch.

## Automatic Deployment

### How It Works

1. Push code to the `main` branch
2. GitHub Actions workflow (`.github/workflows/deploy.yml`) triggers automatically
3. The workflow:
   - Checks out the code
   - Sets up Node.js 20
   - Installs dependencies
   - Builds the production bundle
   - Deploys to GitHub Pages

### Workflow Configuration

The deployment workflow is located at `.github/workflows/deploy.yml`.

**Key steps:**
1. **Build job** - Compiles the React app
2. **Deploy job** - Uploads the build to GitHub Pages

### Manual Deployment

You can also trigger deployment manually:

1. Go to the **Actions** tab in GitHub
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow**
4. Select the branch (usually `main`)
5. Click **Run workflow**

## Prerequisites

### GitHub Pages Setup

1. Go to repository **Settings**
2. Navigate to **Pages** section
3. Under **Source**, select:
   - **Source**: `GitHub Actions`
4. Save settings

### Required Permissions

The workflow requires the following GitHub permissions:
- `contents: read` - Read repository content
- `pages: write` - Write to GitHub Pages
- `id-token: write` - For authentication

These are configured in the workflow file.

## Build Process

### Production Build

The build process:
1. Runs `npm ci` to install dependencies
2. Runs `npm run build` to create production bundle
3. Outputs to `./dist` directory
4. Uploads `dist` folder to GitHub Pages

### Build Output

The production build includes:
- Optimized JavaScript bundles
- Minified CSS
- Optimized assets (images, etc.)
- Static HTML files

## Environment Variables

Currently, no environment variables are required for deployment. If needed in the future:

1. Add variables in repository **Settings** → **Secrets and variables** → **Actions**
2. Reference in workflow file: `${{ secrets.VARIABLE_NAME }}`

## Deployment Verification

After deployment:

1. Check the **Actions** tab for workflow status
2. Wait for the workflow to complete (usually 2-5 minutes)
3. Visit the GitHub Pages URL (usually `https://<username>.github.io/<repository-name>`)
4. Verify the site loads correctly

## Troubleshooting

### Build Fails

**Common issues:**
- TypeScript errors - Fix all TypeScript errors before pushing
- Linting errors - Run `npm run lint` locally
- Missing dependencies - Ensure `package.json` is up to date

**Solution:**
```bash
# Test build locally first
npm run build
```

### Deployment Fails

**Check:**
- GitHub Pages is enabled in repository settings
- Workflow has correct permissions
- No errors in Actions tab logs

### Site Not Updating

- GitHub Pages can take a few minutes to update
- Clear browser cache
- Check if the workflow completed successfully
- Verify the correct branch is being deployed

### 404 Errors on Routes

If using React Router, ensure:
- Base path is configured correctly in `vite.config.ts`
- GitHub Pages is serving from the correct directory
- Routes are properly configured

## Local Production Testing

Test the production build locally before deploying:

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

This helps catch issues before they reach production.

## Rollback

If a deployment has issues:

1. Revert the problematic commit
2. Push to `main` branch
3. New deployment will trigger automatically
4. Or manually trigger deployment of a previous commit

## Continuous Integration

The project also includes a CI workflow (`.github/workflows/ci.yml`) that:
- Runs on pull requests
- Checks code quality (linting)
- Ensures the project builds successfully

This helps catch issues before they're merged to `main`.

## Best Practices

1. **Test locally first** - Always test builds locally before pushing
2. **Review changes** - Use pull requests to review changes
3. **Monitor deployments** - Check Actions tab after pushing
4. **Keep dependencies updated** - Regularly update npm packages
5. **Document changes** - Update documentation when making significant changes

## Future Considerations

Potential improvements:
- Staging environment for testing
- Preview deployments for pull requests
- Automated testing before deployment
- Performance monitoring
- Error tracking

# Testing Documentation

This document provides comprehensive information about the end-to-end (E2E) testing setup for the Triton Droids website.

## Table of Contents

- [Overview](#overview)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Test Structure](#test-structure)
- [Writing Tests](#writing-tests)
- [CI/CD Integration](#cicd-integration)
- [Troubleshooting](#troubleshooting)

## Overview

The project uses [Playwright](https://playwright.dev/) for end-to-end testing. Playwright provides:

- **Fast and reliable**: Modern, cross-browser testing
- **Visual testing**: Screenshot capabilities for visual regression testing
- **Developer-friendly**: Great debugging tools and TypeScript support
- **Auto-waiting**: Automatically waits for elements to be ready

### What We Test

Our test suite covers:

1. **Typography validation** - Font sizes, line heights, and weights match design specs
2. **Visual regression** - Screenshots to catch unintended visual changes
3. **Responsive behavior** - Components work across different viewport sizes
4. **User interactions** - Carousels, navigation, and interactive elements
5. **Component rendering** - Proper display of text highlighting and styling

## Setup

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

The Playwright dependencies are automatically installed when you run:

```bash
npm install
```

To install Playwright browsers (if not already installed):

```bash
npx playwright install chromium
```

### Dev Container

If you're using the Dev Container, Playwright is automatically installed with the Chromium browser when the container is created.

## Running Tests

### Command Reference

```bash
# Run all tests headlessly
npm run test:e2e

# Run tests with interactive UI mode
npm run test:e2e:ui

# Run visual tests only
npm run test:e2e:visual

# Run specific test file
npx playwright test carousel-typography.spec.ts

# Run tests in headed mode (shows browser)
npx playwright test --headed

# Run tests in debug mode
npx playwright test --debug

# Generate HTML report
npx playwright show-report
```

### Test Output

Tests generate:

- **Screenshots**: Stored in `e2e/screenshots/` (gitignored)
- **Test results**: Stored in `test-results/` (gitignored)
- **HTML reports**: Stored in `playwright-report/` (gitignored)

## Test Structure

```
e2e/
├── carousel-typography.spec.ts      # Typography validation tests
├── carousel-visual.spec.ts          # Visual regression tests
├── carousel-closeup.spec.ts         # Detailed component screenshots
├── join-carousel-all-slides.spec.ts # Join page carousel tests
├── project-section.spec.ts          # Project section tests
└── screenshots/                     # Generated screenshots (gitignored)
```

### Configuration

The Playwright configuration is in `playwright.config.ts`:

```typescript
export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    baseURL: 'http://localhost:5173',
    screenshot: 'only-on-failure',
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: !process.env.CI,
  },
});
```

## Writing Tests

### Basic Test Structure

```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test('should do something', async ({ page }) => {
    // Navigate to page
    await page.goto('/website/');

    // Wait for element
    await page.waitForSelector('h1:has-text("Title")');

    // Get element
    const heading = page.locator('h1').first();

    // Assert
    await expect(heading).toBeVisible();
  });
});
```

### Typography Testing

Example of testing typography properties:

```typescript
test('Typography matches design specs', async ({ page }) => {
  await page.goto('/website/');

  const title = page.locator('h1').first();

  const styles = await title.evaluate((el) => {
    const computed = window.getComputedStyle(el);
    return {
      fontSize: computed.fontSize,
      lineHeight: computed.lineHeight,
      fontWeight: computed.fontWeight,
    };
  });

  // Check font size
  expect(parseFloat(styles.fontSize)).toBe(40);

  // Check line height ratio
  const ratio = parseFloat(styles.lineHeight) / parseFloat(styles.fontSize);
  expect(ratio).toBeCloseTo(1.2, 0.1);

  // Check font weight
  expect(styles.fontWeight).toBe('400');
});
```

### Visual Testing with Screenshots

```typescript
test('Carousel visual test', async ({ page }) => {
  await page.goto('/website/');

  // Scroll to element
  await page.locator('h2:has-text("Section Title")').scrollIntoViewIfNeeded();

  // Wait for animations
  await page.waitForTimeout(1000);

  // Take screenshot
  const element = page.locator('.carousel-card').first();
  await element.screenshot({
    path: 'e2e/screenshots/carousel-card.png',
  });
});
```

### Responsive Testing

```typescript
test('Works on different viewport sizes', async ({ page }) => {
  // Desktop
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('/website/');
  // ... assertions

  // Tablet
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto('/website/');
  // ... assertions

  // Mobile
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('/website/');
  // ... assertions
});
```

### Best Practices

1. **Use data-testid attributes** for stable selectors:
   ```tsx
   <button data-testid="submit-button">Submit</button>
   ```
   ```typescript
   await page.getByTestId('submit-button').click();
   ```

2. **Wait for elements** before interacting:
   ```typescript
   await page.waitForSelector('text=Loading...', { state: 'hidden' });
   ```

3. **Use Playwright's auto-waiting**: Most actions automatically wait for elements to be ready

4. **Group related tests** in describe blocks:
   ```typescript
   test.describe('Carousel', () => {
     test.describe('Typography', () => {
       // Typography tests
     });

     test.describe('Navigation', () => {
       // Navigation tests
     });
   });
   ```

5. **Clean up after tests**: Use hooks if needed
   ```typescript
   test.beforeEach(async ({ page }) => {
     // Setup before each test
   });

   test.afterEach(async ({ page }) => {
     // Cleanup after each test
   });
   ```

## CI/CD Integration

Tests are automatically run in the CI/CD pipeline on:

- Pull requests
- Pushes to main branch
- Manual workflow dispatch

### GitHub Actions Configuration

The tests run in the CI pipeline with:

- Chromium browser only (for speed)
- Retries on failure (2 retries in CI)
- Parallel execution disabled in CI for stability
- Artifacts uploaded on failure

### Local vs CI Behavior

| Feature | Local | CI |
|---------|-------|-----|
| Retries | 0 | 2 |
| Workers | CPU cores | 1 |
| Screenshots | Always | On failure |
| Dev server | Reuse if running | Fresh start |

## Troubleshooting

### Common Issues

#### 1. Browser not installed

**Error**: `Executable doesn't exist at /path/to/browser`

**Solution**:
```bash
npx playwright install chromium
```

#### 2. Port already in use

**Error**: `Port 5173 is already in use`

**Solution**: Stop other dev servers or change the port in `playwright.config.ts`

#### 3. Tests timing out

**Error**: `Test timeout of 30000ms exceeded`

**Solution**:
- Increase timeout in test:
  ```typescript
  test('slow test', async ({ page }) => {
    test.setTimeout(60000); // 60 seconds
    // ...
  });
  ```
- Or globally in config:
  ```typescript
  export default defineConfig({
    timeout: 60000,
  });
  ```

#### 4. Selectors not working

**Error**: `TimeoutError: locator.click: Timeout 30000ms exceeded`

**Solution**:
- Use Playwright Inspector to debug:
  ```bash
  npx playwright test --debug
  ```
- Check if element exists:
  ```typescript
  await expect(page.locator('selector')).toBeVisible();
  ```

#### 5. Screenshots don't match

Visual differences can occur due to:
- Font rendering differences
- Timing issues (animations)
- Browser/OS differences

**Solution**: Use threshold for visual comparisons or take screenshots after animations complete.

### Debug Mode

Run tests in debug mode for step-by-step execution:

```bash
npx playwright test --debug
```

This opens the Playwright Inspector where you can:
- Step through each action
- Inspect the DOM
- View screenshots
- Edit and replay actions

### Viewing Test Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

This provides:
- Test results overview
- Screenshots and traces
- Detailed error messages
- Execution timelines

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)
- [Visual Testing Guide](https://playwright.dev/docs/test-snapshots)

## Contributing

When adding new features:

1. Write tests for new UI components
2. Update existing tests if behavior changes
3. Run tests locally before pushing
4. Ensure tests pass in CI/CD pipeline
5. Document any new testing patterns

For questions or issues with tests, please open an issue on GitHub.

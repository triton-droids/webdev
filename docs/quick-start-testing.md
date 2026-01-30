# Quick Start: Testing

A quick reference guide for running and writing tests.

## Running Tests

```bash
# Run all tests
npm run test:e2e

# Run with interactive UI (recommended for development)
npm run test:e2e:ui

# Run visual tests only
npm run test:e2e:visual

# Run specific test file
npx playwright test carousel-typography.spec.ts

# Debug mode (step through tests)
npx playwright test --debug

# View test report
npx playwright show-report
```

## Quick Test Template

Create a new test file in `e2e/`:

```typescript
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test('should do something', async ({ page }) => {
    // 1. Navigate
    await page.goto('/website/');

    // 2. Find element
    const element = page.locator('h1').first();

    // 3. Assert
    await expect(element).toBeVisible();
    await expect(element).toHaveText('Expected Text');
  });
});
```

## Common Assertions

```typescript
// Visibility
await expect(element).toBeVisible();
await expect(element).toBeHidden();

// Text content
await expect(element).toHaveText('Text');
await expect(element).toContainText('Partial');

// Attributes
await expect(element).toHaveAttribute('href', '/link');
await expect(element).toHaveClass('className');

// Count
await expect(page.locator('.item')).toHaveCount(5);

// CSS properties
const fontSize = await element.evaluate((el) =>
  window.getComputedStyle(el).fontSize
);
expect(parseFloat(fontSize)).toBe(24);
```

## Common Actions

```typescript
// Click
await page.locator('button').click();

// Type
await page.locator('input').fill('text');
await page.locator('input').type('text', { delay: 100 });

// Select
await page.locator('select').selectOption('value');

// Hover
await page.locator('.menu').hover();

// Scroll
await page.locator('section').scrollIntoViewIfNeeded();

// Wait
await page.waitForTimeout(1000); // milliseconds
await page.waitForLoadState('networkidle');
await page.waitForSelector('.loading', { state: 'hidden' });
```

## Taking Screenshots

```typescript
// Full page
await page.screenshot({
  path: 'e2e/screenshots/full-page.png',
  fullPage: true,
});

// Specific element
const element = page.locator('.component');
await element.screenshot({
  path: 'e2e/screenshots/component.png',
});

// With viewport size
await page.setViewportSize({ width: 1920, height: 1080 });
await page.screenshot({ path: 'e2e/screenshots/desktop.png' });
```

## Debugging Tips

1. **Use headed mode** to see the browser:
   ```bash
   npx playwright test --headed
   ```

2. **Use debug mode** for step-by-step execution:
   ```bash
   npx playwright test --debug
   ```

3. **Add console logs**:
   ```typescript
   console.log('Current URL:', await page.url());
   ```

4. **Take screenshots on failure**:
   ```typescript
   test('my test', async ({ page }) => {
     try {
       // test code
     } catch (error) {
       await page.screenshot({ path: 'debug.png' });
       throw error;
     }
   });
   ```

5. **Use Playwright Inspector**:
   - Pause execution: `await page.pause()`
   - Inspect selectors
   - Try out locators

## Before Committing

```bash
# 1. Run linter
npm run lint

# 2. Run tests
npm run test:e2e

# 3. Check if all pass ✓
```

## More Info

For detailed documentation, see [Testing Guide](./testing.md).

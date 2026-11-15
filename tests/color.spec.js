const { test, expect } = require('@playwright/test');
test('fits the viewport and flips with a keyboard without external dependencies', async ({ page }) => {
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.route('https://**/*', route => route.abort());
  await page.goto('/');
  await expect(page).toHaveTitle('JustFlip | Random colors');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  const button = page.getByRole('button', { name: 'Flip color' });
  await page.keyboard.press('Tab');
  await expect(button).toBeFocused();
  await page.keyboard.press('Enter');
  expect(await page.locator('body').evaluate(el => el.style.backgroundColor)).toMatch(/^rgb\(/);
  expect(errors).toEqual([]);
});

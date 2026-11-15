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

for (const [name, random, foreground] of [
  ['black', 0, 'rgb(255, 255, 255)'],
  ['white', 0.9999, 'rgb(0, 0, 0)'],
  ['mid-gray', 0.5, 'rgb(0, 0, 0)']
]) {
  test('readable heading on ' + name, async ({ page }) => {
    await page.addInitScript(value => { Math.random = () => value; }, random);
    await page.goto('/');
    await page.getByRole('button', { name: 'Flip color' }).click();
    await expect(page.getByRole('heading', { name: 'JustFlip' })).toHaveCSS('color', foreground);
    await expect(page.getByRole('button', { name: 'Flip color' })).toHaveCSS('color', 'rgb(255, 255, 255)');
  });
}

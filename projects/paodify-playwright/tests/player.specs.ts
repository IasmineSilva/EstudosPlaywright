import { test, expect } from '@playwright/test';

test('deve tocar uma música', async ({ page }) => {
  await page.goto('/');

  const LoggedUser = page.locator('.logged-user')
  await expect(LoggedUser).toHaveText('Fernando Papito')
});

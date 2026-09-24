import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('should display the login form and accept credentials', async ({ page }) => {
    await expect(page).toHaveTitle('Log in - Tailspin Toys');
    await expect(page.getByRole('heading', { name: 'Log in to Tailspin Toys' })).toBeVisible();

    await page.getByLabel('Email address').fill('player@example.com');
    await page.getByLabel('Password').fill('secret-password');

    await expect(page.getByLabel('Email address')).toHaveValue('player@example.com');
    await expect(page.getByLabel('Password')).toHaveValue('secret-password');
    await expect(page.getByRole('button', { name: 'Log in' })).toBeVisible();
  });

  test('should link to the login page from the site header', async ({ page }) => {
    await page.goto('/');
    await page.getByTestId('nav-login').click();

    await expect(page).toHaveURL('/login');
  });
});

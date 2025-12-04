// tests/login.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../page-objects/login/LoginPage';
import { users, messages } from '../data/users';

test.describe('Login - SauceDemo', () => {
  test('Login exitoso con usuario estándar', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.standardUser.username, users.standardUser.password);
    await loginPage.assertOnProductsPage();
  });

  test('Usuario bloqueado no puede hacer login', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.lockedUser.username, users.lockedUser.password);
    await loginPage.assertErrorMessage(messages.lockedOut);
  });

  test('Credenciales inválidas muestran mensaje de error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(users.invalidUser.username, users.invalidUser.password);
    await loginPage.assertErrorMessage(messages.invalidCreds);
  });

  test('Login vacío muestra mensaje de error', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('', '');
    await expect(loginPage.errorMessage).toBeVisible();
  });
});

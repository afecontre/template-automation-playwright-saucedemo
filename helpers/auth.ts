import { LoginPage } from '../page-objects/login/LoginPage';
import { users } from '../data/users';
import { Page } from '@playwright/test';

export async function loginAs(page: Page, userKey: string = "standardUser") {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  const user = users[userKey];

  await loginPage.login(user.username, user.password);

  return loginPage;
}

// tests/fixtures/base.ts
import { test as base, expect, Page } from '@playwright/test';
import { loginAs } from '../../helpers/auth';

type Fixtures = {
  loggedPage: Page;
};

// test "extendido" con fixture de login
export const test = base.extend<Fixtures>({
  loggedPage: async ({ page }, use) => {
    // Hace login con el usuario por defecto (standardUser)
    await loginAs(page);
    // Expone la página ya autenticada al test
    await use(page);
  },
});

export { expect };

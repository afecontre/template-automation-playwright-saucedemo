// tests/cart.spec.ts
import { test, expect } from './fixtures/base';
import { ProductsPage } from '../page-objects/ProductsPage';

test.describe('Carrito - SauceDemo', () => {
  test('Agregar producto al carrito', async ({ loggedPage }) => {
    const productsPage = new ProductsPage(loggedPage);

    await productsPage.assertInventoryVisible();

    const productName = 'Sauce Labs Backpack';
    await productsPage.addProductToCart(productName);
    await productsPage.assertCartCount(1);
  });
});

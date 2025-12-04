// tests/checkout.spec.ts
import { test, expect } from './fixtures/base';
import { ProductsPage } from '../page-objects/ProductsPage';
import { CheckoutPage } from '../page-objects/checkout/CheckoutPage';

test.describe('Checkout - SauceDemo', () => {
  test('Flujo completo de compra', async ({ loggedPage }) => {
    const productsPage = new ProductsPage(loggedPage);
    const checkoutPage = new CheckoutPage(loggedPage);

    await productsPage.assertInventoryVisible();

    const productName = 'Sauce Labs Backpack';
    await productsPage.addProductToCart(productName);
    await productsPage.goToCart();

    await loggedPage.locator('[data-test="checkout"]').click();

    await checkoutPage.fillCheckoutInfo('Andres', 'Contreras', '054040');
    await checkoutPage.finishCheckout();
    await checkoutPage.assertOrderCompleted();
  });
});

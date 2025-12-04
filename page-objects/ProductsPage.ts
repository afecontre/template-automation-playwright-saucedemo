import { Page, Locator, expect } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly inventoryContainer: Locator;
  readonly cartIcon: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryContainer = page.locator('[data-test="inventory-container"]');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async assertInventoryVisible() {
    await expect(this.inventoryContainer).toBeVisible();
  }

  async addProductToCart(productName: string) {
    const item = this.page
      .locator('.inventory_item')
      .filter({ hasText: productName });
    await item.getByRole('button').click();
  }

  async assertCartCount(expected: number) {
    await expect(this.cartBadge).toHaveText(String(expected));
  }

  async goToCart() {
    await this.cartIcon.click();
  }
  async assertItemAdded(count: number) {
  await expect(this.cartBadge).toHaveText(String(count));
}



}

const { expect } = require('@playwright/test');

exports.AddProductPage = class AddProductPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.product = page.locator('.inventory_item_name').first();
    this.addToCartButton = page.locator('[data-test=add-to-cart-sauce-labs-backpack]');
    this.removeButton = page.locator('[data-test=remove-sauce-labs-backpack]');
  }

  async addProductToCart() {
    await expect(this.product).toBeVisible();
    await expect(this.addToCartButton).toBeVisible();
    await this.addToCartButton.click();
    await expect(this.removeButton).toBeVisible();
  }
};
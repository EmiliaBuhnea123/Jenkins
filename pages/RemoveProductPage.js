const { expect } = require('@playwright/test');

exports.RemoveProductPage = class RemoveProductPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.shoppinCartButton = page.locator('[data-test=shopping-cart-link]');
    this.removeButton = page.locator('[data-test=remove-sauce-labs-backpack]');
    this.continueShoppingButton = page.locator('[data-test=continue-shopping]');
    this.removedProduct = page.locator('[data-test=add-to-cart-sauce-labs-backpack]')
  }

  async removeProductFromCart() {
    await expect(this.shoppinCartButton).toBeVisible();
    await this.shoppinCartButton.click();
    await expect(this.removeButton).toBeVisible();
    await this.removeButton.click();
    await expect(this.continueShoppingButton).toBeVisible();
    await this.continueShoppingButton.click();
    await expect(this.removedProduct).toBeVisible();
  }
};
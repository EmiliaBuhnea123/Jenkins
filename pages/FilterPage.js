const { expect } = require('@playwright/test');

exports.FilterPage = class FilterPage {
     /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.sortDropdown = page.locator('[data-test=product-sort-container]');
    this.firstProductPrice = page.locator('.inventory_item_price').first();
  }

  async sortByPriceLowToHigh() {
    await this.sortDropdown.selectOption('lohi');
  }

  async getFirstProductPrice() {
    await expect(this.firstProductPrice).toBeVisible();
    const price = await this.firstProductPrice.textContent();
    return parseFloat(price.replace('$',''))
  }
}
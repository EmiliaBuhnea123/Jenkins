const { expect } = require('@playwright/test');

exports.TransactionPage = class TransactionPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test=checkout]');
    this.firstNameField = page.locator('[data-test=firstName]');
    this.lastNameField = page.locator('[data-test=lastName]');
    this.zipCodeField = page.locator('[data-test=postalCode]')
    this.continueButton = page.locator('[data-test=continue]');
    this.finishButton = page.locator('#finish');
    this.confirmationMessage = page.locator('.complete-header');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/cart.html');
  }

  async payProduct(transaction) {
    await expect(this.checkoutButton).toBeVisible();
    await this.checkoutButton.click();
    await expect(this.firstNameField).toBeVisible();
    await this.firstNameField.fill(transaction.firstName);
    await expect(this.lastNameField).toBeVisible();
    await this.lastNameField.fill( transaction.lastName);
    await expect(this.zipCodeField).toBeVisible();
    await this.zipCodeField.fill(transaction.zipCode);
    await expect(this.continueButton).toBeVisible();
    await this.continueButton.click();
    await expect(this.finishButton).toBeVisible();
    await this.finishButton.click();
    await expect(this.confirmationMessage).toBeVisible();
  }
};
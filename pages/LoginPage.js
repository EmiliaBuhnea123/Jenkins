const { expect } = require('@playwright/test');

exports.LoginPage = class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.userNameField = page.locator('[data-test=username]');
    this.passwordField = page.locator('[data-test=password]');
    this.signInButton = page.locator('[data-test=login-button]');
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async userLogin(username, password) {
    await expect(this.userNameField).toBeVisible();
    await this.userNameField.fill(username);
    await expect(this.passwordField).toBeVisible();
    await this.passwordField.fill(password);
    await expect(this.signInButton).toBeVisible();
    await this.signInButton.click();
  }
};



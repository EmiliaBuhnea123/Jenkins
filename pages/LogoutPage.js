const { expect } = require('@playwright/test');

exports.LogoutPage = class LogoutPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.burgerMenuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
    this.signInButton = page.locator('[data-test=login-button]');
    this.signInButton = page.locator('[data-test=login-button]');
  }

  async logout() {
    await expect(this.burgerMenuButton).toBeVisible();
    await this.burgerMenuButton.click();
    await expect(this.logoutLink).toBeVisible();
    await this.logoutLink.click();
    await expect(this.signInButton).toBeVisible();
}
};
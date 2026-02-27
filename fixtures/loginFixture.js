const { test: base, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { testUser } = require('../data/users');

exports.test = base.extend({
  loggedInPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.userLogin(testUser.username, testUser.password);
    await use(page);
  },
});

exports.expect = base.expect;
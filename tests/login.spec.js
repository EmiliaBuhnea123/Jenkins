const { test } = require('@playwright/test');
const { testUser } = require('../data/users');
const { LoginPage } = require('../pages/LoginPage');

test('should log in', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.userLogin(testUser.username, testUser.password);
});
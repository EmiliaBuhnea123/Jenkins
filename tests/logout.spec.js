const { LogoutPage } = require('../pages/LogoutPage');
const { test } = require('../fixtures/loginFixture');

test('should logout the user', async ({ loggedInPage }) => {
  const logoutUser = new LogoutPage(loggedInPage);
  await logoutUser.logout()
});
const { FilterPage } = require('../pages/FilterPage');
const { test, expect } = require('../fixtures/loginFixture');

test('should filter the products by cost', async ({ loggedInPage }) => {
  const filterProducts = new FilterPage(loggedInPage);
  await filterProducts.sortByPriceLowToHigh()
  const firstPrice = await filterProducts.getFirstProductPrice();
  expect(firstPrice).toBe(7.99)
});
const { AddProductPage } = require('../pages/AddProductPage');
const { RemoveProductPage } = require('../pages/RemoveProductPage');
const { test } = require('../fixtures/loginFixture');

test('should add and remove product from cart', async ({ loggedInPage }) => {
  const addProduct = new AddProductPage(loggedInPage);
  await addProduct.addProductToCart();
  const removeProduct = new RemoveProductPage(loggedInPage);
  await removeProduct.removeProductFromCart();
});
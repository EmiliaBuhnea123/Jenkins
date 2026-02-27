const { TransactionPage } = require('../pages/TransactionPage');
const { AddProductPage } = require('../pages/AddProductPage');
const { transaction } = require('../data/transaction');
const { test } = require('../fixtures/loginFixture');

test('should pay for the product', async ({ loggedInPage }) => {
  const addProduct = new AddProductPage(loggedInPage);
  await addProduct.addProductToCart();
  const transactionPage = new TransactionPage(loggedInPage);
  await transactionPage.goto();
  await transactionPage.payProduct(transaction);
});
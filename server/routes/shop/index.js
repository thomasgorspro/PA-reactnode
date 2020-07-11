const ShopRouter = require("./shop");
const TransactionRouter = require("../transactions");
const PaymentRouter = require("../payment");
const basicAuth = require("../../middlewares/basicAuth")

const RouterManager = (app) => {
  app
    .use("/shop", ShopRouter)
    .use('/transactions', TransactionRouter)
    .use('/payment', PaymentRouter)
}

module.exports = RouterManager;
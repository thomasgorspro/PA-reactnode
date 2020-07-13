const TransactionRouter = require("./transactions");
const MerchantRouter = require('./merchant');
const SecurityRouter = require("./security");
const PspRouter = require("./psp");
const ShopRouter = require("./shop");
const PaymentRouter = require("./payment");
const verifyToken = require("../middlewares/verifyToken");

const RouterManager = (app) => {
  app
    .use("/shop", ShopRouter)
    .use('/payment', PaymentRouter)
    .use("/psp", PspRouter)
    .use("/", SecurityRouter)
    // .use(verifyToken)
    .use('/merchant', MerchantRouter)
    .use('/transactions', TransactionRouter)
}

module.exports = RouterManager;
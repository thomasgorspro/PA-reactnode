const TransactionRouter = require("./transactions");
const ShopRouter = require("./shop");
const MerchantRouter = require('./merchant');
const PaymentRouter = require("./payment");
const PspRouter = require("./psp");
const SecurityRouter = require("./security");
const verifyToken = require("../middlewares/verifyToken");

const RouterManager = (app) => {
  app
    .use("/", SecurityRouter)
    .use(verifyToken)
    .use('/transactions', TransactionRouter)
    .use('/merchant', MerchantRouter)
    .use('/shop', ShopRouter)
    .use('/payment', PaymentRouter)
    .use('/psp', PspRouter)
}

module.exports = RouterManager;
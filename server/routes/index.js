const TransactionRouter = require("./transactions");
const ShopRouter = require("./shop");
// import UserRouter from "./users";
const PaymentRouter = require("./payment");
const PspRouter = require("./psp");
const MerchantRouter = require("./merchant");
const SecurityRouter = require("./security");
const verifyToken = require("../middlewares/verifyToken");

const RouterManager = (app) => {
  app
    .use('/', SecurityRouter)
    .use(verifyToken)
    .use('/merchant', MerchantRouter)
    .use('/transactions', TransactionRouter)
    // .use("/users", UserRouter)
    .use('/shop', ShopRouter)
    .use('/payment', PaymentRouter)
    .use('/psp', PspRouter)
}

module.exports = RouterManager;
const TransactionRouter = require("./transactions");
const ShopRouter = require("./shop");
// import UserRouter from "./users";
const PaymentRouter = require("./payment");
const PspRouter = require("./psp");

const RouterManager = (app) => {
  app
    .use('/transactions', TransactionRouter)
    // .use("/users", UserRouter)
    .use('/shop', ShopRouter)
    .use('/payment', PaymentRouter)
    .use('/psp', PspRouter)
}

module.exports = RouterManager;
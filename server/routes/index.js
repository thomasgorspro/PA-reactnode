const TransactionRouter = require("./transactions");
const MerchantRouter = require('./merchant');
const SecurityRouter = require("./security");
const PspRouter = require("./psp");
const ShopRouter = require("./shop");
const PaymentRouter = require("./payment");
const OperationRouter = require("./operations");
const AdminRouter = require("./admin");
const verifyToken = require("../middlewares/verifyToken");

const RouterManager = (app) => {
  app
    .use("/shop", ShopRouter)
    .use('/payment', PaymentRouter)
    .use("/psp", PspRouter)
    .use("/", SecurityRouter)
    // .use(verifyToken)
    .use('/transactions', TransactionRouter)
    .use("/admin", AdminRouter)
    .use('/merchant', MerchantRouter)
    .use('/operations', OperationRouter)
}

module.exports = RouterManager;
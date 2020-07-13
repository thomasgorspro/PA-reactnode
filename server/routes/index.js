const TransactionRouter = require("./transactions");
const MerchantRouter = require('./merchant');
const SecurityRouter = require("./security");
const PspRouter = require("./psp");
const verifyToken = require("../middlewares/verifyToken");

const RouterManager = (app) => {
  app
    .use("/psp", PspRouter)
    .use("/", SecurityRouter)
    .use(verifyToken)
    .use('/merchant', MerchantRouter)
    .use('/transactions', TransactionRouter)
}

module.exports = RouterManager;
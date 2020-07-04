import TransactionRouter from "./transactions";
import ShopRouter from "./shop";
// import UserRouter from "./users";
import PaymentRouter from "./payment";
import PspRouter from "./psp";

const RouterManager = (app) => {
  app
    .use('/transactions', TransactionRouter)
    // .use("/users", UserRouter)
    .use('/shop', ShopRouter)
    .use('/payment', PaymentRouter)
    .use('/psp', PspRouter)
}

export default RouterManager;
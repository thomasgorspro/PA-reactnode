import TransactionRouter from "./transactions";
import ShopRouter from "./shop";
// import UserRouter from "./users";

const RouterManager = (app) => {
  app
    .use('/transactions', TransactionRouter)
    // .use("/users", UserRouter)
    .use('/shop', ShopRouter)
}

export default RouterManager;
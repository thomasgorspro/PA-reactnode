import TransactionRouter from "./transactions";
// import UserRouter from "./users";

const RouterManager = (app) => {
  app
    .use('/transactions', TransactionRouter)
    // .use("/users", UserRouter)
}

export default RouterManager;
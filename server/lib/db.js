import mongoose from "mongoose";

mongoose
  .connect(
    `mongodb://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@mongo`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: process.env.MONGODB_DBNAME,
    }
  )
  .then(() => console.log("connected to mongoDB"))
  .catch((e) => console.log(e));

export default mongoose.connection;

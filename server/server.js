import express from "express";
import RouterManager from "./routes";

const app = express();

app.use(express.json());

RouterManager(app);

app.listen(process.env.SERVER_PORT || 3000, () =>
  console.log("listening on port 3000...")
);

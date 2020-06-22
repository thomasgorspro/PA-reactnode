import express from "express";
import RouterManager from "./routes";
import path from 'path';

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(express.json());

RouterManager(app);

app.listen(process.env.SERVER_PORT || 3000, () =>
  console.log("listening on port 3000...")
);

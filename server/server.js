const express = require("express");
const cors = require("cors");
const path = require('path');
const RouterManager = require("./routes");

const app = express();

app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.use(express.json());

RouterManager(app);

app.listen(process.env.SERVER_PORT || 3000, () =>
  console.log("listening on port 3000...")
);

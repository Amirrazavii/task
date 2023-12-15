const express = require("express");
const bodyParser = require("body-parser");
const { database } = require("./model/index.js");
const { router } = require("./router/news.js");
database();
const app = express();
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use("/", router);
app.listen(3000, () => {
  console.log("port listen on 3000");
});

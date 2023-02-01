const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const cors = require("cors");
const router = require('./routes/productRouter');

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose
.connect("mongodb+srv://Zeynab:241761331z@cluster0.xtyohvz.mongodb.net/test")
.then((res) => {
    console.log("Connect!");
  })
  .catch((err) => {
    console.log("err", err);
  });

app.get("/", function (req, res) {
    res.json("Hello");
  });
  app.use("/products", router);
  
  app.listen(8080);

const express = require("express");
require("dotenv").config();
require("./Models/db");

const bodyParser = require("body-parser");
const cors = require("cors");

const AuthRouter = require("./Routes/AuthRouter");
const product = require("./Routes/product");
const addressRouter = require("./Routes/AddressRouter");

const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

// test route
app.get("/ping", (req, res) => {
  res.send("pong");
});

// routes
app.use("/api/auth", AuthRouter);
app.use("/api/product", product);
app.use("/api/address", addressRouter);

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
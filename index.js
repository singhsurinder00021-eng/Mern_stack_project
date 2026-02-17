const express = require('express');
require('dotenv').config();
require("./Models/db")
const bodyParser = require("body-parser");
const AuthRouter = require("./Routes/AuthRouter");
const product = require('./Routes/product')

const cors = require('cors');
const app = express();


app.get('/ping', (req, res) => {
  res.send('pong');
});

app.use(bodyParser.json());
app.use(cors())
app.use("/auth",AuthRouter);
app.use('/product',product)


app.listen(3000, () => {
  console.log('Server started on port ');
});



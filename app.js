const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();
const PORT = 8088

dotenv.config({path:'./config.env'})
require('./db/conn')

app.use(express.json());

app.use(require('./router/auth'))


const middleware = (req, res, next) => {
  console.log('Middleware')
  next();
}


app.get('/', middleware, (req, res) => {
  res.send("landing page")
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
})

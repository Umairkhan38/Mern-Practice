 const express = require("express");
const app = express();
const env=require('dotenv');

env.config({path:'./config.env'});

require('./DB/database.js');
port=process.env.PORT;


app.get("/", (req, res) => {
  res.send(`<h2>Hello World from Backend!</h2>`);
});


//Middleware
//Middleware are the functions that have access to req obj ,res obj ans next() function of the req-res lifecycle

const middleware = (req, res, next) => {
  console.log("Its a Middleware");
  next(); //it executes before running the next function to it
};


app.get("/about", middleware, (req, res) => {
  res.send(`<h2>Hello World from About Page!</h2>`);
});


app.listen(port, () => {
  console.log("Server Listening on Port :" + port);
});

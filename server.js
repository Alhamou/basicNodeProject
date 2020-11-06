"use strict";
const express = require('express')
const app = express()

require('dotenv').config()
const mongoose = require("mongoose");
const cors = require("cors");
app.use(cors());

const {local} = require("./config/connect");


mongoose.connect(local, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(() => {console.log("mongodb is connecting")});



app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const ticketsRouter = require("./router/ticketsRouter");


app.use('/', ticketsRouter); // ticket routers


const port = process.env.PORT || 3002;



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require("express");

const productsRouter=require("./routes/products");

const bodyParser=require('body-parser')

require("dotenv").config()

const mongoose=require('mongoose')

const app=express();

app.use(bodyParser.json())


app.use("/api/products", productsRouter)



mongoose.connect(process.env.DB_CONNECTION_URL,() =>{
 console.log("Connected to db")
})


app.listen(process.env.PORT, ()=>{
    console.log("server is running..");
})
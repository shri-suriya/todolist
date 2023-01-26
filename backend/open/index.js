//third party module
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")

// app.use("/",( req,res)=>
// {
//     res.json("hello");
// })

//midleware
app.use(cors());
app.use(express.json()); //bodyparser


//router
const infoRouter = require("./router"); 
app.use("/info",infoRouter);

//Listen port
app.listen(5000,() => {
    console.log("Server Started On 5000"); 
})


//Db.Connection
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost/crud",(err) => {
    if(!err)
    {
        console.log("Db Connected ");
    }
})
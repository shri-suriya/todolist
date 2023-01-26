//third party module
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors")
const router = require('./router');
// app.use((req, res, next)=>{
//     console.log("test req rec")
//     tt = req.get("type")
//     console.log(req.get("type"), req.type, tt)
//     next()
// })
 
app.use(express.json());
app.use(cors());

app.use('/api',router);


// app.use("/",( req,res)=>
// {
//     res.json("hello");
// })

//Listen port
app.listen(4000,() => {
    console.log("Server Started On 5000"); 
})

//Db.Connection
mongoose.set('strictQuery', false);
mongoose.connect("mongodb://localhost:27017/Login",{useNewUrlParser: true},(err) => {
    if(!err)
    {
        console.log("Db Connected ");
    }
})
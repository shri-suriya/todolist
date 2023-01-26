const mongoose = require("mongoose");
const router = require("./router");

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})



module.exports = mongoose.model("User",UserSchema); 
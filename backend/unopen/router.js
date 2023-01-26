const express = require("express");
const router = express.Router();
const User = require('./userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


router.post('/register',async (req,res)=>
{
    try{
        console.log('test')
        console.log(req.body)
        var emailExist = await User.findOne({email:req.body.email});
        if(emailExist){
            return res.status(200).json({"message": "Already exist"});
        }
        console.log(req.body.email)
        var hash =await bcrypt.hash(req.body.password,10);

        const user = new User({
            name:req.body.name,
            email:req.body.email,
            password:hash,
        });

        var data= await user.save();
        console.log(data);
        res.json({user:user,data:data});
        //res.json(data);
        console.log(user);
        
        
    }catch(err){
        console.log(err);
        res.status(401).json(err);
    }
    
});

router.post('/login',async (req,res)=>{
    try{
        // console.log('test');
        var userData = await User.findOne({email:req.body.email});
        if(!userData){
            //console.log('test');
            return res.status(400).json("not exist");
        }
        var validPassword =  bcrypt.compare(req.body.password,userData.password);
        
        if(!validPassword){
            
            return res.status(400).json("password not valid");
        }

        var userToken =  jwt.sign({email:userData.email},'secret');
        res.header('sign',userToken).json(userToken);
        console.log(userToken);

    }catch(err){

        console.log(err);
        res.status(400).json(err);
    }

})

const validUser = (req,res,next)=>{
    var token = req.header('sign');
    req.token =token;
    next();
}

 
router.get('/getAll',validUser,async(req,res)=>{
    jwt.verify(req.token,'secret',async (err,data)=>{
        if(err){
                //console.log("test");
                res.sendStatus(403)
        }else{
            const data= await (await User.find());
            
            res.json(data);
        }
    })
    
})

module.exports = router;
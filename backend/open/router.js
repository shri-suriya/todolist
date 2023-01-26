const express = require("express");
const router = express.Router();
const InfoRouter = require("./infoSchema");


//create
router.post("/",async(req,res)=>{
    console.log(req.body);
    var data = new InfoRouter({
        Name:req.body.Name,
        Task:req.body.Task
    });
    //to store data 
    await data.save();
    res.json(data);
})

//get all
router.get("/",async (req,res) => {
    var findData =await InfoRouter.find();
    res.json(findData); 
})

//Update
router.put("/update",async(req,res)=>{
    var update =await InfoRouter.updateOne({id:req.body._id},{$set:{
        Name:req.body.Name,
        Task:req.body.Task
    }});
    res.json(update);
})

//Delete
router.delete("/del/:id",async(req,res)=>{
    var delData = await InfoRouter.findByIdAndRemove(req.params.id).then(e =>{
        res.json({message:"deleted"})
    })
})
router.get("/",(req,res)=>{
    res.json("Router file");
})

module.exports = router;
const express=require("express");
const router=express.Router();
const acc_info=require('../models/valid');

router.get('/',async (req,res)=>{
    try{
        const infos=await acc_info.find();
        res.json(infos);
    }catch(err){
        res.json({message:err});
    }

});

router.post('/',async (req,res)=>{
    const info=new acc_info({
        uname:req.body.uname,
        pwd:req.body.pwd
    });
    try {
        const savedinfo=await info.save();
        res.json(savedinfo);
    }
    catch(err){
        res.json({message:err});
    }

});




module.exports=router;
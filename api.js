const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
require('dotenv/config');
app.use(bodyparser.json());



const acc_info=require('./models/valid');

app.get('/valids',async (req,res)=>{
    try{
        const infos=await acc_info.find();
        res.json(infos);
    }catch(err){
        res.json({message:err});
    }

});

app.post('/valids',async (req,res)=>{
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

app.get("/",(req,res)=>{
    res.send("hello ");
});


// connect to db 
mongoose.connect(
    process.env.DB_CONNECTION ,()=>{
console.log("connected to db ");
});

app.listen(process.env.PORT||3000,()=>{
    console.log("chlra h ");
});


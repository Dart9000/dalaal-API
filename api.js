const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
require('dotenv/config');
app.use(bodyparser.json());



const acc_info=require('./models/valid');
const res = require("express/lib/response");

// app.get('/a',async (req,res)=>{
//     try{
//         const infos=await acc_info.find();
//         res.json(infos);
//     }catch(err){
//         res.json({message:err});
//     }

// });
// add new account 
app.post('/newAccount',async (req,res)=>{
    const info=new acc_info({
        email:req.body.email,
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


app.post('/validity',(req,res)=>{
    // checking validity 
    acc_info.findOne({
        $or:[
             {
            pwd: req.body.pwd},

           {
            email: req.body.email 
           } 
        ]
    }).then(acc_info => {
        if (acc_info) {
            if (acc_info.email === req.body.email||acc_info.pwd===req.body.pwd) {
                console.log("response bhej diya ")
                res.status(200).json({ msg:"good it is valid"});
            } 
            else{

            return res.status(400).json({msg:"not valid "});
        } 
    }
    })
    .catch(err => {
        return res.status(500).json({
            error: err
        });
    });
    
})



// connect to db 
mongoose.connect(
    process.env.DB_CONNECTION ,()=>{
console.log("connected to db ");
});

app.listen(process.env.PORT||3000,()=>{
    console.log("chlra h ");
});


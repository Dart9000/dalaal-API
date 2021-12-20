const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bodyparser=require("body-parser");
require('dotenv/config');
app.use(bodyparser.json());

// import routes
const validsroute=require("./Routes/valids");
app.use("/valids",validsroute);


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


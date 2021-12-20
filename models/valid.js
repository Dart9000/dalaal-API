const Mongoose = require("mongoose");

const acc_info=Mongoose.Schema({
    uname:{
        type:String,
        required:true
    },
    pwd:{
        type:String,
        required:true
    }
});

module.exports=Mongoose.model('AccountInfo',acc_info);
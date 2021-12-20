const Mongoose = require("mongoose");

const acc_info=Mongoose.Schema({
    pwd:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    }
});

module.exports=Mongoose.model('AccountInfo',acc_info);
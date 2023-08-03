const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:String,
    },
    price:{
        type:Number,
        required:[true,"must be provided"],
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Nymber,
        default:[true,"price must be provided"],
    },
    createdAt:{
        type:String,
        default:Date.now()
    },
    company:{
        type:String,
        values :["apple","samsung"],
        message :`{VALUE} is not supported`,
    }

})
module.exports = mongoose.model("Product",productSchema)
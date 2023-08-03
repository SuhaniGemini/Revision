const mongoose = require("mongoose");
uri  = "//link"

const connectDB = () =>{
    console.log("connect db")
    return mongoose.connect(uri,{
        useNewUrlParser :true,
        useUnifiedTopology :true,
    });
}
module.exports = connectDB;
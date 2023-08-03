const connectDB = require();
const Product = require();
const ProductJson = require(path)
const start = async () =>{
    try{
       await connectDB (process.env.MONGODB_URL);
       await Product.create(ProductJson);
       console.log("success")
    } catch(error){
        console.log(error)
    }
}
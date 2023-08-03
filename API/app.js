const express =require ("express");
const app = express ();
const connectDB = require//(path)
const PORT = process.env.PORT || 5000;
app.get ("/",(req,res)=>{
    res.send("Hii")
});
const start= async() =>{
    try{
        await connectDB();
        app.listen(PORT,()=>{
          `${PORT} Yes I am Connected`;
        });  
      }catch(error){
        console.log(error);
      }
}

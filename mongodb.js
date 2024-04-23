const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017")
.then(()=>{
  console.log("Mongo db connected")
})
.catch(()=>{
  console.log("failed")
})
const loginSchema=new mongoose.Schema({
 name:{
      type:String,
      required:true
 },
 password:{
    type:String,
    required:true
 }
})
const collection=new mongoose.model("system",loginSchema)
module.export=collection

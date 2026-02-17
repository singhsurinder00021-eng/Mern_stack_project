const mongoose = require("mongoose");

const mongo_url = process.env.MONGO_URL;

mongoose.connect(mongo_url)
   .then(()=>{
    console.log("mongodb connect")
   }).catch((err)=>{
    console.log("erorr",err)
   })
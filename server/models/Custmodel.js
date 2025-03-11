
const mongoose = require("mongoose");
const CustomerSchema= new mongoose.Schema({ 
     name:String,
     address:String, 
     city:String,
     mobile:String,
     pincode:String,
     email:String,
     password: String
})

module.exports = mongoose.model("Customer", CustomerSchema);

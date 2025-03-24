
const mongoose = require("mongoose");
const CustomerSchema= new mongoose.Schema({ 
     name:String,
     address:String, 
     city:String,
     mobile:String,
     pincode:String,
     email: {
        type: String,
        require: true,
        unique: true,
        lowercase:true
    },
     password: String,
    account:String
})

module.exports = mongoose.model("Customer", CustomerSchema);

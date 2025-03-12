const CustModel= require("../models/Custmodel");
const Autopassword = require("../middleware/Autopassword")
const nodemailer = require("nodemailer");


const Registration=async(req, res)=>{
    const {name,address, city, mobile,pincode,email} = req.body; 
    const mypass = Autopassword.Autopassword()
    try {
        const Customer = await CustModel.create({
            name:name,
            address:address, 
            city:city,
            mobile:mobile,
            pincode:pincode,
            email:email
           
        })

        res.status(201).send({msg:" Succesfully Registered!"});
    } catch (error) {
           res.status(400).send({msg:"Data base not Work"})
    }
    
var mailtransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'anshulsv14@gmail.com',
      pass: 'zmlj lzpx nxqy jrgb'
    }
  });
  
  var mailDetails = {
    from: 'anshulsv14@gmail.com',
    to: 'email',
    subject: 'E-banking registration',
    text: `Dear ${name} Your account has been created successfully`
  };
  
  mailtransporter.sendMail(mailDetails, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent successfully ');
    }
  });
}




module.exports ={
   Registration
 
}
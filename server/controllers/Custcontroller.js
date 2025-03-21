const CustModel= require("../models/Custmodel");
const Autopassword = require("../middleware/Autopassword")
const nodemailer = require("nodemailer");
const transactionModel = require("../models/TransactionModel")

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
            email:email,
            password:mypass
           
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
    to: email,
    subject: 'E-banking registration',
    text: `Dear ${name} Your account has been created successfully \n Your pssword is "${mypass}"`
  };
  
  mailtransporter.sendMail(mailDetails, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });


}
const CustLogin  = async(req , res)=>{
  const{email , password} = req.body
  const data = await CustModel.findOne({email : email,password:password})
 try {
   if(!data)
   {
     return res.status(400).send("Invalid email")
   }
   if(data.password !=password)
   {
     return res.status(400).send("Invalid password")
   }
   res.status(200).send(data)
 } catch (error) {
   res.status(400).send(error)
 }
 
 }
 const SubmitCash = async(req ,res)=>{
  const{amount , status , customerid} = req.body;
  const data = await transactionModel.create({
    amount : amount,
    status : status,
    customerid : customerid
  })
res.status(200).send(data)
}
const ShowBalance = async(req,res)=>{
  const {userid} = req.query
  const data = await transactionModel.find({customerid:userid})
  res.send(data)
}
module.exports ={
   Registration,
   CustLogin,
   SubmitCash,
   ShowBalance
 
}
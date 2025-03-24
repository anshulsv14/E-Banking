const CustModel= require("../models/Custmodel");
const Autopassword = require("../middleware/Autopassword")
const nodemailer = require("nodemailer");
const transactionModel = require("../models/TransactionModel")
const Autoaccount = require("../middleware/Accno")
const Registration=async(req, res)=>{
    const {name,address, city, mobile,pincode,email} = req.body; 
    const mypass = Autopassword.Autopassword()
   const accno = Autoaccount.accNoGenerate()
    try {
        const Customer = await CustModel.create({
            name:name,
            address:address, 
            city:city,
            mobile:mobile,
            pincode:pincode,
            email:email,
            password:mypass,
            account:accno
          
           
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
   if(data.email!=email)
   {
     return res.status(400).send("Invalid email")
   }
   if(data.password !=password)
   {
     return res.status(400).send("Invalid password")
   }
   res.status(200).send(data)
 } catch (error) {
   res.status(400).send({msg:"Data base not Work"})
 }
 
 }
 const SubmitCash = async(req ,res)=>{

  const{amount , status , customerid,description} = req.body;
  try {
    const data = await transactionModel.create({
      amount : amount,
      status : status,
      customerid : customerid,
      description:description
      
    })
    res.status(200).send(data)
  } catch (error) {
    res.status(400).send(error)
  }
 
}
const ShowBalance = async(req,res)=>{
  const {userid} = req.query
  try {
    const data = await transactionModel.find({customerid:userid})
    res.send(data)
  }
  
  catch (error) {
    res.status(400).send(error)
  }
 
 
}

const AccStatement =async(req,res)=>{
  const {userid} = req.query
  const statement = await transactionModel.find({customerid:userid}).sort({date:-1}).limit(10)
  
  res.send(statement)
}
const ResetPassword = async(req,res)=>{
 const  { oldpassword,newpassword,confirmnewpassword } = req.body;
 const {id} = req.body
 const data = await CustModel.findOne({ customerid:id})

 

 if(oldpassword!=data.password){
  return res.status(400).send({msg:"invalid old password"})
 }

 if(newpassword != confirmnewpassword)
  {
      return res.status(400).send({msg:"New Password Does Not Matched"})
  }
  
  
  const resetpassword = await CustModel.findByIdAndUpdate(id,{password:newpassword})
res.status(200).send({msg:"Password Updated Successfully!"})

 
 
}
const MiniStatement = async (req,res) =>{
  const {custid, fromDate, endDate} = req.body;
  try {
      if( !fromDate || !endDate)
      {
          return res.status(400).send("Both dates are required!")
      }

      const fromdate = new Date(fromDate);
      const enddate = new Date(endDate);

      if(fromdate > enddate)
      {
         return res.status(400).send("'From' Date can not be after 'To' Date");
      }

      if(fromdate.getTime() === enddate.getTime())
      {
         return res.status(400).send("Please Select two different Date!");
      }

      const transactions = await transactionModel.find({customerid:custid,
          date:{
              $gte: fromdate,
              $lte: enddate
          }
      }).sort({date:-1}).limit(10)

      if(!transactions.length)
      {
         return res.status(400).send("No Transactions found.")
      }

      res.status(200).send(transactions)
  } 
  
  catch (error) {
      console.log(error);
      
      res.status(400).send("Server Error :(")
  }
}
const AccInfo = async (req,res)=>{
  const {custid} = req.body;
  
  try {

      let Info = await CustModel.findById(custid)

      if (!Info) {
          return res.status(404).send({ message: "User not found" });
      }

      res.status(200).send(Info);
      
  } catch (error)
   {
      res.status(400).send({message:"Error Loading Data"})
  }
}
module.exports ={
   Registration,
   CustLogin,
   SubmitCash,
   ShowBalance,
   AccStatement,
   ResetPassword,
   MiniStatement,
   AccInfo
 
}
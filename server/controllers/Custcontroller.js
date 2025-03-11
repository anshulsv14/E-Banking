const CustModel= require("../models/Custmodel");


const Registration=async(req, res)=>{
    const {name,address, city, mobile,pincode,email, password} = req.body; 
    try {
        const Customer = await CustModel.create({
            name:name,
            address:address, 
            city:city,
            mobile:mobile,
            pincode:pincode,
            email:email,
            password:password 
        })

        res.status(201).send({msg:" Succesfully Registered!"});
    } catch (error) {
           res.status(400).send({msg:"Data base not Work"})
    }

}

const Login =async(req, res)=>{
    const { email, password} = req.body;
    
    try {
     const Customer = await CustModel.findOne({email:email});
     if (!Customer)
     {
       res.status(400).send({msg:"Invalid Email!"})
     }
 
     if (Customer.password!=password)
     {
         res.status(400).send({msg:"Invalid Credentials!"});
     }
 
     res.status(200).send(Customer);
 
    } catch (error) {
       console.log(error);
    }
 }


module.exports ={
   Registration,
   Login
}
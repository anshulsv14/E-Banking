const express = require("express")
const app = express();
const CustRoute = require("./routes/Custroute")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require("dotenv").config();

mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB connected!!!");
})

app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));




app.use("/Banking" , CustRoute)
app.listen(8000);
    

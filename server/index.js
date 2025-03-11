const express = require("express")
const app = express();
const CustRoute = require("./routes/Custroute")
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")


mongoose.connect("mongodb://127.0.0.1:27017/Banking").then(()=>{
    console.log("DB connected!!");
})

app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));




app.use("/Banking" , CustRoute)
app.listen(8000)
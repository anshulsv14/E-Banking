const express = require("express")
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
require("dotenv").config();
const userRoute = require("./Routes/userRoutes")

const PORT = process.env.PORT || 8000;

app.use(cors());

mongoose.connect(process.env.DBCONN).then(()=>{
    console.log("DB connected!!");
})


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/Customer", userRoute)

app.listen(PORT, ()=>{
    console.log(`Server Running on Port ${PORT}`);
    
})
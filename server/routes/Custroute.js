const express = require("express");
const route = express.Router();
const Custcontroller = require("../controllers/Custcontroller")

route.post("/registration", Custcontroller.Registration);
route.post("/customerlogin", Custcontroller.Login);




module.exports = route;
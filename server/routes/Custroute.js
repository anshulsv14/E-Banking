const express = require("express");
const route = express.Router();
const Custcontroller = require("../controllers/Custcontroller")

route.post("/registration", Custcontroller.Registration);





module.exports = route;
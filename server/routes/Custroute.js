const express = require("express");
const route = express.Router();
const Custcontroller = require("../controllers/Custcontroller")

route.post("/registration", Custcontroller.Registration);
route.post("/customerlogin", Custcontroller.CustLogin);
route.post("/transaction", Custcontroller.SubmitCash);
route.get("/balenquiry", Custcontroller.ShowBalance);





module.exports = route;
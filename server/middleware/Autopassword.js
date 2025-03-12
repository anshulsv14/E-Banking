const Autopassword = ()=>{
        let string = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()<>?[]{}"
        let pass = ""
        for(var i = 0 ; i<8;i++)
            {
             let mypassword = Math.floor(Math.random()*string.length)
             pass += string.charAt(mypassword)
            }
            return pass;
        }
        module.exports = {
            Autopassword
        }

import axios from "axios"
import { useState,useEffect } from "react"
import BASE_URL from "../configuration/Config"

const Balanceinquiry = () => {

 
    const [balance, setBalance] = useState([])
    let creditAmount = 0
    let debitAmount = 0
    let balanceleft = 0
  
    const loadData = async () => {
      const api = `${BASE_URL}/Banking/balenquiry/?userid=${localStorage.getItem("userid")}`
      const res = await axios.get(api)
      console.log(res.data)
      setBalance(res.data)
    }
  
    useEffect(() => {
      loadData()
    }, [])
  
    balance.map((key) => {
      if (key.status === "credit") {
        creditAmount = creditAmount + key.amount
      }
      if (key.status === "debit") {
        debitAmount = debitAmount+ key.amount
      }
    })
    balanceleft = creditAmount - debitAmount
  
 
  return (
    <>
    <div id="bal">
    <div>
      <h1>Account balance </h1>
    <h2 style={{color:"green"}}>Your current balance is : {balanceleft}</h2>
    </div>
    </div>
    </>
  )
}

export default Balanceinquiry

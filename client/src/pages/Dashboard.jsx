import React from "react";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { CreditCard, Banknote, TrendingUp } from "lucide-react";
 
const transactions = [
  { date: "Mar 1", amount: 200 },
  { date: "Mar 2", amount: 450 },
  { date: "Mar 3", amount: 300 },
  { date: "Mar 4", amount: 600 },
  { date: "Mar 5", amount: 150 },
];

 function Dashboard() {
  return (
    <>
    <h1 style={{textAlign:"center"}}>welcome to dashboard</h1>
    <div className="dashboard">
      <div className="card">
        <CreditCard size={32} />
        <div>
          <h2>Balance</h2>
          <p>$12,450</p>
        </div>
      </div>
      
      <div className="card">
        <Banknote size={32} />
        <div>
          <h2>Income</h2>
          <p>$3,200</p>
        </div>
      </div>
      
      <div className="card">
        <TrendingUp size={32} />
        <div>
          <h2>Expenses</h2>
          <p>$1,750</p>
        </div>
      </div>

      <div className="card transaction-history">
        <h2>Transaction History</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={transactions}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#4F46E5" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      
      <div className="card quick-actions">
        <h2>Quick Actions</h2>
        <button className="btn">Transfer Money</button>
        <button className="btn outline">View Statements</button>
      </div>
    </div>
    </>
  );
}
export default Dashboard
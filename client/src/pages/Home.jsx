// import React from 'react'


// const Home = () => {
//   return (
//     <> 
    
//    <div id='hero'>
    

     

   
//    </div>

//    <div id='Need'>
// <h4 style={{textAlign:"center"}}>CUSTOM BANKING</h4>
// <h1 style={{textAlign:"center"}}>Banking For Your Needs</h1>
// <div id='grid'>
//   <div  >
//     <div id='icm'>
//     <img  src="/icon-12-1.png" alt="" />
//     </div>
//     <div id='block'>
//     <h2>Fixed Deposit</h2>
//     <h4>Higher Returs & Security</h4>
//     </div>
//   </div>
//   <div>
//   <div id='icm'>
//     <img  src="/icon-13-1.png" alt="" />
//     </div>
//     <div id='block'>
//     <h2>Accounts</h2>
//     <h4>Duty the obligations business</h4>
//     </div>
//   </div>
//   <div>
//   <div id='icm'>
//     <img  src="/icon-14-1.png" alt="" />
//     </div>
//     <div id='block'>
//     <h2>Investments</h2>
//     <h4>Secure Your Family & Yourself</h4>
//     </div>
//   </div>
//   <div>
//   <div id='icm'>
//     <img  src="/icon-15-1.png" alt="" />
//     </div>
//     <div id='block'>
//     <h2>Family 360o</h2>
//     <h4>Complete Banking Solutions</h4>
//     </div>
//   </div>
// </div>

//    </div>
//    <div id="cards">
//         <div id="card">
//           <div>
//             <img src="/f1.jpg" alt="" height={"420px"} width={"480px"} />
//           </div>
//           <div>
//             <h1 id='h23'>Fixed Deposite</h1>
//             <h3 id="line">
//             Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.
//             </h3>
//             <h5 id='ben'>KEY BENEFITS:</h5>
//             <div id='list'>
//               <ul>
//                 <li>100% Guaranteed Returns</li>
//                 <li>Loan against FD available</li>
//                 <li>Flexible tenure options</li>
//               </ul>
//             </div>
//             <h1 id='lh'>Find the Perfect FD Option for Your Needs.</h1>
//           </div>
//         </div>
      
//       </div>


//     </>

//   )
// }

// export default Home


import React from 'react';


const Home = () => {
  return (
    <> 
      <div id="hero"></div>

      <div id="Need">
        <h4 className="center-text">CUSTOM BANKING</h4>
        <h1 className="center-text">Banking For Your Needs</h1>

        <div id="grid">
          <div className="grid-item">
            <div className="icm">
              <img src="/icon-12-1.png" alt="" />
            </div>
            <div className="block">
              <h2>Fixed Deposit</h2>
              <h4>Higher Returns & Security</h4>
            </div>
          </div>
          
          <div className="grid-item">
            <div className="icm">
              <img src="/icon-13-1.png" alt="" />
            </div>
            <div className="block">
              <h2>Accounts</h2>
              <h4>Duty the obligations business</h4>
            </div>
          </div>
          
          <div className="grid-item">
            <div className="icm">
              <img src="/icon-14-1.png" alt="" />
            </div>
            <div className="block">
              <h2>Investments</h2>
              <h4>Secure Your Family & Yourself</h4>
            </div>
          </div>
          
          <div className="grid-item">
            <div className="icm">
              <img src="/icon-15-1.png" alt="" />
            </div>
            <div className="block">
              <h2>Family 360°</h2>
              <h4>Complete Banking Solutions</h4>
            </div>
          </div>
        </div>
      </div>

      <div id="cards">
        <div className="card">
          <div className="card-image">
            <img src="/f1.jpg" alt="Fixed Deposit" />
          </div>
          <div className="card-content">
            <h1 className="h23">Fixed Deposit</h1>
            <h3 className="line">
              Beguiled and demoralized by the charms of pleasure of the so blinded by desire that they cannot foresee.
            </h3>
            <h5 className="ben">KEY BENEFITS:</h5>
            <ul className="list">
              <li>100% Guaranteed Returns</li>
              <li>Loan against FD available</li>
              <li>Flexible tenure options</li>
            </ul>
            <h1 className="lh">Find the Perfect FD Option for Your Needs.</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

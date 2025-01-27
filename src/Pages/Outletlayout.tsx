import React from "react";
import { Link, Outlet } from "react-router-dom";

function Outletlayout() {
  return (
    <div>
      <div>
        <h1>Outlet</h1>
        <nav style={{background:"lightblue", padding: "10px",
    display: "flex",
    justifyContent: "space-around"}}>
          
              <Link to="/child1"style={{color : "blue",  textDecoration: "none",
    fontSize: "18px",}}>Child1</Link>
           
              <Link to="/child2"style={{color : "blue",  textDecoration: "none",
    fontSize: "18px",}}>Child2</Link>
           
              <Link to="/child3"style={{color : "blue",  textDecoration: "none",
                    fontSize: "18px",}}>Child3</Link>
         
        </nav>
        <Outlet />
      </div>
    </div>
  );
}

export default Outletlayout;


// import React from "react";
// import { NavLink, Outlet } from "react-router-dom";

// function Outletlayout() {
//   return (
//     <div>
//       <div>
//         <h1>Outlet</h1>
//         <nav style={{background:"lightblue", padding: "10px",
//     display: "flex",
//     justifyContent: "space-around"}}>
          
        
//               <NavLink to="/child1" style={{color : "blue",  textDecoration: "none",
//     fontSize: "18px",}}>Child1</NavLink>
     
        
//               <NavLink to="/child1" style={{color : "blue",  textDecoration: "none",
//     fontSize: "18px",}}>Child2</NavLink>
           
//               <NavLink to="/child1" style={{color : "blue", textDecoration: "none",
//     fontSize: "18px",}}>Child3</NavLink>
            
          
//         </nav>
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default Outletlayout;

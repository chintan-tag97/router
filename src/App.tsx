import React from "react";

import "./App.css";
import Main from "./Main.tsx";
import All from "./All.tsx";
import NotFound from "./NotFound.tsx";
import Link from "./Link.tsx";
import Routepage from "./Routepage.tsx";
import Outlet from "./Outlet.tsx";

function App() {
  return (
    <div className="App">
      <Main/> 
       <All/>
      <NotFound/>
     <Link/>
     <Routepage/>
      <Outlet /> 
    </div>
  );
}

export default App;

// 1.1. <Outlet />
// 1.2. useSearchParams()
// 1.3. useNavigate()
// 1.4. useLocation()

//  give react code
// 1. Create example for child/nested rooutes using <Outlet />
//  2. Create example for how to get all params in key/value pair [use useSearchParams()]
//  3. Create example for how to navigate using button click function [use useNavigate()]
// 4. Create example for how we can get information from current route [use useLocation()]
//  5. Create example for how we can ask for confirmation before we're changing or route-back to other page

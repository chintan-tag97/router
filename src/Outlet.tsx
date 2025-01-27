import React from 'react'

import { BrowserRouter , Routes, Route, } from 'react-router-dom';

import Child1 from "./Pages/Child1.tsx";
import Child2 from "./Pages/Child2.tsx";
import Outletlayout from './Pages/Outletlayout.tsx';

function Outlet() {
  return (
    <BrowserRouter>
    
      <Routes>
      <Route path="/" element={<Outletlayout />}>
          <Route path="child1" element={<Child1 />} />
          <Route path="child2" element={<Child2 />} />
          <Route path="child3" element={<Child1 />} />
        </Route>
      </Routes>
  
    </BrowserRouter>
  );
}




export default Outlet
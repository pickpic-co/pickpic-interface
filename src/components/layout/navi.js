import React from 'react';
import {
    Link
  } from "react-router-dom";

const Navi= () => (
 
     <nav className="App-navi">
     <ul>
       <li>
         <Link to="/home">Home</Link>
       </li>
       <li>
         <Link to="/product">ProductView</Link>
       </li>
       <li>
         <Link to="/users">Users</Link>
       </li>
     </ul>
   </nav>
);

export default Navi;
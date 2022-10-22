import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import { render } from "react-dom";
import "/Users/reeyankhimani/Desktop/HackGwinnett2.0/client/src/components/style.css";

// var __html = require('/Users/reeyankhimani/Desktop/HackGwinnett2.0/client/src/components/index.html');
// var template = { __html: __html };
 
// Here, we display our Navbar
export default function Navbar() {
 return(
    <body>
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink to="/">
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
           <li className="nav-item">
             <NavLink className="nav-link" to="/create">
               Create Record
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
   <img style={{"width" : 1000 + 'px'}} src="https://rocketstem.b-cdn.net/wp-content/uploads/2020/11/EmvV4u1UcAAnvjg.jpeg"></img>
   </body>
  );
}
import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Contacts from "./components/contacts";
import Index from "./components/index";
import Pricing from "./components/pricing";
import Projects from "./components/projects";
import Services from "./components/services";
 
const App = () => {
 return (
   <div>
     <Routes>
       <Route exact path="/" element={<Index />} />
       <Route exact path="/contact" element={<Contacts />} />
       <Route exact path="/price" element={<Pricing />} />
       <Route exact path="/project" element={<Projects />} />
       <Route exact path="/service" element={<Services />} />
     </Routes>
   </div>
 );
};
 
export default App;

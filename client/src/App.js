import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Body from "./components/Body";
 
const App = () => {
 return (
   <div>
     <Routes>
       <Route exact path="/" element={<Body />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route exact path="/record" element={<RecordList />} />
     </Routes>
   </div>
 );
};
 
export default App;

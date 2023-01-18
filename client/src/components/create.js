import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
 const [form, setForm] = useState({
   name: "",
   position: "",
   level: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("https://webmaster-server.herokuapp.com/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", position: "", level: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
    <><body>
       <div>
         <h3>Find Your Price!</h3>
         <form onSubmit={onSubmit}>
           <div className="form-group">
             <label htmlFor="name">Name</label>
             <input
               type="text"
               className="form-control"
               id="name"
               value={form.name}
               onChange={(e) => updateForm({ name: e.target.value })} />
           </div>
           <div className="form-group">
             <label htmlFor="position">Weight (including luggage) (kg)</label>
             <input
               type="text"
               className="form-control"
               id="position"
               value={form.position}
               onChange={(e) => updateForm({ position: e.target.value })} />
           </div>
           <div className="form-group">
             <div className="form-check form-check-inline">
               <input
                 className="form-check-input"
                 type="radio"
                 name="positionOptions"
                 id="positionAstronaut"
                 value="Astronaut"
                 checked={form.level === "Astronaut"}
                 onChange={(e) => updateForm({ level: e.target.value })} />
               <label htmlFor="positionAstronaut" className="form-check-label">Astronaut</label>
             </div>
             <div className="form-check form-check-inline">
               <input
                 className="form-check-input"
                 type="radio"
                 name="positionOptions"
                 id="positionEssentialWorker"
                 value="Essential Worker"
                 checked={form.level === "Essential Worker"}
                 onChange={(e) => updateForm({ level: e.target.value })} />
               <label htmlFor="positionEssentialWorker" className="form-check-label">Essential Worker</label>
             </div>
             <div className="form-check form-check-inline">
               <input
                 className="form-check-input"
                 type="radio"
                 name="positionOptions"
                 id="positionNormalPerson"
                 value="Normal Person"
                 checked={form.level === "Normal Person"}
                 onChange={(e) => updateForm({ level: e.target.value })} />
               <label htmlFor="positionNormalPerson" className="form-check-label">Normal Person</label>
             </div>
           </div>
           <div className="form-group">
             <input
               type="submit"
               value="Create Quote!"
               className="btn btn-primary" />
           </div>
         </form>
       </div>
     </body></>
 );
}

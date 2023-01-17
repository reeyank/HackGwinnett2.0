import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "/Users/reeyankhimani/Desktop/HackGwinnett2.0/client/src/components/style.css";
 
const Record = (props) => (
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.position} kg</td>
   <td>{props.record.level}</td>
   <td>{props.record.position * 100} Dollars</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Edit</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Delete
     </button>
   </td>
 </tr>
);
 
export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:3000/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`https://webmaster.herokuapp.com/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
<body>
   <div>
     <h3>Recent History</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Name</th>
           <th>Weight (kg)</th>
           <th>Ocupation</th>
           <th>Action</th>
         </tr>
       </thead>
       <body>{recordList()}</body>
     </table>
   </div>
   </body>
 );
}
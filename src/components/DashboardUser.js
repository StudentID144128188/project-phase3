import React from "react";
import "../assets/css/App.css";
const DashboardUser = ({ fName, lName, uName, eMail }) => {
   
  return (
    <>
      <section id="db-user-section">
        <div className="container">
         <h1>
            Welcome! Below is your information:<br/>
            {" - "} First Name: {fName}<br/>
            {" - "} Last Name: {lName}<br/>
            {" - "} Username: {uName}<br/>
            {" - "} Email: {eMail}<br/>
           </h1>
        </div>
      </section>
    </>
  );
};

export default DashboardUser;

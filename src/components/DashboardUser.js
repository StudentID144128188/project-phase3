import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import img from "../assets/images/resort3.webp";

import "../assets/css/App.css";
const DashboardUser = ({ fName, lName, uName, eMail }) => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    username: "",
    keepSignIn: false,
    emailMe: false,
    role: "",
  });

    
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

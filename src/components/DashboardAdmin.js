import React from 'react';
import { Container } from 'react-bootstrap';
import Image from "react-bootstrap/Image";
import img from "../assets/images/resort3.webp";

import "../assets/css/App.css";
const DashboardAdmin = () => {
  return (
    <>
    <section id="db-section">
    <div className="container">
        <h1>
            As an admin, you are able to:<br/>
            {" - "} View all properties<br/>
            {" - "} Create properties<br/>
            {" - "} Update properties<br/>
            {" - "} Delete properties<br/>
        </h1>
    </div>  
</section>
    
    </>
  )
}

export default DashboardAdmin
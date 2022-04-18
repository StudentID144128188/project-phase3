import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DashboardUser from "../components/DashboardUser";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const DashboardUserPage = () => {
  const location = useLocation();

  return (
    <>
      {location.state ? (
        <>
          <Header />
          <DashboardUser
            fName={location.state.fName}
            lName={location.state.lName}
            uName={location.state.uName}
            eMail={location.state.eMail}
          />
          <Footer />
        </>
      )
        : (
          <section id="error-section">
            <div className="container">
              <br />
              <Link className="error" to="/">
                GO HOME
              </Link>
            </div>
          </section>)}
    </>
  );
};

export default DashboardUserPage;

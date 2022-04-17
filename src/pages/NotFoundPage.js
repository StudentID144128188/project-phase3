import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <section id="error-section">
        <div className="container">
          <br />
          <Link className="error" to="/">
            GO HOME
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import BestsellerList from "../components/BestsellerList";
import Payment from "../components/Payment";
import AdVideo from "../components/AdVideo";
import PropertyList from "../components/PropertyList";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <br />
      <PropertyList />
      <br />
      <BestsellerList />
      <br />
      <br />
      <AdVideo />
      <br />
      <Payment />
      <br />
      <Footer />
    </>
  );
};

export default HomePage;

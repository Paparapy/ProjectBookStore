import React from "react";
import Freebook from "../components/Freebook";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <>
        <Navbar />
        <Banner />
        <Freebook />
        <Footer />
      </>
    </div>
  );
}

export default Home;

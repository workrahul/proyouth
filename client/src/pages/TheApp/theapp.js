import React from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import AppMedia from "../../media/AppMedia.png";
import "./theapp.css";

const TheApp = () => {
  return (
    <>
      <div style={{ backgroundColor: "#010517" }}>
        <Navbar />
      </div>
      <div className="coming-soon">
        <div className="coming-soon-text">
          <h1>Coming Soon</h1>
          <p>
            Have any queries ?{" "}
            <span>
              {" "}
              <a href="">Contact Us</a>{" "}
            </span>
          </p>
        </div>
        <div className="coming-soon-img">
          <img src={AppMedia} alt="Man Delivering App" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TheApp;

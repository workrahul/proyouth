import React from "react";
import "./mainpage.css";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import Note from "../../media/note.svg";
import Student from "../../media/student.svg";
import Work from "../../media/work.svg";
import BackGround from "../../media/Rectangle2.png";
import { useNavigate } from "react-router-dom";

const Mainpage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="nav">
        <Navbar />
        <div class="header-content">
          <h1>ProYouth.club</h1>
          <p>Become a professional</p>
          <p>Earn from your side job</p>
        </div>
      </div>
      <div className="button">
        <div>
          <button
            className="btn1"
            onClick={() => {
              navigate("/student/login");
            }}
          >
            Got a Job !
          </button>
        </div>
        <div>
          <button
            className="btn1"
            onClick={() => {
              navigate("/employer/login");
            }}
          >
            Hire !
          </button>
        </div>
      </div>

      {/* Upper Banner */}
      <div className="upper-banner">
        <div className="upper-banner-container">
          <div className="circle">
            <img src={Note} alt="" />
          </div>
          <p>Different work mode - Online / Offline!</p>
        </div>
        <div className="upper-banner-container-rev">
          <div className="circle">
            <img src={Student} alt="" />
          </div>
          <p>Entry level side job!</p>
        </div>
        <div className="upper-banner-container">
          <div className="circle">
            <img src={Work} alt="" />
          </div>
          <p>College students only!</p>
        </div>
      </div>
      {/* Upper Banner */}

      {/* Lower Banner */}
      <div className="advert-banner">
        <div className="advert-banner-text">
          <p>Join the Club today</p>
          <p>Become a Pro</p>
        </div>
        <div className="button">
          <button
            className="btn1"
            onClick={() => {
              navigate("/student/login");
            }}
          >
            Get a Job!
          </button>
        </div>
        <p className="second-ad-text">
          Secured Tranparent Live Payment Systems
        </p>
      </div>
      {/* Lower Banner */}

      <Footer />
    </>
  );
};

export default Mainpage;

import React, { useState } from "react";
import StudentPhoto from "../../../media/StudentLogin.png";
import { BiArrowBack } from "react-icons/bi";
import styles from "./studentLogin.module.css";
import { useLocation, useNavigate } from "react-router-dom";

const Studentotp = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [otp, setOtp] = useState("");

  const handleClick = async () => {
    if (otp === "" || otp.length < 4) {
      alert("Please enter the OTP");
      return;
    }
    const response = await fetch(`/studentauth/verifyotp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "auth-token": token,
      },
      body: JSON.stringify({
        Email: state.Email,
        WhatsappNumber: Number(state.WhatsappNumber),
        Otp: Number(otp),
      }),
    });
    const data = await response.json();
    if (data.success === true) {
      console.log(response);
      localStorage.setItem("token", data.token);
      navigate("/jobs");
      return true;
    }
    if (data.success === false) {
      console.log(false);
      console.log(response);

      return false;
    }
  };
  function handleOTPChange(event) {
    setOtp(event.target.value);
  }
  return (
    <div>
      <div className={styles["back-button"]}>
        <BiArrowBack
          style={{ fontSize: "1.25em" }}
          onClick={() => navigate(-1)}
        />
      </div>
      <div className={styles["content-container"]}>
        <div className={styles["form-container"]}>
          <div className={styles["form-subcontainer"]}>
            <h1>Sign In to find jobs!</h1>
            <p>Enter your OTP</p>
            <input
              type="number"
              value={otp}
              onChange={handleOTPChange}
              required
            />
          </div>
          <div className={styles.button}>
            <button className={styles.btn} onClick={handleClick}>
              Find Job!
            </button>
            <button className={styles.btn}>Resend OTP!</button>
          </div>
        </div>
        <div className={styles["image-container"]}>
          <img src={StudentPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Studentotp;

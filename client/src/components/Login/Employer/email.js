import React, { useState } from "react";
import HappyMan from "../../../media/EmployerLogin.png";
import { BiArrowBack } from "react-icons/bi";
import styles from "./employerLogin.module.css";
import { useNavigate } from "react-router-dom";

const Email = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const handleClick = async () => {
    if (email === "" || phone === "") {
      alert("Please enter all the details");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Please enter a valid email address");
      return;
    }
    if (phone.length < 10) {
      alert("Please enter a valid phone number");
      return;
    }
    // const token = await localStorage.getItem("token");
    const response = await fetch(`/employerauth/signup/sendotp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "auth-token": token,
      },
      body: JSON.stringify({
        Email: email,
      }),
    });
    const data = await response.json();
    if (data.success === true) {
      console.log(response);
      navigate("/employer/otp", {
        state: { Email: email, WhatsappNumber: phone },
      });
      return true;
    }
    if (data.success === false) {
      console.log(false);
      console.log(response);

      return false;
    }
    // navigate("/employer/opt");
  };

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleNumberChange(event) {
    setPhone(event.target.value);
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
            <p>Enter your E-mail address here</p>
            <input
              type="text"
              name={email}
              onChange={handleEmailChange}
              required
            />
          </div>

          <div className={styles["form-subcontainer"]}>
            <p>Enter your Phone Number</p>
            <input
              type="number"
              name={phone}
              onChange={handleNumberChange}
              required
            />
          </div>
          <button className={styles.btn} onClick={handleClick}>
            Send OTP!
          </button>
        </div>
        <div className={styles["image-container"]}>
          <img src={HappyMan} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Email;

import React, { useState } from "react";
import StudentPhoto from "../../../media/StudentLogin.png";
import { BiArrowBack } from "react-icons/bi";
import styles from "./studentLogin.module.css";
import { useNavigate } from "react-router-dom";

const StudentEmail = () => {
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
    const response = await fetch(`/studentauth/signup/sendotp`, {
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
      navigate("/student/otp", {
        state: { Email: email, WhatsappNumber: phone },
      });
      return true;
    }
    if (data.success === false) {
      console.log(false);
      console.log(response);

      return false;
    }
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
              onChange={handleEmailChange}
              value={email}
              required
            />
          </div>
          <div className={styles["form-subcontainer"]}>
            <p>Enter your Phone Number</p>
            <input
              type="number"
              onChange={handleNumberChange}
              value={phone}
              required
            />
          </div>
          <button className={styles.btn} onClick={handleClick}>
            Send OTP!
          </button>
        </div>
        <div className={styles["image-container"]}>
          <img src={StudentPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default StudentEmail;

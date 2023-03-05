import React, { useState, useEffect } from "react";
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";
import { GrFormClose } from "react-icons/gr";
import styles from "./studentDetails.module.css";

const StudentDetails = () => {
  const [tools, setTools] = useState([
    {
      name: "Laptop",
      flag: true,
    },
    {
      name: "Mobile",
      flag: true,
    },
    {
      name: "Two-Wheeler",
      flag: true,
    },
  ]);

  const [studentData, setStudentData] = useState({
    name: "",
    phone: "",
    school: "",
    workExp: "",
    tools: tools,
    dob: "",
    email: "",
    areaOfStudy: "",
    availability: "",
    resume: "",
    description: "",
  });

  const [FullName, setFullName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [SchoolOrUniversity, setSchoolOrUniversity] = useState("");
  const [WorkExperience, setWorkExperience] = useState("");
  // const [Tools, setTools] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState("");
  const [Email, setEmail] = useState("");
  const [AreaOfStudy, setAreaOfStudy] = useState("");
  const [Availability, setAvailability] = useState("");
  const [CV, setCV] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  }

  function handleClick(name) {
    const newTools = tools.map((tool) => {
      if (tool.name === name) {
        tool.flag = !tool.flag;
      }
      return tool;
    });
    setTools(newTools);
  }

  return (
    <div>
      <div style={{ backgroundColor: "#010517" }}>
        <Navbar />
      </div>
      <div className={styles["details-container"]}>
        <div>
          <h1>Enter Your Details!</h1>
          <p>These details will help us finding you the best opportunities</p>
        </div>
        <form className={styles["form-container"]}>
          <div className={styles["form-fields"]}>
            <div className={styles["form-subfields"]}>
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={studentData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["form-subfields"]}>
              <label>Phone Number</label>
              <input
                type="number"
                name="name"
                value={studentData.number}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["form-subfields"]}>
              <label>School or University</label>
              <input
                type="text"
                name="name"
                value={studentData.school}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["form-subfields"]}>
              <label>Mention your work experience</label>
              <input
                type="number"
                name="name"
                value={studentData.workExp}
                onChange={handleChange}
                required
              />
            </div>
            <div
              className={[styles["tools"], styles["form-subfields"]].join(" ")}
            >
              <p>Tools</p>
              <div className={styles.tool}>
                {tools.map((tool) => (
                  <div
                    style={{
                      border: "1px solid #696b79",
                      height: "32px",
                      width: "8rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "5px",
                      margin: "5px",
                      backgroundColor: tool.flag ? "#000" : "#fff",
                    }}
                    onClick={() => handleClick(tool.name)}
                  >
                    <label key={tool.name}>{tool.name}</label>
                    <GrFormClose />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles["form-fields"]}>
            <div className={styles["form-subfields"]}>
              <label>Enter your Date of Birth (must be 18+)</label>
              <input
                type="date"
                name="name"
                value={studentData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["form-subfields"]}>
              <label>Enter Email Address</label>
              <input
                type="email"
                name="name"
                value={studentData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["form-subfields"]}>
              <label>Area of Study or major</label>
              <input
                type="text"
                name="name"
                value={studentData.areaOfStudy}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["form-subfields"]}>
              <label>Enter your availability for job</label>
              <input
                type="number"
                name="name"
                value={studentData.availability}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["form-subfields"]}>
              <label>Upload Your CV</label>
              <input
                type="file"
                name="name"
                value={studentData.resume}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </form>
        <div className={styles.textarea}>
          <p>About Yourself (optional)</p>
          <textarea
            name="description"
            onChange={handleChange}
            value={studentData.description}
          ></textarea>
        </div>
        <button className={styles.btn}>Continue</button>
      </div>
      <Footer />
    </div>
  );
};

export default StudentDetails;

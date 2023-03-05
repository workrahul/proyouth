import React, { useState } from "react";
import Navbar from "../../navbar/navbar";
import styles from "./addjob.module.css";
import JobSearch from "../../../media/jobsearch.png";
import { GrFormClose } from "react-icons/gr";
import { AiFillCloseCircle } from "react-icons/ai";

const AddJob = () => {
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
  const [jobDetails, setJobDetails] = useState([
    {
      designation: "",
      tools: tools,
      stipend: "",
      mode: "",
      type: "",
      duration: "",
      phone: "",
    },
  ]);

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
      <div
        style={{
          backgroundColor: "#010517",
        }}
      >
        <Navbar />
      </div>
      <h1>Post Jobs !</h1>
      <div className={styles["container"]}>
        <div className={styles["form-container"]}>
          <div className={styles["form-container-item"]}>
            <label>Designation</label>
            <input type="text" required />
          </div>
          <div className={styles["form-container-item"]}>
            <label> Tools</label>
            <div className="tool">
              {tools.map((tool) => (
                <div
                  style={{
                    border: "1px solid #696b79",
                    height: "32px",
                    width: "10rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5px",
                    margin: "5px",
                    backgroundColor: tool.flag ? "#000" : "#fff",
                    color: tool.flag ? "#fff" : "#000",
                  }}
                  onClick={() => handleClick(tool.name)}
                >
                  <label key={tool.name}>{tool.name}</label>
                  {!tool.flag ? <GrFormClose /> : <AiFillCloseCircle />}
                </div>
              ))}
            </div>
          </div>
          <div>
            <label>Stipend</label>
            <input type="number" required />
          </div>
          <div>
            <label>Mode</label>
            <select>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
            <select>
              <option value="fulltime">Full Time</option>
              <option value="parttime">Part Time</option>
            </select>
          </div>
          <div>
            <label>Type</label>
            <select>
              <option value="IT">IT</option>
              <option value="Non-It">Non-IT</option>
            </select>
          </div>
          <div>
            <label>Duration</label>
            <input type="number" required />
          </div>
          <div>
            <label>Phone Number</label>
            <input type="number" required />
          </div>
        </div>
        <div>
          <img src={JobSearch} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AddJob;

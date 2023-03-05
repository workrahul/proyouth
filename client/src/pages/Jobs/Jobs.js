import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import Footer from "../../components/footer/footer";
import JobCard from "./jobCard";
import styles from "./jobs.module.css";
import Logo from "../../media/logo.png";

const Jobs = () => {
  const [jobs, setJobs] = useState([
    {
      companyName: "Company Name",
      jobTitle: "Job Title",
      jobDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure adipisci nobis debitis numquam sed sint nulla assumenda natus consequatur, quidem dicta deleniti eveniet magni delectus alias aperiam totam omnis aspernatur.",
      jobMode: "Job Mode",
      stipend: "10000",
      tools: ["Tool 1", "Tool 2", "Tool 3"],
      companyLogo: Logo,
    },
  ]);

  const [category, setCategory] = useState([
    {
      type: "offline",
      flag: true,
    },
    {
      type: "online",
      flag: false,
    },
    {
      type: "Part-time",
      flag: false,
    },
    {
      type: "IT",
      flag: false,
    },
    {
      type: "Non-IT",
      flag: false,
    },
    {
      type: "All",
      flag: false,
    },
  ]);

  function handleClick(type) {
    const newCategory = category.map((item) => {
      if (item.type === type) {
        item.flag = !item.flag;
      }
      return item;
    });
    setCategory(newCategory);
  }
  return (
    <div>
      <div style={{ backgroundColor: "#010517" }}>
        <Navbar />
      </div>
      <div className="job-search">
        <input type="text" />
        <button>Search</button>
      </div>
      <div>
        <h1>Available Jobs for you!</h1>
        <p>
          Once you will select the apply option, you will directly be connected
          to the employer on whatsapp{" "}
        </p>
      </div>
      <div>
        {category.map((item) => {
          return (
            <button
              style={{
                backgroundColor: item.flag ? "#010517" : "#fff",
                color: item.flag ? "#fff" : "#010517",
                border: "none",
                padding: "10px 20px",
                borderRadius: "5px",
                margin: "0 10px",
              }}
              onClick={() => handleClick(item.type)}
            >
              {item.type}
            </button>
          );
        })}
      </div>
      <div>
        {jobs.map((item) => {
          return (
            <JobCard
              companyName={item.companyName}
              jobTitle={item.jobTitle}
              jobDescription={item.jobDescription}
              jobMode={item.jobMode}
              stipend={item.stipend}
              tools={item.tools}
              companyLogo={item.companyLogo}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;

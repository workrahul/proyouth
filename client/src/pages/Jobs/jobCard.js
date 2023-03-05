import React from "react";
import styles from "./jobCard.module.css";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import logo from "../../media/logo.png";
import Menu from "../../media/menu.png";
import Stipend from "../../media/stipend.png";
import Calendar from "../../media/calendar.png";

const jobCard = ({
  companyName,
  jobTitle,
  jobDescription,
  jobMode,
  stipend,
  companyLogo,
  tools,
}) => {
  return (
    <div className={styles.jobcard}>
      <div className={styles.header}>
        <div className={styles["company-details"]}>
          <img src={logo} alt="" />
          <p>{companyName}</p>
        </div>
        <h2 className={styles.jobtitle}>{jobTitle}</h2>
        <div className={styles.icons}>
          <AiOutlineHeart />
          <AiOutlineShareAlt />
        </div>
      </div>

      <div className={styles.jobdescription}>
        <p>{jobDescription}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.mode}>
          <div className={styles.modedetails}>
            <img src={Menu} alt="" />
            <p>Mode</p>
          </div>
          <p>{jobMode}</p>
        </div>
        <div>
          <div className={styles.stipenddetails}>
            <img src={Stipend} alt="" />
            <p>Stipend</p>
          </div>
          <p>{stipend}</p>
        </div>
        <div>
          <div className={styles.toolsdetails}>
            <img src={Calendar} alt="" />
            <p>Tools</p>
          </div>
          {tools.map((tool) => {
            return <p>{tool}</p>;
          })}
        </div>
        <button className={styles.btn}>Apply</button>
      </div>
    </div>
  );
};

export default jobCard;

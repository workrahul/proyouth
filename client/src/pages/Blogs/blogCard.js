import React from "react";
import styles from "./blogCard.module.css";

const blogCard = ({ cardImg, title, description }) => {
  return (
    <div className={styles["card-body"]}>
      <img src={cardImg} alt="" className={styles["card-img"]} />
      <div className={styles["card-text"]}>
        <p className={styles["card-title"]}>{title}</p>
        <p className={styles["card-description"]}>{description}</p>
      </div>
    </div>
  );
};

export default blogCard;

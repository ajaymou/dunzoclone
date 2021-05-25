import React from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.img} alt="" />
    </div>
  );
};

export default Card;

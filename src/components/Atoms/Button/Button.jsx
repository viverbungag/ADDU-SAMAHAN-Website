import React from "react";
import styles from "./Button.module.scss";

const Button = ({ label }) => {
  return (
    <button className={styles.buttonStyle}>
      <span className={styles.buttonLabel}>{label}</span>
    </button>
  );
};

export default Button;

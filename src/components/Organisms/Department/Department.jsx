import React from "react";
import { Office, Button } from "../../ComponentIndex";
import styles from "./Department.module.scss";

const Department = ({ title, offices, handleClose }) => {
  return (
    <>
      <div className={styles["componentContainer"]}>
        <span className={styles["titleText"]}>{title}</span>
        {offices.map((office, index) => (
          <Office
            key={index}
            officeTitle={office.officeTitle}
            officers={office.officers}
          />
        ))}
        <div className={styles["button"]}>
          <Button label={"< BACK"} onClick={handleClose}></Button>
        </div>
      </div>
    </>
  );
};

export default Department;

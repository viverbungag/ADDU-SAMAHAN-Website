import React from "react";
import { Office, Button } from "../../ComponentIndex";
import styles from "./Department.module.scss";

const Department = ({ title, offices }) => {
  return (
    <>
      <div className={styles["componentContainer"]}>
        <span className={styles["titleText"]}>{title}</span>
        {offices.map((office) => (
          <Office officeTitle={office.officeTitle} officers={office.officers} />
        ))}
        <div className={styles["button"]}>
          <Button label={"< BACK"}></Button>
        </div>
      </div>
    </>
  );
};

export default Department;
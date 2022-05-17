import React from "react";
import { Button } from "../../ComponentIndex";
import styles from "./DepartmentNavigation.module.scss";

const DepartmentNavigation = ({ departmentTitle, buttonLabel }) => {
  return (
    <>
      <span className={styles["departmentTitle"]}>{departmentTitle}</span>
      <div className={styles["button"]}>
        <Button label={buttonLabel} />
      </div>
    </>
  );
};

export default DepartmentNavigation;

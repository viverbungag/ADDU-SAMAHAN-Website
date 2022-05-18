import React from "react";
import { Button } from "../../ComponentIndex";
import styles from "./DepartmentNavigation.module.scss";

const DepartmentNavigation = ({
  departmentTitle,
  buttonLabel,
  onClickButton,
}) => {
  return (
    <>
      <span className={styles["departmentTitle"]}>{departmentTitle}</span>
      <div className={styles["button"]}>
        <Button label={buttonLabel} onClick={onClickButton} />
      </div>
    </>
  );
};

export default DepartmentNavigation;

import React from "react";
import { DepartmentNavigation } from "../../ComponentIndex";
import styles from "./DepartmentsIntroSection.module.scss";

const DepartmentsIntroSection = () => {
  return (
    <div className={styles["componentContainer"]}>
      <DepartmentNavigation
        departmentTitle={"SAMAHAN CENTRAL BOARD"}
        buttonLabel={"LEARN MORE"}
      />
      <DepartmentNavigation
        departmentTitle={"SAMAHAN DEPARTMENTS"}
        buttonLabel={"LEARN MORE"}
      />
    </div>
  );
};

export default DepartmentsIntroSection;

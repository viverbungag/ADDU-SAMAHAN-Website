import React from "react";
import { DepartmentNavigation } from "../../ComponentIndex";
import styles from "./DepartmentIntro.module.scss";

const DepartmentIntro = ({ onClickCentralBoard, onClickDepartments }) => {
  return (
    <div className={styles["componentContainer"] + " container"}>
      <DepartmentNavigation
        departmentTitle={"SAMAHAN CENTRAL BOARD"}
        buttonLabel={"LEARN MORE"}
        onClickButton={onClickCentralBoard}
      />
      <DepartmentNavigation
        departmentTitle={"SAMAHAN DEPARTMENTS"}
        buttonLabel={"LEARN MORE"}
        onClickButton={onClickDepartments}
      />
    </div>
  );
};

export default DepartmentIntro;

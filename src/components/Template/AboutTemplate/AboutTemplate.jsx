import { React, useState } from "react";
import { DepartmentIntro, Department, Navigation } from "../../ComponentIndex";
import styles from "./AboutTemplate.module.scss";
import { scbData, sdData } from "../../../data/dataIndex";
import { Modal, Slide } from "@mui/material";

const AboutTemplate = () => {
  const [openCentralBoard, setOpenCentralBoard] = useState(false);
  const handleOpenCentralBoard = () => setOpenCentralBoard(true);
  const handleCloseCentralBoard = () => setOpenCentralBoard(false);

  const [openDepartments, setOpenDepartments] = useState(false);
  const handleOpenDepartments = () => setOpenDepartments(true);
  const handleCloseDepartments = () => setOpenDepartments(false);

  console.log("Central Board: ", openCentralBoard);
  console.log("Departments: ", openDepartments);

  return (
    <>
      <Navigation />

      <div className={styles["departmentIntroContainer"]}>
        <DepartmentIntro
          onClickCentralBoard={handleOpenCentralBoard}
          onClickDepartments={handleOpenDepartments}
        />
      </div>

      {/* <Department title={sdData.title} offices={sdData.offices} /> */}
    </>
  );
};

export default AboutTemplate;

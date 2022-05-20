import { React, useState } from "react";
import {
  DepartmentIntro,
  Department,
  Navigation,
  Footer,
} from "../../ComponentIndex";
import styles from "./FAQTemplate.module.scss";
import { scbData, sdData } from "../../../data/dataIndex";
import { Modal, Slide, Backdrop } from "@mui/material";

const FAQTemplate = () => {
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

      <div className={styles["question"]}>
        <div className={styles["q-container"]}>
          <h2 className={styles["q-question"]}>Question Number 1?</h2>
          <p className={styles["q-answer"]}>Answer number 1. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>

      <div className={styles["question"]}>
        <div className={styles["q-container"]}>
          <h2 className={styles["q-question"]}>Question Number 2?</h2>
          <p className={styles["q-answer"]}>Answer number 2. Short answer.</p>
        </div>
      </div>

      <div className={styles["question"]}>
        <div className={styles["q-container"]}>
          <h2 className={styles["q-question"]}>Question Number 3?</h2>
          <p className={styles["q-answer"]}>Answer number 3. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>

      <div className={styles["question"]}>
        <div className={styles["q-container"]}>
          <h2 className={styles["q-question"]}>Question Number 4?</h2>
          <p className={styles["q-answer"]}>Answer number 4. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default FAQTemplate;

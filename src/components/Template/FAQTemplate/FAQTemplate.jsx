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

      
      
      <Footer />
    </>
  );
};

export default FAQTemplate;

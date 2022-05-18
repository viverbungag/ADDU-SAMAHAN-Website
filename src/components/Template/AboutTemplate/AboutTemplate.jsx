import { React, useState } from "react";
import { DepartmentIntro, Department, Navigation } from "../../ComponentIndex";
import styles from "./AboutTemplate.module.scss";
import { scbData, sdData } from "../../../data/dataIndex";
import { Modal, Slide, Backdrop, Box, Button, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const style = {
  position: "absolute",
  transform: "translate(-50%, -50%)",
  marginLeft: "5%",
  width: "90%",
  top: "10%",

  boxShadow: 24,
};

const useStyles = makeStyles({
  modal: {
    position: "absolute",
    top: "10%",
    left: "10%",
    overflow: "scroll",
    maxHeight: 700,
    display: "block",
    borderRadius: "10px",
    bgcolor: "background.paper",
  },
  header: {
    padding: "12px 0",
    borderBottom: "1px solid darkgrey",
  },
  content: {
    padding: 12,
  },
});

const AboutTemplate = () => {
  const [openCentralBoard, setOpenCentralBoard] = useState(false);
  const handleOpenCentralBoard = () => setOpenCentralBoard(true);
  const handleCloseCentralBoard = () => setOpenCentralBoard(false);

  const [openDepartments, setOpenDepartments] = useState(false);
  const handleOpenDepartments = () => setOpenDepartments(true);
  const handleCloseDepartments = () => setOpenDepartments(false);

  console.log("Central Board: ", openCentralBoard);
  console.log("Departments: ", openDepartments);

  const classes = useStyles();

  return (
    <>
      <Navigation />
      <div className={styles["departmentIntroContainer"]}>
        <DepartmentIntro
          onClickCentralBoard={handleOpenCentralBoard}
          onClickDepartments={handleOpenDepartments}
        />
      </div>

      <Modal
        open={openCentralBoard}
        onClose={handleCloseCentralBoard}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Slide direction="up" in={openCentralBoard} mountOnEnter unmountOnExit>
          <div className={styles["modal"]}>
            <div className={styles["content"]}>
              <Department title={sdData.title} offices={sdData.offices} />
            </div>
          </div>
        </Slide>
      </Modal>

      <Modal
        open={openDepartments}
        onClose={handleCloseDepartments}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Slide direction="up" in={openDepartments} mountOnEnter unmountOnExit>
          <div className={styles["modal"]}>
            <div className={styles["content"]}>
              <Department title={scbData.title} offices={scbData.offices} />
            </div>
          </div>
        </Slide>
      </Modal>
    </>
  );
};

export default AboutTemplate;

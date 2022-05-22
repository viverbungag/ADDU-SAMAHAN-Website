import { React, useState } from "react";
import {
  DepartmentIntro,
  Department,
  Navigation,
  Footer,
} from "../../ComponentIndex";
import styles from "./AboutTemplate.module.scss";
import { Modal, Slide, Backdrop } from "@mui/material";

const AboutTemplate = ({ scbData, sdData }) => {
  const [openCentralBoard, setOpenCentralBoard] = useState(false);
  const handleOpenCentralBoard = () => setOpenCentralBoard(true);
  const handleCloseCentralBoard = () => setOpenCentralBoard(false);

  const [openDepartments, setOpenDepartments] = useState(false);
  const handleOpenDepartments = () => setOpenDepartments(true);
  const handleCloseDepartments = () => setOpenDepartments(false);

  return (
    <>
      <Navigation transparent={true} />
      <section className={styles["about"]}>
        <div className={"container " + styles["component-container"]}>
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
            <Slide
              direction="up"
              in={openCentralBoard}
              mountOnEnter
              unmountOnExit
            >
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
            <Slide
              direction="up"
              in={openDepartments}
              mountOnEnter
              unmountOnExit
            >
              <div className={styles["modal"]}>
                <div className={styles["content"]}>
                  <Department title={scbData.title} offices={scbData.offices} />
                </div>
              </div>
            </Slide>
          </Modal>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutTemplate;

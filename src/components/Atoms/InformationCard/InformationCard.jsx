import React, { useState } from "react";
import styles from "./InformationCard.module.scss";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { EnrollmentAndPayment } from "../../../data/dataIndex"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  height: "75%",
  bgcolor: 'background.paper',
  border: '2px solid #ade0c8',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
  overflowX: "hidden",
};

const InformationCard = ({ title }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function renderModalContent(title) {
    if (title === "Enrollment and Payment")
      return <EnrollmentAndPayment />

  }

  return (
    <>
      <button className={styles["InformationCard"]} onClick={handleOpen}>
        {title}
      </button>

      <Modal
        className={styles["container"] + " container"}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            {renderModalContent(title)}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default InformationCard;

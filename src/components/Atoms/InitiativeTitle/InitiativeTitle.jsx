import React from "react";
import { motion } from "framer-motion";
import styles from "./InitiativeTitle.module.scss";

const InitiativeTitle = ({ id, initiativeNum, title, imgBgSrc }) => {
  return (
    <>
      <motion.div
        className={styles["card-image-container"]}
        layoutId={`card-image-container-${id}`}
      >
        <img className={styles["card-image"]} src={imgBgSrc} alt="" />
      </motion.div>
      <motion.div
        className={styles["title-container"]}
        layoutId={`title-container-${id}`}
      >
        <p className={styles["category"]}>{initiativeNum}</p>
        <p className={styles["card-title"]}>{title}</p>
      </motion.div>
    </>
  );
};

export default InitiativeTitle;

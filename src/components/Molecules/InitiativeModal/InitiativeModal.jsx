import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./InitiativeModal.module.scss";

const InitiativeModal = ({ id, data, initialRoute }) => {
  console.log(data);
  const { title, initiativeNum, content, imgBgSrc } = data.initiatives.find(
    (item) => item.id === id
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.2, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className={styles["overlay"]}
      >
        <Link to={`${initialRoute}/`} />
      </motion.div>
      <div className={styles["card-content-container"] + " " + styles["open"]}>
        <motion.div
          className={styles["card-content"]}
          layoutId={styles[`card-container-${id}`]}
        >
          <motion.div
            className={styles["card-image-container"]}
            layoutId={styles[`card-image-container-${id}`]}
          >
            <img className={styles["card-image"]} src={imgBgSrc} alt="" />
          </motion.div>
          <motion.div
            className={styles["title-container"]}
            layoutId={styles[`title-container-${id}`]}
          >
            <span className={styles["category"]}>{initiativeNum}</span>
            <h2>{title}</h2>
          </motion.div>
          <motion.div className={styles["content-container"]} animate>
            <span className={styles["content-text"]}>{content}</span>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default InitiativeModal;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./InitiativeCard.module.scss";

const InitiativeCard = ({
  id,
  initiativeNum,
  title,
  imgBgSrc,
  initialRoute,
}) => {
  return (
    <li className={styles["card"]}>
      <div className={styles["card-content-container"]}>
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
            <p className={styles["category"]}>{initiativeNum}</p>
            <p className={styles["card-title"]}>{title}</p>
          </motion.div>
        </motion.div>
      </div>
      <Link to={`${initialRoute}/${id}`} className={styles[`card-open-link`]} />
    </li>
  );
};

export default InitiativeCard;

import React from "react";
import { motion } from "framer-motion";
import styles from "./InitiativeTitle.module.scss";
import Image from "next/image";

const InitiativeTitle = ({ id, initiativeNum, title, imgBgSrc, open }) => {
  return (
    <>
      <motion.div
        className={
          open
            ? styles["card-image-container"] + " " + styles["open"]
            : styles["card-image-container"]
        }
        layoutId={`card-image-container-${id}`}
      >
        <Image.default layout="fill" src={imgBgSrc} draggable={false} alt="" />
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

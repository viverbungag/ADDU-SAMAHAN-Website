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
        <motion.div
          className={open ? styles["remove-opacity"] : styles["apply-opacity"]}
        >
          <Image.default
            layout="responsive"
            width="100"
            height="70"
            src={imgBgSrc}
            draggable={false}
            alt=""
          />
        </motion.div>
      </motion.div>
      <motion.div
        className={
          open
            ? styles["title-container"] + " " + styles["open"]
            : styles["title-container"]
        }
        layoutId={`title-container-${id}`}
      >
        <p
          className={
            open
              ? styles["category"] + " " + styles["open"]
              : styles["category"]
          }
        >
          {initiativeNum}
        </p>
        <p
          className={
            open
              ? styles["card-title"] + " " + styles["open"]
              : styles["card-title"]
          }
        >
          {title}
        </p>
      </motion.div>
    </>
  );
};

export default InitiativeTitle;

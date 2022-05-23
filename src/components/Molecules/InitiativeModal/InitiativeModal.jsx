import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import { Link } from "react-router-dom";
import styles from "./InitiativeModal.module.scss";
import { InitiativeTitle, InitiativeContent } from "../../ComponentIndex";

const InitiativeModal = ({ id, data, initialRoute }) => {
  const { title, initiativeNum, content, imgBgSrc } = data.find(
    (item) => item.id === id
  );

  return (
    <>
      <Link href={`${initialRoute}/`} scroll={false}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.2, delay: 0.15 }}
          style={{ pointerEvents: "auto" }}
          className={styles["overlay"]}
        ></motion.div>
      </Link>

      <div className={styles["card-content-container"] + " " + styles["open"]}>
        <motion.div
          className={styles["card-content"]}
          layoutId={`card-container-${id}`}
        >
          <InitiativeTitle
            id={id}
            initiativeNum={initiativeNum}
            title={title}
            imgBgSrc={imgBgSrc}
            open
          />
          <InitiativeContent content={content} />
        </motion.div>
      </div>
    </>
  );
};

export default InitiativeModal;

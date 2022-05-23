import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import { Link } from "react-router-dom";
import styles from "./InitiativeModal.module.scss";
import { InitiativeTitle, InitiativeContent } from "../../ComponentIndex";

const InitiativeModal = ({ id, data, initialRoute }) => {
  const currentData = data.find((item) => item.id === id);

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
            initiativeNum={currentData.initiativeNum}
            title={currentData.title}
            imgBgSrc={currentData.imgBgSrc}
            open
          />
          <InitiativeContent data={currentData} />
        </motion.div>
      </div>
    </>
  );
};

export default InitiativeModal;

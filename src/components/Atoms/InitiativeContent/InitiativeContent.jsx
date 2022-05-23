import React from "react";
import { motion } from "framer-motion";
import styles from "./InitiativeContent.module.scss";

const InitiativeContent = ({ content }) => {
  return (
    <>
      <motion.div className={styles["content-container"]} animate>
        {content.map((paragraph) => (
          <span className={styles["content-text"]}>{paragraph}</span>
        ))}
      </motion.div>
    </>
  );
};

export default InitiativeContent;

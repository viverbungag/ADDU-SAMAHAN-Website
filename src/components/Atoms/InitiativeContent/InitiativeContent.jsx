import React from "react";
import { motion } from "framer-motion";
import styles from "./InitiativeContent.module.scss";
import Link from "next/link";

const InitiativeContent = ({ data }) => {
  const isHypertextExisting = "hyperlink" in data;
  return (
    <>
      <motion.div className={styles["content-container"]} animate>
        {data.content.map((paragraph, index) => (
          <span key={index} className={styles["content-text"]}>
            {paragraph}
          </span>
        ))}
        {isHypertextExisting && (
          <div>
            <Link href={data.hyperlink.link}>
              <span className={styles["content-hypertext"]}>
                {data.hyperlink.shownText}
              </span>
            </Link>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default InitiativeContent;

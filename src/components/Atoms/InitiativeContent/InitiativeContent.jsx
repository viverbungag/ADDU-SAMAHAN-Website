import React from "react";
import { motion } from "framer-motion";
import styles from "./InitiativeContent.module.scss";
import Link from "next/link";

const InitiativeContent = ({ content }) => {
  console.log(content);
  return (
    <>
      <motion.div className={styles["content-container"]} animate>
        {content.map((item, index) => {
          if (item.type.includes("paragraph")) {
            return (
              <span key={index} className={styles["content-text"]}>
                {item.body}
              </span>
            );
          }

          if (item.type.includes("hyperlink")) {
            return (
              <div>
                <Link href={item.body.link}>
                  <a target="_blank" className={styles["content-hypertext"]}>
                    {item.body.shownText}
                  </a>
                </Link>
              </div>
            );
          }

          if (item.includes("table")) {
            return <div></div>;
          }
        })}
      </motion.div>
    </>
  );
};

export default InitiativeContent;

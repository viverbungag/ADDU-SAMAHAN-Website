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
          if (item.type === "paragraph") {
            return (
              <span key={index} className={styles["content-text"]}>
                {item.body}
              </span>
            );
          }

          if (item.type === "hyperlink") {
            return (
              <div key={index}>
                <Link href={item.body.link}>
                  <a target="_blank" className={styles["content-hypertext"]}>
                    {item.body.shownText}
                  </a>
                </Link>
              </div>
            );
          }

          if (item.type === "table") {
            return (
              <table className={styles["table"]}>
                {item.body.map((row, index) => {
                  return (
                    <tr>
                      {row.map((content) => {
                        if (content.rowType === "header") {
                          return (
                            <th colspan={content.colspan}>
                              {content.rowContent}
                            </th>
                          );
                        }

                        if (content.rowType === "normal") {
                          return (
                            <td colspan={content.colspan}>
                              {content.rowContent}
                            </td>
                          );
                        }
                      })}
                    </tr>
                  );
                })}
              </table>
            );
          }
        })}
      </motion.div>
    </>
  );
};

export default InitiativeContent;

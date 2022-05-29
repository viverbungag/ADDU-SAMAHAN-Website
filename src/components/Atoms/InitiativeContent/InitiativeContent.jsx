import React from "react";
import { motion } from "framer-motion";
import styles from "./InitiativeContent.module.scss";
import Link from "next/link";

function contentRecurrsion(contents) {
  return contents.map((content, index) => {
    const hasSubContent = typeof content.contents === "object";

    if (hasSubContent) {
      return contentRecurrsion(content.contents);
    }

    if (content.type === "paragraph") {
      return (
        <span key={index} className={styles["paragraph-content"]}>
          {console.log(content.contents)}
          {content.contents}
        </span>
      );
    }

    if (content.type === "hyperlink") {
      return (
        <div key={index}>
          <Link href={content.link}>
            <a target="_blank" className={styles["content-hypertext"]}>
              {content.contents}
            </a>
          </Link>
        </div>
      );
    }

    if (content.type === "table") {
      return <table className={styles["table"]}></table>;
    }
  });
}

const InitiativeContent = ({ content }) => {
  return (
    <>
      <motion.div className={styles["content-container"]} animate>
        {contentRecurrsion(content)}
        {/* {content.map((item, index) => {
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

                        if (content.rowType === "unordered list") {
                          return (
                            <ul>
                              {content.rowContent.map(
                                (perRowContent, index) => {
                                  if (perRowContent.listType === "normal") {
                                    if (perRowContent.hasDescription) {
                                      return (
                                        <dl>
                                          {perRowContent.listContent.map(
                                            (perListContent, index) => {
                                              return (
                                                <dd>
                                                  - {perListContent.description}
                                                </dd>
                                              );
                                            }
                                          )}
                                        </dl>
                                      );
                                    } else {
                                      return (
                                        <li>{perRowContent.listContent}</li>
                                      );
                                    }
                                  }
                                }
                              )}
                            </ul>
                          );
                        }
                      })}
                    </tr>
                  );
                })}
              </table>
            );
          }
        })} */}
      </motion.div>
    </>
  );
};

export default InitiativeContent;

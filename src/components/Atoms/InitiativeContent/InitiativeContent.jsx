import React from "react";
import { motion } from "framer-motion";
import styles from "./InitiativeContent.module.scss";
import Link from "next/link";

const contentRecurrsion = (contents) => {
  return contents.map((content, index) => {
    const hasSubContent = typeof content.contents === "object";

    if (content.type === "paragraph container") {
      return (
        <div key={index} className={styles["paragraph-content--container"]}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </div>
      );
    }

    if (content.type === "paragraph") {
      return (
        <span key={index} className={styles["paragraph-content"]}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </span>
      );
    }

    if (content.type === "paragraph bold") {
      return (
        <span key={index} className={styles["paragraph-content--bold"]}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </span>
      );
    }

    if (content.type === "paragraph hyperlink") {
      return (
        <span key={index}>
          <Link href={content.link}>
            <a
              target="_blank"
              className={styles["paragraph-content--hypertext"]}
            >
              {hasSubContent
                ? contentRecurrsion(content.contents)
                : content.contents}
            </a>
          </Link>
        </span>
      );
    }

    if (content.type === "hyperlink") {
      return (
        <div key={index}>
          <Link href={content.link}>
            <a target="_blank" className={styles["content-hypertext"]}>
              {hasSubContent
                ? contentRecurrsion(content.contents)
                : content.contents}
            </a>
          </Link>
        </div>
      );
    }

    if (content.type === "table") {
      return (
        <table key={index} className={styles["table"]}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </table>
      );
    }

    if (content.type === "table row") {
      return (
        <tr key={index}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </tr>
      );
    }

    if (content.type === "table header") {
      return (
        <th key={index} colSpan={content.colspan}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </th>
      );
    }

    if (content.type === "table cell") {
      return (
        <td key={index} colSpan={content.colspan}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </td>
      );
    }

    if (content.type === "ordered list") {
      switch (content.listType) {
        case "lowercase letter":
          return (
            <ol key={index} className={styles["orderedList"]} type="a">
              {hasSubContent
                ? contentRecurrsion(content.contents)
                : content.contents}
            </ol>
          );

        case "uppercase letter":
          return (
            <ol key={index} className={styles["orderedList"]} type="A">
              {hasSubContent
                ? contentRecurrsion(content.contents)
                : content.contents}
            </ol>
          );

        default:
          return (
            <ol key={index} className={styles["orderedList"]}>
              {hasSubContent
                ? contentRecurrsion(content.contents)
                : content.contents}
            </ol>
          );
      }
    }

    if (content.type === "unordered list") {
      return (
        <ul key={index} className={styles["unorderedList"]}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </ul>
      );
    }

    if (content.type === "list item") {
      return (
        <li key={index} className={styles["listItem"]}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </li>
      );
    }

    if (content.type === "description list") {
      return (
        <dl key={index}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </dl>
      );
    }

    if (content.type === "description term") {
      return (
        <dt key={index}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </dt>
      );
    }

    if (content.type === "description data") {
      return (
        <dd key={index} className={styles["descriptionData"]}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </dd>
      );
    }

    if (content.type === "title") {
      return (
        <h2 key={index} className={styles["title"]}>
          {hasSubContent
            ? contentRecurrsion(content.contents)
            : content.contents}
        </h2>
      );
    }

    if (content.type === "google sheets") {
      return (
        <iframe
          key={index}
          className={styles["googleSheets"]}
          src={content.contents}
        ></iframe>
      );
    }
  });
};

const InitiativeContent = ({ content }) => {
  return (
    <>
      <motion.div className={styles["content-container"]} animate>
        {contentRecurrsion(content)}
      </motion.div>
    </>
  );
};

export default InitiativeContent;

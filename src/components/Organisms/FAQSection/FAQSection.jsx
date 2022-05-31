import React from "react";
import { FAQAccordion } from "../../ComponentIndex";
import styles from "./FAQSection.module.scss";

const FAQSection = ({ data }) => {
  return (
    <div className={styles["component-container"]}>
      <h1 className={styles["title"]}>{data.mainTitle}</h1>
      <div>
        <FAQAccordion data={data} />
      </div>
    </div>
  );
};

export default FAQSection;

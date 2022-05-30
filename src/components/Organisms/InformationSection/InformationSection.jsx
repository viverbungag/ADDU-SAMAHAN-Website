import React from "react";
import styles from "./InformationSection.module.scss";
import { InformationCard } from "../../ComponentIndex";

const InformationSection = ({ information }) => {
  return (
    <section className={styles["InformationSection"]}>
      <div className={styles["content"] + " container"}>
        <h1>Relevant Information Area</h1>
        <div className={styles["information_area"]}>
          {
          information.map((title) => {
            return <InformationCard key={title} title={title} />
          })
          }
        </div>
      </div>
    </section>
  );
};

export default InformationSection;

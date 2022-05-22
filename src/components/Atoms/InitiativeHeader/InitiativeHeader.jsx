import React from "react";
import styles from "./InitiativeHeader.module.scss";

const InitiativeHeader = ({ mainTitle, subTitle }) => {
  return (
    <header>
      <p className={styles["subTitle"]}>{subTitle}</p>
      <p className={styles["mainTitle"]}>{mainTitle}</p>
    </header>
  );
};

export default InitiativeHeader;

import React from "react";
import styles from "./Office.module.scss";
import { Officer } from "../../ComponentIndex";

const Office = ({ officeTitle, officers }) => {
  return (
    <>
      <div className={styles["officeTitle"]}>
        <span>{officeTitle}</span>
      </div>
      <div className={styles["officersContainer"]}>
        {officers.map((officer) => (
          <div className={styles["officerContainer"]}>
            <Officer
              name={officer.name}
              position={officer.position}
              imageSrc={officer.imageSrc}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Office;

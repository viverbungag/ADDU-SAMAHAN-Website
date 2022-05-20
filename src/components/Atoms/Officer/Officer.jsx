import React from "react";
import styles from "./Officer.module.scss";

const Officer = ({ name, position, imageSrc }) => {
  const hasImage = imageSrc == null;
  return (
    <>
      <div className={styles["officerContainer"]}>
        <div
          className={
            hasImage
              ? styles["imageContainer"]
              : styles["imageContainer--no-border"]
          }
        >
          <img className={styles["image"]} src={imageSrc} alt="Image" />
        </div>
        <div className={styles["textContainer"]}>
          <div className={styles["nameText"]}>{name}</div>
          <div className={styles["positionText"]}>{position}</div>
        </div>
      </div>
    </>
  );
};

export default Officer;

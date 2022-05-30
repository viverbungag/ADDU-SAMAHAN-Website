import React from "react";
import styles from "./Officer.module.scss";
import Image from "next/image";

const Officer = ({ name, position, imageSrc }) => {
  return (
    <>
      <div className={styles["officerContainer"]}>
        <div className={styles["imageContainer"]}>
          <Image.default
            src={imageSrc}
            alt="Image"
            layout="fill"
            objectFit="cover"
            draggable={false}
          />
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

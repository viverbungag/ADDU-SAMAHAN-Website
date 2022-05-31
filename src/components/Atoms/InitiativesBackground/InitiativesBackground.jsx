import React from "react";
import Image from "next/image";
import styles from "./InitiativesBackground.module.scss";

const InitiativesBackground = () => {
  return (
    <>
      <div className={styles["shape1"]}>
        <Image.default
          layout="fill"
          src="https://firebasestorage.googleapis.com/v0/b/samahan-website.appspot.com/o/Images%2FSVG%20Design%2FShape%201.svg?alt=media&token=b2ed8d87-557c-4def-8580-7fea09faef44"
          draggable={false}
        />
      </div>
    </>
  );
};

export default InitiativesBackground;

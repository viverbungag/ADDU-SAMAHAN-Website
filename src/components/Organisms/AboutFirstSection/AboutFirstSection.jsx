import React from "react";
import styles from "./AboutFirstSection.module.scss";
import Fade from "react-reveal/Fade";
import Image from "next/image";
const AboutFirstSection = ({ data }) => {
  return (
    <>
      {/* <div className={styles["component-container"]}>
    <div className="container">
    <div className={styles["flexContainer"]}>
    <div> <h1 className={styles["header"]}>{data.title}</h1></div>
    <div className={styles["firstParagraph"]}>{data.firstP}</div>
    <div className={styles["secondParagraph"]}>{data.secondP}</div>

    </div>

    </div>
    </div> */}
 
    <div className={styles["container"]}>
    <div className="container">
      <div>
        <Fade right>
        <h1 className={styles["header"]}>{data.title}</h1>
        </Fade>
      </div>
      <div>
        <Fade right>
        <p className={styles["paragraph1"]}>{data.firstP}</p>
        <p className={styles["paragraph"]}>{data.secondP}</p>
        </Fade>
      </div>
    </div>
    </div>
    </>
  );
};

export default AboutFirstSection;

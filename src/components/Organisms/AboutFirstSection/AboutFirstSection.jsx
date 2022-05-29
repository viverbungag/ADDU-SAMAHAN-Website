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
        <div className={styles["imgbg"]}>
          <Image.default
            width="1400px"
            height="1000px"
            src="https://firebasestorage.googleapis.com/v0/b/samahan-website.appspot.com/o/Images%2FATN_2218.png?alt=media&token=f3b9cfdd-7c0b-47ce-b312-379119674b05"
          />
        </div>

        <div>
          <Fade right>
            <h1 className={styles["header"]}>{data.title}</h1>
          </Fade>
        </div>
        <div>
          <Fade right>
            <p className={styles["paragraph"]}>{data.firstP}</p>
            <p className={styles["paragraph"]}>{data.secondP}</p>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default AboutFirstSection;

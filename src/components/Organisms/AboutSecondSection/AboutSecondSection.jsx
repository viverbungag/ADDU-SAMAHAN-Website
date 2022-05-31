import React from "react";
import styles from "./AboutSecondSection.module.scss";
import Fade from "react-reveal/Fade";
import Image from "next/image";

const AboutSecondSection = ({ data }) => {
  return (
    <>
      {/* <div className={styles["component-container"]}>
    <div className="container">
    <div className={styles["flexContainer"]}>
    <div className={styles["Here"]}>Here
    <p className={styles["paragraph"]}>{data.firstP}</p>
    </div>
   
    <div className={styles["AndNow"]}>And
      <p className={styles["paragraph"]}>{data.secondP}</p>
    </div>
    <div className={styles["AndNow"]}>Now
      <p className={styles["paragraph"]}>{data.thirdP}</p>
    </div>

    </div>

    
    </div>
    </div> */}
      <div className={styles["outerSection"]}>
        <div className={styles["container"] + " container"}>
          <Fade left>
            <div className={styles["image-container"]}>
              <Image.default
                src="https://firebasestorage.googleapis.com/v0/b/samahan-website.appspot.com/o/Images%2FHere-and-Now-About.png?alt=media&token=acfdf648-a7df-4906-9950-b3df6e117a65"
                layout="responsive"
                objectFit="cover"
                width="100"
                height="100"
                draggable={false}
              />
            </div>
          </Fade>
          <Fade right>
            <div className={styles["paragraph"]}>
              <p>{data.firstP}</p>
              <p>{data.secondP}</p>
              <p>{data.thirdP}</p>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default AboutSecondSection;

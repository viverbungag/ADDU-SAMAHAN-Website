import React from "react";
import styles from "./AboutSecondSection.module.scss";
import Fade from "react-reveal/Fade";

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
    <div className={styles["background"]}>
      <div className={styles["outerSection"]}>
        <div className={styles["container"] + " container"}>
            <Fade left>
              <h1 className={styles["header"]}>HERE<br />AND<br />NOW</h1>
            </Fade>
          <Fade right>
            <div>
              <p className={styles["paragraph"]}>{data.firstP}</p>
              <p className={styles["paragraph"]}>{data.secondP}</p>
              <p className={styles["paragraph"]}>{data.thirdP}</p>
            </div>
          </Fade>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutSecondSection;

import React from "react";
import styles from "./AboutFirstSection.module.scss";
import Fade from "react-reveal/Fade";
import { Carousel } from "../../ComponentIndex";
const AboutFirstSection = ({ data, carouselPics }) => {
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
    <div className={styles["wrapper"]}>
     <div  className="container">
      
      <div  className={styles["carousel"]}>
        <Carousel data = {carouselPics} />
      </div>
    <div className="innerContainer">
      <div>
        <Fade>
        <h1 className={styles["header"]}>{data.title}</h1>
        </Fade>
      </div>
      <div>
        <Fade>
        <p className={styles["paragraph1"]}>{data.firstP}</p>
        <p className={styles["paragraph"]}>{data.secondP}</p>
        </Fade>
      </div>
      </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default AboutFirstSection;

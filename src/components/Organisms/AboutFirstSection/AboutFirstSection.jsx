import React from "react";
import styles from "./AboutFirstSection.module.scss";
import Fade from "react-reveal/Fade";
import { Carousel } from "../../ComponentIndex";
const AboutFirstSection = ({ data, carouselPics }) => {
  return (
    <>
      <section className={styles["AboutFirstSection"]}>
        <div className={styles["wrapper"]}>
          <div className={styles["carousel"]}>
            <Carousel data={carouselPics} />
          </div>
          <div className={styles["AboutFirstSection__content"] + " container"}>
            <Fade>
              <h1 className={styles["header"]}>{data.title}</h1>
            </Fade>
            <div className={styles["description"]}>
              <Fade>
                <p className={styles["paragraph1"]}>{data.firstP}</p>
                <p className={styles["paragraph"]}>{data.secondP}</p>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutFirstSection;

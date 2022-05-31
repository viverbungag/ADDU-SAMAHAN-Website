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
      {/* <section className={styles["AboutFirstSection"]}>
        <div className={styles["wrapper"]}>
          <div className={styles["carousel"]}>
            <Carousel data={carouselPics} />
          </div>
          <div>
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
      </section> */}

<<<<<<< HEAD
      <div className={styles["container"]}>
        <div className={styles["wrapper"]}>
          <div className="container">
            <div className={styles["carousel"]}>
              <Carousel data={carouselPics} />
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
=======
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
>>>>>>> 9cbba76fbcd727ac491c1c41fb4cf9941890c595
    </>
  );
};

export default AboutFirstSection;

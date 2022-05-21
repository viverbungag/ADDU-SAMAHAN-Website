import React from "react";
import Image from "next/image";
import { Footer, Navigation } from "../../ComponentIndex";

import styles from "./LandingPage.module.scss";

const Landing = () => {
  return (
    <>
      <Navigation transparent={true} />
      <section className={styles["landing"]}>
        <div className={styles["hero"] + " container"}>
          <div className={styles["hero__slogan"]}>
            <Image.default
              src="https://firebasestorage.googleapis.com/v0/b/samahan-website.appspot.com/o/Images%2FHereAndNow.png?alt=media&token=42b3a96b-1104-444b-969a-7836d39253a8"
              alt="Here and Now"
              layout="fill"
              objectFit="contain"
              draggable="false"
              className={styles["HereAndNow__img"]}
              priority
            />
          </div>
          <div className={styles["homepage"]}>
            <div className={styles["homepage__define"]}>
              <div className={styles["word"]}>
                <h1>
                  <strong>here</strong>
                </h1>
                <p>(adv.)</p>
              </div>
              <p>to make known one{"'"}s existence</p>
            </div>
            <div className={styles["homepage__define"]}>
              <div className={styles["word"]}>
                <h1>
                  <strong>and</strong>
                </h1>
                <p>(conj.)</p>
              </div>
              <p>a connecting word</p>
            </div>
            <div className={styles["homepage__define"]}>
              <div className={styles["word"]}>
                <h1>
                  <strong>now</strong>
                </h1>
                <p>(adv.)</p>
              </div>
              <p>at the present time or moment</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Landing;

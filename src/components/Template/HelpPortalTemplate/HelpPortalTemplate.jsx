import React from "react";
import { Navigation, Footer, Button } from "../../ComponentIndex";

import styles from "./HelpPortalTemplate.module.scss";

const HelpPortalTemplate = () => {
  return (
    <>
      <Navigation />
      <div className={styles["help-portal"]}>
        <div className={styles["help-portal__hero"]}>
          <h1 className={styles["hero__welcome"] + " container"}>
            Welcome to the <span>HELP PORTAL</span>
          </h1>
        </div>
        <div className={styles["help-portal__guidebook"]}>
          <div className={styles["guidebook-wrapper"] + " container"}>
            <div className={styles["guidebook"]}>
              <img src="https://firebasestorage.googleapis.com/v0/b/samahan-website.appspot.com/o/Images%2Fguidebook.png?alt=media&token=8b5f876d-9664-43d6-8788-afe836a3379c" alt="SAMAHAN Guidebook" draggable/>
            </div>
            <div className={styles["download-area"]}>
              <div className={styles["prompt"]}>
                <h2>SAMAHAN GUIDEBOOK</h2>
                <p>A start-up kit for incoming first year students</p>
              </div>
              <Button label="DOWNLOAD" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HelpPortalTemplate;

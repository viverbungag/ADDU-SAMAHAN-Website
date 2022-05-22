import React from "react";
import { Navigation, Footer, OfficeInitiative } from "../../ComponentIndex";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import styles from "./OfficeOfThePresidentTemplate.module.scss";

const OfficeOfThePresidentTemplate = ({ id, data, initialRoute }) => {
  return (
    <>
      <div className={styles["office-of-the-president"]}>
        <div className={styles["nav-container"]}>
          <Navigation />
        </div>

        <OfficeInitiative id={id} data={data} initialRoute={initialRoute} />
      </div>
      <Footer />
    </>
  );
};

export default OfficeOfThePresidentTemplate;

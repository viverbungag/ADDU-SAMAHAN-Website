import React from "react";
import { Navigation, Footer, OfficeInitiative } from "../../ComponentIndex";
import styles from "./OfficeOfThePresidentTemplate.module.scss";

const OfficeOfThePresidentTemplate = ({ id, data, initialRoute }) => {
  return (
    <>
      <Navigation />
      <div className={styles["office-of-the-president"]}>
        <OfficeInitiative id={id} data={data} initialRoute={initialRoute} />
      </div>
      <Footer />
    </>
  );
};

export default OfficeOfThePresidentTemplate;

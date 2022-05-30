import React from "react";
import { Navigation, Footer, OfficeInitiative } from "../../ComponentIndex";
import styles from "./OfficeOfTheTreasurerTemplate.module.scss";

const OfficeOfTheTreasurerTemplate = ({ id, data, initialRoute }) => {
  return (
    <>
      <div className={styles["office-of-the-treasurer"]}>
        <Navigation />
        <OfficeInitiative id={id} data={data} initialRoute={initialRoute} />
      </div>
      <Footer />
    </>
  );
};

export default OfficeOfTheTreasurerTemplate;

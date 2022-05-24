import React from "react";
import { Navigation, Footer, OfficeInitiative } from "../../ComponentIndex";
import styles from "./OfficeOfTheSecretaryGeneralTemplate.module.scss";

const OfficeOfTheSecretaryGeneralTemplate = ({ id, data, initialRoute }) => {
  return (
    <>
      <div className={styles["office-of-the-secretary-general"]}>
        <Navigation />
        <OfficeInitiative id={id} data={data} initialRoute={initialRoute} />
      </div>
      <Footer />
    </>
  );
};

export default OfficeOfTheSecretaryGeneralTemplate;

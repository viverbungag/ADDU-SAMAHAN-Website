import React from "react";
import { Navigation, Footer, OfficeInitiative } from "../../ComponentIndex";
import styles from "./OfficeOfTheVicePresidentTemplate.module.scss";

const OfficeOfTheVicePresidentTemplate = ({ id, data, initialRoute }) => {
  return (
    <>
      <div className={"office-of-the-vice-president"}>
        <Navigation />
        <OfficeInitiative id={id} data={data} initialRoute={initialRoute} />
        <Footer />
      </div>
    </>
  );
};

export default OfficeOfTheVicePresidentTemplate;

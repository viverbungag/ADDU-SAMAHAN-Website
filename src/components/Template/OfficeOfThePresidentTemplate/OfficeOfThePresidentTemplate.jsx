import React from "react";
import { Navigation, Footer, OfficeInitiative } from "../../ComponentIndex";

const OfficeOfThePresidentTemplate = ({ id, data, initialRoute }) => {
  return (
    <>
      <Navigation />
      <OfficeInitiative id={id} data={data} initialRoute={initialRoute} />
      <Footer />
    </>
  );
};

export default OfficeOfThePresidentTemplate;

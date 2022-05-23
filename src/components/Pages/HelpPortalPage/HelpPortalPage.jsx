import React from "react";
import { HelpPortalTemplate } from "../../ComponentIndex";

import faqData from "../../../data/faqData.json";

const HelpPortal = () => {
  return (
    <>
      <HelpPortalTemplate faqData={faqData} />
    </>
  );
};

export default HelpPortal;

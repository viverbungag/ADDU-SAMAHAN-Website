import React from "react";
import { HelpPortalTemplate } from "../../ComponentIndex";

import { faqData } from "../../../data/dataIndex";

const HelpPortal = () => {
  return (
    <>
      <HelpPortalTemplate faqData={faqData} />
    </>
  );
};

export default HelpPortal;

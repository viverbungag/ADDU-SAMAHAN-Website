import React from "react";
import { HelpPortalTemplate } from "../../ComponentIndex";

import { faqData, information } from "../../../data/dataIndex";

const HelpPortal = () => {
  return (
    <>
      <HelpPortalTemplate faqData={faqData} information={information.information_title} />
    </>
  );
};

export default HelpPortal;

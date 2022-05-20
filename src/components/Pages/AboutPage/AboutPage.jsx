import React from "react";
import { AboutTemplate } from "../../ComponentIndex";
import { scbData, sdData } from "../../../data/dataIndex";

const About = () => {
  return (
    <>
      <AboutTemplate scbData={scbData} sdData={sdData} />
    </>
  );
};

export default About;

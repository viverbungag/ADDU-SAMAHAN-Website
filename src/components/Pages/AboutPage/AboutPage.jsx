import React from "react";
import { AboutTemplate } from "../../ComponentIndex";
import { scbData, sdData, abtData1, abtData2 } from "../../../data/dataIndex";

const About = () => {
  return (
    <>
      <AboutTemplate scbData={scbData} sdData={sdData} abtData1={abtData1} abtData2={abtData2}/>
    </>
  );
};

export default About;

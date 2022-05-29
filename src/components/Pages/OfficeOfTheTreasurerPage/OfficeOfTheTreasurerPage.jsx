import React from "react";
import { OfficeOfTheTreasurerTemplate } from "../../ComponentIndex";
import { tInData } from "../../../data/dataIndex";

const OfficeOfTheTreasurer = ({ id, initialRoute }) => {
  return (
    <>
      <OfficeOfTheTreasurerTemplate
        id={id}
        data={tInData}
        initialRoute={initialRoute}
      />
    </>
  );
};

export default OfficeOfTheTreasurer;

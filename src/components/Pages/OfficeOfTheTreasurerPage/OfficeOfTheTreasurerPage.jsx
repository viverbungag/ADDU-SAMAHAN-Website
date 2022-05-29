import React from "react";
import { OfficeOfTheTreasurerTemplate } from "../../ComponentIndex";
import { tInData } from "../../../data/dataIndex";

const OfficeOfTheTreasurerPage = ({ id, initialRoute }) => {
  console.log(initialRoute);
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

export default OfficeOfTheTreasurerPage;

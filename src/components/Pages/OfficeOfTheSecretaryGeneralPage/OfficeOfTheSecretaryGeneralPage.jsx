import React from "react";
import { OfficeOfTheSecretaryGeneralTemplate } from "../../ComponentIndex";
import { sgInData } from "../../../data/dataIndex";

const OfficeOfTheSecretaryGeneral = ({ id, initialRoute }) => {
  return (
    <>
      <OfficeOfTheSecretaryGeneralTemplate
        id={id}
        data={sgInData}
        initialRoute={initialRoute}
      />
    </>
  );
};

export default OfficeOfTheSecretaryGeneral;

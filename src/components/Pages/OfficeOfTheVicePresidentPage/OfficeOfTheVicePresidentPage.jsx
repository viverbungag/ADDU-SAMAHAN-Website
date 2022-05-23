import React from "react";
import { OfficeOfTheVicePresidentTemplate } from "../../ComponentIndex";
import { vpInData } from "../../../data/dataIndex";

const OfficeOfTheVicePresident = ({ id, initialRoute }) => {
  return (
    <>
      <OfficeOfTheVicePresidentTemplate
        id={id}
        data={vpInData}
        initialRoute={initialRoute}
      />
    </>
  );
};

export default OfficeOfTheVicePresident;

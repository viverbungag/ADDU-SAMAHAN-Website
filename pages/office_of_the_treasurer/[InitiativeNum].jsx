import { useRouter } from "next/router";
import React from "react";
import { OfficeOfTheTreasurerPage } from "../../src/components/ComponentIndex";

const InitiativeNum = () => {
  const router = useRouter();
  const InitiativeNum = router.query.InitiativeNum;
  return (
    <OfficeOfTheTreasurerPage
      id={InitiativeNum}
      initialRoute="/office_of_the_treasurer"
    />
  );
};

export default InitiativeNum;

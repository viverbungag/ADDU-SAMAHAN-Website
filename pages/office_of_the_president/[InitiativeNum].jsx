import { useRouter } from "next/router";
import React from "react";
import { OfficeOfThePresidentPage } from "../../src/components/ComponentIndex";

const InitiativeNum = () => {
  const router = useRouter();
  const InitiativeNum = router.query.InitiativeNum;
  return (
    <OfficeOfThePresidentPage
      id={InitiativeNum}
      initialRoute="/office_of_the_president"
    />
  );
};

export default InitiativeNum;

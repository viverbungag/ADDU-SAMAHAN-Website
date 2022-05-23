import { useRouter } from "next/router";
import React from "react";
import { OfficeOfTheVicePresidentPage } from "../../src/components/ComponentIndex";

const InitiativeNum = () => {
  const router = useRouter();
  const InitiativeNum = router.query.InitiativeNum;
  return (
    <OfficeOfTheVicePresidentPage
      id={InitiativeNum}
      initialRoute="/office_of_the_vice_president"
    />
  );
};

export default InitiativeNum;

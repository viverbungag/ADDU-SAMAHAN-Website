import { useRouter } from "next/router";
import React from "react";
import { OfficeOfTheSecretaryGeneralPage } from "../../src/components/ComponentIndex";

const InitiativeNum = () => {
  const router = useRouter();
  const InitiativeNum = router.query.InitiativeNum;
  return (
    <OfficeOfTheSecretaryGeneralPage
      id={InitiativeNum}
      initialRoute="/office_of_the_secretary_general"
    />
  );
};

export default InitiativeNum;

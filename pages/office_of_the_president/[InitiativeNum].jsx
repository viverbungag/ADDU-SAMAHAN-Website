import { useRouter } from "next/router";
import React from "react";

const InitiativeNum = () => {
  const router = useRouter();
  const InitiativeNum = router.query.InitiativeNum;
  return <div>{InitiativeNum}</div>;
};

export default InitiativeNum;

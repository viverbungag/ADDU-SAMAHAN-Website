import React from "react";
import { InitiativeCard } from "../../ComponentIndex";
import styles from "./InitiativeList.module.scss";

const InitiativeList = ({ selectedId, data, initialRoute }) => {
  return (
    <ul className={styles["card-list"]}>
      {data.map((card) => (
        <InitiativeCard
          key={card.id}
          {...card}
          initialRoute={initialRoute}
          isSelected={card.id === selectedId}
        />
      ))}
    </ul>
  );
};

export default InitiativeList;

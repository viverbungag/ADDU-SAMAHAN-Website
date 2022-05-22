import { useState } from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import {
  InitiativeList,
  InitiativeModal,
  InitiativeHeader,
} from "../../ComponentIndex";
import styles from "./OfficeInitiative.module.scss";

const OfficeInitiative = ({ id, data, initialRoute }) => {
  const imageHasLoaded = true;
  return (
    <>
      <div className={styles["root-container"]}>
        <div className={styles["component-container"]}>
          <InitiativeHeader
            mainTitle={data.mainTitle}
            subTitle={data.subTitle}
          />
          <InitiativeList
            selectedId={id}
            data={data.initiatives}
            initialRoute={initialRoute}
          />
          <AnimatePresence>
            {id && imageHasLoaded && (
              <InitiativeModal
                id={id}
                data={data.initiatives}
                initialRoute={initialRoute}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default OfficeInitiative;

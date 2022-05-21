import React from "react";
import { Button } from "../../ComponentIndex";
import styles from "./Initiative.module.scss";

const Initiative = ({
  title,
  description,
  hasButton,
  buttonLabel,
  onClickButton,
}) => {
  return (
    <>
      <div className="container">
        <div className={styles["flexContainer"]}>
          <div className={styles["titleContainer"]}>
            <span>{title}</span>
          </div>

          <div className={styles["descriptionContainer"]}>
            <span>{description}</span>
          </div>

          {hasButton && (
            <div className={styles["button"]}>
              <Button label={buttonLabel} onClick={onClickButton} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Initiative;

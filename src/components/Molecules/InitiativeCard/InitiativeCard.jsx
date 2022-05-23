import React from "react";
import Link from "next/link";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./InitiativeCard.module.scss";
import { InitiativeTitle } from "../../ComponentIndex";

const InitiativeCard = ({
  id,
  initiativeNum,
  title,
  imgBgSrc,
  initialRoute,
}) => {
  return (
    <Link href={`${initialRoute}/${id}`} scroll={false}>
      <li className={styles["card"]}>
        <div className={styles["card-content-container"]}>
          <motion.div
            className={styles["card-content"]}
            layoutId={`card-container-${id}`}
          >
            <InitiativeTitle
              id={id}
              initiativeNum={initiativeNum}
              title={title}
              imgBgSrc={imgBgSrc}
            />
          </motion.div>
        </div>
      </li>
    </Link>
  );
};

export default InitiativeCard;

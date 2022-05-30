import React from "react";
import MouseIcon from "@mui/icons-material/Mouse";
import styles from "./ScrollDownIcon.module.scss";

const ScrollDownIcon = () => {
  return (
    <>
      <div className={styles["component-container"]}>
        <MouseIcon sx={{ fontSize: "2.441rem", fontWeight: "700" }} />
        <span className={styles["text"]}>Scroll Down</span>
      </div>
    </>
  );
};

export default ScrollDownIcon;

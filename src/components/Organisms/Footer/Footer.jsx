import React from "react";
import styles from "./Footer.module.scss";
import { Socials } from "../../ComponentIndex";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__content"] + " container"}>
        <p>
          Copyright {"\u00A9"} 2022 <span>SAMAHAN</span> | Developed by{" "}
          <span>SysDev</span> & <span>SCT</span>
        </p>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Link from 'next/link';

import styles from "./Footer.module.scss";
import { Socials } from "../../ComponentIndex";

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["footer__content"] + " container"}>
        <p>
          Copyright {"\u00A9"} 2022 <span>SAMAHAN</span> | Developed by{" "}
          <span>
            <abbr title="SAMAHAN System Development"><Link href="/sysdev">SysDev</Link></abbr>
          </span>{" "}
          &{" "}
          <span>
            <abbr title="SAMAHAN Creative Team">SCT</abbr>
          </span>
        </p>
        <Socials />
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.scss";

import { Button } from "../../ComponentIndex";
import { Icon } from "@iconify/react";
import baselineKeyboardArrowDown from "@iconify/icons-ic/baseline-keyboard-arrow-down";

const Navigation = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles["navbar__main"]}>
          <div className={styles.samahan_logo}><h1>TEMPORARY</h1></div>
          <ul>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li className={styles.drop_down}>
              <a>OFFICES</a>
              <Icon icon={baselineKeyboardArrowDown} color="white" height="24" />
              <ul>
                <li>
                  <Link href="/OTP">Office of the President</Link>
                </li>
                <li>
                  <Link href="/OVP">Office of the Vice-President</Link>
                </li>
                <li>
                  <Link href="/OSG">Office of the Secretary-General</Link>
                </li>
                <li>
                  <Link href="/OT">Office of the Treasurer</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/student_judicial_court">STUDENT JUDICIAL COURT</Link>
            </li>
          </ul>
        </div>
        <div className={styles["navbar__help-portal"]}>
          <Link href="/help_portal" passHref>
            <Button label="HELP PORTAL"/>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navigation;

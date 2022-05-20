import React, { useState, useRef } from "react";
import Link from "next/link";
import styles from "./Navigation.module.scss";

import { Button } from "../../ComponentIndex";
import { Icon } from "@iconify/react";
import baselineKeyboardArrowDown from "@iconify/icons-ic/baseline-keyboard-arrow-down";
import menuFill from "@iconify/icons-eva/menu-fill";

const Navigation = () => {
  const [, setMenuClicked] = useState(false);
  const [, setSubMenuClicked] = useState(false);
  const nav_list_1 = useRef();
  const nav_list_2 = useRef();

  function handleClick() {
    setMenuClicked((prevClickState) => {
      if (!prevClickState === true) {
        nav_list_1.current.style.display = "block";
      }
      else {
        nav_list_1.current.style = '';
      }
      
      return !prevClickState;
    });
  }

  function handleSubMenuOpen() {
    console.log("hello");
    setSubMenuClicked((prevClickState) => {
      if (!prevClickState === true) {
        nav_list_2.current.style.display = "block";
      }
      else {
        nav_list_2.current.style = "";
      }

      return !prevClickState;
    });
  }

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar + " container"}>
          <div className={styles["navbar__main"]}>
            <div className={styles["navbar__menu--division"]}>
              <div className={styles.samahan_logo}>
                <h1>TEMPORARY</h1>
              </div>
              <div className={styles.nav_menu}>
                <button onClick={handleClick}>
                  <Icon icon={menuFill} color="white" height="32" />
                </button>
              </div>
            </div>
            <ul ref={nav_list_1} className={styles["nav-list-1"]}>
              <li className={styles["nav-links-1"]}>
                <Link href="/about">ABOUT</Link>
              </li>
              <li className={styles.drop_down + " " + styles["nav-links-1"]}>
                <button onClick={handleSubMenuOpen} id="offices">
                  OFFICES
                  <Icon
                    icon={baselineKeyboardArrowDown}
                    color="white"
                    height="24"
                  />
                </button>
                <a>OFFICES</a>
                <Icon
                  icon={baselineKeyboardArrowDown}
                  color="white"
                  height="24"
                />
                <ul ref={nav_list_2} className={styles["nav-list-2"]}>
                  <li>
                    <Link href="/office_of_the_president">
                      Office of the President
                    </Link>
                  </li>
                  <li>
                    <Link href="/office_of_the_vice_president">
                      Office of the Vice-President
                    </Link>
                  </li>
                  <li>
                    <Link href="/office_of_the_secretary_general">
                      Office of the Secretary-General
                    </Link>
                  </li>
                  <li>
                    <Link href="/office_of_the_treasurer">
                      Office of the Treasurer
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={styles["nav-links-1"]}>
                <Link href="/student_judicial_court">
                  STUDENT JUDICIAL COURT
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles["navbar__help-portal"]}>
            <Link href="/help_portal" passHref>
              <Button label="HELP PORTAL" />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;

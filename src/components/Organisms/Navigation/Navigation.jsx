import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navigation.module.scss";
import { Button } from "../../ComponentIndex";
import { Icon } from "@iconify/react";
import baselineKeyboardArrowDown from "@iconify/icons-ic/baseline-keyboard-arrow-down";
import menuFill from "@iconify/icons-eva/menu-fill";
import { samahanLogo } from "../../../data/imageSrc.module.scss";

const Navigation = ({ transparent = false }) => {
  const [, setMenuClicked] = useState(false);
  const [, setSubMenuClicked] = useState(false);
  const nav_list_1 = useRef();
  const nav_list_2 = useRef();

  function handleClick() {
    setMenuClicked((prevClickState) => {
      if (!prevClickState === true) {
        nav_list_1.current.style.display = "block";
      } else {
        nav_list_1.current.style = "";
      }

      return !prevClickState;
    });
  }

  function handleSubMenuOpen() {
    console.log("hello");
    setSubMenuClicked((prevClickState) => {
      if (!prevClickState === true) {
        nav_list_2.current.style.display = "block";
      } else {
        nav_list_2.current.style = "";
      }

      return !prevClickState;
    });
  }
  console.log(samahanLogo);
  return (
    <>
      <header
        className={transparent ? styles["header-transparent"] : styles.header}
      >
        <nav className={styles.navbar + " container"}>
          <div className={styles["navbar__main"]}>
            <div className={styles["navbar__menu--division"]}>
              <div className={styles.samahan_logo}>
                <a href="/">
                  <Image.default
                    src="https://firebasestorage.googleapis.com/v0/b/samahan-website.appspot.com/o/Images%2FSAMAHAN-logo.png?alt=media&token=6548244f-7d40-4a52-af76-e0350268a1c0"
                    alt="SAMAHAN Website Logo"
                    width="220px"
                    height="100%"
                    objectFit="contain"
                    draggable="false"
                    priority
                  />
                </a>
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
              <li className={styles["drop_down"] + " " + styles["nav-links-1"]}>
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

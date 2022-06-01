import React from "react";
import styles from "./SysDevProfile.module.scss";
import Image from "next/image";
import { SysDevSocials } from "../../ComponentIndex"

const SysDevProfile = ({ name, position, course, email, socials, picture }) => {
  return (
    <>
      <div className={styles["SysDevProfile"]}>
        <div className={styles["picture"]}>
          <Image.default
            src={picture}
            layout="fill"
            objectFit="contain"
            draggable={false}
            alt={name + "'s Picture"}
          ></Image.default>
        </div>
        <div className={styles["info"]}>
          <h5 className={styles["name"]}>{name}</h5>
          <p className={styles["position"]}>{position}</p>
          <p className={styles["course"]}>{course}</p>
        </div>
        <div className={styles["contact"]}>
          <p className={styles["email-area"]}>
            E-mail:
            <br />
            <a href={"mailto:" + email} className={styles["email"]}>
              {email}
            </a>
          </p>
          <p className={styles["socials"]}>
            Socials:
            <SysDevSocials socials={socials} />
          </p>
        </div>
      </div>
    </>
  );
};

export default SysDevProfile;

import React from "react";
import styles from "./Developers.module.scss";
import {SysDevProfile } from "../../ComponentIndex";

const Developers = ({ developers }) => {
  return (
    <>
      <div className={styles["Developers"]}>
        <div className={styles["cards"] + " container"}>
          {developers.map((developer) => {
            return (
              <SysDevProfile
                key={developer.name}
                name={developer.name}
                position={developer.position}
                course={developer.course}
                email={developer.email}
                socials={developer.socials}
                picture={developer.picture}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Developers;

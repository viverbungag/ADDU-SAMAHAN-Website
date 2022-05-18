import React from "react";
import { DepartmentIntro, Department, Navigation } from "../../ComponentIndex";
import styles from "./AboutTemplate.module.scss";
import { scbData, sdData } from "../../../data/dataIndex";

const AboutTemplate = () => {
  return (
    <>
      <Navigation />
      <div className={styles["departmentIntroContainer"]}>
        <DepartmentIntro />
      </div>
      {/* <Department title={sdData.title} offices={sdData.offices} /> */}
    </>
  );
};

export default AboutTemplate;

import React from "react";
import { DepartmentIntro, Department, Navigation } from "../../ComponentIndex";
import styles from "./AboutTemplate.module.scss";
import { scbData, sdData } from "../../../data/dataIndex";

const SamahanDepartments = [
  {
    officeTitle: "OFFICE OF THE SAMAHAN PRESIDENT",
    officers: [
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
    ],
  },
  {
    officeTitle: "OFFICE OF THE SAMAHAN VICE-PRESIDENT",
    officers: [
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
    ],
  },
  {
    officeTitle: "OFFICE OF THE SAMAHAN VICE-PRESIDENT",
    officers: [
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
    ],
  },
  {
    officeTitle: "OFFICE OF THE SAMAHAN SECRETARY-GENERAL",
    officers: [
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
    ],
  },
  {
    officeTitle: "OFFICE OF THE SAMAHAN SECRETARY-GENERAL",
    officers: [
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
    ],
  },
  {
    officeTitle: "OFFICE OF THE SAMAHAN TREASURER",
    officers: [
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
    ],
  },
  {
    officeTitle: "OFFICE OF THE SAMAHAN TREASURER",
    officers: [
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
      {
        name: "Patrick Matayabas",
        position: "Sysdev Director",
        imageSrc:
          "http://shipboardtraining.com/resources/thumb-female.845dfe89.jpg",
      },
    ],
  },
];

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

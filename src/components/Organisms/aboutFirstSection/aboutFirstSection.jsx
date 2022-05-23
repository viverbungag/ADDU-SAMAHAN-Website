import React from 'react'
import styles from "./AboutFirstSection.module.scss";

const AboutFirstSection = ({data}) => {
  return (
    <>
    <div className={styles["component-container"]}>
    <div className="container">
    <div className={styles["flexContainer"]}>
    <div className={styles["largeText"]}>{data.title}</div>
    <div className={styles["firstParagraph"]}>{data.firstP}</div>
    <div className={styles["secondParagraph"]}>{data.secondP}</div>

    </div>

    </div>
    </div>
    </>
  )
}

export default AboutFirstSection

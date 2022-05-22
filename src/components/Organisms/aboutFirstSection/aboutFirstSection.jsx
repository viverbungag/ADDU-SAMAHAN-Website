import React from 'react'
import styles from "./aboutFirstSection.module.scss";

const aboutFirstSection = ({title, firstParagraph, secondParagraph}) => {
  return (
    <>
    <div className={styles["flexContainer"]}>
    <div className={styles["largeText"]}>{title}</div>
    <div className={styles["firstParagraph"]}>{firstParagraph}</div>
    <div className={styles["secondParagraph"]}>{secondParagraph}</div>
    </div>
    </>
  )
}

export default aboutFirstSection

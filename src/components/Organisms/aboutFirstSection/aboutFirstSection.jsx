import React from 'react'
import styles from "./aboutFirstSection.module.scss";

const aboutFirstSection = ({data}) => {
  return (
    <>
    <div className={styles["flexContainer"]}>
    <div className={styles["largeText"]}>{data.title}</div>
    <div className={styles["firstParagraph"]}>{data.firstP}</div>
    <div className={styles["secondParagraph"]}>{data.secondP}</div>
    </div>
    </>
  )
}

export default aboutFirstSection

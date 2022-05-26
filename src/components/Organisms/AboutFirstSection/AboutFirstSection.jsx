import React from 'react'
import styles from "./AboutFirstSection.module.scss";

const AboutFirstSection = ({data}) => {
  return (
    <>
    {/* <div className={styles["component-container"]}>
    <div className="container">
    <div className={styles["flexContainer"]}>
    <div> <h1 className={styles["header"]}>{data.title}</h1></div>
    <div className={styles["firstParagraph"]}>{data.firstP}</div>
    <div className={styles["secondParagraph"]}>{data.secondP}</div>

    </div>

    </div>
    </div> */}

    <div className={styles["container"]}>
      <div>
        <h1 className={styles["header"]}>{data.title}</h1>
      </div>
      <div>
        <p className={styles["paragraph"]}>{data.firstP}</p>
        <p className={styles["paragraph"]}>{data.secondP}</p>

      </div>
    </div>
    </>
  )
}

export default AboutFirstSection

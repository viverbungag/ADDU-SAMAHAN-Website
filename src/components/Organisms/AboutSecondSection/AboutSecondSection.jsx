import React from 'react'
import styles from "./AboutSecondSection.module.scss";

const AboutSecondSection = ({data}) => {
  return (
    <>
    {/* <div className={styles["component-container"]}>
    <div className="container">
    <div className={styles["flexContainer"]}>
    <div className={styles["Here"]}>Here
    <p className={styles["paragraph"]}>{data.firstP}</p>
    </div>
   
    <div className={styles["AndNow"]}>And
      <p className={styles["paragraph"]}>{data.secondP}</p>
    </div>
    <div className={styles["AndNow"]}>Now
      <p className={styles["paragraph"]}>{data.thirdP}</p>
    </div>

    </div>

    
    </div>
    </div> */}
    <div className={styles["container"]}>
      <div >
      <h1 className={styles["header"]}>HERE AND NOW</h1>
      </div>
      <div>
        <p className={styles["paragraph"]}>{data.firstP}</p>
        <p className={styles["paragraph"]}>{data.secondP}</p>
        <p className={styles["paragraph"]}>{data.thirdP}</p>
      </div>
    </div>
    </>
  )
}

export default AboutSecondSection

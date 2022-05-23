import React from 'react'
import styles from "./aboutSecondSection.module.scss";

const aboutSecondSection = ({firstParagraph, secondParagraph, thirdParagraph}) => {
  return (
    <>
    <div className={styles["flexContainer"]}>
    <div className={styles["outer"]}>

    <div className={styles["inner"]}>
    <div className={styles["Here"]}>Here
    <p className={styles["paragraph"]}>{firstParagraph}</p>
    </div>
    <div className={styles["AndNow"]}>And
    <p className={styles["paragraph"]}>{secondParagraph}</p>
    </div>
    <div className={styles["AndNow"]}>Now
    <p className={styles["paragraph"]}>{thirdParagraph}</p>
    </div>

    </div>

  
    
    </div>
    </div>
    </>
  )
}

export default aboutSecondSection
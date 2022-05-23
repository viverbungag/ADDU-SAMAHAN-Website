import React from 'react'
import styles from "./aboutSecondSection.module.scss";

const aboutSecondSection = ({firstParagraph, secondParagraph, thirdParagraph}) => {
  return (
    <>
    <div className={styles["flexContainer"]}>
    <div className={styles["outer"]}>

    <div className={styles["inner"]}>
    <div className={styles["Here"]}>Here
    <p>{firstParagraph}</p>
    </div>
    <div className={styles["AndNow"]}>And
    <p>{secondParagraph}</p>
    </div>
    <div className={styles["AndNow"]}>Now
    <p>{thirdParagraph}</p>
    </div>

    </div>

  
    
    </div>
    </div>
    </>
  )
}

export default aboutSecondSection
import React from 'react'
import { Button } from "../../ComponentIndex";
import styles from "./Initiative.module.scss" 

const Initiative = ({title,buttonLabel,onClickButton }) => {
  return (
    <>
     <div className={styles["initiativeTitle"]}>
          <span>{title}</span>
        </div>
    <br>
    </br>
    <br>
    </br>
        
    <div className={styles['text']}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>

    <br>
    </br>

    <div className={styles["button"]}>
      <Button label={buttonLabel} onClick={onClickButton} />
    </div>
  </>
  )
}

export default Initiative
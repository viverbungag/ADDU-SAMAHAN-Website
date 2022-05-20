import React from 'react'
import styles from "./Tabs.module.scss";
const Tabs = ({category , stylevar}) => {
  return (
    <div>
        <div>
            <span className={styles["selected"]}>{category}</span>
        </div>
    </div>
  )
}

export default Tabs
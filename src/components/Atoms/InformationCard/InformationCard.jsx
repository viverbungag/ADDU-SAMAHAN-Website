import React from 'react'
import styles from './InformationCard.module.scss'

const InformationCard = ({ title }) => {
  return (
    <>
      <button className={styles["InformationCard"]}>
      {title}
      </button>
    </>
  )
}

export default InformationCard
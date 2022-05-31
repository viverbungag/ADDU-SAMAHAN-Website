import React from 'react'
import {
    Navigation,
    Footer,
    ScholarFAQ,
  } from "../../ComponentIndex";
  import styles from "./SchFAQTemplate.module.scss";
  import { schFAQData } from "../../../data/dataIndex";
  

const SchFAQTemplate = () => {
  return (
    <>
    <Navigation />
    <div className="container">
    <div className={styles["office-of-the-president"]}>
    <ScholarFAQ data={schFAQData} />
    </div>     
    </div>
    <Footer />
    </>
  )
}

export default SchFAQTemplate
import React from 'react'
import {
    Navigation,
    Footer,
    OleFAQ,
  } from "../../ComponentIndex";
  import styles from "./OleFAQTemplate.module.scss";
  import { oleFAQData } from "../../../data/dataIndex";

const OleFAQTemplate = ({data}) => {
  return (
    <>
     <Navigation />
    <div className="container">
    <div className={styles["office-of-the-president"]}>
    <OleFAQ data={oleFAQData} />
    </div>     
    </div>
    <Footer />
    </>
  )
}

export default OleFAQTemplate

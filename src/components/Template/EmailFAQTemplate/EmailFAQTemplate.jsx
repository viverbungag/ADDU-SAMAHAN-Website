import React from 'react'
import {
    Navigation,
    Footer,
    EmailFAQ,
  } from "../../ComponentIndex";
  import styles from "./EmailFAQTemplate.module.scss";
  import { eFAQData } from "../../../data/dataIndex";
  

const EmailFAQTemplate = ({data}) => {

  return (
    <>
     <Navigation />
    <div className="container">
    <div className={styles["office-of-the-president"]}>
    <EmailFAQ data={eFAQData} />
    </div>     
    </div>
    <Footer />
    </>
  )
}

export default EmailFAQTemplate
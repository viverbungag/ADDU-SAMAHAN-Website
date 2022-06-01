import React from "react";
import { Navigation, Footer, FAQSection } from "../../ComponentIndex";
import styles from "./GsuiteFAQTemplate.module.scss";
import { gsuiteFAQsData } from "../../../data/dataIndex";

const GsuiteFAQTemplate = ({ data }) => {
  return (
    <>
      <Navigation />
      <div className="container">
        <div className={styles["office-of-the-president"]}>
          <FAQSection data={gsuiteFAQsData} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GsuiteFAQTemplate;

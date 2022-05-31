import React from "react";
import { Navigation, Footer, FAQSection } from "../../ComponentIndex";
import styles from "./SchFAQTemplate.module.scss";
import { schFAQData } from "../../../data/dataIndex";

const SchFAQTemplate = () => {
  return (
    <>
      <Navigation />
      <div className="container">
        <div className={styles["office-of-the-president"]}>
          <FAQSection data={schFAQData} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SchFAQTemplate;

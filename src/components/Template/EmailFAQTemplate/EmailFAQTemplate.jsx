import React from "react";
import { Navigation, Footer, FAQSection } from "../../ComponentIndex";
import styles from "./EmailFAQTemplate.module.scss";

const EmailFAQTemplate = ({ data }) => {
  return (
    <>
      <Navigation />
      <div className="container">
        <div className={styles["office-of-the-president"]}>
          <FAQSection data={data} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EmailFAQTemplate;

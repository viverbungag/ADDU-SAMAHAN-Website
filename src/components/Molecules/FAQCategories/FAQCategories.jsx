import React from "react";
import { FAQCard } from "../../ComponentIndex";
import styles from "./FAQCategories.module.scss";

const FAQCategories = ({ categories }) => {
  return (
    <div className={styles["FAQCategories"]}>
      {categories.map((category) => {
        return (
          <FAQCard
            key={category.title}
            title={category.title}
            description={category.description}
            icon={category.icon}
            route={category.route}
          />
        );
      })}
    </div>
  )
};

export default FAQCategories;

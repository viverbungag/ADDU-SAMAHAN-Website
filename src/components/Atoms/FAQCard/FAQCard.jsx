import React from "react";
import Link from "next/link";

import styles from "./FAQCard.module.scss";
import { Icon } from "@iconify/react";
import questionCircle from "@iconify/icons-bi/question-circle";
import emailOutline from "@iconify/icons-eva/email-outline";
import webIcon from '@iconify/icons-mdi/web';
import googleIcon from '@iconify/icons-bi/google';
import schoolOutline from '@iconify/icons-mdi/school-outline';
import idCardH from '@iconify/icons-icon-park-outline/id-card-h';

const FAQCard = ({ icon, title, description, route }) => {

  function renderIcon(icon) {
    if (icon === "questionCircle")
      return <Icon icon={questionCircle} height="32" />;
    else if (icon === "emailOutline")
      return <Icon icon={emailOutline} height="32" />;
    else if (icon === "webIcon")
      return <Icon icon={webIcon} height="32" />;
    else if (icon === "googleIcon")
      return <Icon icon={googleIcon} height="32" />;
    else if (icon === "schoolOutline")
      return <Icon icon={schoolOutline} height="32" />;
    else if (icon === "idCardH")
      return <Icon icon={idCardH} height="32" />;
  }

  return (
    <>
    <Link href={route}>
      <div className={styles["faqcard"]}>
        {renderIcon(icon)}
        <div className={styles["faqcard__text"]}>
          <h5 className={styles["title"]}>{title}</h5>
          <p className={styles["description"]}>{description}</p>
        </div>
      </div>
    </Link>
    </>
  );
};

export default FAQCard;

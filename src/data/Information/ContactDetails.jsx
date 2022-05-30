import React from "react";
import styles from "./Information.module.scss";

const ContactDetails = () => {
  return (
    <section className={styles["ContactDetails"]}>
      <h1>CONTACT DETAILS</h1>
      <h5>Directory of Academic Departments</h5>
      <div className={styles["indent"]}>
        {/* ===== SAS ===== */}
        <p>
          <div className={styles["bold"] + " " + styles["italic"]}>
            School of Arts and Sciences (SAS) Office
          </div>
          Contact Number: 09435742785 <br />
          Email: sas.dean@addu.edu.ph
        </p>

        {/* ===== SBG ===== */}
        <p>
          <div className={styles["bold"] + " " + styles["italic"]}>
            School of Business and Governance (SBG) Office
          </div>
          Contact Number: 09399160886 <br />
          Email: jychan@addu.edu.ph
        </p>

        {/* ===== SEA ===== */}
        <p>
          <div className={styles["bold"] + " " + styles["italic"]}>
            School of Engineering and Architecture (SEA) Office
          </div>
          Contact Number: 09173036037 | 09563893829 <br />
          Email: enggarchi@addu.edu.ph
        </p>

        {/* ===== SOE ===== */}
        <p>
          <div className={styles["bold"] + " " + styles["italic"]}>
            School of Education (SOE) Office
          </div>
          Contact Number: 09430057706 | <br />
          Email: ajcasumpa@addu.edu.ph | dmherbabuena@addu.edu.ph
        </p>

        {/* ===== SOE ===== */}
        <p>
          <div className={styles["bold"] + " " + styles["italic"]}>
            School of Nursing (SON) Office
          </div>
          Contact Number: 09338599018 <br />
          Email: mmbulac@addu.edu.ph
        </p>
      </div>

      <h5>Directory of Offices </h5>
      <div className={styles["indent"]}>
        {/* ===== AVP ===== */}
        <p>
          <div className={styles["bold"] + " " + styles["italic"]}>
            Office of the Academic Vice President (AVP)
          </div>
          Email: vp.academics@addu.edu.ph
        </p>

        {/* ===== OSA ===== */}
        <p>
          <div className={styles["bold"] + " " + styles["italic"]}>
            Office of Student Affairs (OSA)
          </div>
          Email: univ.studentsaffairs@addu.edu.ph <br />
          Facebook:{" "}
          <a
            href="https://www.facebook.com/officialadduosa/"
            target="_blank"
            rel="noreferrer"
          >
            Addu Office of Student Affairs - Official
          </a>{" "}
          <br />
          Twitter: @AdDUOSA <br />
        </p>

        {/* ===== ADMISSIONS ===== */}
        <p>
          <div className={styles["bold"] + " " + styles["italic"]}>
            Admissions Office
          </div>
          Email: admission@addu.edu.ph <br />
          Facebook/Messenger:{" "}
          <a
            href="https://www.facebook.com/ADDUCollegeAdmission"
            target="_blank"
            rel="noreferrer"
          >
            https://www.facebook.com/ADDUCollegeAdmission
          </a>{" "}
          <br />
          Google Forms for Concerns:{" "}
          <a href="https://tiny.cc/Admissions20" target="_blank" rel="noreferrer">
            tiny.cc/Admissions20
          </a>
        </p>

        {/* ===== FINANCE ===== */}
        <p>
          <div className={styles["bold"] + " " + styles["italic"]}>
            Finance Office
          </div>
          Email: tertiary.finance@addu.edu.ph <br />
          <div style={{ paddingLeft: "3.3rem" }}>
            addufinance1@gmail.com <br />
            addufinance2@gmail.com <br />
            addufinance3@gmail.com <br />
          </div>
          Telephone: 221-2411 local 8217 or 8237 <br />
          Facebook/Messenger:{" "}
          <a
            href="https://www.facebook.com/addufinance"
            target="_blank"
            rel="noreferrer"
          >
            https://www.facebook.com/addufinance
          </a>{" "}
          <br />
          Google Forms for Concerns:{" "}
          <a href="https://tiny.cc/Finance20" target="_blank" rel="noreferrer">
            tiny.cc/Finance20
          </a>
        </p>

        {/* ===== REGISTRAR ===== */}
        <p>
          <div className={styles["bold"] + " " + styles["italic"]}>
            Registrar
          </div>
          Email: registrar@addu.edu.ph
        </p>

        {/* ===== MIS ===== */}
        <p>
          <div className={styles["bold"] + " " + styles["italic"]}>
            Management Information Office (MIS)
          </div>
          Email: mis@addu.edu.ph <br />
          Twitter: @addu_mis <br />
          Google Forms for Concerns:{" "}
          <a href="https://tiny.cc/MIS20" target="_blank" rel="noreferrer">
            tiny.cc/MIS20
          </a>
        </p>

        {/* ===== ppo ===== */}
        <p>
          <div className={styles["bold"] + " " + styles["italic"]}>
            Physical Plant Office (PPO)
          </div>
          Email: fzremolino@addu.edu.ph
        </p>
      </div>
    </section>
  );
};

export default ContactDetails;

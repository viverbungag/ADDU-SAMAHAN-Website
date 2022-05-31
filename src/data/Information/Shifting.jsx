import React from "react";
import styles from "./Information.module.scss";

const Shifting = () => {
  return (
    <section className={styles["Shifting"]}>
      <h1>SHIFTING</h1>
      <h5>Shifting</h5>
      <ol>
        <li>Log on to your SIS Account.</li>
        <li>
          Open the Shifting Form which can be found on the upper left part of
          the page.
        </li>
        <li>
          Fill in the necessary information and click “Submit” button once
          completed.
        </li>
        <li>
          Wait for the notification of approval from the current Department
          Chairperson and the Department Chairperson of the desired new program.
          The notice will appear in the SIS account.
          <p className={styles["indent-emphasize"] + " " + styles["italic"]}>
            Note: If shifting application is approved, the student will be
            released by his/her Department Chairperson. The Department
            Chairperson of the new program is notified through the Administrator
            Information Management account and will create a new enrolment
            registration for the student. The Chairperson will also determine
            maximum course load and academic status of the student.
          </p>
        </li>
        <li>
          The student may enroll following the online procedures once the
          notification of approval to shift is received.
        </li>
      </ol>
    </section>
  );
};

export default Shifting;

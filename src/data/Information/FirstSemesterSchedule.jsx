import React from "react";
import styles from "./Information.module.scss";

const FirstSemesterSchedule = () => {
  return (
    <>
      <section className={styles["FirstSemesterSchedule"]}>
        <h1>1<sup>st</sup> Semester Schedule</h1>
        <h5>
          Schedule for 1st Semester (A.Y. 2022-2023) Enrollment and Classes
        </h5>

        <p>
          <span className={styles["bold"]}>June 1 to 11</span>
          <br />
          Pre-Registration
        </p>
        <p>
          <span className={styles["bold"]}>June 1 to July 1</span>
          <br />
          Enrollment Period
        </p>
        <p>
          <span className={styles["bold"]}>July 4 to 31</span>
          <br />
          Late Enrollment Period
        </p>
        <p>
          <span className={styles["bold"]}>July 18</span>
          <br />
          Start of 1st Semester Classes
        </p>
      </section>
    </>
  );
};

export default FirstSemesterSchedule;

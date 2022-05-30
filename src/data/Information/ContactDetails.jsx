import React from "react";
import styles from "./Information.module.scss";

const EnrollmentAndPayment = () => {
  return (
    <section className={styles["EnrollmentAndPayment"]}>
      <h5>Enrollment</h5>
      <ol>
        <li>Clear all tagged obligations from the previous semester by contacting concerned offices.</li>
        <li>Choose the schedule of classes of the courses that are required to be taken.</li>
        <li>Pay the required amount online. Once the payment has been processed, the student will be tagged as “enrolled” in the SIS.
          <br />
          <div className={styles["italic"] + " " + styles["indent-emphasize"]}>
            Payment will reflect within one (1) to three (3) business days. For other concerns, please message the AdDU Finance on Facebook, or through their telephone number (082) 221 2411 loc 8237 or 8217.
          </div>
        </li>
        <li>Print or screenshot the schedule and wait for the start of the semester.</li>
      </ol>

      <br/>

      <h5>Late Enrollment</h5>
      <div className={styles["indent"]}>
        <p>Late enrollment may be allowed until the first week of the semester, subject to the payment of surcharges.</p>
        <p>Students who failed to confirm their enrollment via their payment of the fees before the deadline set (or the commencement of the Enrolment Confirmation and Reservation Cancellation Procedure) shall be treated as late enrollees when no payment has been made prior to the start of classes.</p>
      </div>
    </section>
  );
};

export default EnrollmentAndPayment;

import React from "react";
import styles from "./Information.module.scss";

const Appeals = () => {
  return (
    <section className={styles["Appeals"]}>
      <h1>APPEALS</h1>
      <h5>QPI Appeal</h5>
      <ol>
        <li>Log on to your SIS Account.</li>
        <li>
          Open the QPI Appeal Form which can be found on the upper left part of
          the page.
        </li>
        <li>
          Fill in necessary information in the QPI Appeal Form and click the
          “Submit” button upon completion.
          <p className={styles["indent-emphasize"] + " " + styles["italic"]}>
            Note: The University Standards Committee deliberates QPI Appeals
            endorsed by the Academic Vice President. If an application of a
            student for QPI Appeal has been approved for a probationary
            enrolment in his/her program, the Department Chairperson will be
            notified in his/her Administrator Information Management account.
            The Department Chairperson will advise the student of his/her
            maximum course load and list of courses to enroll in the following
            semester.
          </p>
        </li>
        <li>
          A notification will appear in the SIS account. If approved, students
          can now enroll by following online enrollment procedures.
          <p className={styles["indent-emphasize"] + " " + styles["italic"]}>
            Note: A disapproved notification means dismissal from the
            university. The student may re-appeal to AVP by sending e-mail to
            vp.academics@addu.edu.ph.
          </p>
        </li>
      </ol>

      <h5>Grade Appeal</h5>
      <ol>
        <li>
          Send an email to the faculty member containing the complaint on the
          final grade received.
        </li>
        <li>
          If original grade needs to be changed, the faculty member will email
          grade appeal to standardscom@addu.edu.ph with the reason for changing
          the grade and an attachment of the copy of class record.
        </li>
        <li>
          If the appeal is approved by the University Standards Committee, the
          AVP will email the Registrar to implement a change of grade. A
          notification will be sent to both the faculty member and the student.
        </li>
      </ol>
    </section>
  );
};

export default Appeals;

import React from "react";
import styles from "./Information.module.scss";

const LeaveOfAbsences = () => {
  return (
    <section className={styles["LeaveOfAbsences"]}>
      <h1>LEAVE OF ABSENCES</h1>
      <h5>Leave of Absence (LOA)</h5>
      <p>
        LOA is processed by a student who needs to temporarily discontinue
        his/her enrollment.
      </p>
      <ol>
        <li>Open the LOA form available in the SIS account.</li>
        <li>
          Fill in necessary information and click “Submit” button once the form
          is completed.
        </li>
        <li>
          Wait for the notification from the Finance Office in the SIS account.
          Once cleared by the finance office, a notification of approval from
          the Admission Director will be received in the SIS account
        </li>
      </ol>

      <h5>Reinstatement Application</h5>
      <ol>
        <li>
          Accomplish the Leave of Absence (LOA) form and/or Reinstatement
          Application.
        </li>
        <li>
          Confirm with the Registrar regarding the accomplished Reinstatement
          Application.
        </li>
        <li>
          Contact the Management Information System (MIS) Office regarding the
          Add and Drop button in the Student Information System (SIS).
          <div className={styles["indent-emphasize"]}>
            Registrar: registrar@addu.edu.ph <br />
            MIS: mis@addu.edu.ph
          </div>
        </li>
      </ol>
    </section>
  );
};

export default LeaveOfAbsences;

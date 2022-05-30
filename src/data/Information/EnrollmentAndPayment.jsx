import React from "react";
import styles from "./Information.module.scss";

const EnrollmentAndPayment = () => {
  return (
    <section className={styles["EnrollmentAndPayment"]}>
      <h1>ENROLLMENT AND PAYMENT</h1>
      <h5>Enrollment</h5>
      <ol>
        <li>
          Clear all tagged obligations from the previous semester by contacting
          concerned offices.
        </li>
        <li>
          Choose the schedule of classes of the courses that are required to be
          taken.
        </li>
        <li>
          Pay the required amount online. Once the payment has been processed,
          the student will be tagged as “enrolled” in the SIS.
          <br />
          <div className={styles["italic"] + " " + styles["indent-emphasize"]}>
            Payment will reflect within one (1) to three (3) business days. For
            other concerns, please message the AdDU Finance on Facebook, or
            through their telephone number (082) 221 2411 loc 8237 or 8217.
          </div>
        </li>
        <li>
          Print or screenshot the schedule and wait for the start of the
          semester.
        </li>
      </ol>

      <br />

      <h5>Late Enrollment</h5>
      <div className={styles["indent"]}>
        <p>
          Late enrollment may be allowed until the first week of the semester,
          subject to the payment of surcharges.
        </p>
        <p>
          Students who failed to confirm their enrollment via their payment of
          the fees before the deadline set (or the commencement of the Enrolment
          Confirmation and Reservation Cancellation Procedure) shall be treated
          as late enrollees when no payment has been made prior to the start of
          classes.
        </p>
      </div>

      <h5>Payment Methods</h5>
      <div className={styles["indent"]}>
        <p>There are 4 options to pay your fees.</p>
        <ol>
          <li>Online Payments (Banks, GCASH)</li>
          <li>
            Over-The-Counter (OTC) Payment Center (Banks, Cebuana, Savemore,
            etc.)
            <ul>
              <li>
                You can still make payments using any of AdDU{"'"}s recognized
                banks or online payment channels.{" "}
                <span className={styles["italic"]}>
                  For further information, please visit SAMAHAN{"'"}s prior
                  postings.
                </span>
              </li>
            </ul>
          </li>
          <li>
            Drive-thru Payment Counter - no more google forms
            <ul>
              <li>
                The Drive-thru Payment Center is located at AdDU (1) entrance
                gate of the Community Center building, Jacinto campus; (2)
                GS/JHS Matina Campus; and (3) SHS Bangkal Campus. Please make
                sure that you pay the exact amount in cash for a faster
                transaction. Daily Schedule: 8AM to 4PM only Mondays to Fridays
                and 8AM to 11:30AM on Saturdays.
              </li>
            </ul>
          </li>
          <li>
            Walk-in Payments
            <ul>
              <li>
                The Finance Office Jacinto Campus is now open to accept walk-in
                payments starting November 8, 2021 from 9:00AM - 4:00PM every
                Monday-Friday, and 9:00AM-12:00 noon every Saturday except
                Holidays.
              </li>
              <li>
                Please be aware that the finance office is located in the
                Bellarmine Building, and the Jacinto Gate will be the only
                entrance and exit for walk-in clients. Furthermore, face masks
                are still necessary, and please bring your own pens to fill out
                the health declaration form when entering the campus.
              </li>
            </ul>
          </li>
        </ol>
      </div>

      <br />

      <h5>Enrollment Hold</h5>
      <div className={styles["indent"]}>
        <p>
          The student{"'"}s enrollment registration for the current
          semester/summer term is not updated/created yet due to:
        </p>
        <ol>
          <li>
            <span className={styles["bold"]}>Finance Hold</span> - A hold coming
            from the finance office which requires students to pay their
            outstanding balances for the previous semester.
            <div className={styles["indent-emphasize"]}>
              <p className={styles["bold"]}>Finance Office</p>
              <p>
                Email: tertiary.finance@addu.edu.ph <br />
                Tel: 221-2411 local 8217 or 8237 <br />
                Facebook/Messenger:{" "}
                <a
                  href="https://www.facebook.com/addufinance"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.facebook.com/addufinance
                </a>
                <br />
              </p>
              <p>
                All the Finance Associates are available from 8 AM to 5 PM on
                Monday through Friday and from 8 AM to 12 PM only on Saturday.
                Offices are closed on Sundays and holidays.
              </p>
            </div>
          </li>
          <li>
            <span className={styles["bold"]}>OSA Hold</span> – A hold coming
            from the Office of Student Affairs (OSA) for uncompleted or
            non-compliance with directives/call slips relating to violations of
            the student handbook (e.g., uniform, ID, validation, etc.)
            <div className={styles["indent-emphasize"]}>
              <p className={styles["bold"]}>Office of Student Affairs (OSA)</p>
              <p>
                Email: univ.studentsaffairs@addu.edu.ph <br />
                Facebook:{" "}
                <a
                  href="https://www.facebook.com/officialadduosa/?__cft__[0]=AZU40zGk-PvR4s42jy67Wdn1m-8pQFjmAl8WWYXLBFXCr2r2Obvgl-Pn4Xkko47uCzYzBaQ-ab2Tl3Igb5YQa21bjYN3pi93LhEDv_PNLqrLlZwD1UdE5RhiJJkVDNhJl5md9_e0HNH98-I6PTIjMctW&__tn__=kC%2CP-R"
                  target="_blank"
                  rel="noreferrer"
                >
                  Addu Office of Student Affairs - Official
                </a>{" "}
                <br />
                Twitter: @AdDUOSA <br />
              </p>
              <p>
                Please be informed that the regular working schedule of the
                Office of Student Affairs for online queries is from 8AM-12NN,
                1PM-5PM every Monday to Friday and 8AM-12NN every Saturday,
                excluding holidays.
              </p>
            </div>
          </li>
          <li>
            <span className={styles["bold"]}>Department Hold</span> – A hold
            coming from the respective department to require students to contact
            their departments to fulfill certain requirements.
          </li>
          <li>
            <span className={styles["bold"]}>QPI Hold</span> – For not obtaining
            the required QPI to be retained in the University. The student has
            to contact the concerned department/office to settle and unblock the
            hold before his registration be created.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default EnrollmentAndPayment;

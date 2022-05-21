import { forwardRef } from "react";
import styles from "./Button.module.scss";

// const Button = ({ label, route }) => {

//   return (
//     <button className={styles.buttonStyle}>
//       <span className={styles.buttonLabel}>{label}</span>
//     </button>
//   );
// };

const Button = forwardRef(({ onClick, href, label }, ref) => {
  return (
    <div className={styles["button"]}>
      <a
        className={styles["buttonStyle"]}
        href={href}
        onClick={onClick}
        ref={ref}
      >
        <span className={styles["buttonLabel"]}>{label}</span>
      </a>
    </div>
  );
});

Button.displayName = "Button";

export default Button;

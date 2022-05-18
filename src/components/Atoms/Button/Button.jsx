import React from "react";
import styles from "./Button.module.scss";

// const Button = ({ label, route }) => {

//   return (
//     <button className={styles.buttonStyle}>
//       <span className={styles.buttonLabel}>{label}</span>
//     </button>
//   );
// };

const Button = React.forwardRef(({ onClick, href, label}, ref) => {
  return (
    <a className={styles["buttonStyle"]} href={href} onClick={onClick} ref={ref}>
      <span className={styles["buttonLabel"]}>{label}</span>
    </a>
  );
})

Button.displayName = 'Button';

export default Button;

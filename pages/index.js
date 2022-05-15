import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Officer from "../src/components/Atoms/Officer/Officer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Officer name="Patrick Matayabas" position="SysDev Director" />
    </div>
  );
}

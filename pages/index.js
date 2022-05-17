import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Officer from "../src/components/Atoms/Officer/Officer";

import { Navigation } from "../src/components/ComponentIndex";

export default function Home() {
  return (
    <>
      <Navigation />

      <div className={styles.container}>
        <Officer name="Patrick Matayabas" position="SysDev Director" />
      </div>
    </>
  );
}

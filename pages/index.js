import Head from "next/head";
import Image from "next/image";
import Officer from "../src/components/Atoms/Officer/Officer";

import { Navigation } from "../src/components/ComponentIndex";

export default function Home() {
  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="httpEquiv" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          key="viewport"
        />

        {/* PRECONNECT TO GOOGLE FONT */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        {/* TITLE AND ICON */}
        <title key="title">SAMAHAN</title>
      </Head>
      <Navigation />
    </>
  );
}

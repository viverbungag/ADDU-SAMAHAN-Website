import React from "react";
import Head from "next/head";
import SysDevPage from '../src/components/Pages/SysDevPage/SysDevPage'

const sysdev = () => {
  return (
    <>
      <Head>
        <title>SysDev Secret Page</title>
      </Head>
      <SysDevPage />
    </>
  );
};

export default sysdev;

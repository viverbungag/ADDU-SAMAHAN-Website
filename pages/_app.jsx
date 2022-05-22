import Head from "next/head";
import "../styles/globals.css";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import App from "next/app";

// function MyApp({ Component, pageProps, router }) {
//   return (
//     <>
// <Head>
//   <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="httpEquiv" />
//   <meta
//     name="viewport"
//     content="width=device-width, initial-scale=1.0"
//     key="viewport"
//   />

//   {/* PRECONNECT TO GOOGLE FONT */}
//   <link rel="preconnect" href="https://fonts.gstatic.com" />

//   {/* TITLE AND ICON */}
//   <title key="title">SAMAHAN</title>
// </Head>

//    <AnimateSharedLayout type="crossfade">
//   <AnimatePresence exitBeforeEnter>
//     <Component {...pageProps} key={router.route} />
//   </AnimatePresence>
// </AnimateSharedLayout>;

//     </>
//   );
// }

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props;
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

        <AnimateSharedLayout type="crossfade">
          <Component {...pageProps} key={router.route} />
        </AnimateSharedLayout>
      </>
    );
  }
}

export default MyApp;

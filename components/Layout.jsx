import Head from "next/head";
import Footer from "./ui/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pense Direito</title>
        <meta
          name="description"
          content="Blinder making it simple for you to build and grow your SaaS applications, or any business idea"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

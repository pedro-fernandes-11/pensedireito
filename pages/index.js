import Head from "next/head";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import Hero from "../components/ui/Hero";
import Location from "../components/ui/Location";
import FixedContact from "../components/ui/FixedContact";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content="index" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
        />
      </Head>
      <Hero />
      <CTA />
      <Features />
      <Location />
      <FixedContact />
    </>
  );
}

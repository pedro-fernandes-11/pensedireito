import Head from "next/head";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import Hero from "../components/ui/Hero";
import Testimonials from "../components/ui/Testimonials";
import Location from "../components/ui/Location";
import FixedContact from "../components/ui/FixedContact";
import SectionWrapper from "../components/SectionWrapper";

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

      <SectionWrapper
        id="sobre"
        className="max-w-screen-xl mx-auto px-4 md:px-8 text-gray-600"
      >
        <CTA />
      </SectionWrapper>

      <Features
        id="atuacao"
        className="bg-custom-library-2 max-w-screen mx-auto text-gray-600"
      />

      <SectionWrapper className="max-w-screen-xl mx-auto px-4 md:px-8 text-gray-600">
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper
        id="localizacao"
        className="max-w-screen-xl mx-auto px-4 md:px-8 text-gray-600"
      >
        <Location />
      </SectionWrapper>

      <FixedContact />
    </>
  );
}

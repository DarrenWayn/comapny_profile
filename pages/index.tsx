import Head from "next/head";
import AboutUs from "./components/aboutus";
import ContactUs from "./components/contactus";
import Footer from "./components/footer";
import Masthead from "./components/masthead";
import Skills from "./components/skills";
import Testimonials from "./components/testimonials";
import TrustedBy from "./components/trustedby";
import Works from "./components/works";

export default function Home() {
  return (
    <div>
      <Head>
        <title></title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masthead />
      <AboutUs />
      <Skills />
      <Works />
      <TrustedBy />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

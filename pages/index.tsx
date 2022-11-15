import Head from "next/head";
import AboutUs from "./components/aboutus";
import Masthead from "./components/masthead";
import Skills from "./components/skills";

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
    </div>
  );
}

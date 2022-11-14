import React from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl lg:text-4xl tracking-tight">
          <strong>
            We will help this app go to production with better results
          </strong>{" "}
          Our team of engineers has created one of the fastest known name app in
          both local and international standard
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Our Team</h2>
        <div className="mt-2">the &ldquo;the test member page&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          <Member
            id="1"
            name="marco"
            socialId="@marco"
            link="https://github.com/marco/"
          />
          <Member
            id="2"
            name="marco"
            socialId="@marco"
            link="https://github.com/marco/"
          />
          <Member
            id="3"
            name="marco"
            socialId="@marco"
            link="https://github.com/marco/"
          />
          <Member
            id="4"
            name="marco"
            socialId="@marco"
            link="https://github.com/marco/"
          />
          <Member
            id="5"
            name="marco"
            socialId="@marco"
            link="https://github.com/marco/"
          />
          <Member
            id="6"
            name="marco"
            socialId="@marco"
            link="https://github.com/marco/"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

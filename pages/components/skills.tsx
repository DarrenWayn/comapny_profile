import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-36 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading=[1.15]">
          <div>We know this company test inside out</div>
          <span>
            Our team test has contributed more than 100+ big name open source
            projects worldwide, with over
          </span>{" "}
          <strong>1,788 commits.</strong>
        </div>
      </div>
    </div>
  );
};

export default Skills;

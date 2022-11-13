import React from "react";
import Image from "next/image";

const Masthead: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Image
        src="/assets/bg-img.jpg"
        width={500}
        height={500}
        className="absolute w-full h-full object-cover"
        alt="this is a test image background"
      />
      <div className="P-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,4)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl">Company Profile</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>This is a Test,</span> <span>done right.</span>
        </h2>
      </div>
    </div>
  );
};

export default Masthead;

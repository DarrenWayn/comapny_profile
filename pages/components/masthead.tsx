import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import { ScrollContext } from "@utils/scroll-observer";

const Masthead: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }
  return (
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col items-center justify-center"
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
    >
      <Image
        src="/assets/bg-img.jpg"
        width={500}
        height={500}
        className="absolute w-full h-full object-cover"
        alt="this is a test image background"
      />
      <div className={`flex-grow-0 pt-10 transition-opacity duration-1000 z-0`}>
        <Image
          src="/assets/logo.png"
          width={128 / 3}
          height={114 / 3}
          alt="logo"
        />
      </div>
      <div className="P-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,4)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl">Company Profile</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight">
          <span>This is a Test,</span> <span>done right.</span>
        </h2>
      </div>
      <div className="flex-grow-0 pb-20 md:pb-10 transition-opacity duration-1000 z-0">
        <Image
          src="/assets/logo.png"
          width={188 / 3}
          height={105 / 3}
          alt="scroll down"
        />
      </div>
    </div>
  );
};

export default Masthead;

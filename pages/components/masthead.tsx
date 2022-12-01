import React, { useRef, useContext, useState, useCallback } from "react";
import Image from "next/image";
import { ScrollContext } from "@utils/scroll-observer";
import Logo from "@assets/logo.png";
import DownArrow from "@assets/down-arrow.png";
import BgImage from "@assets/bg-img.jpg";
import FollowImage from "./follow-image";
/* import BgVideo from "@assets/bg-video.mp4"; */

const Masthead: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);

  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleImageLoaded = useCallback(() => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 1000);
  }, []);

  return (
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col items-center justify-center sticky top-0 z-[-1]"
      style={{
        transform: `translateY(-${progress * 20}vh)`,
      }}
    >
      {/* <video */}
      {/*   autoPlay */}
      {/*   loop */}
      {/*   muted */}
      {/*   playsInline */}
      {/*   className="absolute w-full h-full object-cover" */}
      {/* > */}
      {/*   <source src={BgVideo} type="video/mp4" /> */}
      {/* </video> */}
      <Image
        src={BgImage}
        width={500}
        height={500}
        className="absolute w-full h-full object-cover"
        alt="this is a test image background"
      />
      <div
        className={`${
          imageLoaded ? "blur-none" : "blur-md"
        } flex-grow-0 pt-10 transition-opacity duration-1000 z-0`}
      >
        <Image
          src={Logo}
          width={488 / 3}
          height={214 / 3}
          alt="logo"
          onLoad={handleImageLoaded}
          priority
        />
      </div>
      <FollowImage
        handleImageLoaded={handleImageLoaded}
        imageLoaded={imageLoaded}
      />
      {/* <div className="p-1{/* 2 font-bold text-white drop-shadow-[0_5px_3px_rgba(0,0,0,4)] text-center flex-1 flex items-center justify-center flex-col"> */}
      {/*   <h1 className="mb-6 text-4xl xl:text-5xl">Company Profile</h1> */}
      {/*   <h2 className="mb-2 text-2xl xl:text-3xl tracking-tight"> */}
      {/*     <span>This is a Test,</span> <span>done right.</span> */}
      {/*   </h2> */}
      {/* </div> */}, (1000);
      {/* <div className="flex-grow-0 pb-20 md:pb-10 transition-opacity duration-1000 z-1"> */}
      <div
        className={`flex-grow-0 pb-20 md:pb-10 transition-opacity duration-1000 z-0 ${
          imageLoaded ? "opacity-100" : "opacity-0 -translate-y-10"
        }`}
      >
        <Image
          src={DownArrow}
          width={188 / 3}
          height={105 / 3}
          alt="scroll down"
          onLoad={handleImageLoaded}
          priority
        />
      </div>
    </div>
  );
};

export default Masthead;

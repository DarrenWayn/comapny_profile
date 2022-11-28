import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const logos = "https://placeimg.com/192/192/people";

const ClientLogos = () => {
  return (
    <>
      <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
        <SliderItem width={150}>
          <Image
            src={logos}
            width={150}
            height={50}
            alt="darren"
            objectFit="contain"
            unoptimized
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={logos}
            width={150}
            height={50}
            alt="darren"
            objectFit="contain"
            unoptimized
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={logos}
            width={150}
            height={50}
            alt="darren"
            objectFit="contain"
            unoptimized
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={logos}
            width={150}
            height={50}
            alt="darren"
            objectFit="contain"
            unoptimized
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={logos}
            width={150}
            height={50}
            alt="darren"
            objectFit="contain"
            unoptimized
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={logos}
            width={150}
            height={50}
            alt="darren"
            objectFit="contain"
            unoptimized
          />
        </SliderItem>
        <SliderItem width={150}>
          <Image
            src={logos}
            width={150}
            height={50}
            alt="darren"
            objectFit="contain"
            unoptimized
          />
        </SliderItem>
      </SliderContainer>
    </>
  );
};

export default ClientLogos;

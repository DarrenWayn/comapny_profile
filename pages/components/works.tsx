import React from "react";
import { Tile, TileBackground, TileContent, TileWraper } from "./tile";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "./work";

import Image from "next/image";
import BankingFirst from "@assets/bankingfirst.png";
import BankingSecond from "@assets/bankingsecond.png";
import BankingThird from "@assets/bankingthird.png";

const Works = () => (
  <TileWraper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We built</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                <WorkLink href="https://darren-portfolio.vercel.app/">
                  Banking&apos;s app
                </WorkLink>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src={BankingFirst}
                /* layout="responsive" */
                width={840}
                height={1620}
                alt="banking welcome app"
              />
            </WorkRight>
            {/* <span className="text-9xl">Foo {progress}</span> */}
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We Made It</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                Clean and Fast
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src={BankingSecond}
                /* layout="responsive" */
                width={840}
                height={1620}
                alt="banking welcome app"
              />
            </WorkRight>
            {/* <span className="text-9xl">Foo {progress}</span> */}
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We Made It</div>
              <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                Working Flawlessly
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src={BankingThird}
                /* layout="responsive" */
                width={840}
                height={1620}
                alt="banking welcome app"
              />
            </WorkRight>
            {/* <span className="text-9xl">Foo {progress}</span> */}
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWraper>
);
export default Works;

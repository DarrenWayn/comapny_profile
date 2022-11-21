import React from "react";
import { Tile, TileBackground, TileContent, TileWraper } from "./tile";

const Works = () => (
  <TileWraper numOfPages={3}>
    <TileBackground>test</TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <span className="text-9xl">Foo {progress}</span>
        )}
      ></Tile>
    </TileContent>
    <TileContent>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <span className="text-9xl">Lea {progress}</span>
        )}
      ></Tile>
    </TileContent>
    <TileContent>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <span className="text-9xl">Darren {progress}</span>
        )}
      ></Tile>
    </TileContent>
  </TileWraper>
);
export default Works;

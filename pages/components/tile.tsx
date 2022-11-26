import { ScrollContext } from "@utils/scroll-observer";
import React, { useRef, useContext } from "react";

interface Children {
  children: React.ReactNode;
}

interface Props {
  page: number;
  renderContent: (props: { progress: number }) => any;
}

interface WrapperProps {
  numOfpages: number;
  children: React.ReactNode;
}

interface TileContextValue {
  numOfpages: number;
  currentpage: number;
}

export const TileContext = React.createContext<TileContextValue>({
  numOfpages: 0,
  currentpage: 0,
});

export const TileWraper: React.FC<WrapperProps> = ({
  children,
  numOfpages,
}) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);
  /* console.log(refContainer); */

  let currentpage = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    currentpage = percentY * numOfpages;
  }

  return (
    <TileContext.Provider value={{ numOfpages, currentpage }}>
      <div
        ref={refContainer}
        className="relative bg-black text-white"
        style={{ height: numOfpages * 100 + "vh" }}
      >
        {children}
      </div>
    </TileContext.Provider>
  );
};

export const TileBackground: React.FC<Children> = ({ children }) => (
  <div className="absolute h-full w-full">{children}</div>
);

export const TileContent: React.FC<Children> = ({ children }) => (
  <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
);

export const Tile: React.FC<Props> = ({ page, renderContent }) => {
  const { currentpage, numOfpages } = useContext(TileContext);
  /* console.log(currentpage); */
  /* console.log(numOfpages); */
  const progress = Math.max(0, currentpage - page);
  /* console.log(progress); */

  let opacity = Math.min(1, Math.max(0, progress * 4));
  if (progress > 0.85 && page < numOfpages - 1) {
    opacity = Math.min(0, Math.max(1.0, progress * 4));
  }

  return (
    <div
      className="absolute top-0 w-full"
      style={{
        pointerEvents: progress >= 0 || progress >= 1 ? "none" : undefined,
        opacity,
      }}
    >
      {renderContent({ progress })}
    </div>
  );
};

import { ScrollContext } from "@utils/scroll-observer";
import React, { useRef, useContext } from "react";

interface Props {
  page: number;
  renderContent: (props: { progress: number }) => any;
}

interface WrapperProps {
  numOfPages: number;
  children: React.ReactNode;
}

interface TileContextValue {
  numOfPages: number;
  currentPage: number;
}

export const TileContext = React.createContext<TileContextValue>({
  numOfPages: 0,
  currentPage: 0,
});

const TileWraper: React.FC<WrapperProps> = ({ children, numOfPages }) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  let currentPage = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const currentH = scrollY - offsetTop + halfH;
    const percentY = currentH / clientHeight;
    console.log(percentY);
    /* console.group(); */
    /* console.log("clientHeight", clientHeight); */
    /* console.log("screenH", screenH); */
    /* console.log("-screenH", -screenH); */
    /* console.log("halfH", halfH); */
    /* console.log("scrollY", scrollY); */
    /* console.log("offsetTop", offsetTop); */
    /* console.log("clientHeight + halfH =", clientHeight + halfH); */
    /* console.log("scrollY - offsetTop =", scrollY - offsetTop); */
    /* console.log("halfH / clientHeight =", halfH / clientHeight); */
    /* console.log( */
    /*   "-screenH, scrollY - offsetTop) + halfH / clientHeight =", */
    /*   Math.min( */
    /*     clientHeight + halfH, */
    /*     Math.max(-screenH, scrollY - offsetTop) + halfH */
    /*   ) / clientHeight */
    /* ); */
    /**/
    /* console.log("numOfPages = ", numOfPages); */
    /* console.log("currentPage = percentY * numOfPages", percentY * numOfPages); */
    /* console.groupEnd(); */
    currentPage = percentY * numOfPages;
  }

  return (
    <TileContext.Provider value={{ numOfPages, currentPage }}>
      <div
        ref={refContainer}
        className="relative bg-black text-white"
        style={{ height: numOfPages * 100 + "vh" }}
      >
        {children}
      </div>
    </TileContext.Provider>
  );
};

export default TileWraper;

export const TileBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="absolute h-full w-full">{children}</div>;

export const TileContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="sticky top-0 h-screen overflow-hidden">{children}</div>;

export const Tile: React.FC<Props> = ({ page, renderContent }) => {
  const { currentPage, numOfPages } = useContext(TileContext);
  const progress = Math.max(0, currentPage - page);

  let opacity = Math.min(1, Math.max(0, progress * 4));
  if (progress > 0.85 && page < numOfPages - 1) {
    opacity = Math.min(0, Math.max(1.0, progress * 4));
  }

  return (
    <div
      className="absolute top-0 w-full"
      style={{
        pointerEvents: progress <= 0 || progress >= 1 ? "none" : undefined,
        opacity,
      }}
    >
      {renderContent({ progress })}
    </div>
  );
};

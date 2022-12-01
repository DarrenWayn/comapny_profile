import React from "react";
import Image from "next/image";
import YoutubeApp from "@assets/youtube-app.png";

type Props = {
  handleImageLoaded: () => any;
  imageLoaded: boolean;
};

const FollowImage: React.FC<Props> = ({ handleImageLoaded, imageLoaded }) => (
  <div
    className={`p-12 drop-shadow-[0_5px_3px_rgba(0,0,0,4)] flex-1 flex items-center justify-center ${
      imageLoaded ? "blur-none" : "blur-md"
    }`}
  >
    <Image
      src={YoutubeApp}
      width={828}
      alt="this is a test image app"
      onLoad={handleImageLoaded}
      priority
    />
  </div>
);

export default FollowImage;

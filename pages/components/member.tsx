import React from "react";
// import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  socialId: string;
  link: string;
}

const Member: React.FC<Props> = ({ id, name, socialId, link }) => (
  <div>
    <img
      src={`https://robohash.org/${id}?set=set2&size=180x180`}
      alt={name}
      width={1366}
      height={1555}
    />
    <div className="text-2xl xl:text-3xl">{name}</div>
    <div className="text-xl">
      <Link href={link}>{socialId}</Link>
    </div>
  </div>
);

export default Member;

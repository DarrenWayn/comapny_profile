import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  socialId: string;
  link: string;
}

const Member = ({ id, name, socialId, link }: Props) => {
  const teamMember = `https://robohash.org/${id}?set=set2&size=180x180`;

  return (
    <div>
      <Image
        src={teamMember}
        alt={name}
        width={1366}
        height={1555}
        unoptimized
      />
      <div className="text-2xl xl:text-3xl">{name}</div>
      <div className="text-xl">
        <Link href={link}>{socialId}</Link>
      </div>
    </div>
  );
};

export default Member;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import WhiteLogo from "@assets/white-logo.png";

const Footer: React.FC = () => (
  <footer className="min-h-full flex gap-8 items-center justify-center bg-black text-white p-20">
    <Image src={WhiteLogo} width={100} height={70} alt="logo" />
    <Link href="/terms">Terms</Link>
    <Link href="/privacy">Privacy Policy</Link>
  </footer>
);

export default Footer;

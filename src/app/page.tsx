"use client";

import ContactFrom from "@/components/contact";
import HeaderCustom from "@/components/header";


export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen bg-gradient-to-b from-github-b from-100% to-white-c">
      <HeaderCustom />
      <ContactFrom />
    </div>
  );
}

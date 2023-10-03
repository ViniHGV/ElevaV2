import React from "react";
import logo from "@/../public/LogoEleva.png";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className="w-full pb-3 pt-3 lg:pt-10 px-4 lg:px-7 flex items-center">
      <Image alt="" className="rounded-full w-20" src={logo} />
      <p className="text-center text-[14px] px-4 lg:text-base lg:px-0 w-full text-zinc-500 font-semibold">
        Copyright © wedesc 2023. All rights reserved.
      </p>
    </div>
  );
};

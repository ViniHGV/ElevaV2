import image from "next/image";
import React from "react";
import imgLogin from "@/../public/loginEleva.jpg";
import Image from "next/image";
import logo from "@/../public/LogoEleva.png";
import { Input } from "./Input";
import Link from "next/link";

export const LoginComponent = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen w-screen">
      <div className="flex flex-col items-center px-10 justify-center lg:px-0 py-24 w-full">
        <Image alt="" src={logo} className="rounded-full w-48" />
        <div className="w-full max-w-sm mt-10 space-y-4">
          <Input
            label="Endereço de E-mail"
            placeholder="nome@exemplo.com"
            type=""
          />
          <Input label="Senha" placeholder="Senha" type="" />
          <Link className="w-full flex justify-center" href="/home">
            <button className="bg-green-default text-white w-full max-w-xs mt-8 py-5 rounded-full brightness-95 hover:brightness-105 transition-all">
              Entrar
            </button>
          </Link>
        </div>
      </div>
      <Image
        src={imgLogin}
        className="w-[50%] lg:block hidden right-0 h-full absolute"
        alt=""
      />
    </div>
  );
};

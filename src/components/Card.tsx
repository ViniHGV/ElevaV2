"use client";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./ui/context-menu";
import Image from "next/image";
import React, { useState } from "react";
import { ICard, IModels } from "../../interface/interface";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export const Card = ({ url, title, model, onClick }: ICard) => {
  return (
    <div className="cursor-pointer">
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={url}
              alt=""
              className={
                "sm:h-auto sm:w-auto object-cover transition-all 2xl:w-full hover:scale-105 rounded-2xl"
              }
            />
          </div>
        </ContextMenuTrigger>
      </ContextMenu>
      <div className=" flex flex-col gap-2 py-2 text-sm">
        <div className="space-y-1">
          <h2 className="xl:text-xl min-h-[30px] md:min-h-[20px] xl:min-h-[60px] lg:text-[16px] lg:min-h-[35px] font-semibold leading-none">
            {title}
          </h2>
          <div className="space-y-1 min-h-[85px]">
            <p className="text-zinc-500 text-base ">Modelos</p>
            {model.map((data: IModels) => (
              <p key={data.code} className="text-xs text-muted-foreground">
                <span className="font-bold">{data.code}</span>{" "}
                <strong className=" text-black">{data.models}</strong>
              </p>
            ))}
          </div>
        </div>

        <Button className="mt-2 w-full">Adicionar ao Carrinho</Button>
      </div>
    </div>
  );
};

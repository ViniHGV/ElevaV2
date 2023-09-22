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
import React from "react";
import { ICard, IModels } from "../../interface/interface";

export const Card = ({ url, title, model }: ICard) => {
  console.log(model);
  return (
    <div>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-2xl">
            <Image
              src={url}
              alt=""
              className={
                "h-auto w-auto object-cover transition-all hover:scale-105 rounded-2xl"
              }
            />
          </div>
        </ContextMenuTrigger>
      </ContextMenu>
      <div className="space-y-1 py-2 text-sm">
        <h2 className="text-[16px] font-semibold leading-none">{title}</h2>
        <p className="text-zinc-500">Modelos</p>
        {model.map((data: IModels) => (
          <p key={data.code} className="text-xs text-muted-foreground">
            <span className="font-bold">{data.code}</span>{" "}
            <strong className=" text-black">{data.models}</strong>
          </p>
        ))}
      </div>
    </div>
  );
};

import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export interface Iinput {
  label?: string;
  type: string;
  placeholder: string;
}

export interface ICard {
  url: string | StaticImageData;
  title: string;
  model: IModels[];
}

export interface IModels {
  code: string;
  models: string;
}

export interface ICardRet {
  children: ReactNode;
  title: string;
  description: string;
  primaryButton: string;
  secondaryButton: string;
}

export interface ICategories {
  name: string;
}

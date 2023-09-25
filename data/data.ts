import { ICard, ICategories } from "../interface/interface";
import photoDefault from "../public/composiçãoclassica.png";
import photoDefault2 from "../public/composiçãopulseira.png";
import photoDefault3 from "../public/composiçãofé.png";
import photoDefault4 from "../public/composiçãodiadia.png";

export const dataCard: ICard[] = [
  {
    url: photoDefault2,
    title: "Composição Clássica Pulseirismo",
    category: "Pulseiras",
    material: "Ouro",
    model: [
      { code: "1.24625", models: "R$ 42,00" },
      { code: "2.24561", models: "R$ 66,00" },
      { code: "3.19041", models: "R$ 72,00" },
    ],
  },
  {
    url: photoDefault,
    title: "Composição Flor",
    category: "Brincos",
    material: "Ouro",
    model: [
      { code: "1.24319", models: "R$ 48,00" },
      { code: "2.22759", models: "R$ 72,00" },
      { code: "3.19499", models: "R$ 92,00" },
    ],
  },
  {
    url: photoDefault3,
    title: "Kit Composição Flor",
    category: "Kits",
    material: "Ouro",
    model: [
      { code: "1.24321", models: "R$ 58,00" },
      { code: "2.23553", models: "R$ 56,00" },
      { code: "3.24558", models: "R$ 44,00" },
    ],
  },
  {
    url: photoDefault4,
    title: "Composição Dia a Dia",
    category: "Kits",
    material: "Ouro",
    model: [
      { code: "1.23530", models: "R$ 30,00" },
      { code: "2.24515", models: "R$ 44,00" },
    ],
  },
  {
    url: photoDefault2,
    title: "Composição Clássica Pulseirismo",
    category: "Anéis",
    material: "Ouro",
    model: [
      { code: "1.24625", models: "R$ 42,00" },
      { code: "2.24561", models: "R$ 66,00" },
      { code: "3.19041", models: "R$ 72,00" },
    ],
  },
  {
    url: photoDefault,
    title: "Composição Flor",
    category: "Kits",
    material: "Ouro",
    model: [
      { code: "1.24319", models: "R$ 48,00" },
      { code: "2.22759", models: "R$ 72,00" },
      { code: "3.19499", models: "R$ 92,00" },
    ],
  },
  {
    url: photoDefault3,
    title: "Composição Flor",
    category: "Kits",
    material: "Ouro",
    model: [
      { code: "1.24321", models: "R$ 58,00" },
      { code: "2.23553", models: "R$ 56,00" },
      { code: "3.24558", models: "R$ 44,00" },
    ],
  },
  {
    url: photoDefault4,
    title: "Composição Dia a Dia",
    category: "Kits",
    material: "Ouro",
    model: [
      { code: "1.23530", models: "R$ 30,00" },
      { code: "2.24515", models: "R$ 44,00" },
    ],
  },
  {
    url: photoDefault2,
    title: "Composição Clássica Pulseirismo",
    category: "Kits",
    material: "Ouro",

    model: [
      { code: "1.24625", models: "R$ 42,00" },
      { code: "2.24561", models: "R$ 66,00" },
      { code: "3.19041", models: "R$ 72,00" },
    ],
  },
  {
    url: photoDefault,
    title: "Composição Flor",
    category: "Kits",
    material: "Ouro",
    model: [
      { code: "1.24319", models: "R$ 48,00" },
      { code: "2.22759", models: "R$ 72,00" },
      { code: "3.19499", models: "R$ 92,00" },
    ],
  },
  {
    url: photoDefault3,
    title: "Composição Flor",
    category: "Kits",
    material: "Ouro",
    model: [
      { code: "1.24321", models: "R$ 58,00" },
      { code: "2.23553", models: "R$ 56,00" },
      { code: "3.24558", models: "R$ 44,00" },
    ],
  },
  {
    url: photoDefault4,
    title: "Composição Dia a Dia",
    category: "Kits",
    material: "Ouro",
    model: [
      { code: "1.23530", models: "R$ 30,00" },
      { code: "2.24515", models: "R$ 44,00" },
    ],
  },
];

export const dataCategories: ICategories[] = [
  { name: "Pulseiras" },
  { name: "Anéis" },
  { name: "Brincos" },
  { name: "Kits" },
];

export const dataMateriais: ICategories[] = [
  { name: "Ouro" },
  { name: "Prata" },
  { name: "Foleado a Ouro" },
  { name: "Foleado a Prata" },
];

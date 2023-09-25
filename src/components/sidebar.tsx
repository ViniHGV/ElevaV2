"use client";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { useState } from "react";
import { dataCategories, dataMateriais } from "../../data/data";

export const Sidebar = ({ className, selected, setSelected }: any) => {
  const [category, setCategory] = useState("");
  const [materials, setMaterials] = useState("");
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Categorias
          </h2>
          <div className="space-y-1">
            {dataCategories.map((data, index) => (
              <Button
                onClick={() => {
                  category == data.name
                    ? setCategory("")
                    : setCategory(data.name);

                  setSelected(data.name);
                }}
                key={index}
                variant="secondary"
                className={`bg-white shadow-none w-full justify-start transition-all ${
                  data.name === category
                    ? "bg-zinc-100 transition-all"
                    : "bg-white transition-all"
                } `}
              >
                {data.name}
              </Button>
            ))}
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Materiais
          </h2>
          <div className="space-y-1">
            {dataMateriais.map((data, index) => (
              <Button
                onClick={() => setMaterials(data.name)}
                key={index}
                variant="secondary"
                className={`bg-white shadow-none w-full justify-start ${
                  data.name === materials ? "bg-zinc-100" : "border-b-0"
                } `}
              >
                {data.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

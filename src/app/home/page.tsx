import React from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/sidebar";
import { Card } from "@/components/Card";
import photoexample from "@/../public/composiçãoclassica.png";
import { Separator } from "@/components/ui/separator";
import { dataCard } from "../../../data/data";

export default function Page() {
  return (
    <div>
      <Header />
      <div className="border-t">
        <div className="grid lg:grid-cols-5">
          <Sidebar className="hidden lg:block" />
          <div className="w-full lg:border-lcol-span-3 lg:col-span-4">
            <div className="h-full space-y-1 px-4 py-6 lg:px-8">
              <div>
                <h2 className="text-3xl lg:text-2xl font-semibold tracking-tight">
                  Produtos em Alta
                </h2>
                <p className="text-md lg:text-sm text-muted-foreground">
                  Produtos em Alta
                </p>
              </div>
              <Separator
                style={{ marginTop: "16px", marginBottom: "16px" }}
                className=" bg-zinc-200"
              />
              <div className="flex">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                  {dataCard.map((data, index) => (
                    <Card
                      key={index}
                      model={data.model}
                      title={data.title}
                      url={data.url}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

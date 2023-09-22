import React from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <div className="border-t">
        <div className="grid lg:grid-cols-5">
          <Sidebar className="hidden lg:block" />
          <div className="w-full lg:border-l col-span-3 lg:col-span-4">
            <div className="h-full px-4 py-6 lg:px-8">
              <div className="space-between flex flex-wrap items-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { FiSearch } from "react-icons/fi";

export const SerchBar = () => {
  return (
    <div className="grid grid-cols-12 w-full py-2 pl-5 pr-2 h-auto shadow-md border-gray-200 border-[1px] hover:shadow-lg rounded-full">
      <div className="col-span-11 ">
        <input
          type="text"
          placeholder="Buscar na Eleva"
          className=" w-full h-full border-0 outline-none py-2 "
        />
      </div>
      <div className="w-full flex justify-end">
        <div className="flex items-center justify-center rounded-full h-11 w-11 bg-green-default">
          <FiSearch className="text-2xl text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

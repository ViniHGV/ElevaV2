import React from "react";
import { Iinput } from "../../interface/interface";

export const Input = ({ label, type, placeholder }: Iinput) => {
  return (
    <div>
      <label
        htmlFor="first-name"
        className="pl-1 block text-sm font-semibold leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          placeholder={placeholder}
          type={type}
          name="first-name"
          id="first-name"
          autoComplete="given-name"
          className="block w-full  border-b-[2px] border-gray-400 px-1 py-2 text-gray-900 shadow-sm  outline-none transition-all hover:border-green-default placeholder:text-gray-400  focus:border-green-default focus: sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

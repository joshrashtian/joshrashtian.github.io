import React from "react";

export const LetDecor = () => {
  return (
    <div className="p-10 mx-10 bg-gray-100 m-5 rounded-[40px] shadow-md flex">
      <p className="text-[30px] font-[300] text-center font-mono text-blue-800 ">
        let
      </p>
      <p className="text-[30px] font-[300] text-center font-mono ml-3 text-gray-500">
        JR
      </p>
      <p className="text-[30px] font-[300] text-center font-mono ml-3 text-gray-500">
        =
      </p>
      <div className="flex justify-evenly ml-5 bg-slate-300 p-3 rounded-lg">
        <p className="text-[18px] font-[300] text-center font-mono">[</p>
        <p className="text-[18px] font-[300] justify-center font-mono">
          Programmer, Game Developer, Video Creator, Graphic Designer
        </p>
        <p className="text-[18px] font-[300] text-center font-mono">]</p>
      </div>
    </div>
  );
};

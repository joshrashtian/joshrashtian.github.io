import React from "react";
import { studybases } from "../constants";
import GitHub from "../assets/projects/github.png"

export const Codebases = () => {
  return (
    <div className="mx-2 flex flex-wrap justify-between shadow-lg mb-10">
      {studybases.map((studybase) => (
        <div
          key={studybase.title}
          className="w-1/2 h-48 bg-white rounded-xl justify-evenly align-middle"
        >
          <h1 className="font-bold text-center mt-5 text-[20px]">
            {studybase.title}
          </h1>
          <h2 className="text-xl text-center">{studybase.desc}</h2>
          <div className="justify-center bg-gray-100 px-1 mx-24 rounded-2xl self-center ">
            <h2 className="text-lg mx-3 font-thin">School/Study: {studybase.school}</h2>
            <h2 className="text-lg mx-3 font-thin">Grade: {studybase.grade}</h2>
          </div>
          <div className="flex justify-evenly">
          {studybase.source_code != undefined ? 
          <div className=" w-[190px] h-9 text-center hover:justify-between flex bg-slate-800 rounded-[20px] hover:rounded-[10px] hover:w-48 hover:bg-slate-600 transition-all duration-400 shadow-sm my-2 group">
          <img
            src={GitHub}
            className="w-6 h-6 mt-1.5 ml-2 rounded-lg group-hover:scale-100 scale-0 transition-all duration-400"
            />
          <a href={studybase.source_code} className="font-bold align-middle group-hover:mr-5 mt-1 text-lg text-white">
            View Database
          </a>
          </div>
          : null}
        </div>
        </div>
      ))}
    </div>
  );
};

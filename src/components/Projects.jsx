import React, { useEffect, useState } from "react";
import { projects } from "../constants";

export const Projects = () => {
  return (
    <div>
      <h1 className="font-bold text-[20px] ml-2">Projects</h1>
      <div className="flex flex-wrap justify-evenly">
      {projects.map((project) => (
        <div
          key={project.id}
          className="p-5 bg-white m-1 mx-3 rounded-[16px] shadow-lg"
        >
          <div className="flex">
            <h1 className="mr-2">{project.title} - </h1>
            <h1
              className={`${
                project.type === "Software"
                  ? "text-cyan-700"
                  : "text-orange-400"
              }`}
            >
              {project.type}
            </h1>
          </div>
          <h2>{project.description}</h2>
          { project.source_code != undefined ?
          <div className="mx-1 flex w-64 justify-between bg-slate-100 rounded-[20px] hover:bg-slate-200 shadow-sm my-2">
            <a
            className='font-bold text-center ml-2 align-middle'
              href={
                project.source_code != undefined ? project.source_code : null
              }

            >
              {project.source_code != undefined ? "View Source Code" : null}
            </a>
            <img src={project.logo} className="h-20 w-20 rounded-lg " />
          </div>
        : null}
        </div>
      ))}
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import { projects } from "../constants";
import { motion } from "framer-motion";
import GitHub from "../assets/projects/github.png";
import Globe from "../assets/projects/globe.png";
import { Codebases } from "../components/projects/Codebases"

export const Projects = () => {
  const Categories = ["All", "Software", "Video Production", "Video Game"];
  const [selected, setSelected] = useState("");
  const [filteredList, setFilter] = useState(projects);

  useEffect(() => {
    const value = selected;
    if (value != "All") {
      const filter = projects.filter((project) => project.type.includes(value));
      setFilter(filter);
    } else {
      setFilter(projects);
    }
  }, [selected]);

  return (
    <div>
      <h1 className="font-bold text-6xl m-4 bg-gradient-to-br from-indigo-600 via-pink-900 to-pink-800 bg-clip-text text-transparent transition-all duration-300">Projects</h1>
      <div className="flex flex-wrap mx-2">
        {Categories.map((category, index) => (
          <button
            className="w-48 h-10 shadow-md bg-blue-400 hover:bg-blue-600 hover:rounded-xl m-1 rounded-3xl text-white font-[700] transition-all duration-200"
            type="button"
            key={index}
            onClick={() => {
              setSelected(category) + console.log(selected);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-evenly">
        {filteredList.map((project) => (
          <motion.div
            key={project.id}
            className="p-5 hover:p-7 bg-white m-1 mx-3 flex rounded-[16px] shadow-lg hover:shadow-2xl transition-all duration-400 "
          >
            <img
              src={project.logo != undefined ? project.logo : GitHub}
              className="h-28 w-28 rounded-xl hover:h-32 hover:w-32 transition-all hover:shadow-lg"
            />
            <div className="ml-3">
              <div className="flex">
                <h1 className="mr-2 font-medium">{project.title} - </h1>
                <h1
                  className={`${
                    project.type === "Software"
                      ? "text-cyan-700"
                      : project.type === "Video Game"
                      ? "text-red-500"
                      : "text-orange-400"
                  }`}
                >
                  {project.type}
                </h1>
              </div>
              <h2>{project.description}</h2>

              <h1 className="mr-2 font-light">
                {" "}
                {
                  (project.status = "Work In Progress"
                    ? "Date Completed: "
                    : null)
                }{" "}
                {project.date}
              </h1>
              <div className="flex flex-row">
              { project.tools.map((tool) => (
              <div className="mx-1 cursor-grabbing bg-slate-200 hover:bg-slate-300 p-1 px-2 rounded-lg transition-all">
                  <h1 className="text-sm font-light ">{tool}</h1>
              </div>
              ))
              }
              </div>
              {project.source_code != undefined ? (
                <div className=" w-[190px] h-9 text-center hover:justify-between flex bg-slate-800 rounded-[20px] hover:rounded-[10px] hover:w-48 hover:bg-slate-600 transition-all duration-400 shadow-sm my-2 group">
                  <img
                    src={GitHub}
                    className="w-6 h-6 mt-1.5 ml-2 rounded-lg group-hover:scale-100 scale-0 transition-all duration-400"
                  />
                  <a
                    className="font-bold align-middle group-hover:mr-2 mt-1 text-white"
                    href={
                      project.source_code != undefined
                        ? project.source_code
                        : null
                    }
                  >
                    {project.source_code != undefined
                      ? "View Source Code"
                      : null}
                  </a>
                </div>
              ) : null}
              {project.website != undefined ? (
                <div className=" w-36 h-9 text-center hover:justify-between flex bg-green-700 rounded-[20px] hover:rounded-[10px] hover:w-40 hover:bg-green-800 transition-all duration-400 shadow-sm my-2 group">
                  <img
                    src={Globe}
                    className="w-6 h-6 mt-1.5 ml-2 rounded-lg group-hover:scale-100 scale-0 transition-all duration-400"
                  />
                  <a
                    className="font-bold align-middle group-hover:mr-3 text-white mt-1 mr-2 transition-all"
                    href={project.website != undefined ? project.website : null}
                  >
                    Visit Website
                  </a>
                </div>
              ) : null}
            </div>
          </motion.div>
        ))}

      </div>
      <h1 className="font-bold text-[20px] ml-2">Codebases</h1>
      <div className="mt-2">
        <Codebases />
        </div>
    </div>
  );
};

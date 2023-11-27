import React, { useEffect, useState } from "react";
import { projects } from "../constants";
import GitHub from "../assets/projects/github.png"

export const Projects = () => {

  const Categories = ["All", "Software", "Video Production"]
  const [selected, setSelected] = useState("")
  const [filteredList, setFilter] = useState(projects)

  useEffect(() => {
    const value = selected;
    if(value != "All"){
    const filter = projects.filter(project => project.type.includes(value))
    setFilter(filter)
    } else {
    setFilter(projects)
    }
    console.log(filteredList)
  }, [selected])

  return (
    <div>
      <h1 className="font-bold text-[20px] ml-2">Projects</h1>
      <div className="flex flex-wrap ml-2">
      {Categories.map((category, index) => (
          <button className=" w-40 h-10 bg-blue-400 hover:bg-blue-600 m-1 rounded-2xl text-white font-[700] " type="button" key={index} onClick={() => {setSelected(category) + console.log(selected)}}>{category}</button>
        ))}
      </div>
      <div className="flex flex-wrap justify-evenly">
        {filteredList.map((project) => (
          <div
            key={project.id}
            className="p-4 bg-white m-1 mx-3 flex rounded-[16px] shadow-lg"
          >
            <img src={project.logo} className="h-20 w-20 rounded-lg " />
            <div className="ml-3">
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
              {project.source_code != undefined ? (
                <div className=" w-48 h-9 text-center justify-evenly flex bg-slate-800 rounded-[20px] hover:bg-slate-200 shadow-sm my-2">
                  <img src={GitHub} className="w-6 h-6 mt-1 rounded-lg" />
                  <a
                    className="font-bold align-middle text-white mt-1"
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React, { useState } from "react";
import "../App.css";
import { motion } from "framer-motion";
import { LetDecor } from "./home/letdecor";
import IMG0 from "../assets/personimages/IMG0.png"

export const Home = () => {
  return (
    <motion.div>
      <div className="flex justify-evenly">
      <div>
      <h1 className=" text-5xl ml-10 mt-36 font-semibold text-slate-500 ">
        Hello, my name is
      </h1>
      <h1 className=" text-8xl ml-10 font-extrabold bg-gradient-to-br from-indigo-600 via-pink-900 to-pink-800 bg-clip-text text-transparent hover:text-slate-600 transition-all duration-300 cursor-grab ">
        Joshua Rashtian
      </h1>
      <h1 className=" text-5xl ml-10 mt-2 font-bold bg-gradient-to-br from-pink-900 to-cyan-800 bg-clip-text text-transparent">
        ...and I'm here to help build the future.
      </h1>
      <h1 className=" text-2xl ml-10 mt-2 font-bold bg-gradient-to-br from-pink-900 to-cyan-800 bg-clip-text text-transparent">
        (well or whatever I am passionate about)
      </h1>
      </div>
      <img src={IMG0} className="h-84 w-72 hover:h- hover:w-80 mt-3 hover:shadow-2xl shadow-lg rounded-3x transition-all duration-500 rounded-3xl" />
      </div>
      <LetDecor />
    </motion.div>
  );
};

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import logo from "../assets/home/joshrashtian.png"

const Navigation = () => {
  const [active, setActive] = useState("");

  return (
    <nav className="bg-cyan-950">
      <motion.div className="w-full h-20 flex flex-row items-center justify-between rounded-b-lg ">
        <Link
          to="/"
          className="align-middle gap-20"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/*(<h2 className="text-xl font-bold text-white ml-5">Joshua Rashtian</h2>*/}
          <img src={logo} className="h-30 w-60 ml-3" />
        </Link>
        <ul className="list-none sm:flex flex-row gap-10 mx-10 ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white font-bold" : "text-gray-200"
              } hover:text-white cursor-pointer font-medium`}
            >
              <h1 href={`#${link.id}`}>{link.title}</h1>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navigation;

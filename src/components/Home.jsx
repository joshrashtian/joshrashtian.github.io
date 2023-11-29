import React from 'react'
import '../App.css'
import { motion } from "framer-motion"
import { LetDecor } from './home/letdecor'

export const Home = () => {
  return (
    <motion.div>
      <h1 className=' text-5xl ml-10 mt-10 font-semibold bg-gradient-to-br'>Hello, my name is</h1>
      <h1 className=' text-8xl ml-10 font-extrabold bg-gradient-to-br from-indigo-600 via-pink-900 to-pink-800 bg-clip-text text-transparent hover:text-slate-600 transition-all duration-300 '>Joshua Rashtian</h1>
      <h1 className=' text-5xl ml-10 mt-2 font-bold bg-gradient-to-br from-pink-900 to-cyan-800 bg-clip-text text-transparent'>...and I'm here to help build the future.</h1>
      <h1 className=' text-2xl ml-10 mt-2 font-bold bg-gradient-to-br from-pink-900 to-cyan-800 bg-clip-text text-transparent'>(well or whatever I am passionate about)</h1>
      <LetDecor />
    </motion.div>
  )
}

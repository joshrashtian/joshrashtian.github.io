import React from 'react'
import { motion } from 'framer-motion'
import { LetDecor } from "./home/letdecor";
import { Introduction } from '../constants/aboutText';

const About = () => {
  return (
    <motion.div className="m-5" initial={{x: 20, opacity: '0%', scale: 0.7}} animate={{x: 0, opacity: '100%', scale: 1}} transition={{delay: 0.5, duration: 0.3, type: 'just'}}>
        <motion.h1 className='font-bold text-6xl  bg-gradient-to-br from-slate-600 to-purple-600 text-transparent bg-clip-text'>About</motion.h1>
        <motion.h2 className=' font-semibold text-2xl bg-gradient-to-br from-slate-400 to-slate-800 text-transparent bg-clip-text'>{Introduction}</motion.h2>
        <LetDecor />
    </motion.div>
  )
}

export default About

import React, { useEffect, useState } from 'react'
import { projects } from '../constants'

export const Projects = () => {
  return (
    <div>
        <h1 className='font-bold text-[20px] ml-2'>
        Projects
        </h1>
        {projects.map((project) => (
          <div key={project.id} className='p-3 bg-white m-1 mx-3 rounded-[16px] shadow-lg'>
            <div className='flex'>
            <h1 className='mr-2'>{project.title} - </h1>
            <h1 className={`${project.type === "Software" ? 'text-cyan-700' : 'text-orange-400'}`}>{project.type}</h1>
            </div>
            <h2>{project.description}</h2>
          </div>
        ))}
    </div>
  )
}

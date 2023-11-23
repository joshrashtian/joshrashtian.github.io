import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'

import './Nav.css'

const Navigation = () => {
  const [active, setActive] = useState("")

  return (
    <nav className='navContainer'>
        <div className='navContainer'>
            <div className='nav-text-container'>
            <Link
            to="/"
            onClick={() => {
                setActive("");
                window.scrollTo(0, 0)
            }}
            >
                <h2 className='nav-text'>Joshua Rashtian</h2>
                <p className='nav-subtext'>Creative</p>
            </Link>
            </div>
        </div>
    </nav>
  )
}

export default Navigation
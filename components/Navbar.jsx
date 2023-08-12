'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
     };

  return (
    <div className='flex flex-row md:flex-col md:w-screen md:h-28 w-auto h-auto items-center mt-2 pt-2 justify-evenly 2xl:scale-130'>
        <div className="flex flex-row justify-start ">
        <Link href="/">
            <img
            className="logo dark:drop-shadow-[0_0_0.3rem_#ffffff70] "
            src="/logot.png"
            alt="Bloggerize Logo"
            width={280}
            height={37}
            />
        </Link>
        <button className='hidden relative md:flex self-center ml-8 pl-6 pr-6 pt-1 pb-1 border border-emerald-300 rounded-md hover:bg-emerald-600 hover:opacity-75 md:cursor-pointer transition-opacity active:scale-105'>
          login
        </button>
      </div>
      <div className='md:hidden'>
        <button
          className='text-gray-600 hover:text-gray-900 focus:outline-none'
          onClick={toggleMenu}
        >
          <svg
            className='h-6 w-6 fill-gray-200'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {menuOpen ? (
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M19 6H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 5H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 5H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z'
              />
            ) : (
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M4 6H20V5H4v1zm0 5h16v-1H4v1zm0 5h16v-1H4v1z'
              />
            )}
          </svg>
        </button>
        {menuOpen && (            
            <div className=' font-mono absolute right-0 opacity-80 mt-2 bg-gray-600 p-6 flex flex-col gap-2 rounded-md shadow-md '>
                <p className='block cursor-pointer'>Populars</p>
                <p className='block cursor-pointer'>Recent</p>
                <p className='block cursor-pointer'>Announcements</p>
                <Link href="/About" className='block cursor-pointer'>About us</Link>
                <button className=' p-2 border border-emerald-300 rounded-xl active:scale-105 ' >login</button>
            </div>            
        )}
      </div>
      <div className='md:flex flex-row justify-evenly md:gap-8 lg:gap-12 hidden'>
        <p>Populars</p>
        <p>Recent</p>
        <p>Announcements</p>
        <Link href="/About">About us</Link>
      </div>
    </div>
  )
}

export default Navbar
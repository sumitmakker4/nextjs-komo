"use client";

import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { CiHome } from "react-icons/ci";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdOutlineMenu } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menu = useRef<HTMLDivElement>(null);

  return (
    <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
      <div>
        <Link href="/" className='font-bold text-2xl text-purple-600'>KOMO</Link>
      </div>
      
      
      <MdOutlineMenu className="h-6 w-6 cursor-pointer md:hidden block" onClick={() => {
        setIsMenuOpen(!isMenuOpen)
      }}/>

      <div className={`${!isMenuOpen && 'hidden'} w-full md:flex md:items-center md:w-auto`} ref={menu}>

        <div className="hidden md:block mt-2">
          <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
            <input type="text" name="price" id="price" className="block min-w-0 grow py-1.5 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 focus:outline-purple-600 sm:text-sm/6" placeholder="Search" />
            <div className="grid shrink-0 grid-cols-1 focus-within:relative">
              <IoSearch className="col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"/>
            </div>
          </div>
        </div>
        <ul className="text-base text-gray-700 md:flex md:justify-between md:items-end md:p-3">
          <li>
            <Link href="/" className="py-1 md:py-2 md:px-2 flex items-center hover:text-purple-600"><CiHome className='me-1'/>Home</Link>
          </li>
          <li>
            <Link href="/friends" className="py-1 md:py-2 md:px-2 flex items-center hover:text-purple-600 md:me-3"><HiOutlineUserGroup className='me-1'/>Friends</Link>
          </li>
          <li>
            <Link href="/login" className="inline-block mt-1 md:mt-2 py-2 px-4 bg-purple-600 hover:bg-purple-500 text-white rounded">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
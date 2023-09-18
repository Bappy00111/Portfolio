import React, { useState } from 'react';
import img from '../../src/assets/logo.png'
import contactImg from '../../src/assets/contact.png'
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <navbar className="flex justify-between items-center h-[80px] sticky top-0 z-10">
            {/* img section  */}
            <img className='h-[50px] w-[60px]' src={img} alt="" />
            {/* navitems  */}
            <ul className='hidden  md:flex space-x-4 '>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) => (isActive ? 'hover:text-yellow-300 pb-1 border-b-2 border-amber-300' : 'default')}
                    >Home</NavLink>
                </li>

                <li>
                    <NavLink
                        to='/about'
                        className={({ isActive }) => (isActive ? 'text-yellow-300 pb-1 border-b-2 border-amber-300' : 'default')}
                    >About</NavLink>
                </li>

                <li>
                    <NavLink
                        to='/protfolio'
                        className={({ isActive }) => (isActive ? 'text-yellow-300 pb-1 border-b-2 border-amber-300' : 'default')}
                    >Protfolio</NavLink>
                </li>
                <li>
                    <NavLink
                        to='/client'
                        className={({ isActive }) => (isActive ? 'text-yellow-300 pb-1 border-b-2 border-amber-300' : 'default')}
                    >Client</NavLink>
                </li>
            </ul>
            <button className="btn rounded-3xl  hidden md:block">
                <img className='h-[20px] w-[20px] inline-block mr-2' src={contactImg} alt="" />
                <span>Contact Me</span>
            </button>

            {/* mobile navber section  */}
            <div className='md:hidden'>
                {/* drop down menu  */}
                <button
                    onClick={() => setToggle(true)}
                >
                    <AiOutlineMenu className='h-6 w-6 text-white'></AiOutlineMenu>
                </button>
                {
                    toggle && (
                        <div className='absolute top-0 left-0  w-full z-10 my-5'>
                            <div className='p-5 bg-white border rounded shadow-xl'>
                                {/* opem menu section  */}
                                <div className='flex  justify-between mb-4'>
                                    <ul className=' text-black space-y-4'>
                                        <li>
                                            <NavLink
                                                to='/'
                                                className={({ isActive }) => (isActive ? 'text-yellow-300 pb-1 border-b-2 border-amber-300' : 'default')}
                                            >Home</NavLink>
                                        </li>

                                        <li>
                                            <NavLink
                                                to='/about'
                                                className={({ isActive }) => (isActive ? 'text-yellow-300 pb-1 border-b-2 border-amber-300' : 'default')}
                                            >About</NavLink>
                                        </li>

                                        <li>
                                            <NavLink
                                                to='/protfolio'
                                                className={({ isActive }) => (isActive ? 'text-yellow-300 pb-1 border-b-2 border-amber-300' : 'default')}
                                            >Protfolio</NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to='/client'
                                                className={({ isActive }) => (isActive ? 'text-yellow-300 pb-1 border-b-2 border-amber-300' : 'default')}
                                            >Client</NavLink>
                                        </li>
                                    </ul>

                                    {/* close menu section  */}
                                    <div>
                                        <button
                                            onClick={() => setToggle(false)}
                                        >
                                            <AiOutlineClose className='h-6 w-6 text-black'></AiOutlineClose>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    )
                }
            </div>
        </navbar>
    );
};

export default Navbar;
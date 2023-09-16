import React from 'react';
import img from '../../src/assets/logo.png'
import contactImg from '../../src/assets/contact.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <navbar className="flex justify-between items-center h-[80px] sticky top-0 z-10">
            <img className='h-[50px] w-[60px]' src={img} alt="" />
            <div className=''>
                <Link className='mr-5 hover:text-yellow-300 pb-1 hover:border-b-2 hover:border-amber-300'>Home</Link>
                <Link className='mr-5  hover:text-yellow-300 pb-1 hover:border-b-2 hover:border-amber-300'>About</Link>
                <Link className='mr-5  hover:text-yellow-300 pb-1 hover:border-b-2 hover:border-amber-300'>Protfolio</Link>
                <Link className='mr-5  hover:text-yellow-300 pb-1 hover:border-b-2 hover:border-amber-300'>Client</Link>
            </div>
            <button className="btn rounded-3xl">
                <img className='h-[20px] w-[20px]' src={contactImg} alt="" />
                Contact Me
            </button>
        </navbar>
    );
};

export default Navbar;
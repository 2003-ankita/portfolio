import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const listNavbar = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Research Work', link: '#research' },
        { name: 'Projects', link: '#projects' },
    ];

    return (
        <header className='text-gray-600 body-font z-10'>
            <div className='container mx-auto flex flex-wrap p-5 flex-row items-center'>

                {/* Logo Section */}
                <a className='flex title-font font-medium items-center text-gray-900'>
                    <img src={logo} alt='logo' className='w-10 h-10 object-cover' />
                    <span className='ml-3 text-3xl font-bold text-white'>Ankita</span>
                </a>

                {/* Navigation Links (Desktop) */}
                <nav className='hidden md:flex md:ml-auto text-white text-base'>
                    {listNavbar.map((item, index) => (
                        <a 
                            key={index} 
                            href={item.link} 
                            className='mr-5 hover:text-orange-400 transition duration-300'
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                {/* Contact Me Button (Moved to the Right) */}
                <a href='#contact' 
                   className='hidden md:inline-flex ml-auto items-center py-1 px-7 border border-white 
                              hover:border-orange-400 hover:text-orange-400 transition duration-300 text-white text-base'>
                    Contact me
                </a>

                {/* Hamburger Menu for Mobile */}
                <button 
                    className='md:hidden text-white text-3xl focus:outline-none ml-auto' 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>

            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className='md:hidden flex flex-col items-center py-4 border-t border-gray-500'>
                    {listNavbar.map((item, index) => (
                        <a 
                            key={index} 
                            href={item.link} 
                            className='py-2 text-lg text-white hover:text-orange-400 transition duration-300' 
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    {/* Contact Me in Mobile View */}
                    <a href='#contact' 
                       className='mt-4 py-2 px-7 border border-white hover:border-orange-400 
                                  hover:text-orange-400 transition duration-300 text-white text-base'>
                        Contact me
                    </a>
                </div>
            )}
        </header>
    );
}

import React from 'react';
import Navbar from '../navbar/Navbar';
import CV from './Resume.pdf';
import img from '../../assets/image1.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[500px] flex flex-col' id="home">
      <Navbar />
      <section 
        data-aos='fade-up'
        data-aos-delay='250'
        className='text-white body-font z-10'
      >
        <div className='container mx-auto flex px-5 py-12 md:py-16 flex-col md:flex-row items-center gap-6 md:gap-12'>

          {/* Image Section (Bigger & Centered) */}
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-full flex justify-center'>
            <img src={img} alt="hero" className='object-cover object-center rounded-full w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80' />
          </div>

          {/* Text Section (Centered Vertically) */}
          <div className='lg:flex-grow md:w-1/2 flex flex-col md:items-start items-center text-center md:text-left'>

            <h1 className='title-font text-2xl sm:text-3xl font-bold text-white mb-2'>
              👋 Hi! I'm Ankita
            </h1>

            <p className='mb-4 leading-relaxed max-w-sm sm:max-w-md text-sm sm:text-base'>
              A passionate Data Science enthusiast 📊, driven by a keen interest in transforming data into meaningful insights ✨.
            </p>

            {/* Buttons & Socials */}
            <div className='flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4'>

              {/* Resume Button */}
              <a href={CV} download> 
                <button className='text-sm sm:text-base text-white bg-orange-500 py-2 px-5 
                        focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_30px_rgb(255,165,0,0.6)]
                        rounded-full'>
                  Get My Resume
                </button>
              </a>

              {/* Social Icons */}
              <div className='flex space-x-4'>
                <a href="https://www.linkedin.com/in/AnkitaYadav07/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className='text-3xl text-white hover:text-orange-400 transition duration-300 jump' />
                </a>
                <a href="https://github.com/2003-ankita" target="_blank" rel="noopener noreferrer">
                  <FaGithub className='text-3xl text-white hover:text-orange-400 transition duration-300 jump' />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CSS for Smooth Scrolling & Jump Effect */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes jump {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }

        .jump {
          animation: jump 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

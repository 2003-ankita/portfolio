import React from 'react';
import Navbar from '../navbar/Navbar';
import CV from './Resume.pdf';
import img from '../../assets/image1.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[400px] sm:min-h-[400px] flex flex-col'>
      <div className='md:h-[600px] h-[720px] md:w-[600px] w-[600px] right-0 bg-gradient-to-r from-orange-600 
        via-yellow-500 to-red-400 absolute rounded-full transform rotate-12 -top-20 shadow-[0_0_40px_rgb(255, 165, 0, 0.7)]'>
      </div>
      <Navbar />
      <section 
        data-aos='fade-up'
        data-aos-delay='250'
        className='text-white body-font z-10'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
                mb-16 md:mb-0 items-center text-center relative'>
        
        <h1 className='title-font sm:text-4xl text-4xl mb-4 font-bold text-white'>
         👋Hi! I'm Ankita
        </h1>

            <p className='mb-8 leading-relaxed'>
            A passionate Data Science enthusiast 📊, driven by a keen interest in transforming data into meaningful insights ✨.
            </p>

            <div className='flex flex-col items-center space-y-6'>
              {/* Download Resume Button */}
              <a href={CV} download> 
                <button className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 
                        focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                        rounded-full text-lg'>
                  Get My Resume
                </button>
              </a>

              {/* Social Icons Section */}
              <div className='flex w-full max-w-[200px] mt-4 gap-x-6 justify-start'>
                <a href="https://www.linkedin.com/in/AnkitaYadav07/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className='text-4xl text-white hover:text-orange-400 transition duration-300 jump' />
                </a>
                <a href="https://github.com/2003-ankita" target="_blank" rel="noopener noreferrer">
                  <FaGithub className='text-4xl text-white hover:text-orange-400 transition duration-300 jump' />
                </a>
              </div>
            </div>

          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-[-60px] flex justify-center'>
            <img src={img} alt="hero" className='object-cover object-center rounded-full w-80 h-80' />
          </div>

        </div>
      </section>

      {/* CSS for Jumping Effect */}
      <style jsx>{`
        @keyframes jump {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        .jump {
          animation: jump 1s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

import React from 'react';
import research_paper from '../../assets/research_paper.png';
import { FaLink } from 'react-icons/fa';

export default function Research_Work() {
  return (
    <section
      id="research"
      className="relative overflow-hidden flex flex-col text-gray-600 body-font py-24"
    >
      <div className="container mx-auto px-5 py-10">
        
        <div className="h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden flex flex-wrap items-center justify-between">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center px-4">
             <img
               src={research_paper}
               className="object-contain w-[80%] md:w-full rounded-lg shadow-lg mx-auto"
              alt="Research Paper"
             />
          </div>


          {/* Description Section */}
          <div className="w-full md:w-1/2 md:pl-10 p-6">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500">
              Research Work
            </h1>
            <h2 className="title-font font-bold text-white sm:text-2xl mb-2">
              Automatic Number Plate Recognition Using YOLOv8 and ResNet-50 Integration
            </h2>
            <p className="text-white text-xl mb-4">
              Published in: <span className="text-white">IEEE Conference 2024</span>
            </p>
            <p className="text-white leading-relaxed">
            This paper explores the use of YOLOv8 for license plate detection and ResNet-50 for character recognition in Automatic Number Plate Recognition (ANPR) systems. By combining these models, we improve real-time accuracy and reliability, enabling applications in areas like smart surveillance, parking management, traffic control, and vehicle tracking.            </p>

            {/* View Paper Button */}
            <div className="flex w-full max-w-[200px] mt-4 gap-x-6">
              <a
                href="https://doi.org/10.1109/ICICACS60521.2024.10498318"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-400 transition duration-300"
              >
                <FaLink className="mr-2 text-2xl" /> View Paper
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

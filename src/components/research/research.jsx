import React from 'react';
import researchPaper from '../../assets/research_paper.png';

const LinkIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

export default function Research_Work() {
  return (
    <section
      id="research"
      className="relative overflow-hidden flex flex-col text-gray-600 body-font py-20 scroll-mt-20"
    >
      <div className="container mx-auto px-5 py-10">
        
        <div className="h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden flex flex-col md:flex-row items-center justify-between bg-gray-900 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,165,0,0.9)] hover:border-orange-300 animate-fadeIn">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center p-4 group">
             <img
               src={researchPaper}
               className="object-contain w-full max-w-[90%] md:max-w-full rounded-lg shadow-lg 
               transition-all duration-300 ease-in-out transform group-hover:scale-105 
               group-hover:shadow-[0_0_20px_rgba(255,165,0,0.7)]
               animate-float"
               alt="Research Paper"
             />
          </div>

          {/* Description Section */}
          <div className="w-full md:w-1/2 p-6 text-center md:text-left animate-slideInRight">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-orange-500 transition-colors duration-300 hover:text-orange-400 animate-glow">
              Research Work
            </h1>
            <h2 className="title-font font-bold text-white sm:text-2xl text-xl mb-2 transition-colors duration-300 hover:text-orange-300 animate-fadeIn">
              Automatic Number Plate Recognition Using YOLOv8 and ResNet-50 Integration
            </h2>
            <p className="text-white text-lg sm:text-xl mb-4 transition-colors duration-300 hover:text-orange-200 animate-fadeIn">
              Published in: <span className="text-white transition-colors duration-300 hover:text-orange-200">IEEE Conference 2024</span>
            </p>
            <p className="text-white leading-relaxed text-sm sm:text-base transition-colors duration-300 hover:text-gray-300 animate-fadeIn">
              This paper explores the use of YOLOv8 for license plate detection and ResNet-50 for character recognition in Automatic Number Plate Recognition (ANPR) systems. By combining these models, we improve real-time accuracy and reliability, enabling applications in areas like smart surveillance, parking management, traffic control, and vehicle tracking.
            </p>

            {/* View Paper Button */}
            <div className="flex justify-center md:justify-start w-full max-w-[200px] mt-6">
              <a
                href="https://doi.org/10.1109/ICICACS60521.2024.10498318"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-2 text-white bg-orange-500 rounded-md 
                transition-all duration-300 hover:bg-orange-400 hover:shadow-lg hover:-translate-y-1 
                hover:scale-105 animate-pulse"
              >
                <LinkIcon /> 
                <span className="ml-2">View Paper</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Add these styles to your global CSS or Tailwind config
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }

  @keyframes glow {
    0% { text-shadow: 0 0 5px rgba(255,165,0,0.5); }
    50% { text-shadow: 0 0 20px rgba(255,165,0,0.8); }
    100% { text-shadow: 0 0 5px rgba(255,165,0,0.5); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideInRight {
    from { transform: translateX(50px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }

  .animate-fadeIn {
    animation: fadeIn 1s ease-out forwards;
  }

  .animate-slideInRight {
    animation: slideInRight 0.8s ease-out forwards;
  }

  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }
`;
document.head.appendChild(style);
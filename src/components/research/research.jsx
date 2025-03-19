import React, { useState, useEffect } from 'react';
import researchPaper1 from '../../assets/research_paper_1.png';
import researchPaper2 from '../../assets/research_paper_2.jpg';

const LinkIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    className="w-5 h-5"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const researchPapers = [
  {
    id: 1,
    image: researchPaper1,
    title: "Automatic Number Plate Recognition Using YOLOv8 and ResNet-50 Integration",
    publication: "IEEE Conference 2024",
    description: "This paper explores the use of YOLOv8 for license plate detection and ResNet-50 for character recognition in ANPR systems. By combining these models, we improve real-time accuracy and reliability, enabling applications in areas like smart surveillance, parking management, traffic control, and vehicle tracking.",
    link: "https://doi.org/10.1109/ICICACS60521.2024.10498318"
  },
  {
    id: 2,
    image: researchPaper2,
    title: "Reddit Sentiment Analysis using AWS Services",
    publication: "Springer Journal 2025",
    description: "This research explores sentiment analysis on Reddit comments using AWS services. We built a pipeline with PRAW Reddit API, AWS Kinesis Firehose, AWS Glue, and Athena to efficiently collect, store, and analyze user content.",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-83790-6_28"
  }
];

export default function ResearchWork() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isManuallyPaused, setIsManuallyPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // Auto-rotate carousel
  useEffect(() => {
    if (!isManuallyPaused) {
      const totalDuration = 8000; // 8 seconds per slide
      const intervalStep = 50; // Update progress bar every 50ms
      const increment = (intervalStep / totalDuration) * 100;
      
      // Progress bar animation
      const progressInterval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            return 0;
          }
          return prev + increment;
        });
      }, intervalStep);
      
      // Slide change animation
      const slideInterval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % researchPapers.length);
        setProgress(0);
      }, totalDuration);
      
      return () => {
        clearInterval(slideInterval);
        clearInterval(progressInterval);
      };
    }
  }, [isManuallyPaused]);

  const handleManualChange = (index) => {
    setCurrentIndex(index);
    setProgress(0);
    setIsManuallyPaused(true);
    
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => {
      setIsManuallyPaused(false);
    }, 10000);
  };

  return (
    <section 
      id="research" 
      className="relative overflow-hidden flex flex-col text-gray-600 body-font py-20 scroll-mt-20"
    >
      <div className="container mx-auto px-5 py-10">
        <h1 className="text-4xl font-bold text-center text-orange-500 mb-12 transition-all duration-300 hover:text-orange-400 animate-glow">
          Research Work
        </h1>
        
        <div className="relative flex flex-col items-center justify-center">
          {/* Paper Card */}
          <div 
            className="w-full max-w-4xl h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden flex flex-col md:flex-row items-center justify-between bg-gray-900 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,165,0,0.9)] hover:border-orange-300 animate-fadeIn"
            style={{ minHeight: '450px' }}
            onMouseEnter={() => setIsManuallyPaused(true)}
            onMouseLeave={() => setIsManuallyPaused(false)}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center p-4 group">
              <div className="w-full h-64 md:h-80 overflow-hidden rounded-lg relative">
                <img
                  src={researchPapers[currentIndex].image}
                  className="object-cover w-full h-full rounded-lg shadow-lg transition-all duration-500 ease-in-out transform group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(255,165,0,0.7)]"
                  alt="Research Paper"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300"></div>
              </div>
            </div>
            
            {/* Description Section */}
            <div className="w-full md:w-1/2 p-6 text-center md:text-left">
              <h2 className="font-bold text-white sm:text-2xl text-xl mb-2 transition-colors duration-300 hover:text-orange-300">
                {researchPapers[currentIndex].title}
              </h2>
              <p className="text-white text-lg mb-4 transition-colors duration-300 hover:text-orange-200">
                Published in: <span className="text-orange-300">{researchPapers[currentIndex].publication}</span>
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base transition-colors duration-300 hover:text-white">
                {researchPapers[currentIndex].description}
              </p>
              
              {/* View Paper Button */}
              <div className="flex justify-center md:justify-start mt-6">
                <a
                  href={researchPapers[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center px-6 py-3 text-white bg-orange-500 rounded-md transition-all duration-300 hover:bg-orange-400 hover:shadow-[0_0_15px_rgba(255,165,0,0.5)] transform hover:-translate-y-1"
                >
                  <LinkIcon />
                  <span className="ml-2">View Paper</span>
                  <span className="w-0 overflow-hidden opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300"></span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-0 w-0 group-hover:h-5 group-hover:w-5 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Progress Bar + Thumbnail Navigation */}
          <div className="w-full max-w-4xl mt-6 flex flex-col space-y-4">
            {/* Progress Bar */}
            <div className="relative w-full h-1 bg-gray-700 rounded overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-orange-500 transition-all ease-linear rounded"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            
            {/* Thumbnails */}
            <div className="flex justify-center space-x-4">
              {researchPapers.map((paper, index) => (
                <div 
                  key={index}
                  onClick={() => handleManualChange(index)}
                  className={`
                    relative cursor-pointer transition-all duration-300 rounded-md overflow-hidden
                    ${currentIndex === index ? 'ring-2 ring-orange-500 scale-105' : 'opacity-60 hover:opacity-100'}
                  `}
                >
                  <img 
                    src={paper.image} 
                    alt={paper.title}
                    className="w-20 h-12 object-cover"
                  />
                  <div 
                    className={`absolute inset-0 bg-black transition-opacity duration-300
                      ${currentIndex === index ? 'bg-opacity-0' : 'bg-opacity-30 hover:bg-opacity-0'}
                    `}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image from '../../assets/image.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';

export default function Projects() {
    const listProjects = [
        { 
            id: 1, 
            image: image, 
            title: 'Walmart Time Series Forecasting', 
            description: 'Implemented time series forecasting models like SMA, EMA, Holt-Winters, ARIMA, SARIMA, and Prophet, and created a Power BI dashboard to visualize sales trends.',
            github: 'https://github.com/2003-ankita/Walmart_Time_Series_Forecasting'
        },
        { 
            id: 2, 
            image: image2, 
            title: 'YouTube Data Analysis', 
            description: 'Scraped YouTube data using the YouTube Data API, extracting key metrics like subscribers, views, and comments. The insights were visualized using Seaborn for content analysis.',
            github: 'https://github.com/2003-ankita/YouTube-Analysis'
        },
        { 
            id: 3, 
            image: image3, 
            title: 'Reddit Sentiment Analysis', 
            description: "Designed a real-time sentiment analysis pipeline using Python, various AWS Services, and Power BI for visualization, achieving an accuracy of 81%.",
            github: 'https://github.com/2003-ankita/reddit-sentiment-analysis'
        },
        { 
            id: 4, 
            image: image4, 
            title: 'Cold Email Generator', 
            description: "Developed a cold email generator using Llama3.1, Groq LangChain, and Streamlit that extracts job listings from company career pages and generates personalized emails.",
            github: 'https://github.com/2003-ankita/cold_email_generator'
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    };

    return (
        <section data-aos='fade-up' data-aos-delay='400' id='projects' className='relative overflow-hidden flex flex-col text-white body-font'>
            <div className='container px-4 sm:px-5 py-16 sm:py-24 mx-auto'>
                <h2 className='text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12'>My Projects</h2>
                <div className="projects-slider">
                    <Slider {...settings}>
                        {listProjects.map((project) => (
                            <div key={project.id} className="p-4">
                                <div className="card">
                                    <div className="image-wrapper">
                                        <div className="image-container">
                                            <img 
                                                src={project.image} 
                                                alt={project.title} 
                                                className="project-image"
                                            />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <h2 className='title'>
                                            {project.title}
                                        </h2>
                                        <p className='description'>
                                            {project.description}
                                        </p>
                                        <div className='button-wrapper'>
                                            <a 
                                                href={project.github} 
                                                target='_blank' 
                                                rel='noopener noreferrer'
                                            > 
                                                <button className='view-button'>
                                                    View Project
                                                </button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <style jsx>{`
                .projects-slider {
                    margin: 0 -1rem;
                }

                .card {
                    height: 450px;
                    display: flex;
                    flex-direction: column;
                    border: 2px solid #fb923c;
                    border-radius: 0.5rem;
                    overflow: hidden;
                    box-shadow: 0 0 15px rgba(255,165,0,0.7);
                    margin: 0 0.5rem;
                }

                .image-wrapper {
                    width: 100%;
                    padding-top: 56.25%; /* 16:9 Aspect Ratio */
                    position: relative;
                }

                .image-container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    
                }

                .project-image {
                    width: 100%;
                    height: 100%;
                    object-fit: contain; /* Changed to contain to maintain aspect ratio */
                    object-position: center;
                    padding: 0.5rem;
                }

                .content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    padding: 1.5rem;
                    background-color: #111827;
                }

                .title {
                    font-size: 1.25rem;
                    font-weight: 500;
                    color: #9ca3af;
                    margin-bottom: 0.75rem;
                    letter-spacing: 0.05em;
                }

                .description {
                    font-size: 0.875rem;
                    color: #d1d5db;
                    line-height: 1.5;
                    flex: 1;
                    overflow: hidden;
                }

                .button-wrapper {
                    margin-top: 1rem;
                    display: flex;
                    justify-content: center;
                }

                .view-button {
                    width: 100%;
                    padding: 0.5rem 1.5rem;
                    background-color: rgb(249, 115, 22);
                    color: white;
                    border: none;
                    border-radius: 9999px;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                }

                .view-button:hover {
                    background-color: rgb(234, 88, 12);
                    box-shadow: 0 0 40px rgba(255,165,0,0.7);
                }
            `}</style>
        </section>
    );
}
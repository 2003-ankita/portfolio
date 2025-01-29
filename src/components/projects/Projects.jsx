import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import image from '../../assets/image.png'
import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.png'

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
            title: 'YouTube Data Scraper & Analysis', 
            description: 'Scrape, analyze and visualize YouTube data using the YouTube Data API, extracting metrics like likes, subscribers, engagement rates, etc. making it a valuable tool for content creators and analysts.',
            github: 'https://github.com/2003-ankita/YouTube-Analysis'
        },
        { 
            id: 3, 
            image: image3, 
            title: 'Reddit Sentiment Analysis', 
            description: "Designed a real time sentiment analysis pipeline using python, various AWS Services and PowerBI for visualization, achieving an accuracy of 81% in sentiment classification.",
            github: 'https://github.com/2003-ankita/reddit-sentiment-analysis'
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section data-aos='fade-up' data-aos-delay='400' id='projects' className='relative overflow-hidden flex flex-col text-white body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
                <Slider {...settings}>
                    {listProjects.map((project) => (
                        <div key={project.id} className='p-4'>
                            <div className='h-full border-2 border-orange-400 shadow-[0_0_15px_rgba(255,165,0,0.7)] border-opacity-60 rounded-lg overflow-hidden'>
                                <img src={project.image} alt={project.title} className='w-full h-auto lg:h-48 md:h-36 sm:h-24 object-cover object-center' />
                                <div className='p-6'>
                                    <h2 className='tracking-widest text-xl title-font font-medium text-gray-400 mb-1'>{project.title}</h2>
                                    <p className='leading-relaxed mb-3'>{project.description}</p>
                                    <div className='flex justify-center'>
                                        <a href={project.github} target='_blank' rel='noopener noreferrer'> 
                                            <button className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 
                                                focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)]
                                                rounded-full text-lg'>
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
        </section>
    );
}

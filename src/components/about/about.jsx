import React from 'react';
import python from '../../assets/python.png';
import java from '../../assets/java.png';
import c from '../../assets/c.png';
import sql from '../../assets/sql.png';
import powerbi from '../../assets/powerbi.png';
import tableau from '../../assets/tableau.png';
import tensorflow from '../../assets/tensorflow.png';
import pandas from '../../assets/pandas.png';
import seaborn from '../../assets/seaborn.png';
import vscode from '../../assets/vscode.png';
import flask from '../../assets/flask.png';

export default function About() {
  return (
    <section id='about' className='relative overflow-hidden text-white body-font'>
      <div className='container px-5 py-24 mx-auto'>

        <div className='flex flex-col md:flex-row gap-12'>

          {/* About Me Section*/}
          <div 
            data-aos='fade-up' 
            data-aos-delay='200' 
            className='md:w-1/2 w-full'
          >
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
              About Me
            </h1>
            <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base'>
              I'm a final-year Data Science student at KIT's College of Engineering, Kolhapur, with a strong passion for Data Analysis, Machine Learning, Deep Learning, and AI 🤖. I am driven by continuous learning 📚 and applying data science to solve real-world challenges. I enjoy working with Python, SQL, and various data science tools to transform complex datasets into actionable insights 📊. I am always eager to expand my knowledge and embrace new challenges and opportunities in the field of data science 🚀.
            </p>
          </div>

  
          <div className='hidden md:block md:w-1 px-4 border-l-2 border-orange-400' />

          {/* Programming Languages + Tools */}
          <div className='md:w-1/2 w-full flex flex-col gap-12'>

            {/* Programming Languages Section */}
            <div data-aos='fade-left' data-aos-delay='500'>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
                Programming Languages
              </h1>
              <div className='grid grid-cols-3 md:grid-cols-4 gap-6 place-items-center'>
                {[ 
                  { img: python, label: "Python" },
                  { img: java, label: "Java" },
                  { img: c, label: "C" },
                  { img: sql, label: "SQL" },
                ].map((skill, index) => (
                  <div key={index} className='flex flex-col items-center'>
                    <img src={skill.img} alt={skill.label} className='rounded-full w-12 h-12 object-cover' />
                    <p className='mt-2 text-sm font-semibold text-gray-300'>{skill.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Section */}
            <div data-aos='fade-left' data-aos-delay='500'>
              <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-white'>
                Tools
              </h1>
              <div className='grid grid-cols-3 md:grid-cols-4 gap-6 place-items-center'>
                {[ 
                  { img: powerbi, label: "Power BI" },
                  { img: tableau, label: "Tableau" },
                  { img: tensorflow, label: "TensorFlow" },
                  { img: pandas, label: "Pandas" },
                  { img: seaborn, label: "Seaborn" },
                  { img: vscode, label: "VS Code" },
                  { img: flask, label: "Flask" },
                ].map((tool, index) => (
                  <div key={index} className='flex flex-col items-center'>
                    <img src={tool.img} alt={tool.label} className='rounded-full w-12 h-12 object-cover' />
                    <p className='mt-2 text-sm font-semibold text-gray-300'>{tool.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

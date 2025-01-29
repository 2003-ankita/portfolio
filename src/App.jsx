import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/hero/Hero'
import About from './components/about/about';
import Research_Work from './components/research/research';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

export default function App() {
  useEffect(()=>{
    AOS.init({
      duration: 1000,
    });
  },[]);
  return (
   <main className='bg-[#0d182e]'>
    <Hero /> 
    <About/>
    <Research_Work/>
    <Projects />
    <Contact />
    <Footer />
   </main>
  )
}


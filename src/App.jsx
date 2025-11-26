import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HeroSec from './components/HeroSec'
import Footer from './components/Footer'
import BlogsJourney from './components/BlogsJourney'
import Quest from './components/quest'
import HomeSection from './components/HomeSection'


function App() {

  return (
    <>
      <Navbar />

      {/* <HomeSection/> */}
       <HeroSec />
       

      <BlogsJourney />
      
      {/* <Quest/> */}
      <Footer/>
    </>
  )
}

export default App

import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import WhyThisMatters from './whyThisMatters'
import Work from './work'
import Footer from './footer'
import JourneyCTA from './journey'

const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <WhyThisMatters/>
    <Work/>
    <JourneyCTA/>
    <Footer/>
   
        </div>
  )
}

export default Home
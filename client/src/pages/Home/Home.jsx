import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import WhyThisMatters from './whyThisMatters'
import Work from './work'
import Footer from './footer'


const Home = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <WhyThisMatters/>
    <Work/>
 
    <Footer/>
   
        </div>
  )
}

export default Home
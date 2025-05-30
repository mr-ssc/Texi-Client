import React from 'react'
import Hero from './Hero'
import Inquiry from './Inquiry'
import Elementor from "./Elementor"
import Faq from './Faq'
import Menu from './Menu'
import Cards from './Cards'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Inquiry />
      <Elementor />
      <Menu />
      {/* <Cards /> */}
      <Faq />
    </>
  )
}

export default Home
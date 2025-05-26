
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Hero from "./component/Hero"
import Inquiry from './component/Inquiry';
import Elementor from './component/Elementor';
import Faq from './component/Faq';





function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/Hero' element={<Hero />}></Route>
        <Route path='/Inquiry' element={<Inquiry />}></Route>
        <Route path='/Elementor' element={<Elementor />}></Route>
        <Route path='/Faq' element={<Faq />}></Route>


      </Routes>




    </>

  );
}

export default App

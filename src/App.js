
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Hero from "./component/Hero"
import Inquiry from './component/Inquiry';
import Elementor from './component/Elementor';
import Faq from './component/Faq';
import Menu from './component/Menu';
import Cards from './component/Cards';
import Navbar from './component/Navbar';





function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/Navbar' element={<Navbar />}></Route>
        <Route path='/Hero' element={<Hero />}></Route>
        <Route path='/Inquiry' element={<Inquiry />}></Route>
        <Route path='/Elementor' element={<Elementor />}></Route>
        <Route path='/Faq' element={<Faq />}></Route>
        <Route path='/Menu' element={<Menu />}></Route>
        <Route path='/Cards' element={<Cards />}></Route>


      </Routes>




    </>

  );
}

export default App

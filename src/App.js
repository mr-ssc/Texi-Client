
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import Hero from "./component/Hero"





function App() {
  return (
    <>

      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/Hero' element={<Hero />}></Route>


      </Routes>




    </>

  );
}

export default App

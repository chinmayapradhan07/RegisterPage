import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Sign_Up from './components/Sign_Up'
import Sign_In from './components/Sign_in'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>

      <Header/>

      <Routes>
        <Route path="/" element={<Sign_In/>}/>
        <Route path="/sign_Up" element={<Sign_Up/>}/>
      </Routes>

      <Footer/>

    </BrowserRouter>
  )
}

export default App
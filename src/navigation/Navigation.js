import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import AboutUs from '../pages/about-us/AboutUs'
import Error404 from '../pages/error-404/Error404'
import Header from '../layouts/header/Header'
import Footer from '../layouts/footer/Footer'
import LogementDetail from '../pages/logement-detail/LogementDetail'

const Navigation = () => {
  return (
    <BrowserRouter>
    <Header />
    <main>
    <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about-us" element={<AboutUs />}/>
        <Route exact path="/error-404" element={<Error404 />}/>
        <Route path='/logement/:id' element={<LogementDetail />}/>
        <Route exact path="/*" element={<Navigate replace to="/error-404" />}/>
    </Routes>
    </main>
    <Footer />
    </BrowserRouter>
  )
}

export default Navigation
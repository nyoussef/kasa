import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './header.scss'
import logo from './assets/kasa_header.png'

const Header = () => {
  const location = useLocation();
  return (
    <header>
        <Link to="/"><img src={logo} alt="Logo Kasa"/></Link>     
        <nav>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link>
        <Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>À propos</Link>
        </nav>
    </header>
  )
}

export default Header
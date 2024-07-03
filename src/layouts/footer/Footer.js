import React from 'react'
import logo from './assets/kasa_footer.png'
import './footer.scss'

const Footer = () => {
  return (
    <footer>
        <img src={logo} alt='Logo kasa'/>
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
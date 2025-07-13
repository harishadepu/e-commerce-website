import React from 'react'
import logo from '../../assets/nav-logo.svg'
import profile from '../../assets/nav-profile.svg'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className='administrator-navbar'>
      <img src={logo} alt='shopping icon' className='admin-logo'/>
      <img src={profile} alt='profile' className='admin-profile'/>
    </nav>
  )
}

export default Navbar
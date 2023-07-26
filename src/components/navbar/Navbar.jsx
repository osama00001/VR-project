import React from 'react'
import "./Navbar.scss"
import logo from "../../assert/logo.png"
import logo2 from "../../assert/logo2.png"
const Navbar = () => {
  return (
    <div className='navbar_container'>
     <div className='navbar_wrapper'>
        <div className='nav_logo'>
            <img className='img1' src={logo} alt='logo'/>
            <img className='img2' src={logo2} alt='logo2'/>
        </div>
        <div className='nav_links'>
            <ul className='nav_list'>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>TECHNOLOGIES</li>
                <li>HOW TO</li>
            </ul>
        </div>
        <div className='nav_buttons'>
            <div className='button_wrapper'>
            <button className='button1'>CONTACT US</button>
            <button className='button2'>JOIN HYDRA</button>
            </div>
            
        </div>
     </div>
    </div>
  )
}

export default Navbar

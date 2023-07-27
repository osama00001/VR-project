import React, { useState } from 'react'
import "./Navbar.scss"
import logo from "../../assert/logo.png"
import logo2 from "../../assert/logo2.png"
import {RiCloseLine,RiMenuLine} from "react-icons/ri"
const Navbar = () => {
const [toggle,setToggle]=useState(false)
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
        {toggle?<RiCloseLine className='nav_icons'  color='#9387BD' size={27} onClick={()=>setToggle(!toggle)}/>:<RiMenuLine  color='#9387BD' size={27} onClick={()=>setToggle(!toggle)}/>}
     </div>
     {toggle&&
     <div className='menu_container'>
      <div className='menu_wrapper scale-up-center'>
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
            <button className='button1' >CONTACT US</button>
            <button className='button1'>JOIN HYDRA</button>
            </div>
            
        </div>
      </div>
     </div>
}
    </div>
  )
}

export default Navbar

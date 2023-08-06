import React from 'react'
import './Footer.scss'
import logo from "../../assert/logo.png"
import arrow from "../../assert/Vector 20.png"
import fb from "../../assert/facebook.png"
import tw from "../../assert/twitter.png"
import lin from "../../assert/linkedin.png"
import ytube from "../../assert/youtube.png"
import insta from "../../assert/instagram.png"
import pin from "../../assert/pinterest.png"

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer_wrapper'>
        <div className='col-1'>
          <img src={logo}/>
        </div>
        <div className='col2'>
          <img src={arrow}/>
        </div>
        <div className='col-3'>
          <ul><li>About</li>
          <li>Services</li>
          <li>Technologies</li>
          <li>how to</li>
          <li>join hydra</li>
          </ul>
        </div>
        <div className='col2'>
          <img src={arrow}/>
        </div>
        <div className='col-3'>
          <ul><li>F.A.Q</li>
          <li>Sitemap</li>
          <li>condition</li>
          <li>license</li></ul>
        </div>
        <div className='col2'>
          <img src={arrow}/>
        </div>
        <div className='col-5'>
          <p>SOCIALIZED WITH HYDRA</p>
          <div className='image_wrapper'>
            <img src={fb}/>
            <img src={tw}/>
            <img src={lin}/>
            <img src={ytube}/>
            <img src={insta}/>
            <img src={pin}/>
          </div>
          <div className='vr_button'>
            <button>Send To Hydra</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

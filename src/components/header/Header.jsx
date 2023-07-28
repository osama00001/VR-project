import React from 'react'
import './header.scss'
import mask from "../../assert/Mask group.png"
import {AiOutlineArrowRight} from "react-icons/ai"

const Header = () => {
  return (
    <div className='Header_container'>
      <div className='header_wrapper'>
        <div className='header_content'>
            <div className='header_title'>
                <h1><span>Dive</span> Into The Depths</h1>
                <h1>Of <span>Virtual Reality</span></h1>
            </div>
            <div className='header_para'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum facilis adipisci eius animi cupiditate, ipsam repudiandae eum harum? Nam dolore vel aperiam fugit provident vitae quisquam sint labore harum.</p>
            </div>
            <div className='header_button_wrapper'>
                <button>BUILD YOUR WORLD</button>
                <AiOutlineArrowRight  size={45}/>
            </div>
            
            
        </div>
        <div className='header_image'>
            <img src={mask} alt='header-iamge'/>
           
        </div>
      </div>
    </div>
  )
}

export default Header

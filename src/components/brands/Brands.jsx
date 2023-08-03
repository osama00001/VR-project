import React, { useState } from 'react'
import {RxDot,RxDotFilled} from "react-icons/rx"
import image1 from "../../assert/Hydra-Tech1 1.png"
import mainImage from "../../assert/mainImage.png"
import shape from '../../assert/shape.png'
import  image2 from "../../assert/Hydra-Tech2 1.png"
import image3 from "../../assert/Hydra-Tech3 1.png"
import image4 from "../../assert/Hydra-Tech4 1.png"
import './Brands.scss'
 const imageArr=[image4,image1,image2,image3,]
const Brands = () => { 
  const [currentIndex,setCurrentIndex]=useState(0)
  const handleImageIndex=(index)=>{
    setCurrentIndex(index)
  }
  return (
    <div className='brand_container'>
      <div className='image_brand_container'>
    <div className='image_wrapper'>
       <img src={mainImage}/>
       <div className='title'>
        <h1>TECHNOLOGIES & HARDWARE</h1>
        <h4>USED BY HYDRA VR</h4>
        <div className='elipse'>
          <img src={shape}/>
        </div>
       </div>
       </div>
       </div>
      <div className='brand_wrapper'>
        <div className='brand_list'>
        <div className='img1'>
          <img src={image1}/>
        </div>
        <div className='img1'>
        <img src={image2}/>
        </div>
        <div className='img1'>
        <img src={image3}/>
        </div>
        <div className='img1'>
        <img src={image4}/>
        </div>

        </div>
        
      </div>
      <div className='brand_slider_wrapper'>
        <div className='image_wrap'>
        <img src={imageArr[currentIndex]}/>
        <div className='dots'>
        {imageArr.map((dot,i)=>currentIndex===i?<RxDotFilled onClick={()=>handleImageIndex(i)}  color='#AC68D2' size={50}/>:<RxDot onClick={()=>handleImageIndex(i)}  color='#9387BD' size={50}/>)}
        </div>
        
        </div>
        </div>
      </div>

  )
}

export default Brands

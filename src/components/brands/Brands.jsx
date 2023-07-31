import React from 'react'
import image1 from "../../assert/Hydra-Tech1 1.png"
import mainImage from "../../assert/mainImage.png"
import shape from '../../assert/shape.png'
import  image2 from "../../assert/Hydra-Tech2 1.png"
// import image3 from "../../assert/Hydra-Tech3 3.png"
// import image4 from "../../assert/Hydra-Tech4 4.png"
import './Brands.scss'

const Brands = () => {
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
        <div className=''>
        <img src={image2}/>
        </div>
        <div className=''>
        <img src=''/>
        </div>
        <div className=''>
        <img src=''/>
        </div>

        </div>
      </div>
      </div>

  )
}

export default Brands

import React, { useState } from 'react'
import './VrFeatures.scss'
import image1 from "../../assert/image1.png"
import image2 from "../../assert/image2.png"
import image3 from "../../assert/image3.png"
import image4 from "../../assert/image4.png"
import leftArrow from "../../assert/shape 4.png"
import rightArrow from "../../assert/shape 2.png"

const cardDetails=[
  {img:image1,title:'SIMULATION'},
  {img:image2,title:'EDUCATION'},
  {img:image3,title:'SELF-CARE'},
  {img:image4,title:'OUTDOOR'},
]


const VrFeatures = () => {
  const [cardIndex,setCardIndex]=useState(0)
  const handleLeftClick=()=>{
    console.log(cardDetails.length)
    if(cardIndex===0)
    {
    setCardIndex(cardDetails.length-1)
    }
    else{
      setCardIndex(cardIndex-1)
    }
    
  }
  const handleRightClick=()=>{
    if(cardIndex===cardDetails.length-1)
    {
    setCardIndex(0)
    }
    else{
      setCardIndex(cardIndex+1)
    }
  }
  return (
    <div className='vr_feature_container'>
      <div className='vr_wrapper'>
        <div className='title'>
          <h1>WHY BUILD </h1>
          <h4>With Hydra</h4>
        </div>
        <div className='para'>
          <p>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
          nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
          quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
          lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
        </div>
      </div>
      <div className='vr_features'>
      <div className='cardlist_container'>
        <div className='card_wrapper'>
          <div className='card_circle'>
            <img src={image1}/>
          </div>
          <div className='card_title'>
            <h1>SIMULATION</h1>
        
          </div>
          <div className='para'>
            <p>Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.</p>
          </div>
          <div className='vr_button'>
            <button>Try It Now</button>
          </div>
        </div>
      </div>
      <div className='cardlist_container'>
        <div className='card_wrapper'>
          <div className='card_circle'>
            <img src={image2}/>
          </div>
          <div className='card_title'>
            <h1>EDUCATION</h1>
        
          </div>
          <div className='para'>
            <p>Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.</p>
          </div>
          <div className='vr_button'>
            <button>Try It Now</button>
          </div>
        </div>
      </div>
      <div className='cardlist_container'>
        <div className='card_wrapper'>
          <div className='card_circle'>
            <img src={image3}/>
          </div>
          <div className='card_title'>
            <h1>SELF-CARE</h1>
        
          </div>
          <div className='para'>
            <p>Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.</p>
          </div>
          <div className='vr_button'>
            <button>Try It Now</button>
          </div>
        </div>
      </div>
      <div className='cardlist_container'>
        <div className='card_wrapper'>
          <div className='card_circle'>
            <img src={image4}/>
          </div>
          <div className='card_title'>
            <h1>OUTDOOR</h1>
        
          </div>
          <div className='para'>
            <p>Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.</p>
          </div>
          <div className='vr_button'>
            <button>Try It Now</button>
          </div>
        </div>
      </div>

    </div>
    <div className='mobile_vr_features'>
    <div className='cardlist_container'>
        <div className='card_wrapper'>
          <div className='card_circle'>
            <img src={cardDetails[cardIndex].img}/>
          </div>
          <div className='card_title'>
            <h1>{cardDetails[cardIndex].title}</h1>
        
          </div>
          <div className='para'>
            <p>Vitae sapien pellentesque habitant morbi
nunc. Viverra aliquet  porttitor rhoncus 
libero justo laoreet sit amet vitae.</p>
          </div>
          <div className='vr_button'>
            <button>Try It Now</button>
          </div>
        </div>
        <div className='elipse'>
          <img src={leftArrow} onClick={handleLeftClick}/>
        </div>
        <div className='elipse2'>
          <img src={rightArrow} onClick={handleRightClick}/>
        </div>
      </div>
      
      </div>
    
    
    </div>
  )
}

export default VrFeatures

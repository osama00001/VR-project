import React from 'react'
import './VrFeatures.scss'
import image1 from "../../assert/image1.png"
import image2 from "../../assert/image2.png"
import image3 from "../../assert/image3.png"
import image4 from "../../assert/image4.png"


const VrFeatures = () => {
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
    </div>
  )
}

export default VrFeatures

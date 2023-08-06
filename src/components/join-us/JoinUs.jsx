import React from 'react'
import './JoinUs.scss'
import line from "../../assert/Vector 16.png"

const JoinUs = () => {
  return (
    <div className='Join_us_container'>
      <div className='join_us_wrapper'>
        <div className=' join_us_form'>
          <h1>JOIN HYDRA</h1>
          <img src={line}/>
          <p>Let’s Build Your VR Experience</p>
          <div className='row_1'>
            <input type='text' placeholder='First Name'/>
            <input type='text' placeholder='Last Name'/>
          </div>
          <div className='row_1'>
            <input type='text' placeholder='First Name'/>
            <input type='text' placeholder='Last Name'/>
          </div>
          <div className='row_2'>
            <input type='text' placeholder='First Name'/>
          </div>
          <div className='row_3'>
          <textarea id="w3review" name="w3review" rows="10" cols="120" />
          </div>
          <div className='vr_button'>
            <button>Send To Hydra</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JoinUs

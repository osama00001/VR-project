import React from 'react'

import {TfiLocationPin} from "react-icons/tfi";
import {LuPhoneCall} from "react-icons/lu"
import {BiMessageDetail} from "react-icons/bi"
import './ReachOut.scss'

const ReachOut = () => {
  return (
    <div className='reachout_container'>
    <div className='reachout_wrapper'>
      <div className='row_wrapper'>
      <div className='pay_wapper'>
        <TfiLocationPin color="#C0B8E9" size={45}/>
        <div className='title_wrapper'>
        <h1>Pay Us Visit</h1>
        <p>Union St, Seattle, WA 98101, United States</p>
        </div>
        </div>
        
      </div>
      <div className='row_wrapper2'>
      <div className='pay_wapper'>
        <LuPhoneCall color="#C0B8E9" size={45}/>
        <div className='title_wrapper'>
        <h1>Give Us A Call</h1>
        <p>(110) 1111-1010</p>
        </div>
        </div>
        
      </div>
      <div className='row_wrapper3'>
      <div className='pay_wapper'>
        <BiMessageDetail color="#C0B8E9" size={45}/>
        <div className='title_wrapper'>
        <h1>Send Us a Message</h1>
        <p>Contact@HydraVTech.com</p>
        </div>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default ReachOut

import React from 'react'
import "./VrContent.scss"
import line from '../../assert/Vector 17.png'
const VrContent = () => {
  return (
    <div className='copy_rights_wrapper'>
      <div className='copy_rights'>
        <img src={line}/>
        <p>2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED </p>
      </div>
    </div>
  )
}

export default VrContent

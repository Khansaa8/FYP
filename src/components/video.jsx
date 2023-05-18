import React from 'react'
import { Mic } from '../assets';

const video = () => {
  return (
    <div>
      <video src={Mic} autoPlay loop muted className='w-[70%] h-[70%] '/>
    </div>
  )
}

export default video;
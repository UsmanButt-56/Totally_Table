import React from 'react'
import mic from '../../assets/mic.svg';
function Announcement({name}) {
  return (
    <div className='flex py-4 items-center gap-5'>
       <img src={mic} alt="" />
       <p className='text-white text-[26px] leading-[47px] font-palanquin-dark'>{name}</p>
    </div>
  )
}

export default Announcement;
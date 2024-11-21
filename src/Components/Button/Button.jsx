import React from 'react'

function Button({name}) {
  return (
    <div>
        <button className='border-2 border-[#F77F02] text-[16px] md:text-[26px] md:leading-[47px] font-palanquin-dark px-[8px] md:px-[32px] py-[11px] text-white'>{name}</button>
    </div>
  )
}

export default Button;
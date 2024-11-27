import React from 'react'

function Button({ name , onClick}) {
  return (
    <div>
      <button className='w-[190px] md:w-[262px] border-2 border-[#F77F02] text-[18px] md:text-[26px] md:leading-[47px] font-palanquin-dark md:h-[73px] h-[50px] text-white' onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button;
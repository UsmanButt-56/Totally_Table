import React from 'react'

function Button({ name , onClick}) {
  return (
    <div>
      <button className='w-[130px] sm:w-[180px] md:w-[262px] border-2 border-[#F77F02] text-[14px] sm:text-[18px] md:text-[26px] md:leading-[47px] font-palanquin-dark md:h-[73px] sm:h-[50px] h-[40px] text-white' onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button;
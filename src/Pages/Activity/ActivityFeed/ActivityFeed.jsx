import React from 'react'
import Button from '../../../Components/Button/Button';

function ActivityFeed({name , dropdown ,btn_name}) {
  return (
    <div className=''>
        <div className='flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-center'>
            <div className=''>
                <h1 className='font-normal text-[35px] md:text-[60px] sm:leading-[40px] md:leading-[108px] font-palanquin-dark text-white py-3 md:py-0'>{name}</h1>
            </div>
            <div className='flex gap-2 md:gap-7'>
              {/* flex-col md:flex-row lg:flex-col xl:flex-row */}
                <button className="w-[170px] sm:w-[190px] md:w-[240px] lg:w-[250px] xl:w-[309px] h-[40px] sm:h-[50px]  md:h-[73px] italic font-normal text-[12px] sm:text-[18px] md:text-[24px] leading-[30px] font-mulish text-white border-2 border-[#707070]">{dropdown}</button>
                <Button name={btn_name}/>
            </div>
        </div>
    </div>
  )
}

export default ActivityFeed;
import React from 'react'
import Button from '../../../Components/Button/Button';

function ActivityFeed() {
  return (
    <div className=''>
        <div className='flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-center'>
            <div className=''>
                <h1 className='font-normal text-[35px] md:text-[60px] leading-[40px] md:leading-[108px] font-palanquin-dark text-white py-6 md:py-0'>Your activity feed</h1>
            </div>
            <div className='flex flex-col md:flex-row lg:flex-col xl:flex-row gap-7'>
                <button className="w-[190px] md:w-[309px] h-[50px] md:h-[73px] italic font-normal text-[18px] md:text-[24px] leading-[30px] font-mulish text-white border-2 border-[#707070]">Show everything...</button>
                <Button name="Create post"/>
            </div>
        </div>
    </div>
  )
}

export default ActivityFeed;
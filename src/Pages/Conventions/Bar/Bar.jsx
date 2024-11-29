import React from 'react'
import arrow from '../../../assets/arrow.svg';
function Bar() {
    return (
        <div className="h-[72px] bg-[#06131C] flex items-center">
            <div className="w-11/12 mx-auto flex items-center gap-5">
                <div className='font-normal text-[26px] leading-[47px] text-white opacity-100 font-palanquin-dark'>
                    <p>Conventions</p>
                </div>
                <div className='w-[12px] h-[21px]'>
                    <img src={arrow} alt="" className='w-full h-full'/>
                </div>
                <div className='font-normal text-[26px] leading-[47px] text-white opacity-100 font-palanquin-dark'>
                    <p>2024</p>
                </div>
                <div className='w-[12px] h-[21px]'>
                    <img src={arrow} alt="" className='w-full h-full'/>
                </div>
            </div>
        </div>
    )
}

export default Bar;
// font-normal text-[26px] leading-[47px] text-white opacity-100 font-palanquin-dark
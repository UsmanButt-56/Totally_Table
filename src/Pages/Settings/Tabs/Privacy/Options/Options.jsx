import React from 'react'
import down from '../../../../../assets/down.svg';
function Options({name , dropdown}) {
    return (
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center pb-[18px] md:pb-[34px]">
            <div>
                <p className='font-bold text-[18px] md:text-[26px] md:leading-[40px] font-mulish opacity-100'>{name}</p>
            </div>
            <div className='border-2 border-[#707070]'>
                <div className='w-full xl:w-[460px] h-[45px] md:h-[73px] flex justify-between items-center px-[10px] md:px-[25px]'>
                    <div>
                        <p className='font-normal text-[16px] md:text-[24px] md:leading-[30px] font-mulish'>{dropdown}</p>
                    </div>
                    <div className='w-[16px] lg:w-[21px] h-[8px] lg:h-[12px]'>
                      <img src={down} alt="" className='w-full h-full'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Options;
import React from 'react'
import connect from '../../../assets/connect.svg';
function New() {
    return (
        <div className='w-full max-w-auto h-auto md:h-[198px] px-6 md:px-10 py-6 md:py-0 bg-white'>
            <div className="flex flex-col md:flex-row md:justify-between items-center h-full">
                <div>
                    <p className='font-bold text-[20px] md:text-[26px] md:leading-[33px] font-mulish'>New feature added</p>
                    <p className='font-normal text-[15px] md:text-[26px] md:leading-[33px] font-mulish'>Your account now supports direct messaging!</p>
                </div>
                <div className='w-[50px] h-[72px] md:w-[92px] md:h-[122px]'>
                    <img src={connect} alt="" className='w-full h-full'/>
                </div>
            </div>
        </div>
    )
}

export default New;
import React from 'react'
//import step0 from '../../../assets/step.svg';
import Button from '../../../Components/Button/Button';
//import { useNavigate } from 'react-router-dom';
function Steps({ image, step, desc, button, onClick }) {
    //const navigate = useNavigate();
    return (
        <div className='w-full max-w-auto h-auto xl:h-[149px] bg-[#0D2539] px-6 md:px-10 py-4 mb-6'>
            <div className="flex flex-col xl:flex-row xl:justify-between items-center h-full gap-y-3">
                <div className='w-full flex flex-col md:flex-row md:items-center gap-x-5'>
                    <div className='w-[40px] h-[40px] md:w-[71px] md:h-[69px]'>
                        <img src={image} alt="" className='w-full h-full' />
                    </div>
                    <div className='text-white'>
                        <p className='font-light text-[14px] md:text-[18px] md:leading-[23px] font-mulish'>{step}</p>
                        <p className='font-normal text-[16px] md:text-[26px] md:leading-[33px] font-mulish'>{desc}</p>
                    </div>
                </div>
                <div className='w-full flex justify-start xl:justify-end items-center gap-3'>
                    <p className='text-[16px] py-[11px] md:text-[26px] leading-[47px] font-palanquin-dark text-white cursor-pointer px-[2px] md:px-[32px]'>Skip</p>
                    <Button name={button} onClick={onClick} />
                </div>
            </div>
        </div>
    )
}

export default Steps;
import React from 'react';
// import mic from '../../../assets/mic.svg';
import comment from '../../../assets/comment.svg';
// import star from '../../../assets/star.svg';
function Feeds({ image1, image2, first, second, third, time, desc_f, desc_l, comments, star, link }) {
    return (
        <div className='h-auto bg-[#0D2539] px-3 md:px-[30px] pb-[46px] my-6 lg:mt-8'>
            <div className='flex flex-col md:flex-row justify-start md:justify-between md:items-center'>
                <div className='flex relative md:items-center pt-[30px]'>
                    <div className='w-[40px] h-[40px] md:w-[66px] md:h-[66px] flex-shrink-0'>
                        <img src={image1} alt="" className='w-full h-full' />
                    </div>

                    {
                        image2 &&
                        (
                            <div className='w-[40px] h-[40px] md:w-[66px] md:h-[66px] absolute left-8 md:left-14'>
                                <img src={image2} alt="" className='w-full h-full' />
                            </div>
                        )
                    }

                    <div className={`flex items-center ${image2 ? 'ms-10 md:ms-20' : 'ms-4'}`}>
                        <p className='font-bold font-mulish text-[18px] md:text-[26px]  md:leading-[33px] text-[#F3C15F]'>{first} <span className='text-[#F2F0EF]'> {second}</span> <span className='text-[#F3C15F]'>{third}</span></p>
                    </div>

                </div>

                <div className="font-light text-[12px] md:text-[18px] md:leading-[23px] font-mulish text-white flex justify-end md:pt-7">{time}</div>

            </div>

            <div className={`${desc_f ? 'py-4 md:py-[38px]' : 'py-2 md:py-[8px]'}`}>
                <p className='font-normal font-mulish text-[16px] md:text-[26px] md:leading-[33px] text-white'>
                    {desc_f}
                </p>
            </div>

            <div className='flex gap-10 items-center'>

                <div className='flex gap-3 w-[20px] h-[20px] md:w-[27px] md:h-[28px] items-center'>
                    <img src={comment} alt="" className='w-full h-full' />
                    <p className='font-normal font-mulish text-[16px] md:text-[26px] leading-[33px] text-white'>{comments}</p>
                </div>

                <div className='w-[20px] h-[20px] md:w-[28px] md:h-[27px]'>
                    <img src={star} alt="" className='w-full h-full' />
                </div>

            </div>

        </div>

    )
}

export default Feeds;
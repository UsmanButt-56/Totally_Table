import React from 'react'
import Input from '../../../../Components/Input/Input';
import TextArea from '../../../../Components/TextArea/TextArea';
import BgButton from '../../../../Components/Button/BgButton';
function Feed({ name , text , email , box , btn }) {
    return ( 
        <div className="bg-[#102F47] min-h-screen">
           <div className="w-11/12 mx-auto flex flex-col xl:flex-row xl:justify-between pt-[28px] gap-y-5">
             <div className="w-full xl:w-[750px]">
                <div>
                    <p className="font-normal text-[26px] sm:text-[40px] md:text-[50px] lg:text-[60px] sm:leading-[68px] md:leading-[88px] lg:leading-[108px] font-palanquin-dark opacity-100 text-white">{name}</p>
                </div>
                <div className="pt-[12px] sm:pt-[22px] md:pt-[42px]">
                    <p className="font-normal text-[16px] md:text-[26px] md:leading-[33px] font-mulish text-white">{text}</p>
                </div>
                <div className="pt-[6px] md:pt-[12px]">
                    <p className="font-normal text-[16px] md:text-[26px] md:leading-[33px] font-muslish text-white">Alternatively, you can email 
                      <span className="text-[#F3C15F]"> {email}</span>
                    </p>
                </div>
             </div>
             <div className="w-full xl:w-[812px] h-full lg:h-[726px] bg-[#0D2539] pb-[30px] mb-[30px]">
                <div className="px-[10px] sm:px-[20px] md:px-[53px] flex flex-col">
                    <div className="pt-[18px] md:pt-[38px]">
                       <p className="font-normal text-[16px] sm:text-[26px] md:text-[36px] md:leading-[66px] font-palanquin-dark opacity-100 text-white">{box}</p>
                    </div>
                    <div className="flex flex-col gap-[19px] md:gap-[29px] mt-[16px] md:mt-[28px]">
                    <div className='h-[50px] md:h-[73px] w-full bg-[#102F47] flex items-center px-[10px] lg:px-[23px] border-b'>
                        <Input type="text" placeholder="Your name" />
                    </div>
                    <div className='h-[50px] md:h-[73px] w-full bg-[#102F47] flex items-center px-[10px] lg:px-[23px] border-b'>
                        <Input type="email" placeholder="Your email address" />
                    </div>
                    {/* Textarea */}
                    <div className=''>
                        <div className='h-[213px] w-full bg-[#102F47] flex items-center px-[10px] lg:px-[23px] border-b'>
                            <TextArea placeholder="Your message - write as much as you like" />
                        </div>
                    </div>
                    <div className='w-full h-[77px] bg-[#F77F00] font-normal text-[26px] leading-[47px] font-palanquin-dark text-white opacity-100'>
                        <button className="w-full h-full ">{btn}</button>
                    </div>
                    </div>
                </div>
             </div>
           </div>
        </div>
    )
}

export default Feed;
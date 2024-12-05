import React from 'react'
import Input from '../../../Components/Input/Input';
import mic from '../../../assets/mic.svg';
import Button from '../../../Components/Button/Button';
import TextArea from '../../../Components/TextArea/TextArea';
import BgButton from '../../../Components/Button/BgButton';
//import map from '../../../assests/mic.svg';
function Update() {
    return (
        <div className='bg-[#0D2539] 2xl:h-[1644px]'>
            <div className="px-[10px] md:px-[25px] lg:px-[56px] pt-[15px] md:pt-[31px] text-[20px] md:text-[36px] md:leading-[66px] font-palanquin-dark opacity-100 text-white">
                About You
            </div>
            <form>
                <div className="px-[10px] md:px-[25px] lg:px-[56px] pt-[15px] lg:pt-[37px] flex flex-col 2xl:flex-row 2xl:justify-between pe-3 xl:pe-[96px]">
                    <div className='order-2 2xl:order-1'>
                        <div className='flex flex-col xl:flex-row xl:gap-x-[13px] gap-y-[15px]'>
                            <div className='h-[50px] md:h-[73px] w-full xl:w-[310px] bg-[#102F47] flex items-center px-[10px] lg:px-[23px] border-b'>
                                <Input type="text" placeholder="Helen" />
                            </div>
                            <div className='h-[50px] md:h-[73px] w-full xl:w-[310px] bg-[#102F47] flex items-center px-[10px] lg:px-[23px] border-b'>
                                <Input type="text" placeholder="McKeigh" />
                            </div>
                        </div>

                        <div className='pt-[15px] xl:pt-[38px]'>
                            <div className='h-[50px] md:h-[73px] w-full xl:w-[633px] bg-[#102F47] flex items-center px-[10px] lg:px-[23px] border-b'>
                                <Input type="email" placeholder="helengamer1974@gmail.com" />
                            </div>
                        </div>

                        <div className='pt-[15px] xl:pt-[38px]'>
                            <div className='h-[50px] md:h-[73px] w-full xl:w-[633px] flex items-center px-[10px] lg:px-[23px] border-b'>
                                <Input type="text" placeholder="@gamestories2" />
                            </div>
                            <p className='pt-[9px] md:pt-[19px] text-[12px] md:text-[22px] md:leading-[28px] font-mulish italic font-normal text-[#F2F0EF]'>Username cannot be changed.</p>
                        </div>

                        <div className='pt-[15px] xl:pt-[38px]'>
                            <div className='h-[50px] md:h-[73px] w-full xl:w-[633px] bg-[#102F47] flex items-center px-[10px] lg:px-[23px] border-b'>
                                <Input type="text" placeholder="Bristol" />
                            </div>
                        </div>

                    </div>

                    <div className='order-1 2xl:order-2 mb-5'>
                        <div className='w-[100px] h-[100px] md:w-[170px] md:h-[170px] lg:w-[302px] lg:h-[302px] mb-[24px] md:mb-[42px]'>
                            <img src={mic} alt="" className='w-full h-full' />
                        </div>
                        <Button name="Update picture" />
                    </div>

                </div>

                {/* TextArea */}
                <div className='pt-[15px] xl:pt-[38px] px-[10px] md:px-[25px] lg:px-[56px]'>
                    <div className='h-[213px] w-full 2xl:w-[1063px] bg-[#102F47] flex items-center px-[10px] lg:px-[23px] border-b'>
                        <TextArea placeholder="Your biography (160 characters)" />
                    </div>
                </div>

                {/* Button */}

                <div className='pt-[15px] xl:pt-[38px] px-[10px] md:px-[25px] lg:px-[56px]'>
                    <BgButton name="Save changes" />
                </div>
            </form>

            {/* Change password */}

            <div className='pt-[15px] xl:pt-[38px] px-[10px] md:px-[25px] lg:px-[56px] pb-5'>
                <p className='font-normal text-[26px] md:text-[36px] leading-[33px] md:leading-[66px] font-palanquin-dark text-white'>Your password</p>
                <form action="">
                    <div className='flex flex-col gap-y-[20px] lg:gap-y-[39px] pt-[12px] md:pt-[27px]'>
                        <div className="h-[50px] md:h-[73px] w-full 2xl:w-[925px] bg-[#102F47] flex items-center px-[10px] lg:px-[23px] border-b">
                            <Input type="password" placeholder="Current password" />
                        </div>
                        <div className='h-[50px] md:h-[73px] w-full 2xl:w-[925px] bg-[#102F47] flex items-center px-[10px] lg:px-[23px] border-b'>
                            <Input type="password" placeholder="New password" />
                        </div>
                        <div className='h-[50px] md:h-[73px] w-full 2xl:w-[925px] bg-[#102F47] flex items-center px-[10px] lg:px-[23px] border-b'>
                            <Input type="password" placeholder="Confirm new password" />
                        </div>
                        <div className='pt-[10px] xl:pt-[0px]'>
                            <BgButton name="Update password" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Update;
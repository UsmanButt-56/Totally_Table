import React from 'react'
import mic from '../../../../assets/mic.svg';
import Button from '../../../../Components/Button/Button';
import ActivityFeed from '../../../Activity/ActivityFeed/ActivityFeed';
import filledstar from '../../../../assets/filled-star.svg';
import star from '../../../../assets/star.svg';
import Feeds from '../../../Activity/Feeds/Feeds';
function Your_Feed() {
  return (
    <div className=" bg-[#102F47]">
        <div className='w-11/12 mx-auto'>
           <div className='flex flex-col lg:flex-row lg:justify-between'>
               <div className='pt-[75px] md:pt-[175px]'>
                    <div className='w-full lg:w-[395px] h-[390px] md:h-[533px] bg-[#0D2539] relative flex justify-center'>
                        <div className='w-[130px] h-[130px] md:w-[244px] md:h-[244px] absolute -top-14 md:-top-28 '>
                            <img src={mic} alt=""  className='w-full h-full'/>
                        </div>
                        <div className='mt-[79px] md:mt-[139px]'>
                            <div className='text-center'>
                                <p className='font-normal text-[25px] md:text-[30px] lg:text-[35px] lg:leading-[63px] font-palanquin-dark text-white'>Helen McKeigh</p>
                                <p className='italic font-normal text-[20px] leading-[25px] font-mulish tracking-[0.4px] text-white'>@gamestories2</p>
                                <div className='mt-[29px]'>
                                    <Button name="Edit profile"/>
                                </div>
                                <div className='font-normal text-[20px] leading-[25px] font-mulish tracking-[0.4px] text-[#F2F0EF] flex flex-col mt-7 gap-4'>
                                    <p>413 friends</p>
                                    <p>Member since 2024</p>
                                    <p>Bristol</p>
                                </div>
                                
                            </div>
                        
                        </div>
                        
                    </div>
               </div>
                
                {/* 2nd block....... */}
                <div className='flex-grow md:pt-[40px] md:ps-4'>
                    <ActivityFeed name="Your Feed" dropdown="Showing all updates" btn_name="Post update"/>
                    <Feeds image1={mic} image2={mic} first="Daphne" second="is attending " third="UK Games Expo" time="Just now" desc_f="Daphne will attend UK Games Expo on Friday 31st May 2024 and Saturday 1st June 2024" desc_l="" comments="0" star={star} />
                    <Feeds image1={mic} image2={mic} first="UK Games Expo " second="announced for 2024! " third="" time="" desc_f="Friday 31st May - Sunday 2nd June 2024." desc_l="Read the announcement" comments="0" star={filledstar} />
                    <Feeds image1={mic} image2={""} first="Niles" second="updated their profile picture" third="" time="20 minutes ago" desc_f="" desc_l="" comments="0" star={filledstar} />
                    <Feeds image1={mic} image2={""} first="You" second="posted an update:" third="" time="1 hour ago" desc_f="Hey lovely Tabletop people - does anyone fancy a trip abroad this year to attend Essen Spiel? I’ve always wondered what this convention would be like and wouldn’t mind an opportunity to break out my Deutsch! If you’re interested, let me know." desc_l="hhh" link="https://totallytabletop.social/conventions/essen-spiel-2025" comments="3" star={star} />
                    <Feeds image1={mic} image2={""} first="Roz" second="commented:" third="" time="45 minutes ago" desc_f="I’m up for it, but I can’t speak any German…" desc_l="" comments="0" star={star} />
                    <Feeds image1={mic} image2={""} first="Martin" second="is staying at Holiday Inn Express Edinburgh Airport" third="" time="2 days ago" desc_f="6th - 7th September 2024 for" desc_l="Tabletop Scotland" link="" comments="0" star={filledstar} />
                </div>
           </div>
        </div>
    </div>
  )
}

export default Your_Feed;
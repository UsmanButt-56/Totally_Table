import React from 'react'
import mic from '../../../assets/mic.svg';
import calendar from '../../../assets/calendar.svg';
import map from '../../../assets/map.svg';
import link from '../../../assets/website_link.svg';
import { useLocation } from 'react-router-dom';
function OpenEvent() {
    const location = useLocation();
    const event = location.state?.event;

    if (!event) {
        return <div>No event selected!</div>;
    }
    // else
    // {
    //     console.log(event.link);
    // }
    return (
        <div className="bg-[#102F47] min-h-screen">
            <div className="w-11/12 mx-auto">
                <div className="flex flex-col xl:flex-row xl:justify-between pt-7 md:pt-[54px] gap-y-6">
                    <div className='flex flex-col xl:w-[950px] 2xl:w-[1050px]'>
                        <div className=''>
                            <span className='font-normal text-[35px] md:text-[60px] leading-[40px] md:leading-[108px] font-palanquin-dark text-white'>
                                {event.name}
                            </span>
                            <br />

                            <div className="mt-4">
                                {event.desc.map((line, index) => (
                                    <p
                                        key={index}
                                        className="font-normal text-[18px] md:text-[24px] md:leading-[30px] font-mulish text-white opacity-100 mb-4"
                                    >
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='w-full lg:w-[536px] h-full lg:h-[676px] bg-[#0D2539]'>
                        <div className='flex justify-center pt-[20px] md:pt-[56px]'>
                            <div className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[212px] md:h-[212px]'>
                                <img src={mic} alt="" className='w-full h-full' />
                            </div>
                        </div>
                        <div className='md:px-[42px] pt-[20px] md:pt-[56px]'>
                            <hr className='bg-[#102F47]' />
                        </div>

                        <div className='px-[15px] md:px-[42px] flex flex-col gap-y-[32px] mt-[40px] md:mt-[106px] pb-7'>
                            <div className='flex items-center gap-x-[12px] md:gap-x-[22px]'>
                                <div>
                                    <img src={map} alt="" />
                                </div>
                                <div className='font-normal text-[18px] md:text-[26px] md:leading-[33px] font-mulish text-white opacity-100'>
                                    <span>{event.location}</span>
                                </div>
                            </div>
                            <div className='flex items-center gap-x-[12px] md:gap-x-[22px]'>
                                <div>
                                    <img src={calendar} alt="" />
                                </div>
                                <div className='font-normal text-[18px] md:text-[26px] md:leading-[33px] font-mulish text-white opacity-100'>
                                    <span>{event.calendars}</span>
                                </div>
                            </div>
                            <div className='flex items-center gap-x-[12px] md:gap-x-[22px]'>
                                <div>
                                    <img src={link} alt="" />
                                </div>
                                <div className='font-normal text-[18px] md:text-[26px] md:leading-[33px] font-mulish text-white opacity-100'>
                                    <span>{event.link}</span>
                                </div>
                                {/* <a
                                    href={event.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 underline"
                                >
                                    {event.link}
                                </a> */}
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpenEvent;
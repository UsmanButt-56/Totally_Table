import React, { useState } from 'react'
import mic from '../../../assets/mic.svg';
import calendar from '../../../assets/calendar.svg';
import map from '../../../assets/map.svg';
import Button from '../../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';
function Event() 
{
    const navigate = useNavigate();
    const events =
        [
            {
                id: 1,
                name: "UK Games Expo",
                calendars: "31st May - 2nd June 2024",
                location: "Harrogate Convention Centre",
                featured: true,
                data: "Also known as UKGE, the UK Games Expo is the largest Tabletop Games Convention in the UK - where all aspects of the tabletop gaming hobby are represented under one roof.",
                desc : ["Also known as UKGE, the UK Games Expo is the largest Tabletop Games Convention in the UK - where all aspects of the tabletop gaming hobby are represented under one roof.",
                "At UK Games Expo there are two huge halls full of exhibitors who want to show you their games. You can see them, you can try them out, and if you like them you can buy them.", 
                "There is also a huge library of games to borrow and play on hundreds of tables of open gaming - open for anyone to play anything in."],
                link: "www.ukgamesexpo.co.uk"
            },
            {
                id: 2,
                name: "HandyCon Double 6",
                calendars: "19th April - 21st April 2025",
                location: "Delta Hotel, Milton Keynes",
                featured: false,
                data: "HandyCon is a thrilling three-day board gaming convention that takes place four times a year in the vibrant city of Milton Keynes, UK.",
                desc : ["Also known as UKGE, the UK Games Expo is the largest Tabletop Games Convention in the UK - where all aspects of the tabletop gaming hobby are represented under one roof.",
                "At UK Games Expo there are two huge halls full of exhibitors who want to show you their games. You can see them, you can try them out, and if you like them you can buy them.", 
                "There is also a huge library of games to borrow and play on hundreds of tables of open gaming - open for anyone to play anything in."],
                link : "www.handyCon.co.uk"
            },
            {
                id: 3,
                name: "Gaelcon",
                calendars: "25th October - 28th October 2025",
                location: "Crowne Plaza, Northwood, Dublin",
                featured: false,
                data: "HandyCon is a thrilling three-day board gaming convention that takes place four times a year in the vibrant city of Milton Keynes, UK.",
                desc : ["Also known as UKGE, the UK Games Expo is the largest Tabletop Games Convention in the UK - where all aspects of the tabletop gaming hobby are represented under one roof.",
                "At UK Games Expo there are two huge halls full of exhibitors who want to show you their games. You can see them, you can try them out, and if you like them you can buy them.", 
                "There is also a huge library of games to borrow and play on hundreds of tables of open gaming - open for anyone to play anything in."],
                link : "www.gaelcon.co.uk"
            },
            {
                id: 4,
                name: "Airecon",
                calendars: "13th May - 16th May 2025",
                location: "Harrogate Convention Centre",
                featured: false,
                data: "AireCon is a friendly and inclusive analog gaming festival in Harrogate Convention Centre. Whether you've come alone or with a massive group you'll find plenty of fun to be had and new friendly faces to meet.",
                desc : ["Also known as UKGE, the UK Games Expo is the largest Tabletop Games Convention in the UK - where all aspects of the tabletop gaming hobby are represented under one roof.",
                "At UK Games Expo there are two huge halls full of exhibitors who want to show you their games. You can see them, you can try them out, and if you like them you can buy them.", 
                "There is also a huge library of games to borrow and play on hundreds of tables of open gaming - open for anyone to play anything in."],
                link : "www.airecon.co.uk"
            }
        ]
    const [selectedEvent, setSelectedEvent] = useState(null);
    const handleEvent = (eventname) => 
    {
        setSelectedEvent(eventname);
    }
    const Eventdetails = (event) =>
    {
        navigate('/evented' , { state : { event } });
    }
    return (
        <div>
            {
                events.map((event) => (
                    <div key={event.id} className={`bg-[#0D2539] h-auto 2xl:h-[358px] px-[8px] md:px-[48px] pt-[15px] md:pt-[48px] mb-[30px] cursor-pointer transition-all
                    ${selectedEvent === event.name ? 'border-[3px] border-[#F3C15F] ' : 'border-transparent border-2'}`}
                    onClick={() => handleEvent(event.name)}
                    >
                        <div className="flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-center gap-y-3">
                            <div className='flex items-start sm:items-center gap-[15px] md:gap-[30px] lg:gap-[47px]'>
                                <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[156px] lg:h-[156px] flex-shrink-0'>
                                    <img src={mic} alt="" className='w-full h-full object-cover' />
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex font-normal items-center text-[19px] sm:text-[30px] md:text-[48px] md:leading-[87px] font-palanquin-dark text-white'>
                                        <span className=''>{event.name}</span>
                                        {
                                            event.featured &&
                                            (
                                                <div className='bg-[#F3C15F] md:h-[28px] flex items-center ms-2 md:ms-[23px] px-1 md:px-2 py-1'>
                                                    <p className='text-black font-semibold text-[8px] md:text-[18px] md:leading-[28px] opacity-100'>FEATURED</p>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className='flex flex-col xl:flex-row xl:gap-x-[43px] gap-y-2'>
                                        <div className='flex gap-[8px] sm:gap-[16px] md:gap-[22px]'>
                                            <div className='w-[17px] h-[21px] md:w-[27px] md:h-[31px]'>
                                                <img src={calendar} alt="" className='w-full h-full' />
                                            </div>
                                            <p className='font-normal text-[13px] sm:text-[18px] md:text-[26px] md:leading-[40px] font-mulish text-white opacity-100'>{event.calendars}</p>
                                        </div>
                                        <div className='flex gap-[8px] sm:gap-[16px] md:gap-[22px]'>
                                            <div className='w-[17px] h-[21px] md:w-[27px] md:h-[31px]'>
                                                <img src={map} alt="" className='w-full h-full' />
                                            </div>
                                            <p className='font-normal text-[13px] sm:text-[18px] md:text-[26px] md:leading-[40px] font-mulish text-white opacity-100'>{event.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Button name="More details" onClick={() => Eventdetails(event)} />
                            </div>
                        </div>
                        {/*  */}
                        <div className='pt-[10px] md:pt-[38px] pb-[10px] md:pb-[50px] font-normal text-[14px] md:text-[26px] leading-[22px] md:leading-[40px] font-mulish text-white opacity-100'>
                            <p>{event.data}</p>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default Event;
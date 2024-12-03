import React, { useState, useEffect } from 'react';
import mic from '../../../assets/mic.svg';
import calendar from '../../../assets/calendar.svg';
import map from '../../../assets/map.svg';
import Button from '../../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';

function Event() {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const handleEvent = (eventId) => {
        setSelectedEvent(eventId);
    }

    const Eventdetails = (event) => {
        navigate('/evented', { state: { event } });
    }

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('http://localhost:5000/events');
                const result = await response.json();
                console.log(result);
                if (Array.isArray(result.data)) {
                    setEvents(result.data); // Only set if data is an array
                } else {
                    console.error("Expected an array, but received:", data);
                }
            } catch (error) {
                console.error("Error is ", error);
            }
        }
        fetchEvents();
    }, []);

    return (
        <div>
            {
                events.map((event) => (
                    <div key={event.id} className={`bg-[#0D2539] h-auto 2xl:h-[358px] px-[8px] md:px-[48px] pt-[15px] md:pt-[48px] mb-[30px] cursor-pointer transition-all
                    ${selectedEvent === event.id ? 'border-[3px] border-[#F3C15F]' : 'border-transparent border-2'}`}
                    onClick={() => handleEvent(event.id)}
                    >
                        <div className="flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-center gap-y-3">
                            <div className='flex items-start sm:items-center gap-[15px] md:gap-[30px] lg:gap-[47px]'>
                                <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[156px] lg:h-[156px] flex-shrink-0'>
                                    <img src={mic} alt="Event icon" className='w-full h-full object-cover' />
                                </div>
                                <div className='flex flex-col'>
                                    <div className='flex font-normal items-center text-[19px] sm:text-[30px] md:text-[48px] md:leading-[87px] font-palanquin-dark text-white'>
                                        <span>{event.title}</span>
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
                                                <img src={calendar} alt="Calendar icon" className='w-full h-full' />
                                            </div>
                                            <p className='font-normal text-[13px] sm:text-[18px] md:text-[26px] md:leading-[40px] font-mulish text-white'>{event.date}</p>
                                        </div>
                                        <div className='flex gap-[8px] sm:gap-[16px] md:gap-[22px]'>
                                            <div className='w-[17px] h-[21px] md:w-[27px] md:h-[31px]'>
                                                <img src={map} alt="Map icon" className='w-full h-full' />
                                            </div>
                                            <p className='font-normal text-[13px] sm:text-[18px] md:text-[26px] md:leading-[40px] font-mulish text-white'>{event.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Button name="More details" onClick={() => Eventdetails(event)} />
                            </div>
                        </div>
                        <div className='pt-[10px] md:pt-[38px] pb-[10px] md:pb-[50px] font-normal text-[14px] md:text-[26px] leading-[22px] md:leading-[40px] font-mulish text-white'>
                            <p>{event.data}</p>
                        </div>
                    </div>
                ))
            
            }
        </div>
        
    )
}

export default Event;

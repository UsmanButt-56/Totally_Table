import React from 'react'
import { NavLink } from 'react-router-dom';
function Sidebar() {
    const side = [
        {
            id: 1,
            name: "Home",
            path: "/"
        },
        {
            id: 2,
            name: "Your activity",
            path: "/activity"
        },
        {
            id: 3,
            name: "Your conventions",
            path: "/conventions"
        },
        {
            id: 4,
            name: "Friends",
            path: "/friends"
        },
        {
            id: 5,
            name: "Your profile",
            path: "/profile"
        },
        {
            id: 6,
            name: "Settings",
            path: "/settings"
        },
    ]
    const quick = [
        {
            id: 1,
            name: "Upcoming conventions",
            path: "/upcoming"
        },
        {
            id: 2,
            name: "Games for sale",
            path: "/games"
        },
    ]
    return (
        <div className='bg-[#102F47]'>
            <div className="">
                <div className='w-full lg:w-[331px] h-[717px] bg-[#0D2539] px-[33px] border-b-2 border-r-2 border-[#F3C15F]'>
                    <div className='py-[16px] text-[26px] leading-[66px] font-palanquin-dark text-white font-bold'>
                        Your turn, Helen
                    </div>

                    <hr className='text-white mb-3' />

                    {
                        side.map((item , index) => (
                            <NavLink key={index} to={item.path} className="text-white py-2 cursor-pointer text-[22px] md:text-[26px] leading-[47px] font-palanquin-dark flex flex-col">
                                {item.name}
                            </NavLink>
                        ))
                    }

                    <hr className='text-white my-4' />
                    <p className='text-white italic text-[24px] leading-[30px]'>Quick Links</p>
                    {
                       quick.map((item,index)=>(
                        <NavLink key={index} to={item.path} className="text-white py-[11px] cursor-pointer text-[24px] leading-[47px] font-palanquin-dark flex flex-col">
                                {item.name}
                            </NavLink>
                       ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Sidebar;
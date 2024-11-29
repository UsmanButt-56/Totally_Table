import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Bar from '../../Pages/Conventions/Bar/Bar';
import { Outlet } from 'react-router-dom';

function Event_Layout() {
    return (
        <div className="bg-[#102F47]">
            <Navbar />
            <div className="flex flex-col pt-[120px] md:pt-[180px] mx-auto">
                <Bar />
                <Outlet />
            </div>
        </div>
    )
}

export default Event_Layout;
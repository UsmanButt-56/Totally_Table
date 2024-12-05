import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

function Footer_Layout() {
    return ( 
        
        <div className="flex flex-col">
        <Navbar />
            <div className="pt-[118px] md:pt-[183px]">
                <Outlet/>
            </div>
        </div>
    )
}

export default Footer_Layout;
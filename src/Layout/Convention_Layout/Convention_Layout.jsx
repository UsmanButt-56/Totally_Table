import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Search from '../../Pages/Conventions/Search/Search';
import Event from '../../Pages/Conventions/Event/Event';

function Convention_Layout() {
    return (
        <div className="bg-[#102F47]">
            <Navbar />
            <div className="flex w-11/12 flex-col pt-40 md:pt-[230px] mx-auto">
                <Search />
                <Event />
            </div>
        </div>
    )
}

export default Convention_Layout;
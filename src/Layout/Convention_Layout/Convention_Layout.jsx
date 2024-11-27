import React from 'react'
import Navbar from '../../Components/Navbar/Navbar';
import Search from '../../Pages/Conventions/Search/Search';

function Convention_Layout() {
    return (
        <div className="bg-[#102F47]">
            <Navbar />
            <div className="flex w-11/12 flex-col pt-40 md:pt-[230px] mx-auto">
                <Search />
            </div>
        </div>
    )
}

export default Convention_Layout;
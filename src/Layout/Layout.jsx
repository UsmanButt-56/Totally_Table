import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar/Navbar';
function Layout() {
  return (
    <>
      <div className="bg-[#102F47]">
        <Navbar />
        <div className='flex flex-col lg:flex-row w-11/12 mx-auto pb-10 pt-40 md:pt-[230px] gap-x-[67px] gap-y-[20px]'>
          <Sidebar />
          <div className='flex-1'>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout;
import React, { useState } from 'react'
import logo from '../../assets/logo.png';
import email from '../../assets/email.svg';
import bell from '../../assets/bell.svg';
import arrow from '../../assets/arrow.svg';
import { FaSearch } from "react-icons/fa";
import person from '../../assets/person.png';
function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggledropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
  return (
    <div className='w-full h-[117px] md:h-[181px] bg-[#0D2539]'>
      <div className='w-11/12 mx-auto h-full flex justify-between items-center'>
        {/* First Slot */}

        <div className='flex md:hidden w-[41px] h-[42px] bg-[#102f47] rounded-full relative'>
          <div className='absolute inset-0 flex justify-center items-center'>
            <FaSearch className='text-white w-[21px] h-[21px]' />
          </div>
        </div>

        <div className='flex items-center gap-3'>
          <div className='w-[61px] h-[62px] md:w-[136px] md:h-[136px]'>
            <img src={logo} alt="" className='w-full h-full ' />
          </div>


          <div className='max-w-[634px] h-[73px] bg-[#102f47] lg:flex hidden'>
            <input type="text" placeholder="Search for conventions, people or games…" className='w-full h-full px-4 bg-transparent border-none outline-none italic font-normal text-[24px] leading-[30px] font-mulish' />
          </div>
        </div>
        {/* 2nd Slot */}
        <div className='flex items-center gap-3'>
          <div className='w-[92px] h-[92px] bg-[#102f47] rounded-full relative hidden lg:flex'>
            <div className='absolute top-0 right-0 bg-[#C53A33] text-[26px] leading-[47px] font-palanquin-dark w-[27px] h-[27px] rounded-full font-semibold flex justify-center items-center text-white'>2</div>
            <div className='absolute flex justify-center items-center inset-0'>
              <img src={email} alt="" className='' />
            </div>
          </div>

          <div className='w-[92px] h-[92px] bg-[#102f47] relative rounded-full hidden lg:flex'>
            <div className='absolute inset-0 flex justify-center items-center'>
              <img src={bell} alt="" className='' />
            </div>
          </div>

          <div className='w-[42px] md:w-[270px] h-[30px] md:h-[92px] bg-[#102f47] rounded-full relative'>
            <div className='absolute inset-0 flex justify-end md:justify-between items-center'>
              <div className='md:gap-3 text-[28px] font-bold leading-[35px] font-mulish items-center tracking-[0.56px] hidden md:flex z-10'>
                <h2 className='ps-[33.1px] text-white'>Helen</h2>
                <img src={arrow} alt="" onClick={toggledropdown} />
              </div>
              <div className='w-[41px] h-[42px] md:w-[92px] md:h-[92px] flex items-center z-10'>
                <img src={person} alt="" className='w-full h-full' />
              </div>

            </div>
            {
              isDropdownOpen && (
                <div className='absolute top-6 w-full h-full'>
                  <ul className='text-[26px] font-bold leading-[47px] font-palanquin-dark items-center bg-[#102F47] text-white rounded-2xl'>
                    <li className="pt-20 px-10 hover:bg-gray-200 ">View Profile</li>
                    <li className="pb-10 px-10 hover:bg-gray-200">Logout</li>
                  </ul>
                </div>
              )
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar;
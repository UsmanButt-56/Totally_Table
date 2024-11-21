import React from 'react'
import logo from '../../assets/logo.png';
function Footer() {
  return (
    <div className='footer w-full bg-[#0D2539]'>
        <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 ">
          <div className='bg-red-500 flex justify-center lg:justify-start'>
            <img src={logo} alt="" />
          </div>
          <div className='bg-green-500 flex flex-row justify-center lg:justify-end text-[26px] font-semibold leading-[33px] font-mulish items-center text-white'>
            <ul className='flex lg:flex-row flex-col gap-3'>
                <li>Feedback form</li>
                <li>Contact us</li>
                <li>Staying safe</li>
                <li>Terms</li>
                <li>Cookies</li>
                <li>Privacy</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer;
import React from 'react'
import logo from '../../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  return (
    <div className='footer w-full bg-[#0D2539] xl:h-[181px] h-auto py-3'>
      <div className="w-11/12 mx-auto items-center h-full flex flex-col md:flex-row md:justify-between">
        <div className='flex lg:justify-start justify-center items-center w-[61px] h-[62px] md:w-[96px] md:h-[96px]'>
          <img src={logo} alt="" className='w-full h-full' />
        </div>
        <div className='flex flex-row justify-center text-center xl:justify-end text-[16px] lg:text-[26px] font-semibold leading-[20px] lg:leading-[33px] font-mulish items-center text-white'>
          <ul className='flex md:flex-row flex-col gap-4'>
            <li>
              <Link to="/feedback">Feedback form</Link>
            </li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>
              <Link to="safe">Staying safe</Link>
            </li>
            <li>
              <button to="terms" onClick={()=>handleNavigation('terms')}>Terms</button>
            </li>
            <li>
              <Link to="cookies">Cookies</Link>
            </li>
            <li>
              <Link to="privacy">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;
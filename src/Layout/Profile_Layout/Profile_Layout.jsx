import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import View_Profile from '../../Pages/Profile/View_Profile/View_Profile';
function Profile_Layout() {
  return (
    <>
    <div className=''>
      <Navbar />
        <div className='pt-[118px] md:pt-[183px]'>
          <View_Profile />
      </div>
    </div>     
    </>
  )
}

export default Profile_Layout;
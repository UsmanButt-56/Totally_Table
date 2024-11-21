import React from 'react'
import Welcome from './Welcome/Welcome';
import Steps from './Steps/Steps';
import step0 from '../../assets/step.svg';
import Announcement from '../../Components/Announcement/Announcement';
import New from './New/New';

function Home() {
  return (
    <>
    <div className='flex flex-col'>
    <Welcome/>
    <Steps image={step0} step="Step 1 of 4" desc="Complete your profile to get started" button="Complete profile"/>
    <Announcement name="Announcement"/>
    <New />
    </div>
    </>
  )
}

export default Home;
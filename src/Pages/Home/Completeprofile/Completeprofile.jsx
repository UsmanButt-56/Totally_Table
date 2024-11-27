import React from 'react'
import Welcome from '../Welcome/Welcome';
import Steps from '../Steps/Steps';
import step0 from '../../../assets/step.svg';
import step1 from '../../../assets/step1.svg';
import step2 from '../../../assets/step2.svg';
import step3 from '../../../assets/step3.svg';
import step4 from '../../../assets/step4.svg';

function Completeprofile() {
  return (
    <>
    <div className='flex flex-col mb-7'>
    <Welcome />
    <Steps image={step0} step="Step 1 of 4" desc="Complete your profile to get started" button="Complete profile"/>
    <Steps image={step1} step="Step 2 of 4" desc="Find conventions to attend" button="All conventions"/>
    <Steps image={step2} step="Step 3 of 4" desc="Find and connect with friends" button="Find friends"/>
    <Steps image={step3} step="Step 4 of 4" desc="Take a look at available games" button="Games for sales"/>
    <Steps image={step4} step="Stepup Completely" desc="You’ve completed setup, enjoy your account!" button="Hide this message"/>
    </div>
    </>
  )
}

export default Completeprofile;
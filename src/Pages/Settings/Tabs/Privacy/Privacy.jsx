import React from 'react'
import Options from './Options/Options';
import BgButton from '../../../../Components/Button/BgButton';
import Allow from './AllowOthers/Allow';

function Privacy() {
    
    return (
        <>
            <div className="bg-[#0D2539] text-white pb-[20px] md:pb-[61px]">
                <div className='pt-[15px] md:pt-[40px] ps-[15px] md:ps-[43px] pe-[15px] md:pe-[38px]'>
                    <p className='font-normal text-[20px] md:text-[26px] md:leading-[33px] font-mulish'>We take your privacy seriously, and put control in your hands. Use the options below to control
                        who can see your different actions and updates on Totally TableTop. Please refer to our
                        <span className='text-[#E78530]'> privacy policy </span> for more information about how your data is used.
                    </p>
                    <div className='pt-[10px] sm:pt-[15px] md:pt-[28px]'>
                        <p className='font-normal text-[28px] md:text-[36px] md:leading-[66px] font-palanquin-dark opacity-100'>Who can see:</p>
                    </div>
                    <Options name="Changes to your profile" dropdown="Friends only" />
                    <Options name="Your updates" dropdown="Friends only" />
                    <Options name="Your new friendships" dropdown="Friends only" />
                    <Options name="Your convention attendance" dropdown="Friends only" />
                    <Options name="Your accommodation" dropdown="No one" />
                    <div className='flex justify-end'>
                        <BgButton name="Save changes" />
                    </div>
                </div>
            </div>
            <div className='mt-[30px]'>
                <Allow />
            </div>

        </>
    )
}

export default Privacy;
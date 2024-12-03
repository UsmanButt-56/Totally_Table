import React from 'react'
import Options from '../Options/Options';
import BgButton from '../../../../../Components/Button/BgButton';

function Allow() {
    return (
        <div className="bg-[#0D2539] text-white pb-[20px] md:pb-[61px]">
            <div className='ps-[15px] md:ps-[43px] pt-[10px] sm:pt-[15px] md:pt-[28px] pe-[15px] md:pe-[38px]'>
                <p className='font-normal text-[18px] sm:text-[28px] md:text-[36px] md:leading-[66px] font-palanquin-dark opacity-100'>Allow other users to find you by:</p>
                <div>
                    <Options name="Username"    dropdown="Yes" />
                    <Options name="Real name"    dropdown="Yes" />
                    <Options name="Email address"    dropdown="Yes" />
                    <div className='flex justify-end'>
                        <BgButton name="Save changes" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Allow;
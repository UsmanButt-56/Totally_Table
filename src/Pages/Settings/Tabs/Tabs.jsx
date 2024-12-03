import React, { useState } from 'react'

function Tabs() {
    const [activeTabs, setActiveTabs] = useState('Privacy');
    const rendertabs = () => {

        switch (activeTabs) {
            case 'Privacy':
                return <Privacy />
            case 'Display':
                return <Privacy />
            case 'Account':
                return <Privacy />
            case 'Other':
                return <Privacy />
            default:
                return null;
        }
    }
    return (
        <div className='flex font-normal text-[14px] sm:text-[16px] md:text-[18px] lg:text-[24px] xl:text-[26px] lg:leading-[47px] font-palanquin-dark text-white'>
            <div className={`w-[140px] h-[55px] xl:w-[170px] xl:h-[73px] ${activeTabs === 'Privacy' ? 'bg-[#0D2539]' : ''}`}>
                <button className='w-full h-full' onClick={() => setActiveTabs('Privacy')}>Privacy</button>
            </div>
            <div className={`w-[140px] h-[55px] xl:w-[170px] xl:h-[73px] ${activeTabs === 'Display' ? 'bg-[#0D2539]' : ''}`}>
                <button className='w-full h-full' onClick={() => setActiveTabs('Display')}>Display</button>
            </div>
            <div className={`w-[140px] h-[55px] xl:w-[170px] xl:h-[73px] ${activeTabs === 'Account' ? 'bg-[#0D2539]' : ''}`}>
                <button className='w-full h-full' onClick={() => setActiveTabs('Account')}>Account</button>
            </div>
            <div className={`w-[140px] h-[55px] xl:w-[170px] xl:h-[73px] ${activeTabs === 'Other' ? 'bg-[#0D2539]' : ''}`}>
                <button className='w-full h-full' onClick={() => setActiveTabs('Other')}>Other</button>
            </div>
        </div>
    )
}

export default Tabs;
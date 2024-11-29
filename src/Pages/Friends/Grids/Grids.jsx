import React from 'react';
import orangering from '../../../assets/Orangering.svg';
import usercircle from '../../../assets/White_ring.svg';
import list from '../../../assets/list.svg';
import grid from '../../../assets/grid.svg';
function Grids({ listed , showFriendsData , isListSelected }) {
    return (
        // <div className="flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-center">
        //     <div className='font-normal text-[25px] sm:text-[35px] md:text-[60px] md:leading-[108px] text-white font-palanquin-dark opacity-100'>
        //         <p>Friends (47)</p>
        //     </div>
            
        //     <div className='flex flex-col sm:flex-row sm:items-center'>
        //         <div className='flex gap-x-[20px] sm:gap-x-[42px] my-2 md:my-4'>
        //             <div className='flex items-center text-white gap-x-[10px]'>
        //                 <div className='w-[17px] md:w-[27px] h-[17px] md:h-[27px]'>
        //                     <img src={orangering} alt="" className='w-full h-full' />
        //                 </div>
        //                 <p className='font-normal text-[15px] md:text-[20px] md:leading-[25px] font-mulish tracking-[0.4px]'>ONLINE</p>
        //             </div>
        //             <div className='flex items-center text-white gap-x-[10px] me-[50px]'>
        //                 <div className='w-[17px] md:w-[27px] h-[17px] md:h-[27px]'>
        //                     <img src={usercircle} alt="" className='w-full h-full' />
        //                 </div>
        //                 <p className='font-normal text-[15px] md:text-[20px] md:leading-[25px] font-mulish tracking-[0.4px]'>OFFLINE</p>
        //             </div>
        //         </div>
                
        //         <div className='flex my-2 md:my-4'>
        //             <div className={`border-2 ${isListSelected ? 'bg-[#F77F00]' : 'bg-transparent'}border-[#F77F02] w-[40px] md:w-[76px] h-[40px] md:h-[73px] flex justify-center items-center`} onClick={listed}>
        //                 <div className='w-[20px] md:w-[36px] h-[20px] md:h-[29px]'>
        //                     <img src={list} alt="" className='w-full h-full' />
        //                 </div>
        //             </div>
        //             <div className={`border-2 ${!isListSelected ? 'bg-[#F77F00]' : 'bg-transparent'} border-[#F77F02] w-[40px] md:w-[76px] h-[40px] md:h-[73px] flex justify-center items-center`} onClick={showFriendsData}>
        //                 <div className='w-[15px] md:w-[36px] h-[15px] md:h-[29px]'>
        //                     <img src={grid} alt="" className='w-full h-full' />
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        // </div>
        <div className="flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-center">
            {/* Title Section */}
            <div className="font-normal text-[25px] sm:text-[35px] md:text-[60px] md:leading-[108px] text-white font-palanquin-dark opacity-100">
                <p>Friends (47)</p>
            </div>

            {/* Rings and Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center">
                {/* Rings Section */}
                <div className="flex gap-x-[20px] sm:gap-x-[42px] my-2 md:my-4">
                    <div className="flex items-center text-white gap-x-[10px]">
                        <div className="w-[17px] md:w-[27px] h-[17px] md:h-[27px]">
                            <img src={orangering} alt="Online" className="w-full h-full" />
                        </div>
                        <p className="font-normal text-[15px] md:text-[20px] md:leading-[25px] font-mulish tracking-[0.4px]">ONLINE</p>
                    </div>
                    <div className="flex items-center text-white gap-x-[10px] me-[50px]">
                        <div className="w-[17px] md:w-[27px] h-[17px] md:h-[27px]">
                            <img src={usercircle} alt="Offline" className="w-full h-full" />
                        </div>
                        <p className="font-normal text-[15px] md:text-[20px] md:leading-[25px] font-mulish tracking-[0.4px]">OFFLINE</p>
                    </div>
                </div>

                {/* Buttons Section */}
                <div className="flex my-2 md:my-4 gap-x-[0px]">
                    {/* List View Button */}
                    <div 
                        className={`border-2 ${isListSelected ? 'bg-[#F77F00]' : 'bg-transparent'} border-[#F77F02] w-[40px] md:w-[76px] h-[40px] md:h-[73px] flex justify-center items-center cursor-pointer`} 
                        onClick={listed}
                    >
                        <div className="w-[20px] md:w-[36px] h-[20px] md:h-[29px]">
                            <img src={list} alt="List View" className="w-full h-full" />
                        </div>
                    </div>

                    {/* Grid View Button */}
                    <div 
                        className={`border-2 ${!isListSelected ? 'bg-[#F77F00]' : 'bg-transparent'} border-[#F77F02] w-[40px] md:w-[76px] h-[40px] md:h-[73px] flex justify-center items-center cursor-pointer`} 
                        onClick={showFriendsData}
                    >
                        <div className="w-[15px] md:w-[36px] h-[15px] md:h-[29px]">
                            <img src={grid} alt="Grid View" className="w-full h-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grids;
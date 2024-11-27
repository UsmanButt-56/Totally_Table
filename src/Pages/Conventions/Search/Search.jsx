import React from 'react'

function Search() {
    return (
        <div className="">
            <div className='flex flex-col lg:flex-row lg:justify-between font-normal lg:items-center'>
                <div className='text-[25px] md:text-[30px] lg:text-[32px] xl:text-[50px] 2xl:text-[60px] leading-[40px] xl:leading-[108px] font-palanquin-dark text-white'>Convention search: ‘Con’</div>
                <div className='flex items-center px-0 lg:px-[23px] gap-[46px]'>
                    <p className='font-normal font-mulish text-[18px] md:text-[24px] leading-[30px] text-[#F2F0EF]'>3 results</p>
                    <div className='flex justify-between border-2 border-[#707070] items-center px-[18px] md:px-[18px] lg:px-[23px]'>
                        <div className='w-[130px] md:w-[250px] lg:w-[309px] flex italic text-[18px] md:text-[24px] font-mulish tracking-[0.48px] text-[#F2F0EF] h-[73px]'>
                            <button>Soonest first...</button>
                        </div>
                        <div>hhh</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Search;
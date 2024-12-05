import React from 'react'

function Input({type, placeholder }) {
    return (
        <div className='w-full font-normal text-[20px] lg:text-[28px] lg:leading-[35px] font-mulish text-[#F2F0EF] border-none'>
            <input type={type} placeholder={placeholder} className='w-full bg-transparent border-none hover:border-none focus:outline-none'/>
        </div>   
    )
}

export default Input;
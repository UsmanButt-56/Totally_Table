import React from 'react'

function TextArea({placeholder}) {
    return (
        <textarea
            placeholder={placeholder}
            className="w-full h-full pt-4 focus:outline-none bg-transparent font-normal text-[20px] lg:text-[28px] lg:leading-[35px] font-mulish text-[#F2F0EF]">
        </textarea>
    )
}

export default TextArea;
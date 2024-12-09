import React from "react";

function Chat_text({ text, time, property }) {
  return (
    <>
      <div className="w-full bg-[#102F47] px-[10px] sm:px-[15px] md:px-[20px] lg:px-[25px] xl:px-[30px] xl:py-[30px]">
        <p className="font-normal text-[16px] md:text-[22px] lg:text-[26px] lg:leading-[33px] font-mulish text-white">
          {text}
        </p>
      </div>
      {
            time && 
            (
                <div className={`flex ${property} `}>
                    <p className="text-left font-light text-[12px] lg:text-[18px] lg:leading-[23px] font-mulish text-[#F2F0EF]">
                        {time}
                    </p>
                </div>
            )
        }
    </>
  );
}

export default Chat_text;

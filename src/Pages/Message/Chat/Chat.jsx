import React from "react";
import mic from "../../../assets/mic.svg";
import Chat_text from "./Chat_text";
import Reply from "./Reply";
function Chat() {
  // const online =
  // [
  //     {
  //         id: 1,
  //         image: mic,
  //         name: "Roz"
  //     },
  //     {
  //         id: 1,
  //         image: mic,
  //         name: "Frasier"
  //     },
  //     {
  //         id: 1,
  //         image: mic,
  //         name: "Dan"
  //     },
  // ]
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col 3xl:flex-row 3xl:justify-between gap-x-[19px] gap-y-[10px]">
        <div>
          <div className="3xl:w-[395px] h-[126px] bg-[#0D2539] px-[30px] py-[30px]">
            {/* Array */}
            <div className="flex justify-between items-center">
              {/* too 111 */}
              <div className="flex items-center gap-x-[20px]">
                <div className="w-[66px] h-[66px]">
                  <img src={mic} alt="" className="w-full h-full" />
                </div>
                <div>
                  <p className="font-bold text-[26px] leading-[33px] font-mulish text-[#F3C15F]">
                    Roz
                  </p>
                </div>
              </div>
              <div className="w-[18px] h-[18px] bg-[#C53A33] rounded-full"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-full bg-[#0D2539] px-[10px] sm:px-[15px] md:px-[20px] lg:px-[25px] xl:px-[30px] py-[10px] sm:py-[15px] md:py-[20px] lg:py-[25px] xl:py-[30px]">
            <div className="flex gap-x-[12px] md:gap-x-[22px] lg:gap-x-[32px] xl:gap-x-[42px]">
              <div className="w-[22px] sm:w-[30px] md:w-[40px] lg:w-[50px] xl:w-[66px] h-[22px] sm:h-[30px] md:h-[40px] lg:h-[50px] xl:h-[66px]">
                <img src={mic} alt="" className="w-full h-full " />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <Chat_text
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                <Chat_text
                  text="Duis aute irure dolor in reprehenderit in voluptate velit."
                  time="3 days ago"
                  property="justify-start"
                />
              </div>
            </div>
          </div>
          {/* 2nd */}
          <div className="w-full bg-[#0D2539] px-[10px] sm:px-[15px] md:px-[20px] lg:px-[25px] xl:px-[30px] py-[10px] sm:py-[15px] md:py-[20px] lg:py-[25px] xl:py-[30px]">
            <div className="flex gap-x-[12px] md:gap-x-[22px] lg:gap-x-[32px] xl:gap-x-[42px]">
              <div className="flex flex-col gap-y-[10px]">
                <Chat_text
                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  time="3 days ago"
                  property="justify-end"
                />
              </div>
              <div className="w-[22px] sm:w-[30px] md:w-[40px] lg:w-[50px] xl:w-[66px] h-[22px] sm:h-[30px] md:h-[40px] lg:h-[50px] xl:h-[66px]">
                <img src={mic} alt="" className="w-full h-full " />
              </div>
            </div>
          </div>
          {/* 2nd */}
          {/* 3rd */}
          <div className="w-full bg-[#0D2539] px-[10px] sm:px-[15px] md:px-[20px] lg:px-[25px] xl:px-[30px] py-[10px] sm:py-[15px] md:py-[20px] lg:py-[25px] xl:py-[30px]">
            <div className="flex gap-x-[12px] md:gap-x-[22px] lg:gap-x-[32px] xl:gap-x-[42px]">
              <div className="w-[22px] sm:w-[30px] md:w-[40px] lg:w-[50px] xl:w-[66px] h-[22px] sm:h-[30px] md:h-[40px] lg:h-[50px] xl:h-[66px]">
                <img src={mic} alt="" className="w-full h-full " />
              </div>
              <div className="flex flex-col gap-y-[10px]">
                <Chat_text text="Duis aute irure dolor in reprehenderit in voluptate velit.Duis aute irure dolor in reprehenderit in voluptate velit. Duis aute irure dolor in reprehenderit in voluptate velit." />
              </div>
            </div>
          </div>
          {/* 3rd */}
          <Reply />
        </div>
      </div>
    </div>
  );
}

export default Chat;

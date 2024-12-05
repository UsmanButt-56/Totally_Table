import React from "react";
import Button from "../../../Components/Button/Button";
import mic from "../../../assets/mic.svg";
function Notify() {
  return (
    <>
      <div className="bg-[#102F47] mb-3">
        <div className="w-11/12 mx-auto">
          <div className="bg-[#0D2539] px-[15px] md:px-[30px]">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center h-full lg:h-[126px] py-[5px] lg:py-0">
              <div className="flex items-center">
                <div className="w-[10px] sm:w-[14px] md:w-[16px] lg:w-[18px] h-[10px] sm:h-[14px] md:h-[16px] lg:h-[18px] bg-[#C53A33] rounded-full"></div>
                <div className="ps-[12px] md:ps-[25px] pe-[10px] md:pe-[20px]">
                  <div className="w-[36px] sm:w-[46px] md:w-[56px] lg:w-[66px] h-[36px] sm:h-[46px] md:h-[56px] lg:h-[66px]">
                    <img
                      src={mic}
                      alt=""
                      className="w-full h-full flex-shrink-0"
                    />
                  </div>
                </div>
                <div>
                  <p className="font-normal text-[14px] sm:text-[18px] md:text-[22px] lg:text-[26px] lg:leading-[33px] font-mulish text-[#F3C15F]">
                    Niles{" "}
                    <span className="text-white">
                      sent you a friend request
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-x-[30px]">
                <div>
                  <p className="font-normal text-[16px] sm:text-[20px] md:text-[24px] lg:text-[26px] leading-[47px] text-white font-palanquin-dark opacity-100 cursor-pointer">
                    Ignore
                  </p>
                </div>
                <div>
                  <Button name="Accept" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notify;

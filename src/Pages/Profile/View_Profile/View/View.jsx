import React from "react";
import mic from "../../../../assets/mic.svg";
function View() {
  return (
    <div className="bg-[#F2F0EF]">
      <div className="w-11/12 mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center sm:h-[82px]">
        <div className="flex gap-3 items-center">
          <div className="w-[29px] h-[29px]">
            <img src={mic} className="w-full h-full" />
          </div>
          <div>
            <p className="font-normal text-[16px] md:text-[26px] leading-[33px] font-mulish opacity-100">
              You are viewing your own profile
            </p>
          </div>
        </div>
        <div>
          <p className="font-normal text-[16px] md:text-[26px] md:leading-[47px] font-palanquin-dark opacity-100 text-[#E78530]">
            Edit profile
          </p>
        </div>
      </div>
      </div>
  );
}

export default View;
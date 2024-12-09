import React from "react";
import mic from "../../../assets/mic.svg";
import TextArea from "../../../Components/TextArea/TextArea";
import BgButton from "../../../Components/Button/BgButton";
function Reply() {
  return (
    <>
      <div className="h-[369px] my-3 bg-[#0D2539] px-[10px] sm:px-[15px] md:px-[20px] lg:px-[25px] xl:px-[30px] py-[10px] sm:py-[15px] md:py-[20px] lg:py-[25px] xl:py-[30px]">
        <div className="flex gap-x-3 xl:gap-x-4">
          <div className="w-[22px] sm:w-[30px] md:w-[40px] lg:w-[50px] xl:w-[66px] h-[22px] sm:h-[30px] md:h-[40px] lg:h-[50px] xl:h-[66px]">
            <img src={mic} alt="" className="w-full h-full" />
          </div>

          <div className="flex flex-col w-full ">
            <div className="h-[222px] bg-[#102F47] px-[23px] pt-[19px]">
              <TextArea placeholder="Write a reply…" />
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-[19px] gap-y-4">
              <div>
                <p className="font-light md:text-[18px] md:leading-[23px] font-mulish text-[#F2F0EF]">
                  Replies are only visible to people in this conversation.
                </p>
              </div>
              <div>
                <BgButton name="Reply" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Reply;

import React from "react";
import SignUp_Navbar from "../../Components/Navbar/SignUp_Navbar/SignUp_Navbar";
import Input from "../../Components/Input/Input";
import BgButton from "../../Components/Button/BgButton";
import correct from "../../assets/correct.svg";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const marks = [
    {
      id: 1,
      text: "Sell and buy board games in advance of a convention",
    },
    {
      id: 2,
      text: "Create an agenda for each stand you wish to visit",
    },
    {
      id: 3,
      text: "Instantly invite friends to play games and events",
    },
  ];
  const navigate = useNavigate();
  const register = () =>
  {
    navigate('/');
  }
  return (
    <>
      <SignUp_Navbar />
      <div className="bg-[#102F47] pt-[30px] sm:pt-[47px] md:pt-[67px] lg:pt-[87px] min-h-screen">
        <div className="w-11/12 mx-auto grid gap-y-5 4xl:grid-cols-[2fr,1fr] 4xl:gap-x-10">
          {/* Left Section */}
          <div className="bg-[#0D2539] px-[20px] sm:px-[30px] md:px-[40px] lg:px-[54px] pt-[10px] sm:pt-[18px] md:pt-[28px] lg:pt-[38px] border-b-4 border-r-4 border-[#F3C15F]">
            <div>
              <p className="font-normal text-[30px] sm:text-[34px] md:text-[36px] md:leading-[66px] font-palanquin-dark text-white opacity-100">
                Create an account
              </p>
            </div>
            <div>
              <p className="font-normal text-[16px] sm:text-[20px] md:text-[26px] md:leading-[33px] font-mulish text-white opacity-100">
                It only takes a minute.
              </p>
            </div>
            <form action="">
              {/* Name */}
              <div className="grid lg:grid-cols-2 gap-x-[40px] gap-y-[19px] md:gap-y-[39px] pt-[20px] lg:pt-[38px]">
                <div className="h-[50px] md:h-[73px] w-full bg-[#102F47] flex items-center px-[10px] lg:px-[23px] border-b">
                  <Input type="text" placeholder="First name" />
                </div>
                <div className="h-[50px] md:h-[73px] w-full bg-[#102F47] flex items-center px-[10px] lg:px-[23px] border-b">
                  <Input type="text" placeholder="Last name" />
                </div>
              </div>

              {/* Email */}
              <div className="pt-[19px] md:pt-[39px]">
                <div className="h-[50px] md:h-[73px] w-full bg-[#102F47] flex items-center px-[10px] lg:px-[23px] border-b">
                  <Input type="email" placeholder="Email address" />
                </div>
              </div>
              {/* Choose a username */}
              <div className="pt-[19px] md:pt-[39px]">
                <div className="h-[50px] md:h-[73px] w-full bg-[#102F47] flex items-center px-[10px] lg:px-[23px] border-b">
                  <Input type="text" placeholder="@ Choose a username" />
                </div>
                <p className="pt-[19px] italic font-normal text-[14px] sm:text-[18px] md:text-[22px] md:leading-[28px] font-mulish tracling-[0.44px] text-[#F2F0EF]">
                  Select a username. Cannot already be in use, cannot be changed.
                </p>
              </div>
              {/* Password */}
              <div className="pt-[19px] md:pt-[39px]">
                <div className="h-[50px] md:h-[73px] w-full bg-[#102F47] flex items-center px-[10px] lg:px-[23px] border-b">
                  <Input type="password" placeholder="Create password" />
                </div>
              </div>
              {/* Confirm Password */}
              <div className="pt-[19px] md:pt-[39px]">
                <div className="h-[50px] md:h-[73px] w-full bg-[#102F47] flex items-center px-[10px] lg:px-[23px] border-b">
                  <Input type="password" placeholder="Confirm password" />
                </div>
              </div>
              {/* Button */}
              <div className="pt-[19px] md:pt-[39px] xl:pt-[38px] pb-[59px]">
                <BgButton name="Register" onClick={register}/>
              </div>
            </form>
          </div>

          {/* Right Section */}
          <div className="bg-[#0D2539] border-b-4 border-r-4 border-[#F3C15F] h-auto max-h-fit pb-5 mb-5">
            {/* mb-10 pb-10 */}
            {marks.map((mark) => (
              <div
                key={mark.id}
                className="flex items-start pt-[18px] md:pt-[43px] ps-[18px] md:ps-[46px] pe-[20px] md:pe-[72px] gap-x-[18px]"
              >
                <div className="w-[35px] h-[35px]">
                  <img src={correct} alt="" className="w-full h-full" />
                </div>
                <div>
                  <p className="font-medium text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[28px] xl:leading-[35px] font-mulish text-white">
                    {mark.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignUp;
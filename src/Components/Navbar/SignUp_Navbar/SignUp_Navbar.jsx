import React from "react";
import logo from "../../../assets/logo.png";
import FullButton from "../../Button/FullButton";
function SignUp_Navbar() {
  return (
    <div className="bg-[#0D2539] border-b-4 border-[#F3C15F]">
      <div className="w-11/12 h-[117px] md:h-[181px] mx-auto flex items-center">
        <div className="w-full flex justify-between items-center">
          <div className="flex-1 flex items-center justify-center md:justify-start gap-x-[42px]">
            <div className="w-[61px] h-[62px] md:w-[136px] md:h-[136px]">
              <img src={logo} alt="" className="w-full h-full"/>
            </div>
            <div className="hidden md:flex">
              <p className="font-normal md:text-[30px] lg:text-[40px] xl:text-[50px] xl:leading-[91px] font-palanquin-dark text-white">
                Totally TableTop
              </p>
            </div>
          </div>
          <div className="flex items-center gap-x-[53px]">
              <div className="hidden md:flex">
                <p className="text-white opacity-100">Need help?</p>
              </div>
              <div className="hidden md:flex">
                <FullButton name="Login" width="w-[145px]" small="w-[100px]" />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp_Navbar;

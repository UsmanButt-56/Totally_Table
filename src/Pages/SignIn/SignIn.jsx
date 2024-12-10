import React from "react";
import logo from "../../assets/logo.png";
import correct from "../../assets/correct.svg";
import Input from "../../Components/Input/Input";
import FullButton from "../../Components/Button/FullButton";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
function SignIn() {
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
  const login = () => {
    navigate("/home");
  };
  const SignUp = () => {
    navigate('/sign_up');
  }
  return (
    <>
    <div className=" bg-[#102F47] min-h-screen flex items-start 4xl:items-center justify-center">
      <div className="w-11/12 mx-auto flex flex-col 4xl:flex-row 4xl:justify-between h-full">
        <div className="flex flex-col 4xl:justify-center">
          <div className="flex flex-col 4xl:flex-row items-center 4xl:mb-[54px] gap-x-[28px]">
            <div className="w-[106px] md:w-[136px] h-[106px] md:h-[136px]">
              <img src={logo} alt="" className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <div>
                <p className="font-normal text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] leading-[100px] font-palanquin-dark opacity-100 text-white">
                  Totally TableTop
                </p>
              </div>
              <div className="hidden 4xl:flex">
                <p className="font-light text-[30px] leading-[38px] font-muli text-[#E9E2BC] uppercase">
                  CONVENTIONS, MANAGED
                </p>
              </div>
            </div>
          </div>
          {/* Correct mark */}
          <div className="hidden 4xl:flex 4xl:flex-col">
            {marks.map((mark) => (
              <div className="flex items-center gap-x-[18px] mb-[34px]">
                <div className="w-[35px] h-[35px]">
                  <img src={correct} alt="" className="w-full h-full" />
                </div>
                <div>
                  <p className="font-medium text-[28px] leading-[35px] font-mulish tracking-[0.56px] text-[#F2F0EF]">
                    {mark.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* form */}
        <div className="md:flex md:justify-center md:items-center">
          <form>
            <div className="flex flex-col">
              <div className="w-full md:w-[674px] h-[322px] sm:h-[352px] md:h-[393px] lg:h-[410px] xl:h-[423px] 4xl:h-[503px] bg-[#0D2539] border-b-4 border-r-4 border-[#F3C15F]">
                <div className="pt-[49px] 4xl:pt-[81px] px-[18px] sm:px-[24px] md:px-[30px] lg:px-[36px] xl:px-[42px] 4xl:px-[56px]">
                  {/* Email */}
                  <div className="h-[50px] md:h-[73px] w-full bg-[#102F47] flex items-center px-[10px] lg:px-[23px] border-b">
                    <Input type="text" placeholder="Email address" />
                  </div>
                </div>
                {/* password */}
                <div className="px-[18px] sm:px-[24px] md:px-[30px] lg:px-[36px] xl:px-[42px] 4xl:px-[56px] py-[25px] 4xl:py-[39px]">
                  <div className="h-[50px] md:h-[73px] w-full bg-[#102F47] flex items-center px-[10px] lg:px-[23px] border-b">
                    <Input type="password" placeholder="Password" />
                  </div>
                </div>
                {/* Button */}
                <div className="px-[18px] sm:px-[24px] md:px-[30px] lg:px-[36px] xl:px-[42px] 4xl:px-[56px] pb-[24px] w-full">
                  <FullButton name="Login" onClick={login} width="w-full"/>
                </div>
                {/* Lost your password */}
                <div className="text-center">
                  <p className="font-normal text-[20px] 4xl:text-[26px] leading-[36px] 4xl:leading-[47px] font-palanquin-dark text-[#E9E2BC]">
                    Lost your password?
                  </p>
                </div>
              </div>
              {/* Create an Account */}
              <div className="flex justify-center mt-[25px] 4xl:mt-[45px]">
                <div className="w-[561px] h-[71px] border-4 border-[#E9E2BC] flex justify-center" onClick={SignUp}>
                  <button className="font-normal text-[26px] leading-[47px] font-palanquin-dark text-[#E9E2BC]">
                    Create an account
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        {/*  */}
        <div className="flex items-start md:items-center justify-start md:justify-center pt-[72px]">
          <div className="4xl:hidden flex flex-col w-[670px]">
            {marks.map((mark) => (
              <div className="flex items-start md:items-center gap-x-[18px] mb-[10px] md:mb-[34px]">
                <div className="w-[35px] h-[35px]">
                  <img src={correct} alt="" className="w-full h-full" />
                </div>
                <div>
                  <p className="font-medium text-[22px] 4xl:text-[28px] leading-[28px] 4xl:leading-[35px] font-mulish tracking-[0.56px] text-[#F2F0EF]">
                    {mark.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/*  */}
      </div>
    </div>
    <Footer />
    </>
  );
}

export default SignIn;

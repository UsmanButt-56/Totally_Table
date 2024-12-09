import React from "react";

function Message({name , time}) {
  return (
    <div className="w-11/12 mx-auto pt-[28px] pb-[20px]">
      <p className="font-normal text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] lg:leading-[108px] font-palanquin-dark opacity-100 text-white">
        {name} ({time})
      </p>
    </div>
  );
}

export default Message;

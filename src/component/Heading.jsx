import React from "react";

const Heading = ({ className, headingText,separator, colorHead, pText }) => {
  return (
    <div>
      <div className={`${className}`}>
        <h2  className={`font-rowdie font-normal text-headColor text-[45px] leading-[70px] `} >
          {headingText}{separator} <span className="text-green">{colorHead}</span> 
        </h2>
        <p className={` font-saira font-normal text-[25px] text-pColor leading-[35px] pt-8`}>
          {pText}
        </p>
      </div>
    </div>
  );
};

export default Heading;

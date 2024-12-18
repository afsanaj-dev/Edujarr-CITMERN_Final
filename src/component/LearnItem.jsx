import React from "react";

const LearnItem = ({ icon, className, learnName, learnP }) => {
  return (
    <div>
      <div className={`${className} w-[340px] text-center`}>
        <h4 className="text-white font-bold font-rowdie text-[25px] leading-[32px]">
          {learnName}
        </h4>
        <p className="font-saira text-lg text-white leading-[27px] mt-[30px]">{learnP}</p>
      </div>
    </div>
  );
};

export default LearnItem;

import React from "react";
import LearnItem from "./LearnItem";
import Flex from "./Flex";
import { FaLaptop } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";

const Learn = () => {
  return (
    <div>
      <div className="bg-learn-grad py-[80px] sm:py-[100px] md:py-[140px] relative">
        {/* Background Side Image */}
        <img
          className="hidden sm:block absolute top-[128px] left-0"
          src="../images/oval-side.png"
          alt="oval"
        />

        {/* Container */}
        <div className="container mx-auto px-5">
          {/* Heading */}
          <div className="flex flex-col items-center text-center">
            <h2 className="font-rowdie font-normal text-white text-[35px] md:text-[45px] leading-[45px] md:leading-[70px]">
              Why <span className="text-green">learn</span> with our courses?
            </h2>
            <p className="font-saira font-normal text-[18px] md:text-[25px] text-white leading-[30px] md:leading-[35px] pt-5 md:pt-8 max-w-full md:max-w-[728px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temporidunt ut labore veniam...
            </p>
          </div>

          {/* Features */}
          <Flex className="flex-col sm:flex-row sm:flex-wrap sm:gap-10 lg:gap-[150px] justify-center items-center mt-[60px] md:mt-[115px]">
            {/* Learn */}
            <div className="flex flex-col items-center text-center mb-10 sm:mb-0">
              <h3 className="text-[50px] md:text-[60px] text-white pb-5 relative flex justify-center">
                <FaLaptop />
                <img
                  className="hidden md:block absolute top-0 right-[-50px] md:right-[-215px]"
                  src="../images/Line.png"
                  alt="line"
                />
              </h3>
              <LearnItem
                learnName={"01. Learn"}
                learnP={
                  "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua."
                }
              />
            </div>

            {/* Graduate */}
            <div className="flex flex-col items-center text-center mb-10 sm:mb-0">
              <h3 className="text-[50px] md:text-[60px] text-white pb-5 relative flex justify-center">
                <FaGraduationCap />
                <img
                  className="hidden md:block absolute top-0 right-[-50px] md:right-[-215px]"
                  src="../images/Line.png"
                  alt="line"
                />
              </h3>
              <LearnItem
                learnName={"02. Graduate"}
                learnP={
                  "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua."
                }
              />
            </div>

            {/* Work */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-[50px] md:text-[60px] text-white pb-5 flex justify-center">
                <FaLaptop />
              </h3>
              <LearnItem
                learnName={"03. Work"}
                learnP={
                  "Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua."
                }
              />
            </div>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default Learn;

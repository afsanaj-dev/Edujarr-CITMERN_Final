import React from "react";
import Heading from "./Heading";

const Factor = () => {
  return (
    <div>
      <div className="container mx-auto px-5">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-7 gap-6 pt-[100px] sm:pt-[150px] md:pt-[270px] pb-[100px] sm:pb-[50px] md:pb-[170px] items-center">
          {/* Image Section */}
          <div className="sm:col-span-3 flex justify-center sm:justify-start">
            <img
              className="w-[80%] sm:w-auto relative right-20"
              src="../images/factor.png"
              alt="factor"
            />
          </div>

          {/* Content Section */}
          <div className="sm:col-span-4 text-center sm:text-left">
            <Heading
              className="mb-8 md:mb-12"
              headingText={`The number one factor in `}
              separator={<br />}
              colorHead={`\n relevance drives out resistance.`}
              pText={
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            />
            <div className="mt-5 flex justify-center sm:justify-start">
              <a
                href="#"
                className="text-sm md:text-base font-medium text-white bg-btn-gradient px-4 py-2 md:px-5 md:py-3 rounded-lg"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Play Button Section */}
        <div className="flex justify-center items-center ">
          <img
            className="mx-auto"
            src="../images/factorPlay.png"
            alt="factorPlay"
          />
        </div>
      </div>
    </div>
  );
};

export default Factor;

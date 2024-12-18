import React from "react";
import Flex from "./Flex";
import { FaStar } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Banner = () => {
  return (
    <div>
      <div className="bg-banner-grad">
        <div className="container p-4 mx-auto">
          <div className="grid grid-cols-2 relative">
            <div className="pt-[167px]">
              <p className="font-saira font-semibold text-lg text-white leading-5 tracking-[3px]">
                Successful coaches are visionaries
              </p>
              <h1 className="font-rowdie font-normal text-white text-[70px] leading-[90px] pt-14 pb-[90px] sm:w-[450px] md:w-[670px]">
                Good <span className="text-green">coaching</span> is good
                teaching & nothing else.
              </h1>
              <Flex className="gap-4 mb-3">
                <a
                  href="#"
                  className="font-saira font-semibold text-lg text-white rounded-[5px] py-4 px-8 border border-slate-500 tracking-[1px] hover:border-white transition"
                >
                  View Courses
                </a>
                <a
                  href="#"
                  className="font-saira font-semibold text-lg text-white rounded-[5px] py-4 px-8 border border-slate-500 tracking-[1px] hover:border-white transition"
                >
                  Get Free Consultation
                </a>
              </Flex>
              <div>
                <input
                  type="text"
                  placeholder="What do you want to learn today?"
                  className="placeholder:font-saira placeholder:*:text-base placeholder:font-normal placeholder:text-ash2 w-[489px] h-[60px] rounded-[7px] pl-9 sm:mt-8 sm:mb-2 md:mt-16 relative"
                />
                <a
                  className="absolute sm:bottom-4 xl:bottom-[278px] left-[370px] text-base font-medium text-white bg-btn-gradient px-4 py-2 rounded-lg flex justify-center gap-2 items-center"
                  href="#"
                >
                  <CiSearch /> Search
                </a>
              </div>
            </div>
            <div className="relative top-4 sm:hidden xl:block">
              <img
                className="ms-auto w-[650px] z-10"
                src="../images/banner.png"
                alt="banner"
              />
              <div className="absolute top-0 left-0 -z-10">
                <img src="../images/banner-back.png" alt="banner-back" />
              </div>
              <div className="absolute left-[-40px] top-[220px]">
                <img src="../images/quation.png" alt="quation" />
              </div>
              <div className="w-[272px] h-[158px] object-contain absolute top-[200px] left-0">
                <h3 className="font-rowdie text-base font-normal text-white pb-5">
                  Richards
                </h3>
                <p className="font-saira text-base font-normal text-white pb-6">
                  In a coaching role, you ask the questions and rely more on
                  your staff, who become the experts, to provide the
                  information.
                </p>
                <span className="font-inter text-sm font-bold flex items-center gap-3 text-green">
                  4.9 <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-back1 bottom-[15px]">
        <div className="container mx-auto py-10 z-10 relative">
          <img
            className="object-fill"
            src="../images/brand-group.png"
            alt="brand"
          />
        <div className="absolute top-[-352px] left-[38%] -z-50 sm:hidden xl:block">
          <img className=" " src="../images/oval.png" alt="oval" />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

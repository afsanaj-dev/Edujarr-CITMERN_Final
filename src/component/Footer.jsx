import React from "react";
import Flex from "./Flex";
import { FaPhone } from "react-icons/fa6";
import { CiLocationOn, CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="bg-learn-grad">
      <div className="container mx-auto pt-10 pb-10 md:pt-[118px] md:pb-[89px] px-5">
        {/* Parent Flexbox */}
        <Flex className="flex-col md:flex-row gap-10 md:gap-[130px] flex-wrap">
          {/* Logo and Description */}
          <div className="flex flex-col items-start">
            <img src="../images/flogo.png" alt="footer" className="w-40 md:w-auto" />
            <p className="font-saira text-sm md:text-lg font-normal leading-7 text-white pt-5 md:pt-[74px] max-w-[90%] md:max-w-[477px]">
              Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-rowdie text-xl md:text-2xl font-bold leading-6 text-white mb-5 md:mb-[84px]">
              Quick Links
            </h3>
            <div className="flex gap-10">
              <ul className="font-saira text-sm md:text-lg font-normal leading-7 text-white">
                <li className="mb-3 md:mb-5">
                  <a href="#" className="hover:underline">About</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Course</a>
                </li>
              </ul>
              <ul className="font-saira text-sm md:text-lg font-normal leading-7 text-white">
                <li className="mb-3 md:mb-5">
                  <a href="#" className="hover:underline">Blog</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-rowdie text-xl md:text-2xl font-bold leading-6 text-white mb-5 md:mb-[84px]">
              Contact Us
            </h3>
            <div className="flex flex-col md:flex-row gap-5 md:gap-10">
              <ul className="font-saira text-sm md:text-lg text-white">
                <li className="mb-3 md:mb-5 flex items-center gap-2 md:gap-4">
                  <FaPhone className="text-base md:text-lg" />
                  <a href="tel:(209)555-0104" className="hover:underline">
                    (209) 555-0104
                  </a>
                </li>
                <li className="flex items-center gap-2 md:gap-4">
                  <CiMail className="text-base md:text-lg" />
                  <a href="mailto:michelle.rivera@example.com" className="hover:underline">
                    michelle.rivera@example.com
                  </a>
                </li>
              </ul>
              <ul className="font-saira text-sm md:text-lg text-white">
                <li className="flex items-center gap-2 md:gap-4">
                  <CiLocationOn className="text-base md:text-lg" />
                  2715 Ash Dr. San Jose, South
                </li>
                <li className="ms-6 md:ms-8">Dakota 83475</li>
              </ul>
            </div>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default Footer;

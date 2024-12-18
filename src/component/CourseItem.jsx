import React from "react";
import Flex from "./Flex";
import { MdOutlineShoppingCart } from "react-icons/md";

const CourseItem = ({ className, courseText, courseImage }) => {
  return (
    <div>
      <div className={`w-[490px] bg-white rounded-2xl ${className}`}>
        <img className="w-max" src={courseImage} alt="courseImage" />
        <div className="p-6">
          <Flex className="justify-between pb-5">
            <span className="text-sm font-saira text-pColor leading-[35px]">
              5,957 Students
            </span>
            <span className="text-sm font-saira text-pColor leading-[35px]">
              01h 49m
            </span>
          </Flex>
          <p className="text-[25px] font-saira font-semibold text-courseText">
            {courseText}
          </p>
          <Flex className="justify-between pt-6">
            <h3 className="font-saira text-[22px] text-pColor font-semibold leading-[35px]">
              $33.99
            </h3>
            <h3 className="font-saira text-[22px] text-pColor font-semibold leading-[35px] ">
            <MdOutlineShoppingCart />
            </h3>
          </Flex>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;

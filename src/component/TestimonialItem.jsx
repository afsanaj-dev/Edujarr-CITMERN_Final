import React from "react";
import Flex from "./Flex";
import { FaStar } from "react-icons/fa6";

const TestimonialItem = ({ reviewText, reviewName, reviewImage,className }) => {
  return (
    <div>
      <div className={`w-[490px] bg-white rounded-2xl ${className} p-10`}>
        <Flex className="gap-8 items-center">
          <img src={reviewImage} alt="review" />
          <h3 className="font-rowdie font-bold text-2xl text-[#1D1D45]">
            {reviewName}
          </h3>
        </Flex>
        <p className="font-saira text-lg font-normal text-[#7E7EAA] py-10">
          {reviewText}
        </p>
        <span className="font-inter text-sm font-bold flex items-center gap-3 text-[#FAB437]">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </span>
      </div>
    </div>
  );
};

export default TestimonialItem;

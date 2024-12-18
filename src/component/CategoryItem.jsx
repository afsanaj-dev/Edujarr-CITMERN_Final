import React from "react";
import Flex from "./Flex";

const CategoryItem = ({
  className,
  categoryImage,
  categoryText,
  courseCount,
}) => {
  return (
    <div>
      <div className={`${className} w-[230px] px-[66px] py-[40px] bg-white text-center rounded-[20px] mx-auto`} >
        <Flex className="justify-center items-center flex-col">
          <img src={categoryImage} alt="categoryImage" />
          <h3 className="font-saira text-[25px] font-semibold leading-[35px] text-courseText pb-4 pt-6">
            {categoryText}
          </h3>
          <p className="font-saira text-lg text-ash2 leading-[23px]">
            {courseCount}
          </p>
        </Flex>
      </div>
    </div>
  );
};

export default CategoryItem;

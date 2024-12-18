import React from "react";
import Heading from "./Heading";
import CourseItem from "./CourseItem";
import Flex from "./Flex";

const Course = () => {
  return (
    <div className="bg-course-grad">
      <div className="container mx-auto">
        <div className="relative">
          <img className="absolute top-[100px] left-[100px] animate-bounce" src="../images/round.png" alt="round" />
        </div>
        <div className=" py-[110px]">
          <Heading
            className="text-center sm:w-full md:w-[690px] mx-auto"
            headingText={"Featured"}
            colorHead={"Course"}
            pText={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam..."
            }
          />
          <div className="mt-[90px]">
            <Flex className="flex-wrap gap-[30px]">
              <CourseItem
                courseImage={"../images/course1.jpg"}
                courseText={
                  "Motion Graphics: Create a Nice Typography Animation"
                }
              />
              <CourseItem
                courseImage={"../images/course2.jpg"}
                courseText={
                  "The Complete Financial Analyst Training & Investing"
                }
              />
              <CourseItem
                courseImage={"../images/course3.jpg"}
                courseText={"Education Software and PHP and JS System Script"}
              />
              <CourseItem
                courseImage={"../images/course4.jpg"}
                courseText={
                  "Marketing 2023: Complete Guide To Instagram Growth"
                }
              />
              <CourseItem
                courseImage={"../images/course5.jpg"}
                courseText={"Advance PHP knowledge with JS to make smart web"}
              />
              <CourseItem
                courseImage={"../images/course6.jpg"}
                courseText={"Learn 3D Modelling and Design for Beginners"}
              />
            </Flex>
          </div>
        </div>
        <div className="text-center pb-[100px]">
          <a href="#" className="text-xl font-medium text-white leading-5 bg-btn-gradient px-6 py-4 rounded-lg"
          >
            Explore Course
          </a>
        </div>
      </div>
    </div>
  );
};

export default Course;

import React from "react";
import Heading from "./Heading";
import Flex from "./Flex";
import TestimonialItem from "./TestimonialItem";

const Testimonial = () => {
  return (
    <div className="bg-review-grad">
      <div className="container mx-auto pb-32 pt-20">
        <div className="relative ">
          <Heading
            className="text-center mb-20"
            colorHead="Testimonials"
            pText="What our student say about us"
          />
          <img
            className="absolute top-0 left-0 animate-spin"
            src="../images/testimonialMoon.png"
            alt="testimonial"
          />
        </div>
        <Flex className="justify-between flex-wrap">
          <TestimonialItem
            reviewImage={"../images/review1.jpg"}
            reviewName={"Ronald Richards"}
            reviewText={
              "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
            }
          />
          <TestimonialItem
            reviewImage={"../images/review2.jpg"}
            reviewName={"Wade Warren"}
            reviewText={
              "Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Reprehenderit in voluptate velit esse sint occaecat cupidatat  "
            }
          />
          <TestimonialItem
            reviewImage={"../images/review3.jpg"}
            reviewName={"Jacob Jones"}
            reviewText={
              "Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit  "
            }
          />
        </Flex>
      </div>
    </div>
  );
};

export default Testimonial;

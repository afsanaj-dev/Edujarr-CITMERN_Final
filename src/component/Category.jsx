import React from 'react'
import Heading from './Heading'
import Flex from './Flex'
import CategoryItem from './CategoryItem'

const Category = () => {
  return (
    <div className=' bg-course-grad py-[100px]'>
      <div className='container mx-auto'>
        <Heading className="text-center pb-[100px]" headingText={"Top "} colorHead={"Categories"} pText={"12,000+ unique online course list designs"} />
        <Flex className="flex-wrap justify-between">
          <CategoryItem categoryImage={"../images/cat1.png"} categoryText={"Digtal Marketing"} courseCount={"25 Courses"}/>
          <CategoryItem categoryImage={"../images/cat2.png"} categoryText={"Web Development"} courseCount={"16 Courses"}/>
          <CategoryItem categoryImage={"../images/cat3.png"} categoryText={"Art & Humanities"} courseCount={"76 Courses"}/>
          <CategoryItem categoryImage={"../images/cat4.png"} categoryText={"Personal Development"} courseCount={"22 Courses"}/>
          <CategoryItem categoryImage={"../images/cat5.png"} categoryText={"IT and Software"} courseCount={"110 Courses"}/>
          <CategoryItem categoryImage={"../images/cat6.png"} categoryText={"Graphic Design"} courseCount={"85 Courses"}/>
        </Flex>
      </div>
    </div>
  )
}

export default Category
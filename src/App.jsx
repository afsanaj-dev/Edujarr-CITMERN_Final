import React from 'react'
import Navbar from './component/Navbar'
import './index.css'
import Banner from './component/Banner'
import Course from './component/Course'
import Learn from './component/Learn'
import Category from './component/Category'
import Factor from './component/Factor'
import Testimonial from './component/Testimonial'
import Footer from './component/Footer'


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Course></Course>
      <Learn></Learn>
      <Category></Category>
      <Factor></Factor>
      <Testimonial></Testimonial>
    <Footer></Footer>
    </div>
  )
}

export default App
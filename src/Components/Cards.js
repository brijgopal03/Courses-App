import React, { useState } from 'react'
import Card from "./Card"

const Cards = (props) => {
let Category = props.Category
let allcourses = [];
const [likedCourses, setLikedCourses] = useState([])

const getCourses = () => {
  if(Category === "All"){
    Object.values(props.courses).forEach((coursesCategory) =>{
      coursesCategory.forEach((course) => {
        allcourses.push(course);
        });
    })
  
   return allcourses;
  }

  else{
    return props.courses[Category]
  }
}



  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
        {getCourses().map((course) =>{
         return <Card key={course.id} course = {course} likedCourses = {likedCourses} setLikedCourses = {setLikedCourses} />
        })}
    </div>
  )
}

export default Cards
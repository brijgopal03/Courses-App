import React from 'react'
import {FcLike, FcLikePlaceholder} from 'react-icons/fc'
import { toast } from 'react-toastify'

const Card = (props) => {

  let likedCourses = props.likedCourses
  let setLikedCourses = props.setLikedCourses

function clickHandler(){
     if(likedCourses.includes(props.course.id)){
      setLikedCourses(likedCourses.filter(course => course !== props.course.id))
      toast.warning("Like removed")
     }

     else{
      setLikedCourses([...likedCourses, props.course.id])
      toast.success("Like Successfully")
     }
}



  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={props.course.image.url} alt={props.course.image.alt} />

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
          <button onClick={clickHandler}>
             {
              likedCourses.includes(props.course.id) ? <FcLike fontSize = "1.75rem"/> : <FcLikePlaceholder fontSize = "1.75rem"/>
             }
          </button>
        </div>
      </div>

      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6'>{props.course.title}</p>
        <p className='mt-2 text-white'>
          {
            props.course.description.length > 100 ? props.course.description.slice(0, 100) + "..." : props.course.description
          }
        </p>
      </div>
    </div>
  )
}

export default Card
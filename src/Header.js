import {useState,useEffect} from 'react'
const  lessons=[
  {
    id:1,
    name:' Khóa học ReactJS'
  },
  {
    id:2,
    name:'Khóa học JavaScript'
  },
  {
    id:3,
    name:'Khóa học Python'
  }
]
function Header(){
  const[lessonId,setLessonId]=useState(1)
  useEffect(()=>{
    const handleComment=({detail})=>{
      console.log(detail)
    }
    window.addEventListener(`lesson-${lessonId}`,handleComment)
    return ()=>{
      window.removeEventListener(`lesson-${lessonId}`,handleComment)
    }
  },[lessonId])
  return(
  <div>
    <ul>
    {lessons.map(lesson=>(
      <li 
      key={lesson.id}
      style={{
        color:lessonId===lesson.id ? 'red':'#333'
      }}
      onClick={()=>setLessonId(lesson.id)}
      >
        {lesson.name}
      </li>
    ))}
    </ul>
  </div>
  )
}

export default Header
import {useState,memo} from 'react'
import Navbar from './Navbar'

function Header(){
  const [count,setCount]=useState(0)
  const [count2,setCount2]=useState(0)

  const handleClick=()=>{
    setCount(count+1)
  }
  const handleClick2=()=>{
    setCount2(count2+1)
  }
  return(
  <div>
    <Navbar count={count}/>
    <h1>{count}</h1>
    <h1>{count2}</h1>
    <button onClick={handleClick}>Click1</button>
    <button onClick={handleClick2}>Click2</button>
  </div>
  )
}

export default Header
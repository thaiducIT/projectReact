import {useState,useLayoutEffect} from 'react'

function Header(){
  const[count,setCount]=useState(0)
  const handleIncrease=()=>{
    setCount(prev=>prev+1)
  }
  useLayoutEffect(()=>{
    if( count>3)
    {
      setCount(0)
    }
  },[count])
  return(
  <div>
    <h1>{count}</h1>
    <button onClick={handleIncrease}>Increase</button>
  </div>
  )
}

export default Header
import {useState,useRef,useEffect} from 'react'

function Header(){
  const[count,setCount]=useState(60)
  const timeID=useRef()
  const prevCount= useRef()
  const h1Ref=useRef()


  const handleStart = () => {
    timeID.current = setInterval(()=>{
      setCount(prev => prev - 1)
    },1000)
  }
  const handleStop=()=>{
    clearInterval(timeID.current)
    console.log('stop',timeID.current)
  }


  useEffect(()=>{
      prevCount.current=count
  },[count])
  console.log(count,prevCount.current)
  
  useEffect(()=>{
    const rect=h1Ref.current.getBoundingClientRect()
    console.log(rect)
  })
  return(
  <div>
    <h1 ref={h1Ref}>{count}</h1>
    <button onClick={handleStart} >Start</button>
    <button onClick={handleStop} >Stop</button>
  </div>
  )
}

export default Header
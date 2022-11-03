import {useState,useCallback} from 'react'
import Navbar from './Navbar'

function Header(){
  const [count,setCount]=useState(0)
  const handleIncrease=useCallback(()=>{
    setCount(count => count+1)
  },[count])
  return(
  <div>
    <Navbar onIncrease={handleIncrease}/>
    <h1>{count}</h1>
  </div>
  )
}

export default Header
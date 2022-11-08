import {useReducer} from 'react'
const initState=0
const UP_ACTION='up'
const DOWN_ACTION='down'

const reduce=(state,action)=>{
  console.log('reduce running')
  switch(action){
    case UP_ACTION:
    {
      return state+1
    }
    case DOWN_ACTION:
      {
        return state-1
      }
      default:
        throw new Error('Invalid action')
  }
}

function Header(){
  const[state,dispatch]=useReducer(reduce,initState)
  return(
    <div>
      <h1>{state}</h1>
      <button onClick={()=>dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={()=>dispatch(UP_ACTION)}>Up</button>
    </div>
  )
}

export default Header
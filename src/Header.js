import {useReducer,useRef} from 'react'
// initial value
const initState={
  job:'',
  jobs:[]
}
//action
const SET_JOB='set_job'
const ADD_JOB='add_job'
const DELETE_JOB='delete_job'
//gia tri kem theo
const setJob=(payload)=>{
  return{
    type:SET_JOB,
    payload
  }
}
const addJob=(payload)=>{
  return{
    type:ADD_JOB,
    payload
  }
}
const deleteJob=(payload)=>{
  return{
    type:DELETE_JOB,
    payload
  }
}
// reducer
const reduce=(state,action)=>{
  console.log(state)
  console.log('re-render')
  let newState
  switch(action.type){
    case SET_JOB:
    {
      newState={
        ...state,
        job:action.payload
      }
      break
    }
    case ADD_JOB:
    {
      newState={
        ...state,
        jobs:[...state.jobs,action.payload]
      }
      break
    }
    case DELETE_JOB:
    {
      const newJobs=[...state.jobs]
      //splice dùng để xóa 1 phần tử trong mãng splice(index[],1) 
      //lấy đối số index trong mãng, đối số tiếp theo là số lượng xóa phần tử đứng sau nó
      newJobs.splice(action.payload,1)
      newState={
        ...state,
        jobs:newJobs
      }
      break
    }
    default:
      throw new Error('Action invalid')
  }
  return newState;
}

function Header(){
  const[state,dispatch]=useReducer(reduce,initState)
  const {job,jobs}=state
  const inputRef=useRef()
  const handleSubmit=()=>{
    dispatch(addJob(job))
    dispatch(setJob(''))
    inputRef.current.focus()
  }
  return(
    <div>
      <input ref={inputRef} value={job} onChange={e=>dispatch(setJob(e.target.value))}/>
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job,index)=>(
          <li key={index}>{job}
          <span
          onClick={()=>{dispatch(deleteJob(index))}}
          style={{
            fontSize:30,
            color:'red',
            padding:16,
            cursor:'pointer'
          }}
          >&times;</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Header
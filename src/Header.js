import {useState,useMemo, useRef,useCallback} from 'react'
import Navbar from './Navbar';
function expensive(number){

  console.log('bat dau')

  const start= new Date();
  while(new Date() - start < 500 );
  console.log('ket thuc ',new Date() - start,' ms ') 
  return number*number 
}

function Header(){
  const [name,setName]=useState('')
  const[price,setPrice]=useState('')
  const[products,setProducts]=useState([])
  const nameRef=useRef()
  const [count,setCount]=useState(0)

  const handleIncrease=useCallback(()=>{
    setCount(prev=>prev+1)
  },[])


  const number=useMemo(()=>{
    return expensive(10)
  },[])

  const handleSubmit=()=>{
    setProducts([...products,{
      name:name,
      price:Number(price)
    }])
    setName('')
    setPrice('')
    nameRef.current.focus()
  }

  const total=useMemo(()=>{
    const result=products.reduce((val,prod)=>{
      console.log('tính lại ...')
      return val+prod.price
    },0)
    return result
  },[products])
  


  return(
  <div>
    <h1>{count}</h1>
    <Navbar onIncrease={handleIncrease}/>
    <input
    style={{
    padding:'5px 10px',
    marginTop:10
    }}
    ref={nameRef}
    value={name}
    placeholder='Enter Name'
    onChange={e=>setName(e.target.value)}
    />
    <br/>
    <input 
    style={{
    padding:'5px 10px',
    marginTop:10
    }}
    value={price}
    placeholder='Enter Price'
    onChange={e=>setPrice(e.target.value)}
    />
    <br/>
    <button onClick={handleSubmit}>Add</button>
    <br/>
    Total:{total}
    <br/>
    Total 2: {number}
    <br/>
   
    <ul>
    {
      products.map((product,index)=>(
        <li key={index}>
           {product.name}-{product.price}
        </li>
      ))
    }
    </ul>
  </div>
  )
}

export default Header
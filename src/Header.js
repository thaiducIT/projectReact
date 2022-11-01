import {useState,useEffect} from 'react'
const tabs=['posts','comments','albums']

function Header(){
    const[title,setTitle]=useState('')

    
    const[type,setType]=useState('posts')
    const[showGotoTop,setShowGoToTop]=useState(false)
    const[width,setWidth]=useState(window.innerWidth)
    const[countDown,setCountDown]=useState(180)
    const[count,setCount]=useState(1)




    
    
    
    
    useEffect(()=>{
      const handleScroll=()=>{
        if(window.scrollY>=200)
        {
          setShowGoToTop(true)

        }
        else
        {
          setShowGoToTop(false)
        }
      }
      window.addEventListener('scroll',handleScroll)
      console.log('addevenlistener')
      return ()=>{
        window.removeEventListener('scroll',handleScroll)
        console.log('remove Scroll')
      }
    },[])

    useEffect(()=>{
      const handleResize=()=>{
        setWidth(window.innerWidth)
      }
      window.addEventListener('resize',handleResize)
      return()=>{
        window.removeEventListener('resize',handleResize)
      
      }
    })
    useEffect(()=>{
      const timeId=setInterval(()=>{
        setCountDown(pre=>pre-1)

      },1000)
      return ()=>{
        clearInterval(timeId)
      }
    },[])

    useEffect(()=>{
        console.log('re-render')
      return ()=>{
        console.log(`clear lan ${count}`)
      }
    },[count])


    const[avatar,setAvatar]=useState()

    useEffect(()=>{

      return ()=>{
        avatar && URL.revokeObjectURL(avatar.preview)
      }
    },[avatar])
    const handleChangeAvatar=(e)=>{
      const file=e.target.files[0]
      file.preview=URL.createObjectURL(file)
      setAvatar(file)
      console.log(file.preview)
    }
    return(
    <div>
      <input
        type="file"
        onChange={handleChangeAvatar}
        />
        {avatar && (
          <img src={avatar.preview}  alt="" width="80%" />
        )}
       
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button>
     <h1>{countDown}</h1>
      <ul>
      {
        tabs.map(tab=>(
          <button
            style={type===tab?{
              backgroundColor:'red'
            }:{}}
            key={tab}
            onClick={()=>setType(tab)}
          >{tab}</button>
        ))
      }
      </ul>
        <input 
        value={title}
        onChange={e=>setTitle(e.target.value)}
      />
 
      <h1>{width}</h1>
      {showGotoTop && (
        <button
          style={{
            position:'fixed',
            right:20,
            bottom:20,
            padding:'10px 20px',
            
          }}
        
          className='btn btn-goToTop'
        >
          Go To Top
        </button>
      )} 
    </div>
    )
}

export default Header
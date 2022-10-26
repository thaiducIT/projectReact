import {useState,useEffect} from 'react'
const tabs=['posts','comments','albums']
function Header(){
    const[title,setTitle]=useState('')

    const[posts,setPost]=useState([])
    const[type,setType]=useState('posts')

    useEffect(()=>{
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(res=>res.json())
        .then(posts=>{
          setPost(posts)
        })
    },[type])
    return(
    <div>
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
      <ul>
        {posts.map(post=>{
          return(
            <div key={post.id}>
              <li>{post.useId}</li>
              <h3>{ post.title||post.name}</h3>
            </div>
        )})}
      </ul> 
    </div>
    )
}

export default Header
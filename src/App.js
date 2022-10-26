import Header from './Header'
import {useState,useEffect} from 'react'

function App() {
  const[show,setShow]=useState(false)
  const  HandleToggle=()=>{
    setShow(!show)
  }
  return (
    <div className="App" style={{padding:20}}>
      <h2>Test Mount and UnMount</h2>
      <button onClick={()=>HandleToggle()}>Toggle</button>
      {show && <Header/>}
      
    </div>
    
  );
}

export default App;

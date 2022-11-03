import { memo } from 'react'

function Navbar({onIncrease}){
        console.log('re-render')
        return(
                <div>
                        <h1>Click Under Button</h1>
                        <button onClick={onIncrease}>CLick me</button>
                </div>
        )
}
export default memo(Navbar)
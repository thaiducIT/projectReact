import { memo } from 'react'

function Navbar({count}){
        console.log('re-render')
        return(
                <div>
                        <h1>Thái Anh Đức {count}</h1>
                </div>
        )
}
export default memo(Navbar)
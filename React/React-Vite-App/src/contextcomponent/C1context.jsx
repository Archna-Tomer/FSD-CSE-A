import React, { useContext } from 'react'
import { MyContext } from '../AppContext'

function C1context() {
  const data = useContext(MyContext)
  console.log(data);
  
  return (
    <div>C1context<br></br>
      {data.name}
      {data.branch}
    </div>
  )
}
 
export default C1context 
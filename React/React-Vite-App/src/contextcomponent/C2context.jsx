import React, { useContext } from 'react'
import { MyContext } from '../AppContext'

function C2context() {
  const data2=useContext(MyContext);
  return (
    <div>C2context<br></br>
      {data2.name}<br></br>
      {data2.branch}
    </div>
  )
}

export default C2context      
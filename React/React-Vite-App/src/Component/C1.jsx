import React from 'react'
import C2 from './C2'

function C1({C1data}) {
  return (
    <div>C1

        <div>
            <C2 C2data={C1data}/>
        </div>
    </div>
  )
}

export default C1
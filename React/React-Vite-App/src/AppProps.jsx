import React from 'react'

import C1 from './Component/C1'
function AppProps() {
    const data={
        name:'archna tomer',
        branch:'CSE',
        section:'A',
    }
  return (
    <div>AppProps
        <div>
            <C1 C1data={data}/>
        </div>
    </div>
  )
}

export default AppProps 
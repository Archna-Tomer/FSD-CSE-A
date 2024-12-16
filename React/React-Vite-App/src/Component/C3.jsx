import React from 'react'

function C3({c3data}) {
  return (
    <div>C3
        <div>
            Name:{c3data.name}<br></br>
           Branch: {c3data.branch}<br></br>
           Section: {c3data.section}
        </div>
    </div>
  )
}

export default C3
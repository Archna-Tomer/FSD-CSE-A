import React, { useState } from "react";
function UseOfState(){
    const[count,setCount]=useState(0);
    function incre(){
        
        setCount(count+1);
        
    }
    function decre(){
        setCount(count-1);
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={incre}>Increment</button>
            <button onClick={decre}>Decrement</button>




        </div>

    );
}
export default UseOfState;
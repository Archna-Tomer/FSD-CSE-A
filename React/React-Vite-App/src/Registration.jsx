import React, { useState } from 'react'

function Registration({regData}) {
    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[pass,setPass]=useState();
    const[data,setData]=useState();
    function DoRegister(e){
        e.preventDefault();
        // alert(name);
        // alert(email);
        // alert(pass);
        const ObjData={
            name,email,pass
        }
        regData(ObjData);
        // setData(ObjData);
        



    }
  return (
    <div>
        <div>
            {/* {JSON.stringify(data)} */}
        </div>
    <form>
    <div class="form-group">
 <label for="name">Name</label>
 <input onChange={(e)=>{setName(e.target.value)}} type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name"></input>
 <small id="nameHelp" class="form-text text-muted">We'll never share your name with anyone else.</small>
</div>
<div class="form-group">
 <label for="exampleInputEmail1">Email address</label>
 <input type="email" onChange={(e)=>{setEmail(e.target.value)}} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
 <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
</div>
<div class="form-group">
 <label for="exampleInputPassword1">Password</label>
 <input type="password" onChange={(e)=>{setPass(e.target.value)}} class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
</div>
<div class="form-check">
 <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
 <label class="form-check-label" for="exampleCheck1">Check me out</label>
</div>
<button type="submit" class="btn btn-primary" onClick={DoRegister}>Register Yourself</button>
</form>

</div>
  )
}

export default Registration
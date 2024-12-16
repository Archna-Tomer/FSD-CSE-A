import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';


function Loginn({lData}) {
    const[email,setEmail]=useState();
    const[pass,setPass]=useState();
    function verification(){
       
        if(lData.email==email){
            alert('email verified');
        }
        else{
            alert('invalid user');
        }

    }
  return (
    <div>
         <form>
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input onChange={(e)=>{setEmail(e.target.value)}} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input onChange={(e)=>{setPass(e.target.value)}} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button onClick={verification} type="submit" class="btn btn-primary">Login</button>
  </form>

    </div>
   
  )
}

export default Loginn
import React from 'react'
import "./icard.css"

function Student(props) {
  return (
    <div className='Icard'>
        <table border={"2px solid black"}>
            <tbody>
              
                <tr style={{backgroundColor:"pink"}}> <td colSpan={2}>{props.college}</td></tr>
                <tr><td>Name</td> <td>{props.name}</td> </tr>
                <tr><td>Name</td> <td> <img src={props.pic} height={100} width={100}></img> </td> </tr>
                <tr><td>RollNO.</td> <td>{props.roll}</td> </tr>
                <tr><td>Branch</td> <td>{props.branch}</td> </tr>
                <tr><td>Id</td> <td>{props.id}</td> </tr>
                
               
            </tbody>
        </table>
    </div>
  )
}
Student.defaultProps={
  college:"AKGEC"
}

export default Student;
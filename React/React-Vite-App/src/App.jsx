import React from 'react';
import Student from './Student';
import logo from "./assets/OIP.jpeg";
import StudentState from './StudentState';
import UseOfState from './UseOfState';
import ImageManipulation from './ImageManipulation';
function App(){
  
 const myStyle={
  display:'flex',
  flexDirection:'column'
  
 }
 const link="https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png";


  return(
    // <div style={myStyle}>
    // <div>
    //   <Student name="Archna" roll="27" branch="CSE" id="201" pic={<img src={logo} height={60} />} />
    // </div>
    // <div>
    //   <Student college="ABES ENGINEERING COLLEGE" name="Archna" roll="27" branch="CSE" id="201" pic={<img src={logo} height={100} />} />
    // </div>
    // <div>
    //   <Student college="ABES ENGINEERING COLLEGE" name="Archna" roll="27" branch="CSE" id="201" pic={link }/>
    // </div>
    
    // </div>
    // <div>
    //   <StudentState/>
    // </div>
    // <div> <UseOfState/>  </div>
    <div>
      <ImageManipulation/>
    </div>
    

  )
}
export default App;
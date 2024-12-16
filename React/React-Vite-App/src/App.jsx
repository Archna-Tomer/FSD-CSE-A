import React, { useState } from 'react';
import Student from './Student';
import logo from "./assets/OIP.jpeg";
import StudentState from './StudentState';
import UseOfState from './UseOfState';
import ImageManipulation from './ImageManipulation';
import Idcard from './Idcard';
import Loginn from './Loginn';
import Registration from './Registration';
import {BrowserRouter,Routes,Router, Route} from 'react-router-dom';
function App(){
  const[rData,setrDdata]=useState();
  
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
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Mainlayout/>}></Route>
        <Route path='/login' element={<Loginn/>}>

        </Route>
        <Route path='/registration' element={<Registration/>}></Route>

      </Routes>
      </BrowserRouter>
      <div>
        {JSON.stringify(rData)};
      </div>
      {/* <ImageManipulation/> */}
      {/* <Idcard /> */}
     {/* <Loginn lData={rData}/>
     <Registration regData={setrDdata}/> */}
     {/* <Loginn/> */}
    </div>
    

  )
}
export default App;
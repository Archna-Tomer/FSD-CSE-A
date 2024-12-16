import React from 'react';
import{Link,Outlet} from 'react-router-dom';

function Mainlayout() {
  return (
    <div>
        <ul>
        <li> <Link to='/login'>Login</Link></li>
        <li> <Link to='/registration'>Registartion</Link></li>

        </ul>

    </div>
  )
}

export default Mainlayout
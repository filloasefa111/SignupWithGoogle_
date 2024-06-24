import React, { useEffect, useState } from 'react'
import "./header.css";
import { NavLink } from 'react-router-dom';
import axios from "axios";

const Headers = () => {
  const [userdata, setUserdata] = useState({ });

  const getUser = async () => {
      try {
        const response = await axios.get("http://localhost:9000/login/sucess", {withCredentials: true});
        console.log("ressponsssss", response);
      } catch (error) {
        
      }
  }
  useEffect(() => {
    getUser()
  },[  ])

  return (
    <header>
      <nav>
         <div className='left'>
           <h1> Wellcom Home Page </h1>
         </div>
         <div className='right'>
          <ul>
            <li>
              <NavLink to='/'> Home</NavLink>
            </li>
            <li>
            <NavLink to='/login'> Login</NavLink>
            </li>
            <li>
            <NavLink to='/dashbord'> Dashbord</NavLink>
            </li>
            <li>
              <img src='/logo192.png' style={{width: "50px", borderRadius: "50%" }} alt='' />
            </li>
          </ul>
         </div>
      </nav>
    </header>
  )
}

export default Headers
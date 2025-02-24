import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png';
import { CiSearch } from "react-icons/ci";
import { FaBucket } from "react-icons/fa6";
const Navbar = () => {
  const [menu,setMenu] = useState("home")
  return (
    <div className='navbar'>
        <img src={logo} alt="" className='logo' />
    <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("about")} className={menu==="about"?"active":""}>about</li>
        <li onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</li>
    </ul>
      <div className="navbar-right">
      <CiSearch size={24} />
      <div>
      <FaBucket size={24}/>
      <div className='dot'></div>
      </div>
      <button>sign in</button>
      </div>
    </div>
   
  )
}

export default Navbar
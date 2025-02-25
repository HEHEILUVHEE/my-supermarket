import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { CiSearch } from "react-icons/ci";
import { FaBucket } from "react-icons/fa6";
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState("home");
  const {getTotalCartAmount} =useContext(StoreContext)
  return (
    <div className='navbar'>
     <NavLink to ='/'> <img src={logo} alt="logo" className='logo' /></NavLink>
     
     
      <ul className="navbar-menu">
        <li>
          <NavLink to="/" exact activeClassName="active">หน้าหลัก</NavLink>
        </li>
        <li>
          <NavLink to="/menu" activeClassName="active">ของขาย</NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">เกี่ยวกับเว็ปไซต์</NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">ติดต่อทางเราได้น้ะจ๋ะ</NavLink>
        </li>
      </ul>
      <div className="navbar-right">
        <CiSearch size={24} />
        <div>
        <NavLink to='/cart'>    <FaBucket size={24} />  </NavLink>
          <div className= {getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
}

export default Navbar;

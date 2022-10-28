import React from 'react'
import "./Header.css";
import {useNavigate} from "react-router"
import { Book } from '../../pages/Book/Book';
import { Packages } from '../../pages/Packages/Packages';


export default function Header() {
    const navigate = useNavigate();
  return (
    <div>   Header
        {/* <!-- header section starts  --> */}
        

<header>

        <div id="menu-bar" class="fas fa-bars"></div>

    {/* <a href="/" className="logo"><span>T</span>ravel</a> */}

    <nav className="navbar">
        <a  onClick={()=>navigate("/")}>home</a>
        <a onClick={()=>navigate("/book")}>book</a>
        <a onClick={()=>navigate ("/packages")}>packages</a>
        <a onClick={()=>navigate("/services")}>services</a>
        <a href="#gallery">gallery</a>
        <a href="#review">review</a>
        <a href="#contact">contact</a>
    </nav>

    <div className="icons">
        <i className="fas fa-search" id="search-btn"></i>
        <i className="fas fa-user" id="login-btn"></i>
    </div>

    <form action="" className="search-bar-container">
        <input type="search" id="search-bar" placeholder="search here..."/>
        <label for="search-bar" class="fas fa-search"></label>
    </form>

</header>

{/* <!-- header section ends --> */}

    </div>
  )
}

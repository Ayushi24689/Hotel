import React from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <>
          <div class="main">
            <div class="menu-main">
                <div class="container-15">
                <ul class="menu-inner">
                <img src="assests/image/logo-dark.png"/>
                    <li><a href="#"><span>HOME</span></a>
                    </li>
                    <li ><Link to="ABOUT">ABOUT</Link></li>
                    <li><a href="#">ROOMS & SUITS</a>
                        <ul class="sub-menu">
                            <li><Link to="/Rooms 1">Rooms 1</Link></li>
                            <li><Link to="/Rooms 2">Rooms 2</Link></li>
                            <li><Link to="/Rooms 3">Rooms 3</Link></li>
                            <li><Link to="/Room Details">Room Details</Link></li>
                        </ul>
                    </li>
                    <li><Link to="RESTAURENT">RESTAURENT</Link></li>
                    <li><Link to="SPA">SPA</Link></li>
                    <li><a href="#">PAGES</a>
                    <ul class="sub-menu">
                            <li><Link to="Services">Services</Link></li>
                            <li><Link to="Facilities">Facilities</Link></li>
                            <li><Link to="Gallery">Gallery</Link></li>
                            <li><Link to="F.A.Qs">F.A.Qs</Link></li>
                            <li><Link to="Careers">Careers</Link></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">404</a></li>
                            <li><a href="#">Coming Soon</a></li>
                        </ul>
                    </li>
                    <li><a href="#">NEWS</a>
                    <ul class="sub-menu">
                    <li><Link to="/News">News</Link></li>
                    <li><Link to="/News 2">News 2</Link></li>
                    <li><Link to="/Single Pose">Single Post</Link></li>
                    </ul>
                    </li>
                    <li><Link to="/CONTACT">CONTACT</Link></li>
                    </ul>
                    </div>
            </div>
            </div>
            </>
    )
}

export default Header;      

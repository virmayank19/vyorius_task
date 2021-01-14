import React from 'react';
import { Link } from "react-router-dom";
import Logo from "./images/logo.png";

function Navbar () {
  return (
    <nav>
        <div class="nav-wrapper" style={{backgroundColor:"#ffffff"}}>
        {/* <img src={Logo} style={{width:60,height:40,marginTop:20}}/> */}
        <a href="/" class="brand-logo" ><img style={{marginTop:10}} src={Logo} /></a> 
        <ul id="nav-mobile" class=" hide-on-med-and-down" style={{marginLeft:200}}>
            <li ><Link to="/" style={{color:"black",fontWeight:"bold",}}></Link></li>
            <li><Link to="/WhyVyorius" style={{color:"black",fontWeight:"bold",}}>Why Vyorius?</Link></li>
            <li><Link to="/Solution" style={{color:"black",fontWeight:"bold",}}>Solution</Link></li>
            <li><Link to="/Product" style={{color:"black",fontWeight:"bold",}}>Product</Link></li>
            <li><Link to="/UseCases" style={{color:"black",fontWeight:"bold",}}>UseCases</Link></li>
            <li><Link to="/Team" style={{color:"black",fontWeight:"bold",}}>Team</Link></li>
            <li><Link to="/Partners" style={{color:"black",fontWeight:"bold",}}>Partners</Link></li>
            <li><Link to="/Contact" style={{color:"black",fontWeight:"bold",}}>ContactUs</Link></li>
        </ul>
        <a class="waves-effect waves-light btn" style={{marginLeft:250,backgroundColor:"#ed7d31",borderRadius: 8,paddingTop:4}}>Launch Vyorius ></a>
        </div>
    </nav>
  )
}


export default Navbar;

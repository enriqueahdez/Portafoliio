import React from "react"
import desktop from "./imgportafolio/desktop.png"


function Header() {
    return (
        
        <div className="imgbackground container-fluid">
            <img src={desktop} alt="" className="desktop" />
            <h1>Enrique Alejandro Hernández</h1>
            <hr className="hr-header"/> 
            <h4> Full Stack JavaScript Developer</h4>
        </div>
    );
}

export default Header;
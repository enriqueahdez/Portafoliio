import React from "react"
import xs from "../xs.png"

function Navegation() {
    return(
        <div>
           
            <nav id="navbar" className="navbar navbar-expand-lg navbar-dark navbar-custom navbar-perz">
            <img src={xs} alt="" className="navbar-brand img-circle" />      
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
             
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link anav" href="#portafolio">Portafolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link anav" href="#skillset">Skill Set</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link anav" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            </nav>
            
        </div>
    );
    
}

export default Navegation;
  
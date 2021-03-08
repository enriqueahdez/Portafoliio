import React from "react"
import linkedin from "../imgcontact/linkedin.png"
import github from "../imgcontact/github.png"
import facebook from "../imgcontact/facebook.png"

function Contact(){
    return(
    <div id="contact" className="container-fluid">
        <h2 className="subtitle"> CONTACT</h2>
            <p></p>
            <hr/>
        <div id="social-media" className="horizontal-flex-container">
        
            <a href="https://www.linkedin.com/in/enrique-alejandro-hern%C3%A1ndez-670072188/">
                <img id="linkedin" src={linkedin} alt="" />
                
            </a>
            <a href="https://github.com/enriqueahdez">
                <img id="github" src={github} alt="" />
            </a>
            <a href="https://www.facebook.com/enriqueAHO/">
                <img id="facebook" src={facebook} alt="" />
            </a>
        </div>
    </div>    
    );
}

export default Contact;
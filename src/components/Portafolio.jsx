import React from "react"
import tindog from "./imgportafolio/tindog.jpg"
import newsletter from "./imgportafolio/newsletter.png";
import ToDoList from "./imgportafolio/ToDoList.jpg";
import Keeper from "./imgportafolio/Keeper.jpg";
import Hotel from "./imgportafolio/Hotel.JPG"


function Portafolio() {
    return(
        <div id="portafolio" className="container-fluid">
        <h2 className="subtitle"> PORTAFOLIO</h2>
            <hr/>
            <div  className="row">
                <div className="col-lg-6 col-xs-6 image-container" >
                  <img src={Hotel} alt="" className="img-responsive center"  /> 
                    
                </div>
                <div className="col-lg-6 col-xs-6 image-container">
                    <img src={tindog} alt="" className="img-responsive center" />
                </div>
            </div>
            <div  className="row">
                <div className="col-lg-6 col-xs-6 image-container" >
                    
                    <img src={ToDoList} alt="" className="img-responsive center"  />

                </div>
                <div className="col-lg-6 col-xs-6 image-container">
                    <img src={Keeper} alt="" className="img-responsive center" />
                </div>
            </div>

        </div>
    );
}

export default Portafolio;


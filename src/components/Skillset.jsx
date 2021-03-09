import React from "react"
import ReactTooltip from "react-tooltip";
import html from "./imgskills/html.png"
import bootstrap from "./imgskills/bootstrap.png"
import css from "./imgskills/css.png"
import git from "./imgskills/git.png"
import jquery from "./imgskills/jquery.png"
import js from "./imgskills/js.png"
import mongo from "./imgskills/mongo.png"
import node from "./imgskills/node.png"
import react from "./imgskills/react.png"


function Skillset() {
    

    return(
        
        <div id="skillset" className="navbar-custom container-fluid">
        
            <div className="containter-fluid">
                <div className="row">
                    <div class="col-sm-12">
                        <h2 class="h2skills">SKILLSET</h2>
                        <hr className="hr-skills"></hr>
                    </div>
                </div>

                <div className="row">
                     <div className="col-lg-4  col-sm-6">
                        <img src={html} alt="HTML5" className="img-responsive center" data-tip data-for="html" />
                        <ReactTooltip id="html" place="top" effect="solid">
                            HTML5
                        </ReactTooltip>
                    </div>
                    <div className="col-lg-4  col-sm-6">
                        <img src={css} alt="CSS3" className="img-responsive center" data-tip data-for="css3" />
                        <ReactTooltip id="css3" place="top" effect="solid">
                            CSS3
                        </ReactTooltip>
                    </div>
                    <div className="col-lg-4  col-sm-6">
                        <img src={js} alt="JS" className="img-responsive center" data-tip data-for="js" />
                        <ReactTooltip id="js" place="top" effect="solid">
                            JavaScript (ES6)
                        </ReactTooltip>
                    </div>
                    <div className="col-lg-4  col-sm-6">
                        <img src={bootstrap} alt="bootstrap" className="img-responsive center" data-tip data-for="bootstrap" />
                        <ReactTooltip id="bootstrap" place="top" effect="solid">
                            Bootstrap
                        </ReactTooltip>
                    </div>
                    <div className="col-lg-4  col-sm-6">
                        <img src={jquery} alt="jquery" className="img-responsive center" data-tip data-for="jquery" />
                        <ReactTooltip id="jquery" place="top" effect="solid">
                            JQuery
                        </ReactTooltip>
                    </div>
                    <div className="col-lg-4  col-sm-6">
                        <img src={react} alt="react" className="img-responsive center" data-tip data-for="react" />
                        <ReactTooltip id="react" place="top" effect="solid">
                            React
                        </ReactTooltip>
                    </div>
                    <div className="col-lg-4  col-sm-6">
                        <img src={node} alt="node" className="img-responsive center" data-tip data-for="node" />
                        <ReactTooltip id="node" place="top" effect="solid">
                            NodeJS & Express
                        </ReactTooltip>
                    </div>
                    <div className="col-lg-4  col-sm-6">
                        <img src={git} alt="git" className="img-responsive center" data-tip data-for="git" />
                        <ReactTooltip id="git" place="top" effect="solid">
                            Git, GitLab & GitHUb
                        </ReactTooltip>
                    </div>
                    <div className="col-lg-4  col-sm-6">
                        <img src={mongo} alt="mongo" className="img-responsive center" data-tip data-for="mongo" />
                        <ReactTooltip id="mongo" place="top" effect="solid">
                            MongoDB
                        </ReactTooltip>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Skillset;
import React, { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import project from "../project.json"

function Portfolio() {
    const [codeProject, setcodeProject] = useState([]);

    const loadProject = () => {
        setcodeProject(project)
    };
    useEffect(() => loadProject(), [])

    return (
        <>
            <h2 style={{color: "grey", fontFamily: "monospace"}}>PORTFOLIO</h2>
            <hr />

            <div class="row">

                {codeProject.map (item => (
                    <div class="column">
                        <div class="content">
                            <img src="./assets/Portfolio/PW_Generator.png" alt="Password Generator" style={{width: "100%"}} />
                            <h3><a href="https://jiji-smith.github.io/3_Password_Generator/" target="_blank">"Password Generator"</a></h3>
                            <p>{item.description} </p>
                            <a href="https://github.com/jiji-smith/3_Password_Generator" target="_blank" class="fa fa-github"></a>
                        </div>
                    </div>
                )
                )
                }
            </div>
        </>
    );

}

export default Portfolio;

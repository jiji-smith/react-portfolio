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
            <h2 style={{color: "darkblue"}}>PORTFOLIO</h2>
            <hr />

            <div class="row" style={{ marginLeft: 30 }}>

                {codeProject.map (item => (
                    <div class="column">
                        <div class="content">
                            <img src={item.image} alt={item.name} style={{ width : "50%"}} />
                <h3><a href={item.location} target="_blank">{item.name}</a></h3>
                            <p>{item.description} </p>
                            <a href={item.location} target="_blank" class="fa fa-github"></a>
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

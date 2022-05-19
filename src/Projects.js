import React, { useState, useEffect } from "react";
import { flexItems } from "./constants.js"

const Projects = () => {

const [isDesktop, setIsDesktop] = useState(window.innerWidth > 770);

useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia)
});

const updateMedia = () => {
    setIsDesktop(window.innerWidth > 770)
};

    return ( 
        <div id="projects">
            <div className="projects-header-container">
                <h1 className="projects-header">~Projects~</h1>
            </div>
                <div className="container-fluid" style={{ width: '80%' }}>
                    <div className="d-flex flex-row justify-content-center align-items-center flex-wrap">
                        
                    {flexItems.map((item) => (
                        <div key={item.id} className={isDesktop ? "col-4 text-center" : "col-6 text-center"}>
                            <div className="project-item-background">
                                <div className="project-item">
                                <a  href={item.url} target="_blank" rel="noreferrer noopener" alt="project link">{item.title}</a>
                                </div>
                            </div>
                            </div>  
                    ))}

                    </div>
                </div>
        </div>
     );
}
 
export default Projects;
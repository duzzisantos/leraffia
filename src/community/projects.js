import React from "react";
import "../App.css";
import communityData from "../data-objects/community-data";
const Projects = () => {
  return communityData.map((project) => {
    const { projectID, projects} = project;
    return (
      <div className="reusable-div" key={projectID}>
        <img src={projects.photo} alt="images" key={projectID}></img>
        <h4 key={projectID}>{projects.title}</h4>
        <span><a href="/projects">See more</a></span>
      </div>
    );
  });
};

export default Projects;

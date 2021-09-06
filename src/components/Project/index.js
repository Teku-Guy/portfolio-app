import React from "react";
import { Card } from "react-bootstrap";

function ProjectCards(props) {
  return (
    <Card>
      <div className="img-container">
        <img alt={props.name} src={props.image}/>
      </div>
      <div className="content">
        <p className="project-title" id="card-title">{props.name}</p>
        <div>
          <a href={props.github}><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/></a> 
          <a href={props.deploy}><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon"/></a> 
        </div>
        <p id="topics">
          ({props.topics})
        </p>
      </div>
    </Card>
  );
}

export default ProjectCards;
import React from "react";
import { Col } from "react-bootstrap";

// ProjectCard component definition
const ProjectCard = ({ title, description, imgUrl }) => {
    return (
        /* Using the Col component from react-bootstrap to create a responsive grid column */
        <Col size={12} sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt = "ProjectImg"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    );
};

export { ProjectCard };

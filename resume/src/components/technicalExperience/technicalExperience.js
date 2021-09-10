import React from "react";
import "../../index.css";
import "./technicalExperience.css";

export default function TechnicalExperience(props) {
  console.log("inside of technical experience");
  return (
    <div className="content-block">
      <div className="content-container">
        <div className="baseline-align">
          <div className="experience-logo">
            <img src={props.orgLogo} />
          </div>
          <h2 className="experience-title">{props.title}</h2>
          <div className="services-container">
            {props.services.map((service) => {
              return (
                <a className="service" target="_blank" href={service.link}>
                  <img src={service.icon} />
                </a>
              );
            })}
          </div>
        </div>
        <h4 className="subtitle">{props.jobTitle}</h4>
        <div className="mid-align">
          <p dangerouslySetInnerHTML={{ __html: props.paragraph }}></p>
          <img className="experience-main-photo" src={props.majorPhoto} />
        </div>
      </div>
    </div>
  );
}

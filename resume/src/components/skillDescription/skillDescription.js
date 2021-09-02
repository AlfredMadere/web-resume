import React from "react";
import "../../index.css";

export default function SkillDescription(props) {
  return (
    <div className="content-block">
      <div className="content-container">
        <div className="baseline-align content-left">
          <a className="service" href={props.skill.link} target="_blank">
            <img src={props.skill.icon} />
          </a>
          <h2 className="skill-title">{props.skill.title}</h2>
        </div>
        <div className="mid-align">
          <p>{props.skill.myExperience}</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Navigation from "../../components/navigation/navigation.js";
import skills from '../../contentData/skills.js';
import SkillDescription from '../../components/skillDescription/skillDescription.js';

const mySkills = [skills.nodejs, skills.react, skills.html, skills.css];

export default function SkillsPage() {
    return (
      <div>
        <div className="top-bar top-bar-2">
          <Navigation mode="dropdown-mode" />
          <h1 className="page-title">Skills</h1>
        </div>
        <div className="main-content">
          <div className="columb-container double-columb">
              {
                  mySkills.map((skill) => {
                      return(<SkillDescription skill={skill} />);
                  })
              }
          </div>
          
        </div>
      </div>
    );
  }
  
import React from "react";
import Navigation from "../../components/navigation/navigation.js";
import TechnicalExperience from '../../components/technicalExperience/technicalExperience.js';
import experience from "../../contentData/experience.js";


console.log(experience);

export default function ExperiencePage() {
  return (
    <div>
    <div className="top-bar top-bar-2">
      <Navigation mode="dropdown-mode" />
      <h1 className="page-title">Expereince</h1>
    </div>
    <div className="main-content">
      <div className="columb-container">
        {
         experience.map((item) => {
           console.log(item);
           return <TechnicalExperience orgLogo={item.logoPhoto} title={item.title} jobTitle={item.role} paragraph={item.textContent} majorPhoto={item.mainPhoto} services={item.skills}/>
        })
        }
      </div>
    </div>
  </div>
  );
}

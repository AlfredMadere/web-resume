import React from "react";
import Navigation from "../../components/navigation/navigation.js";
import EducationParagraph from "../../components/raisedTextContainer/educationParagraph.js";


export default function EducationPage() {
  return (
    <div>
        <div className="top-bar top-bar-2">
          <Navigation mode="dropdown-mode" />
          <h1 className="page-title">Education</h1>
        </div>
        <div className="main-content">
          <div className="columb-container">
              <EducationParagraph />
          </div>
          
        </div>
      </div>
  );
}

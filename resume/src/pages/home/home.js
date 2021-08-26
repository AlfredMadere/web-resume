import React from "react";
import Intro from "../../components/intro/intro.js";
import PageSummary from "../../components/pageSummary/pageSummary.js";
import "./home.css";
import "../../index.css";

const aboutMeSummary = "I am lit and I am cool this is all about me you fool.";
const experienceSummary = "I have a lot of experience and I am very smart.";
const educationSummary = "I am one educated motherfucker let me tell you. Click to learn more";
const skillsSummary = "I have some absolutley raw fucking skills";

export default function AboutPage() {
  return (
    <div >
      <Intro />
      <div className="main-content">
        <div className="grid-container">
          <PageSummary page="About" summary={aboutMeSummary}/>
          <PageSummary page="Expereince" summary={experienceSummary}/>
          <PageSummary page="Education" summary={educationSummary}/>
          <PageSummary page="Skills" summary={skillsSummary}/>
        </div>
      </div>
    </div>
  );
}

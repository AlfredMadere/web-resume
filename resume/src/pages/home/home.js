import React from "react";
import Intro from "../../components/intro/intro.js";
import PageSummary from "../../components/pageSummary/pageSummary.js";
import "./home.css";
import "../../index.css";

const aboutMeSummary = "I am lit and I am cool this is all about me you fool. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non p";
const experienceSummary = "I have a lot of experience and I am very smart. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proid";
const educationSummary = "I am one educated motherfucker let me tell you. Click to learn more. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaeca";
const skillsSummary = "I have some absolutley raw fucking skills. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt i";

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

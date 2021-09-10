import React from "react";
import Intro from "../../components/intro/intro.js";
import PageSummary from "../../components/pageSummary/pageSummary.js";
import "./home.css";
import "../../index.css";

const aboutMeSummary = " Proficient full stack Developer with 4+ years of extensive experience in Javascript/ES6, UI/UX & Design areas with a willingness to learn and master Machine Learning and Typescript. NodeJs expert, focused on getting shit done.";
const educationSummary = "Computer science major at California Polytechnic University with a concentration in Machine Learning (2021 - present)";
const skillsSummary = "Front end: 'ES6/ES 2017', 'JSX', 'ReactJS', 'Pug/Jade', 'Restful API', 'JSON', 'CSS3', 'Babel'. Back end: 'Node.js', 'Express.js', 'Ruby', 'Java'. Cloud: 'Amazon EC2', 'AWS ECS', 'AWS lambda', 'AWS S3'. Dev: 'Git', 'Docker', 'VS Code'";

export default function AboutPage() {
  return (
    <div >
      <Intro />
      <div className="main-content">
        <div className="grid-container">
          <PageSummary page="About" >{aboutMeSummary}</PageSummary>
          <PageSummary page="Expereince" >
            <ul className="no-margin">
              <li >Ivy Advantage</li>
              <p className="no-margin">Full stack development</p>
              <li > What's My Wine</li>
              <p className="no-margin">Automated integration testing</p>
              <li >Auto Auto</li>
              <p className="no-margin" >UX and layout design</p>
            </ul>
            </PageSummary>
          <PageSummary page="Education" >{educationSummary}</PageSummary>
          <PageSummary page="Skills" >{skillsSummary}</PageSummary>
        </div>
      </div>
    </div>
  );
}

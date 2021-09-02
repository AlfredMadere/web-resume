import React from "react";
import Navigation from "../../components/navigation/navigation.js";
import TechnicalExperience from '../../components/technicalExperience/technicalExperience.js';
import ivyTutoringExample from '../../images/experience/ivyDemo.jpg';
import ivyLogo from '../../images/experience/ivyLogo.png';
import s3Logo from '../../images/serviceLogos/s3Logo.png';
import ec2Logo from '../../images/serviceLogos/ec2Logo.png';
import nodeJsLogo from '../../images/serviceLogos/nodeJs.jpg';
import reactLogo from '../../images/serviceLogos/reactLogo.png';
import twillioLogo from '../../images/serviceLogos/twillioLogo.jpeg';
import whatsMyWineLogo from '../../images/experience/whatsMyWineLogo.jpeg';
import whatsMyWineDemo from '../../images/experience/whatsMyWineDemo.png';
import capybaraTestingLogo from '../../images/serviceLogos/capybaraTestingLogo.jpeg';
import rubyLogo from '../../images/serviceLogos/rubyLogo.png';


const ivyServices = [{name: "s3", link: "https://aws.amazon.com/s3/", icon: s3Logo}, {name: "ec2", link: "www.amazon.com", icon: ec2Logo}, {name: "nodejs", link: "www.amazon.com", icon: nodeJsLogo}, {name: "react", link: "www.amazon.com", icon: reactLogo}, {name: "twillio", link: "www.amazon.com", icon: twillioLogo}];
const ivyParagraph = "My cofounder and I started Ivy Advantage  tutoring company to connect high quality college aged tutors with students struggling during the pandemic. As the company grew and we had multiple sessions occuring simultaniously, automated scheduling and session logging became a requirement. using google sheets and calendar APIs i created a node backend that was able to send reminder texts as well as serve up info about tutorinaavailability . I also created a front end for tutors to log their sessions. I hosted the system on an aws EC2 instance";
const whatsMyWineServices = [{name: "capybara testing", link: "https://aws.amazon.com/s3/", icon: capybaraTestingLogo}, {name: "ruby", link: "www.amazon.com", icon: rubyLogo}];

export default function ExperiencePage() {
  return (
    <div>
    <div className="top-bar top-bar-2">
      <Navigation mode="dropdown-mode" />
      <h1 className="page-title">Expereince</h1>
    </div>
    <div className="main-content">
      <div className="columb-container">
        <TechnicalExperience orgLogo={ivyLogo} title="Ivy Advantage" jobTitle="Founder and developer" paragraph={ivyParagraph} majorPhoto={ivyTutoringExample} services={ivyServices}/>
        <TechnicalExperience orgLogo={whatsMyWineLogo} title="What's My Wine" jobTitle="Integration test intern" paragraph={ivyParagraph} majorPhoto={whatsMyWineDemo} services={whatsMyWineServices}/>
        <TechnicalExperience orgLogo={ivyLogo} title="Ivy Advantage" jobTitle="Founder and developer" paragraph={ivyParagraph} majorPhoto={ivyTutoringExample} services={ivyServices}/>

      </div>
    </div>
  </div>
  );
}

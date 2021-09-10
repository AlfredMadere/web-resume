import ivyTutoringExample from '../images/experience/ivyDemo.jpg';
import ivyLogo from '../images/experience/ivyLogo.png';

import whatsMyWineLogo from '../images/experience/whatsMyWineLogo.jpeg';
import whatsMyWineDemo from '../images/experience/whatsMyWineDemo.png';

import skills from './skills.js';



const experience = [
    {
        title: "Ivy Advantage",
        role: "Founder and developer",
        logoPhoto: ivyLogo,
        mainPhoto: ivyTutoringExample,
        link: 'https://www.ivy-advantage.com',
        textContent: "<b>Full stack development</b> of the session logging, scheduling, and reminder systems resulting in <b>80% fewer no shows </b> and ~15 hrs/month saved on rescheduling/manual logging. Integrating with third Party services and external APIs such as twilio, AWS s3, and the suite of Google APIs, as a part of the implementation of our text-reminder system. <b>Oversaw full lifecycle of software development </b> for all of Ivy Advantage’s technical systems.",
        skills: [skills.nodejs, skills.react, skills.s3, skills.ec2, skills.twillio],
    },
    {
        title: "What's My Wine",
        role: "Developer intern",
        logoPhoto: whatsMyWineLogo,
        mainPhoto: whatsMyWineDemo,
        link: 'https://www.wmw.com',
        textContent: "Performing <b>automated unit testing</b> and test suite creation for the business-critical progressive web application, applying knowledge of Cucumber & Selenium with Rspec resulting in <b>improved system’s stability</b> and scalability.",
        skills: [skills.ruby, skills.capybara],
    },
    {
        title: "Auto Auto",
        role: "Product design intern",
        logoPhoto: ivyLogo,
        mainPhoto: ivyTutoringExample,
        link: 'https://www.ivy-advantage.com',
        textContent: "Designed aspects UX for online robotics courses intended to introduce the younger generation to <b>machine learning.</b>",
        skills: [skills.git],
    },
];

export default experience;
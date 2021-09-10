import React from "react";
import "../../index.css";
import ImageHoverableSpan from '../imageHoverableSpan/imageHoverableSpan.js';
import nodeJs from '../../images/serviceLogos/nodeJs.jpg';
import skills from '../../contentData/skills.js';
import alfredImg from '../../images/sittingGraduationPhoto.png';
import austinImg from '../../images/austinSkyline.jpg';
import riverImg from '../../images/bargeWaveHood.JPG';
import mountainImg from '../../images/addamsSummit.jpg';
import saxophoneImg from '../../images/saxGrad.jpg';




export default class EducationParagraph extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-block">
        <p className="important-paragraph">I am currently studying computer science with a concentration in AI at Califorina Polytechnic University.
        In my independent study I have completed numberous courses on Codecademy including thier <ImageHoverableSpan src={skills.nodejs.icon}>Javascript</ImageHoverableSpan>, <ImageHoverableSpan src={skills.react.icon}>React</ImageHoverableSpan>
        , <ImageHoverableSpan src={skills.css.icon}>CSS</ImageHoverableSpan>, <ImageHoverableSpan src={skills.git.icon}>Git</ImageHoverableSpan> and <ImageHoverableSpan src={skills.python.icon}>Python</ImageHoverableSpan> offerings. In Highschool I took every computer science course offered
        including Java I and II as well as video game development.
        </p>
      </div>
    );
  }
}

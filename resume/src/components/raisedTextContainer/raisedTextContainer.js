import React from "react";
import "../../index.css";
import ImageHoverableSpan from '../imageHoverableSpan/imageHoverableSpan.js';
import alfredImg from '../../images/sittingGraduationPhoto.png';
import austinImg from '../../images/austinSkyline.jpg';
import riverImg from '../../images/bargeWaveHood.JPG';
import mountainImg from '../../images/addamsSummit.jpg';
import saxophoneImg from '../../images/saxGrad.jpg';




export default class RaisedTextContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content-block">
        <p className="important-paragraph">Hey there, my name is <ImageHoverableSpan src={alfredImg}>Alfred</ImageHoverableSpan>. 
        I'm a developer and student from <ImageHoverableSpan src={austinImg}>Austin</ImageHoverableSpan> Texas focused on getting shit done. I love the outdoors so in my free time you'll likely find me on 
        the <ImageHoverableSpan src={riverImg}>River</ImageHoverableSpan> or in the <ImageHoverableSpan src={mountainImg}>Mountains</ImageHoverableSpan>. I also perform and teach 
        jazz <ImageHoverableSpan src={saxophoneImg}>Saxophone</ImageHoverableSpan>. Playing Spike ball, vollyball, and going mountain biking or climbing are some of my favorite activities to do with friends.
        </p>
      </div>
    );
  }
}

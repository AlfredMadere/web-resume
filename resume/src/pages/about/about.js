import React from "react";
import Navigation from "../../components/navigation/navigation.js";
import "../../index.js";
import RaisedTextContainer from "../../components/raisedTextContainer/raisedTextContainer.js";

const aboutMeParagraph = "Hey there, my name is Alfred, I'm a developer and student from Austin Texas focused on getting shit done. I love the outdoors so in my free time You'll likely find me on the river or in the mountains. I also  ferform and teach jazz saxophone. Playing spike ball, bolly ball, going mountain bikine or climbing are some of my favorite activiets to do with friends.";

export default function AboutPage() {
  return (
    <div>
      <div className="top-bar corner-blob-1">
        <Navigation mode="dropdown-mode" />
        <h1 className="page-title">About</h1>
      </div>
      <div className="main-content">
        <div className="grid-container">
          <RaisedTextContainer paragraph={aboutMeParagraph} />
        </div>
      </div>
    </div>
  );
}

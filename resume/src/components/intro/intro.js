import React from "react";
import ProfilePhoto from "../profilePhoto/profilePhoto";
import codingJoke from "../../images/codingJoke.png";
import "./intro.css";
import "../../index.css";

export default function Intro() {
  return (
    <div className="frame" id="home-top">
      <img alt="profile" className="subtle-background" src={codingJoke} />
      <ProfilePhoto />
      <h1 id="greeting-text" className="center"> Hi, I'm Alfred</h1>
    </div>
  );
}

import React from "react";
import Navigation from "../navigation/navigation";
import codingJoke from "../../images/codingJoke.png";
import "./intro.css";
import "../../index.css";

export default function Intro() {
  return (
    <div id="home-top">
      <img alt="profile" className="subtle-background" src={codingJoke} />
      <Navigation mode="explosion-mode"/>
      <h1 id="greeting-text"> Hi, I'm Alfred</h1>
    </div>
  );
}

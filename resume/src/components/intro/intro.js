import React from "react";
import Navigation from "../navigation/navigation";
import "./intro.css";
import "../../index.css";

export default function Intro() {
  return (
    <div id="home-top">
      <Navigation mode="explosion-mode"/>
      <h1 id="greeting-text"> Hi, I'm Alfred</h1>
    </div>
  );
}

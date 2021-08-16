import React from "react";
import Intro from "../../components/intro/intro.js";
import "./home.css";
import "../../index.css";

export default function AboutPage() {
  return (
    <div >
      <Intro />
      <div className="post-intro">
        <div className="grid-container">
        <div className="grid-item-1">1</div>
        <div className="grid-item-2">2</div>
        <div className="grid-item-3">3</div>
        <div className="grid-item-4">4</div>
      </div>
    </div>
      
    </div>
  );
}

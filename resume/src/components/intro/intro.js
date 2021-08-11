import React from "react";
import ProfilePhoto from "../profilePhoto/profilePhoto";
import "./intro.css";
import "../../index.css";

export default function Intro() {
  return (
    <div className="master-container">
      <div className="color-panel color-theme-1" id="header-color-panel-top">some shit</div>
      <div className="color-panel color-theme-2" id="header-color-panel-bottom">some other shit</div>
      <ProfilePhoto />
    </div>
  );
}

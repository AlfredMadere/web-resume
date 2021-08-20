import React from "react";
import graduationPhoto from "../../images/sittingGraduationPhoto.png";
import "./navigation.css";
import "../../index.css";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="nav-container">
        <img
          alt="profile"
          className="circular-square center"
          src={graduationPhoto}
        />
        <a className="nav-1">About</a>
        <a className="nav-2">Expereince</a>
        <a className="nav-3">Education</a>
        <a className="nav-4">Skills</a>
      </div>
    );
  }
}

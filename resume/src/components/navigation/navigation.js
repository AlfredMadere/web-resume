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
      <div className={`nav-container ${this.props.mode}`}>
        <a
          className="nostyle center front nav-image-holder"
          href="/"
          target="blank"
        >
          <img
            alt="profile"
            className="circular-square center"
            src={graduationPhoto}
          />
        </a>

        <a className="nav-1 nostyle" href="/about">
          About
        </a>
        <a className="nav-2 nostyle" href="/experience">
          Experience
        </a>
        <a className="nav-3 nostyle" href="/education">
          Education
        </a>
        <a className="nav-4 nostyle" href="/skills">
          Skills
        </a>
      </div>
    );
  }
}

import React from "react";
import graduationPhoto from "../../images/sittingGraduationPhoto.png";
import './profilePhoto.modules.css';

export default function ProfilePhoto() {
  return (
    <div>
      <img alt="profile" className="circularSquare center" src={graduationPhoto} />
    </div>
  );
}

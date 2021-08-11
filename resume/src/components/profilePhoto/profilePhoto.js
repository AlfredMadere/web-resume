import React from "react";
import graduationPhoto from "../../images/sittingGraduationPhoto.png";
import './profilePhoto.css';
import '../../index.css';

export default function ProfilePhoto() {
  return (
      <img alt="profile" className="circular-square center" src={graduationPhoto} />
  );
}

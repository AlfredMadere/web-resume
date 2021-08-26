import React from "react";
import "../../index.css";
import Navigation from "../navigation/navigation.js";

export default class PageSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
          <Navigation mode="dropdown-mode"/>

      </div>
    );
  }
}

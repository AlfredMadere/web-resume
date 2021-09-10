import React from "react";
import "../../index.css";
import pageCurlIcon from "../../images/navIcons/pageCurlIcon.jpeg";
import flipIcon from "../../images/navIcons/flipIcon.jpg";
import forwardArrow from '../../images/navIcons/forwardArrow.png';

export default class PageSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <a
        className="content-block nostyle drop-shadow"
        href={`/${this.props.page}`}
      >
        <div className="content-container">
          <div>
            <h2 className="summary-title">{this.props.page}</h2>
            <p className="important-paragraph">{this.props.children}</p>
            <div className="align-right-bottom">
              <img  src={forwardArrow} />
            </div>
          </div>
        </div>
      </a>
    );
  }
}

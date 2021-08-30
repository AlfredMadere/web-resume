import React from "react";
import "../../index.css";

export default class PageSummary extends React.Component {
     constructor(props){
         super(props);
         this.state = {}
     }

    render() {
        return (
          <a className="grid-item nostyle drop-shadow color-theme-1" href={`/${this.props.page}`}>
              <div >
                <h2 className="summary-title">{this.props.page}</h2>
                <p className="important-paragraph">{this.props.summary}</p>
              </div>
          </a>
            
            )
    }
}
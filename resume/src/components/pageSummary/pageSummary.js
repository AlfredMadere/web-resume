import React from "react";
import "../../index.css";

export default class PageSummary extends React.Component {
     constructor(props){
         super(props);
         this.state = {}
     }

    render() {
        return (
          <a className="grid-item nostyle" href={`/${this.props.page}`}>
              <div >
                <h2 className="page-title">{this.props.page}</h2>
                <p>{this.props.summary}</p>
              </div>
          </a>
            
            )
    }
}
import React from "react";
import "./imageTile.css";

export default class imageTile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
    };
    // Bind properties to class instance
    this._mouseEnter = this._mouseEnter.bind(this);
    this._mouseLeave = this._mouseLeave.bind(this);
  }
  // Event handlers to modify state values
  _mouseEnter(e) {
    e.preventDefault();
    if (this.state.mouseOver === false) {
      console.log(this.props.data.name);
      this.setState({
        mouseOver: true,
      });
    }
  }
  _mouseLeave(e) {
    e.preventDefault();
    if (this.state.mouseOver === true) {
      this.setState({
        mouseOver: false,
      });
    }
  }

  render() {
    // Modify styles based on state values
    let tileStyle = {};
    // When tile clicked

    tileStyle = {
      width: "18vw",
      height: "18vw",
    };

    return (
      <div className="tile">
        <img
          onMouseEnter={this._mouseEnter}
          onMouseLeave={this._mouseLeave}
          src={this.props.data.image}
          alt={this.props.data.name}
          style={tileStyle}
        />
      </div>
    );
  }
}

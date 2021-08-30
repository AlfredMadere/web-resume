import React from "react";
import "../../index.css";
import "./imageHoverableSpan.css";

export default class imageHoverableSpan extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mouseOver: false };
    this.showImageWhenHover = this.showImageWhenHover.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
  }

  showImageWhenHover(e) {
    console.log(this.props.children);
    if (this.state.mouseOver) {
      let x = this.state.mouseX;
      let y = this.state.mouseY;
      const image = document.querySelector(`.${this.props.children}`);
      image.style.left = x + "px";
      image.style.top = y + "px";
      console.log(image.style.left, image.style.top);
    }
  }
  _onMouseMove(e) {
    this.setState({ mouseX: e.clientX, mouseY: e.clientY });
    this.showImageWhenHover();
  }

  render() {
    return (
      <>
        <span
          className="photo-hoverable"
          onMouseMove={this._onMouseMove}
          onMouseEnter={() => {
            this.setState({ mouseOver: true });
            const image = document.querySelector(`.${this.props.children}`);
            image.style.height = 150 + "px";
            image.style.width = 150 + "px";
          }}
          onMouseLeave={() => {
            this.setState({ mouseOver: false });
            const image = document.querySelector(`.${this.props.children}`);
            image.style.height = 0 + "px";
            image.style.width = 0 + "px";
          }}
        >
          {this.props.children}
        </span>
        <img
          className={`hoverimage ${this.props.children}`}
          src={this.props.src}
        />
      </>
    );
  }
}

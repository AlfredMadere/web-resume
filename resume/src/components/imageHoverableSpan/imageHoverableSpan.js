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
      image.style.left = x - 75 + "px";
      image.style.top = y - 75 + image.style.height / 2 + "px";
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
          image.style.display = 'block';
        }}
        onMouseLeave={() => {
          this.setState({ mouseOver: false });
          const image = document.querySelector(`.${this.props.children}`);
          image.style.display = 'none';
        }}>
            {this.props.children}
        </span>
        <div class={`hoverimage ${this.props.children}`}>
        <img className="popup-img" src={this.props.src} />
      </div>
      </>
      
    );
  }
}

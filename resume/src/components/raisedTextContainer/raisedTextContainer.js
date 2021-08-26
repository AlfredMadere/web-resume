import React from "react";
import "../../index.css";
import codingJoke from "../../images/codingJoke.png";
import "./raisedTextContainer.css";

export default class RaisedTextContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mouseOver: false };
    this.showImageWhenHover = this.showImageWhenHover.bind(this);
    this._onMouseMove = this._onMouseMove.bind(this);
  }

  componentDidMount() {
    this.imageUpdateInterval = setInterval(this.showImageWhenHover, 10);
  }
  componentWillUnmount() {
    clearInterval(this.imageUpdateInterval);
  }

  showImageWhenHover(e) {
    console.log(this.state);
    if (this.state.mouseOver) {
      let x = this.state.mouseX;
      let y = this.state.mouseY;
      const image = document.querySelector(".hoverimage");
      image.style.left = x - 75 + "px";
      image.style.top = y - 75 + image.style.height / 2 + "px";
      console.log(image.style.left, image.style.top);
      //this.forceUpdate();
    }
  }
  _onMouseMove(e) {
    this.setState({ mouseX: e.clientX, mouseY: e.clientY });
  }

  render() {
    return (
      <div className="grid-item rounded raised">
        <div
          style={{ "z-index": 2 }}
          className="photo-hover"
          onMouseMove={this._onMouseMove}
          onMouseEnter={() => {
            this.setState({ mouseOver: true });
            const image = document.querySelector(".hoverimage");
            image.style.display = 'block';
          }}
          onMouseLeave={() => {
            this.setState({ mouseOver: false });
            const image = document.querySelector(".hoverimage");
            image.style.display = 'none';
          }}
        >
          <h3>test Image hover thing</h3>
        </div>
        <div class="hoverimage">
          <img className="popup-img" src={codingJoke} />
        </div>
        <p>{this.props.paragraph}</p>
      </div>
    );
  }
}

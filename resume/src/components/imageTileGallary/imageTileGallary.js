import React from "react";
import Tile from "../imageTile/imageTile";

export default class ImageTileGallary extends React.Component {
  render() {
    return (
      <>
        <div className="tiles content-block">
          {this.props.data.map((data) => {
            return <Tile data={data} key={data.id} />;
          })}
        </div>
      </>
    );
  }
}

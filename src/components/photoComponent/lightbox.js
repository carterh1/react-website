import React, { Component } from "react";
import { render } from "react-dom";
import Lightbox from "react-image-lightbox";
import { image1 } from "../pages/homePage.js";

const images = [
  "./BlacknessWaterWM.jpg"
];

export default class Photobox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen }= this.state;

    return (
      <div>

        <img onClick={() => this.setState({ isOpen: true })}/>

        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex +1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onmovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })}
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })}
              />
        )}
      </div>
    );
  }
}

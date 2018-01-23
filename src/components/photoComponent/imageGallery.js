import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import './imagegallery.css';
import image1 from './BlacknessWaterWM.jpg';
import image2 from './BeeCraigLochSnowWM.JPG';


class Slideshow extends Component {

  render () {

    const images = [
    {
      original: image1,
      thumbnail: image1,
      description: 'Blackness Water',
    },
    {
      original: image2,
      thumbnail: image2,
      description: 'Beecraigs Loch',
    }
    ]

    return (
      <div>
      <ImageGallery items={images}/>

      </div>
    )
  }
}

export default Slideshow;

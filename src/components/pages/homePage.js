import React, { Component } from 'react';
import {
  Lightbox,
  LightboxTrigger,
  LightboxModal
} from "react-image-lightbox";
import '../../App.css';
import Header from '../headerComponent/header.js';
import Footer from '../footerComponent/footer.js';
import image1 from './BlacknessWaterWMSized.jpg';
import Slideshow from '../photoComponent/imageGallery.js';
import red from './Red.jpg';

class Homepage extends Component {
  render() {
    return (

      <div id="homepage" className="container-fluid">
        <Slideshow/>
          <Header/>
            
            <div id="rowone" className="rowone">
              <div className="col-sm-4">
                <div className="boxes">

                <p> Recent Captures </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="boxes">
                  <p/>
                  <p> Latest Posts</p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="boxes">
                <p> Japanese Learning</p>
                </div>
              </div>
            </div>

          <Footer/>
      </div>
    );
  }
}

export default Homepage;

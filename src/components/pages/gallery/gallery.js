import React, { Component } from 'react';
import './gallery.css';
import LocalizedExample from '../../calendarComponent/calendar.js';
import Categories from '../../categoriesComponent/categories.js';
import Archives from '../../archivesComponent/archives.js';
import Header from '../../headerComponent/header.js';
import Footer from '../../footerComponent/footer.js';


class Gallery extends Component {
  render() {
    return (
      <div id="gallery" className="galleryPage">
        <Header/>
          <br/>
            <div id="rowone" className="galleryrowone">
              <div className="col-sm-4">
                <div id="image1" className="col1">
                  <h9></h9>
                </div>
                <div id="image1" className="col1">
                </div>
                <div id="image1" className="col1">
                </div>
              </div>
              <div className="col-sm-4">
                <div id="image1" className="col1">
                  <h9></h9>
                </div>
                <div id="image1" className="col1">
                </div>
                <div id="image1" className="col1">
                </div>
              </div>
              <div className="col-sm-2">
                <div className="gallerysidebar">
                  <div className="calendars">
                    <LocalizedExample/>
                  </div>
                  <div className="categories">
                    <Categories/>
                  </div>
                  <div className="archives">
                    <Archives/>
                  </div>
                </div>
              </div>
            </div>
            <div id="rowtwo" className="galleryrowtwo">
              <div className="col-sm-2">
                <div id="image1" className="row1">

                </div>
              </div>
              <div className="col-sm-2">
                <div id="image1" className="row1">

                </div>
              </div>
              <div className="col-sm-2">
                <div id="image1" className="row1">

                </div>
              </div>
              <div className="col-sm-2">
                <div id="image1" className="row1">

                </div>
              </div>

              </div>
              <h4>All images and content are owned by Heather and may not be used without written permisson.</h4>


            <Footer/>
      </div>
    );
  }
}

export default Gallery;

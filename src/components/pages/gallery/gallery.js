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
            <h1> Gallery: Moments that I have captured </h1>
            <h2>All images and content are owned by Heather and may not be used without written permisson.</h2>
              <div id="rowone" className="galleryrowone">
                <div className="col-sm-1">
                </div>
                <div className="col-sm-3">
                  <div id="image1" className="col1">
                    <h9>Col 1</h9>
                  </div>
                  <div id="image1" className="col1">
                  </div>
                  <div id="image1" className="col11">
                  </div>
                  <div id="image1" className="col1">
                  </div>
                </div>
                <div className="col-sm-2">
                  <div id="image2" className="col2">
                    <h9>Col 2</h9>
                  </div>
                  <div id="image2" className="col2">
                  </div>
                  <div id="image2" className="col2">
                    <h9></h9>
                  </div>
                  <div id="image2" className="col2">
                  </div>
                  <div id="image2" className="col2">
                    <h9></h9>
                  </div>
                  <div id="image2" className="col2">
                  </div>
                </div>
                <div className="col-sm-3">
                  <div id="image1" className="col3">
                    <h9>Col 3</h9>
                  </div>
                  <div id="image1" className="col3">
                  </div>
                  <div id="image1" className="col3">
                  </div>
                </div>
                <div className="col-sm-2">
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
                <div className="col-sm-1">
                </div>
              </div>
              <Footer/>
      </div>
    );
  }
}

export default Gallery;

import React, { Component } from 'react';
import './japan.css';
import LocalizedExample from '../../calendarComponent/calendar.js';
import Categories from '../../categoriesComponent/categories.js';
import Archives from '../../archivesComponent/archives.js';
import Header from '../../headerComponent/header.js';
import Footer from '../../footerComponent/footer.js';

class Japan extends Component {
  render() {
    return (
      <div id="Japan" className="container-fluid">
        <Header/>
        <br/>


            <div id="rowone" className="japanrowone">
              <div className="col-sm-8">
                <div className="explantation">
                  <p>I dream about visiting Japan one day.
                  It is a beautiful country, hopefully one day I'll get to go. My camera would never stop.
                  </p>
                </div>

              </div>
              <div className="col-sm-3">
              <div className="japansidebar">
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

        <div id="rowtwo" className="rowtwo">
        </div>


      <Footer/>
    </div>
    );
  }
}

export default Japan;

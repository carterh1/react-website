import React, { Component } from 'react';
import './japan.css';
import LocalizedExample from '../../calendarComponent/calendar.js';
import Categories from '../../categoriesComponent/categories.js';
import Archives from '../../archivesComponent/archives.js';
import Header from '../../headerComponent/header.js';

class Japan extends Component {
  render() {
    return (
      <div id="Japan" className="container-fluid">
        <Header/>
        <br/>
          <h1> Japan: I dream that I'll go one day </h1>

            <div id="rowone" className="rowone">
              <div className="col-sm-10">

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
            </div>

        <div id="rowtwo" className="rowtwo">
        </div>


      <div className="App-title-line"></div>
    </div>
    );
  }
}

export default Japan;

import React, { Component } from 'react';
import './blog.css';
import LocalizedExample from '../../calendarComponent/calendar.js';
import Categories from '../../categoriesComponent/categories.js';
import Archives from '../../archivesComponent/archives.js';
import Searchbar from '../../searchbarComponent/searchbar.js';
import Header from '../../headerComponent/header.js';


class Blog extends Component {
  render() {
    return (
      <div id="Blog" className="container-fluid">
      <Header/>
        <br/>
          <h1> Blog: Some Tales to Tell </h1>

            <div id="rowone" className="rowone">
            <div className="col-sm-1">
            </div>
            <div className="col-sm-8">
              <div id="post" className="posts">
                <article>
                  <header>
                    <h1>Happy New Year</h1>
                    <h3><time>1st January 2018</time></h3>
                  </header>
                  <content>
                    <p>Happy New Year to All! </p>
                    <p>This year was very quiet, hot chocolate and fireworks</p>
                  </content>
                  <footer>
                    <p>by Heather </p>
                  </footer>
                </article>
              </div>
              </div>
              <div className="col-sm-2">
                <div className="searchbar">

                </div>
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

      <div className="App-title-line"></div>
    </div>
    );
  }
}

export default Blog;

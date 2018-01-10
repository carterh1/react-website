import React, { Component } from 'react';
import './blog.css';
import LocalizedExample from '../../calendarComponent/calendar.js';
import Categories from '../../categoriesComponent/categories.js';
import Archives from '../../archivesComponent/archives.js';
import Searchbar from '../../searchbarComponent/searchbar.js';
import Header from '../../headerComponent/header.js';
import Footer from '../../footerComponent/footer.js';
import blogimg1 from './BFGTeaWM.jpg';
import blogimg2 from './BangourChruchWM.jpg';


class Blog extends Component {
  render() {
    return (
      <div id="Blog" className="container-fluid">
      <Header/>
        <br/>
        <div className="blogheader">

          </div>
            <div id="rowone" className="rowone">

            <div className="col-sm-8">
              <div id="post" className="posts">
                <article>
                  <div className="postimage">
                  <img src={blogimg1} alt="HNY image" height="600px" width="800px"/>
                  </div>
                  <header>
                    <h1><b>Out for Tea with the BFG!</b></h1>
                    <h2><time>2nd January 2018</time></h2>
                  </header>
                  <content>
                    <h3>Who doesn't like a big cuppa and a scone?</h3>
                    <h3>Stopped at a local cafe to get a bite to eat.</h3>
                  </content>
                  <footer>
                  <br/>
                    <h2>by Heather         - BFG - Food -</h2>
                  </footer>
                </article>

              </div>
              <div id="post" className="posts">
                <article>
                <div className="postimage">
                <img src={blogimg2} alt="HNY image" height="500px" width="800px"/>
                </div>
                  <header>
                    <h1><b>Happy New Year</b></h1>
                    <h2><time>1st January 2018</time></h2>
                  </header>
                  <content>
                    <h3>Happy New Year to All! </h3>
                    <h3>This year was very quiet, hot chocolate and fireworks</h3>
                  </content>
                  <footer>
                    <h2>by Heather - Bangour - Church - Black&White</h2>
                  </footer>
                </article>

              </div>
            </div>
            <div className="col-sm-3">
              <div className="gallerysidebar">
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
              </div>
              <div className="col-sm-1">
              </div>

            </div>

      <Footer/>
    </div>
    );
  }
}

export default Blog;

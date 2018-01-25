import React, { Component } from 'react';
import './blog.css';
import LocalizedExample from '../../calendarComponent/calendar.js';
import Categories from '../../categoriesComponent/categories.js';
import Archives from '../../archivesComponent/archives.js';
import Header from '../../headerComponent/header.js';
import Footer from '../../footerComponent/footer.js';
import axios from 'axios';




class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts:[]
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/Blog')
      .then((response) => {
        this.setState({
          posts: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }


  render() {

    const blogPosts = this.state.posts.map((post, index) => (
      <div key={index} id="post" className="posts">
        <article>
          <div className="postimage">
          </div>
          <header>
            <h1><b>{ post.title }</b></h1>
            <h2><time>{ post.date }</time></h2>
          </header>
          <content>
            <h3>{ post.content }</h3>
          </content>
          <footer>
          <br/>
            <h2>{ post.category }</h2>
          </footer>
        </article>

      </div>
    ));

    return (
      <div id="Blog" className="container-fluid">
      <Header/>
        <br/>
        <div className="blogheader">
          </div>
            <div id="rowone" className="blogrowone">
              <div className="col-sm-8">
                { blogPosts }

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

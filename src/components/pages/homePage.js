import React, { Component } from 'react';
import '../../App.css';
import Header from '../headerComponent/header.js';
import Footer from '../footerComponent/footer.js';
import Slideshow from '../photoComponent/imageGallery.js';
import axios from 'axios';


class Homepage extends Component {
  constructor(props) {
    super(props)
      this.state = {
        posts:[]
      }
    }

    componentDidMount() {
    axios.get('http://localhost:5000/')
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

    const latestPosts = this.state.posts.map((post, index) => (
      <div key={index} id="latestpost" className="latestposts">
        <div className="homelist">
        <ul>
          <li>{ post.title }</li>
          </ul>
        </div>
      </div>
    ));

    return (

      <div id="homepage" className="container-fluid">
        <Slideshow/>
          <Header/>
            <div>
              <div id="rowone" className="homerowone">
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
            <div id="rowtwo" className="homerowtwo">
              <div className="col-sm-4">
                <div className="boxeslink">
                <p>  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="boxeslink">
                  { latestPosts }

                </div>
              </div>
              <div className="col-sm-4">
                <div className="boxeslink">
                  <div className="homelist">
                    <ul>
                      <li>Number's 1 -10</li>
                      <li>Thank You</li>
                      <li>Hello</li>
                      <li>Learn Japanese while asleep</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            </div>
          <Footer/>
      </div>
    );
  }
}

export default Homepage;

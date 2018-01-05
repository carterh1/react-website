import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import logo from './logo1.svg';
//import './App.css';

import Header from './components/headerComponent/header.js';
//import Footer from './components/footerComponent/footer.js';
import Homepage from './components/pages/homePage.js';
import Aboutme from './components/pages/aboutme/aboutMe.js';
import Gallery from './components/pages/gallery/gallery.js'
import Blog from './components/pages/blog/blog.js';
import Createblog from './components/pages/blog/createblog.js';
import Japan from './components/pages/japan/japan.js';


class App extends Component {
  render() {
    return (
      <Router>

        <div id="fullpage" className="App">

            <Route exact path='/' component={Homepage} />
            <Route exact path='/Aboutme' component={Aboutme} />
            <Route exact path='/Gallery' component={Gallery} />
            <Route exact path='/Blog' component={Blog} />
            <Route exact path='/Japan' component={Japan} />

            

        </div>
      </Router>
    );
  }
}

export default App;

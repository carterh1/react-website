import React, { Component } from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { NavLink } from 'react-router-dom'
import './header.css';

class Header extends Component {
  render() {
    return (
      <header id="header" className="App-header">
        <div className="App-title">Once Upon a Lime</div>
          <div id="pageheading" className="headingrow">
            <nav>
              <ul>
                <li className="first">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/Aboutme">About Me</Link>
                </li>
                <li>
                  <Link to="/Gallery">Gallery</Link>
                </li>
                <li className="last">
                  <Link to="/Blog">Blog</Link>
                </li>
                <li className="last">
                  <Link to="/Japan">Japan</Link>
                </li>
              </ul>
            </nav>
            <div className="App-title-line"></div>
          </div>



      </header>
    );
  }
}

export default Header;

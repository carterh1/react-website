import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
//import { NavLink } from 'react-router-dom'
import './header.css';

class Header extends Component {
  render() {
    return (
      <header id="header" className="App-header">
      <div className="App-line"></div>
        <div className="App-title">
        Once Upon a Lime
        </div>
        <div className="pagelinks">
          <div id="pageheading" className="headingrow">
            <nav>
              <ul>
                <li className="first">
                  <Link to="/">home</Link>
                </li>
                <li>
                  <Link to="/Aboutme">about me</Link>
                </li>
                <li className="last">
                  <Link to="/Blog">blog</Link>
                </li>
                <li>
                  <Link to="/Gallery">gallery</Link>
                </li>
                <li className="last">
                  <Link to="/Japan">japan</Link>
                </li>
              </ul>
            </nav>
            </div>
          </div>
      </header>
    );
  }
}

export default Header;

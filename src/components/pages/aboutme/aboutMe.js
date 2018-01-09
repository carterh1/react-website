import React, { Component } from 'react';
import './aboutme.css';
import me from './me.JPG';
import Header from '../../headerComponent/header.js';
import Footer from '../../footerComponent/footer.js';


class Aboutme extends Component {
  render() {
    return (

      <div id="aboutme" className="container-fluid">
        <Header/>
        <br/>

            <div id="rowone" className="merowone">
              <div className="col-sm-6">
                <img src={me} className="imageofme" alt="Image of Me" />
              </div>
              <div className="col-sm-6">
                <div id="bio" className="bio">
                  <h1> Welcome to Once Upon a Lime </h1>
                  <br/>
                  <p> My name is Heather and I live in Scotland.</p>

                  <p>In 2017, I graduated with a degree in Software Engineering.
                    My interests lay within Software Testing, I have a passion
                    to ensure we produce fully working applications that are friendly to all
                    users of different ages.
                  </p>

                  <p>I have a fondness for Roald Dahl and many of his books,
                    my favourites are the Big Friendly Giant and George's Marvellous Medicine.
                    <p>You'll see the BFG having some adventures.</p>
                  </p>
                  <br/>
                  <p>This blog is for me to share tales of what I get up to.
                     Some you may find interesting, some you may not.
                  </p>
                  <br/>
                  <p> Thanks for visiting! x
                  </p>
                </div>
              </div>

            </div>

          <Footer/>
      </div>
    );
  }
}

export default Aboutme;

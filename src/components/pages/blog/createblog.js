import React, { Component } from 'react';
import './blog.css';

class Createblog extends Component {
  render() {
    return (
      <div id="Blog" className="container-fluid">
        <br/>

            <div id="rowone" className="rowone">
              <div className="col-sm-9">
                <form>
                <p>To create a blog post you must login:</p>
                Username:<br/>
                <input type="text" name="username"/><br/>
                Password:<br/>
                <input type="text" name="password"/><br/>
                <input type="submit" value="Submit"/>

                </form>
              </div>
              <div className="col-sm-3">

              </div>
            </div>

        <div id="rowtwo" className="rowtwo">
          <div className="col-sm-6">
            <div id="post" className="">

            </div>
          </div>
          <div className="col-sm-6">
            <div id="post" className="">

            </div>
          </div>
      </div>


    </div>
    );
  }
}

export default Createblog;

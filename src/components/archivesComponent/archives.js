import React, { Component } from 'react';
import './archives.css';

class Archives extends Component {
  render () {
    return (
      <div>
        <h6>Archives</h6>
          <select>
            <option value="jan17">November 2017</option>
            <option value="feb17">December 2017</option>
          </select>
      </div>
    )
  }
}

export default Archives;

import React, { Component } from 'react';
import './blog.css';
import axios from 'axios';

class Blogposts extends Component {
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


}

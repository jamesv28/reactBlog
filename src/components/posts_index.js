import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class IndexPost extends Component  {
  componentWillMount() {
      this.props.fetchPosts();

  }

  render() {
  return (
      <div className="top">
        <div className="col-sm-8 col-md-8">
          <div className="well block"> lists of posts </div>
        </div>
        <div className="pull-right ">
          <Link to="/posts/new" className="btn btn-raised btn-info"> Add post </Link>
        </div>
      </div>
  )

 }
}




export default connect(null, { fetchPosts })(IndexPost);
